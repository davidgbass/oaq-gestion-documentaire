export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method === 'GET') {
      const url = new URL(request.url);
      if (url.pathname !== '/questions') {
        return new Response('Not found', { status: 404 });
      }
      const key = url.searchParams.get('key');
      if (!env.LOG_KEY || key !== env.LOG_KEY) {
        return new Response('Acces non autorise', { status: 401 });
      }
      const stored = await env.QUESTIONS.get('log', { type: 'json' });
      const entries = stored || [];
      let rows = '';
      for (let i = entries.length - 1; i >= 0; i--) {
        const e = entries[i];
        const q = e.q.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        rows += '<tr><td>' + e.ts + '</td><td>' + q + '</td></tr>';
      }
      if (!rows) {
        rows = '<tr><td colspan="2" style="color:#9ca3af;padding:1rem">Aucune question enregistree.</td></tr>';
      }
      const html = '<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>Questions OAQ</title>'
        + '<style>body{font-family:system-ui,sans-serif;padding:2rem;color:#1f2937}'
        + 'h1{color:#1B5F70;margin-bottom:1rem}'
        + 'table{border-collapse:collapse;width:100%;font-size:.875rem}'
        + 'th{text-align:left;padding:.5rem 1rem;background:#1B5F70;color:white}'
        + 'td{padding:.5rem 1rem;border-bottom:1px solid #e5e7eb;vertical-align:top}'
        + 'td:first-child{white-space:nowrap;color:#6b7280;width:14rem}'
        + 'tr:hover td{background:#f9fafb}</style></head><body>'
        + '<h1>Questions posees a l\'assistant documentaire</h1>'
        + '<p style="color:#6b7280;margin-bottom:1.5rem">' + entries.length + ' question(s)</p>'
        + '<table><thead><tr><th>Date et heure</th><th>Question</th></tr></thead>'
        + '<tbody>' + rows + '</tbody></table></body></html>';
      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const body = await request.text();

      if (env.QUESTIONS) {
        try {
          const parsed = JSON.parse(body);
          const messages = parsed.messages || [];
          const last = messages[messages.length - 1];
          if (last && last.role === 'user') {
            const stored = await env.QUESTIONS.get('log', { type: 'json' });
            const entries = stored || [];
            entries.push({
              ts: new Date().toLocaleString('fr-CA', { timeZone: 'America/Montreal' }),
              q: typeof last.content === 'string' ? last.content : JSON.stringify(last.content),
            });
            if (entries.length > 500) entries.splice(0, entries.length - 500);
            await env.QUESTIONS.put('log', JSON.stringify(entries));
          }
        } catch (_) {}
      }

      const upstream = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body,
      });

      const data = await upstream.text();
      return new Response(data, {
        status: upstream.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: { message: e.message } }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  },
};
