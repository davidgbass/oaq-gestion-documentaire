# CLAUDE.md — oaq-gestion-documentaire

Directives pour Claude Code sur ce projet.

---

## Ce qu'est ce projet

Site de présentation et chatbot documentaire pour le projet **Gestion documentaire 2.1 de l'OAQ** (Ordre des audioprothésistes du Québec). 6 employés au siège social. Le site s'adresse à la direction générale et à Alice (adjointe de direction, gatekeeper documentaire).

---

## Structure du repo

```
contenu/          ← Sources de vérité Markdown — c'est ici que vivent les règles
  phase1-architecture-teams.md
  phase2-nomenclature.md
  phase3-soumission-ca.md
  phase4-gestion-projets.md
  phase5-bibliotheque-centrale.md
  phase6-intelligence-documentaire.md   ← À supprimer quand phase6.5 est prête
  guide-ti.md

web/
  index.html      ← Site complet (HTML + Alpine.js + Tailwind CDN) — fichier unique
  assets/
    logo.png

worker/
  index.js        ← Cloudflare Worker : proxy vers l'API Anthropic + log KV
  wrangler.toml   ← Config Wrangler (account_id, KV binding QUESTIONS)

index.html        ← Redirection vers web/
CLAUDE.md         ← Ce fichier
```

---

## Stack

| Composant | Technologie |
|---|---|
| Site | HTML statique, Alpine.js 3.14 (CDN), Tailwind CSS (CDN), marked.js (CDN) |
| Chatbot | Cloudflare Worker (proxy API Anthropic) |
| Modèle IA | `claude-haiku-4-5-20251001` |
| Log des questions | Cloudflare KV (`QUESTIONS`, clé `log`, max 500 entrées) |
| Hébergement site | GitHub Pages (servi depuis la racine du repo `main`) |
| Hébergement worker | Cloudflare Workers (`oaq-api.gelinas-audio-181.workers.dev`) |

---

## Comment fonctionne le chatbot

1. Au chargement, `loadMarkdown()` fait un `fetch('../contenu/*.md')` pour chaque phase
2. `buildContext()` concatène tous les fichiers chargés en un seul bloc texte
3. À chaque question, le system prompt injecte ce bloc + l'historique de conversation
4. La requête part vers le Worker Cloudflare (`WORKER_URL`), qui la relaie à l'API Anthropic
5. Le Worker logue la question dans KV avant de relayer

**Conséquence directe :** modifier un fichier dans `contenu/` met à jour le chatbot automatiquement au prochain chargement de page. Aucune étape de build, aucun redéploiement.

---

## Variables d'environnement (Worker)

| Variable | Où | Usage |
|---|---|---|
| `ANTHROPIC_API_KEY` | Secret Cloudflare Workers | Clé API Anthropic |
| `LOG_KEY` | Secret Cloudflare Workers | Mot de passe pour accéder au log `/questions?key=...` |
| `QUESTIONS` | KV Namespace binding | Stockage des questions loguées |

Ne jamais committer ces valeurs. Les gérer via `wrangler secret put` ou le dashboard Cloudflare.

---

## Conventions

### Contenu Markdown (`contenu/`)

- Langue : français québécois, ton professionnel sans jargon excessif
- Titres : `# Phase N — Titre` en tête, `## Gestion documentaire 2.1 — OAQ` en sous-titre
- Tableaux : utiliser quand ils aident à la lecture ; supprimer quand la prose suffit
- Pas de tableaux « Responsabilités » ni « Règles de gouvernance » formels — une phrase en prose suffit
- Pas de revues trimestrielles — annuelles seulement
- Nomenclature des fichiers : `[CodeOAQ]-[TypeDoc]-[Sujet]-[AAAA-MM-JJ]-[Version]` (voir phase2)
- Noms de canaux de projet : `[CodeOAQ] — [Nom lisible]` (pas de numérotation séquentielle)

### HTML (`web/index.html`)

- Fichier unique — CSS, JS et HTML dans le même fichier
- Alpine.js pour la réactivité : pas de framework séparé
- Couleurs OAQ : `#1B5F70` (dark), `#226B80` (mid), `#45B8E4` (blue), `#EEF7FA` (light)
- Toujours tester le chatbot localement avec un serveur HTTP (les `fetch('../contenu/')` ne fonctionnent pas via `file://`)

### Git

- Branche principale : `main`
- Tags de version : `v2.0`, `v3.0`, `v4.0`... — créer un tag avant chaque mise à jour majeure des phases
- Messages de commit : `vX.0 — Description courte` + liste des changements dans le corps
- Ne jamais écraser un tag existant

---

## Tâches en attente

- [ ] **Phase 6 — Supprimer** `contenu/phase6-intelligence-documentaire.md` quand `phase6.5-wiki-compoundant.md` est prêt (recouvert par 6.5)
- [ ] **Phase 6.5 — Créer** `contenu/phase6.5-wiki-compoundant.md` : migration OAQ-v2 vers SharePoint (3 sites cibles, pipeline OneDrive Sync) — ~300-400 lignes

---

## Déploiement

### Site (GitHub Pages)

Le site se déploie automatiquement depuis `main`. Aucune action requise après un push.

### Worker Cloudflare

```bash
cd worker
wrangler deploy
```

Nécessite `wrangler` installé et authentifié (`wrangler login`).

### Tester localement

```bash
# Servir le site (depuis la racine du repo)
python3 -m http.server 8000
# ou
npx serve .

# Ouvrir http://localhost:8000/web/
```

Le chatbot ne fonctionne pas en local sans un Worker local ou un tunnel vers l'API — les requêtes CORS vers `oaq-api.gelinas-audio-181.workers.dev` passent depuis n'importe quel domaine (CORS `*` configuré dans le Worker).

---

## Accès au log des questions

```
https://oaq-api.gelinas-audio-181.workers.dev/questions?key=LOG_KEY
```

Remplacer `LOG_KEY` par la valeur du secret Cloudflare. Affiche un tableau HTML des 500 dernières questions posées au chatbot.
