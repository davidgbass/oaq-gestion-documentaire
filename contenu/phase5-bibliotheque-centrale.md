# Phase 5 — Bibliothèque centrale et migration
## Gestion documentaire 2.1 — OAQ

*Printemps 2026*

---

## Contexte

Les phases 1 à 4 assurent que les documents sont bien nommés et bien organisés dans les espaces de travail. Mais un fichier bien nommé dans un canal archivé reste introuvable si on ne sait pas dans quel canal chercher. La Phase 5 crée la bibliothèque centrale : un espace unique, structuré et indexé qui regroupe tous les documents officiels et finaux de l'OAQ — la mémoire institutionnelle de l'Ordre.

---

## Deux espaces, un seul système

L'OAQ utilise deux espaces SharePoint complémentaires pour conserver ses documents officiels :

| Espace | Contenu | Accès |
|---|---|---|
| **Bibliothèque centrale** | Documents officiels et finaux de tous les départements et comités (PV, fiches synthèses, politiques, rapports, lignes directrices, etc.) | Lecture pour tous les employés ; dépôt par la gatekeeper |
| **Espace CA** | Documents en circulation pour les réunions du C.A. (PDF soumis pour délibération avant adoption) | Membres du C.A. et personnel désigné |

Les deux espaces se complètent : l'Espace CA est l'antichambre, la bibliothèque centrale est la mémoire long terme. Un PDF déposé pour une réunion vit d'abord dans l'Espace CA, puis migre vers la bibliothèque une fois adopté.

---

## Principe

> **Pourquoi une seule bibliothèque centrale ?**
> Disperser les documents officiels dans plusieurs bibliothèques crée des silos. Une seule bibliothèque avec des filtres de métadonnées est plus puissante qu'une dizaine de bibliothèques séparées par département. Un outil d'IA peut également interroger une seule bibliothèque beaucoup plus efficacement que plusieurs.

La bibliothèque centrale est l'espace SharePoint où vivent les documents officiels et finaux de l'OAQ. Ce ne sont pas des documents de travail — ce sont les livrables validés, adoptés ou publiés.

**Règle absolue :** seuls des PDF en statut VFA ou VFP entrent dans la bibliothèque centrale. Jamais de fichiers Word.

---

## Gatekeeper de la bibliothèque centrale

> **Pourquoi un gatekeeper unique au quotidien ?**
> Une bibliothèque documentaire se dégrade très vite si les règles ne sont pas appliquées rigoureusement. Un seul dépôt mal indexé peut fausser les résultats d'une recherche ou induire un outil d'IA en erreur. La concentration de la responsabilité est ce qui garantit la fiabilité à long terme.

Alice (adjointe de direction) est la gatekeeper principale. Elle est la seule personne autorisée à déposer des documents dans la bibliothèque centrale au quotidien.

En son absence (vacances, maladie), la responsabilité est déléguée selon l'ordre suivant :
1. **Alice** — gatekeeper principale
2. **Présidence** — gatekeeper de relève
3. **Direction générale** — gatekeeper de relève

Les gatekeepers de relève suivent le même protocole exact que la gatekeeper principale. La délégation est documentée avant chaque absence d'Alice de plus de 5 jours ouvrables.

Un document sans métadonnées complètes n'entre pas dans la bibliothèque. La gatekeeper a l'autorité de retourner un document au responsable si les informations nécessaires sont manquantes.

---

## Structure de la bibliothèque

```
Bibliothèque centrale OAQ/
    Gouvernance/
        CA/              ← Procès-verbaux, fiches synthèses, résolutions du C.A.
        Comités/         ← Documents finaux des comités
    Affaires-juridiques/ ← Analyses, avis, correspondances officielles
    Affaires-professionnelles/
    Communications/
    Finances/
    Ressources-humaines/
```

La profondeur maximale est de deux niveaux. Pas de sous-dossiers par année — c'est le filtre par date dans les métadonnées qui joue ce rôle.

Les documents archivés gardent leur dossier de département avec le statut **Archivé** dans les métadonnées. Pas de dossier `Archives-migration/` séparé : un document migré occupe directement sa place finale dans la structure, avec son statut Actif ou Archivé.

---

## Métadonnées

Cinq colonnes obligatoires, configurées dans SharePoint dès la création de la bibliothèque :

| Colonne | Type | Valeurs |
|---|---|---|
| Département / Comité | Liste déroulante | ADM, JUR, PRO, COM, FIN, RH, CA, CAUD, CEED, CIDP, CEDF, CGOU, CFOR, CFC, CREV, CRH, CDIS, CIP, SYN |
| Date du document | Date | Format AAAA-MM-JJ |
| Statut | Liste déroulante | Actif / Archivé |
| Diffusion | Liste déroulante | Interne / Membres / Public |
| Résumé | Texte multiligne | 2 à 3 phrases — généré automatiquement par OAQ-v2, validé par Alice |

> **Pourquoi le résumé est-il généré automatiquement ?**
> Un résumé écrit à la main pour chaque document est une charge récurrente qui se dégrade dès qu'on prend du retard. OAQ-v2 produit un résumé de 2 à 3 phrases en quelques secondes à partir du contenu du PDF. Alice relit, ajuste si nécessaire, et valide. Le résumé devient un livrable systématique plutôt qu'un effort discrétionnaire.

### Ce qui n'est pas dans les métadonnées (et pourquoi)

- **Type de document** → déjà dans le nom du fichier (`-PV-`, `-FS-`, `-POL-`). Recherche par filtre de nom dans SharePoint.
- **Date d'entrée en vigueur** → si elle compte, elle est dans le document. Pas une dimension de recherche.
- **Numéro de résolution** → vit dans le registre des résolutions, lié au PV par la date.
- **Date de prochaine révision** → géré au cas par cas, pas systématique.
- **Code de projet** → la nomenclature n'utilise plus de numéro séquentiel (Phase 4).

---

## Diffusion : trois niveaux, deux noms

Le champ Diffusion détermine si le document existe aussi sous un nom public lisible (voir Phase 2, section *Noms publics*).

| Diffusion | Exemples | Nom public requis |
|---|---|---|
| Interne | PV de comité, POL interne, fiches synthèses, PRO | Non — nom codé uniquement |
| Membres | COMEX, infolettres, LDIR publiées aux membres | Oui — nom propre lisible distinct |
| Public | Rapports annuels publics, communiqués de presse, POL publiées au public | Oui — nom propre lisible distinct |

---

## Gestion des versions

Quand une nouvelle version d'une politique ou procédure est adoptée, l'ancienne version reste dans la bibliothèque avec le statut **Archivé**, et la nouvelle est déposée avec le statut **Actif**. Un outil d'IA sait automatiquement quelle version est en vigueur en filtrant par Statut = Actif.

---

## Taxonomie des sujets

La taxonomie des sujets est la pièce la plus critique pour la recherche documentaire et pour l'IA. Elle s'applique au champ Sujet du nom de fichier (Phase 2).

> **Pourquoi un seul terme par réalité ?**
> Si « OTC », « prothèses en vente libre », « vente libre » et « audioprothèses OTC » coexistent comme quatre sujets différents, un outil de recherche — humain ou IA — va manquer une partie des documents pertinents. Un terme par réalité, une réalité par terme.

La taxonomie est la responsabilité de la direction générale. Aucun employé n'ajoute un sujet de façon autonome. La liste est révisée en équipe une fois par année.

### Sujets de départ — à compléter en équipe

| Terme officiel | Libellé long | Département principal |
|---|---|---|
| OTC-protheses | Prothèses auditives en vente libre (OTC) | PRO, CA |
| cotisation-annuelle | Cotisation annuelle des membres | FIN, CA |
| inspection-professionnelle | Inspection professionnelle des membres | CIP, PRO |
| equivalence-diplomes | Équivalence des diplômes étrangers | CEDF, PRO |
| formation-continue | Formation continue obligatoire | CFOR, CFC |
| discipline | Dossiers disciplinaires et enquêtes | CDIS, SYN |
| gouvernance-interne | Gouvernance et structure de l'Ordre | CGOU, CA |
| budget-finances | Budget annuel et états financiers | FIN, CAUD |
| ressources-humaines | Gestion du personnel de l'Ordre | CRH, RH |
| communications-membres | Communications officielles aux membres | COM |
| reglementation | Cadre réglementaire et législatif | JUR, CA |

L'adjointe de direction prépare un premier jet complet de la liste, la direction générale valide. Cette liste devient ensuite la référence pour le champ Sujet de la nomenclature.

---

## Protocole de dépôt

**Règle unique :** tout document VFP est déposé dans la bibliothèque centrale dans la semaine suivant son adoption ou sa publication. Idem pour les VFA qui ne seront pas publiés (ils restent en statut Actif jusqu'à révision).

### Processus de dépôt

1. Recevoir le PDF du responsable du dossier
2. Vérifier la conformité du nom de fichier à la nomenclature (Phase 2)
3. Déposer dans le dossier de département approprié
4. Remplir les cinq métadonnées (résumé généré par OAQ-v2, ajusté si nécessaire)
5. Si Diffusion = Membres ou Public : publier sur Octave sous le nom public lisible (voir Phase 2)

---

## Migration des documents existants

### Date pivot : 2023

**Avant 2023 :** les fichiers conservent leur nom legacy. On ne renomme pas — on documente. Les métadonnées sont renseignées avec ce qu'on sait du document. Le résumé généré par OAQ-v2 compense l'imprécision du nom.

**Après 2023 :** la nomenclature complète de la Phase 2 est obligatoire au dépôt. Les documents non conformes sont renommés avant dépôt.

### Approche : au fil des besoins, pas en bloc

On ne migre pas 15 ans de fichiers en une opération. La priorité va aux documents qui ont une valeur immédiate :

- **Priorité 1 :** PV du C.A. et résolutions des 5 dernières années
- **Priorité 2 :** Le reste, migré quand il est consulté ou redevient pertinent

OAQ-v2 et Claude assistent le renommage, l'extraction des métadonnées et la génération des résumés. Alice valide chaque lot.

---

## Registre des résolutions

Le registre des résolutions est une liste SharePoint distincte de la bibliothèque, qui sert à retrouver rapidement une décision par son numéro.

| Colonne | Notes |
|---|---|
| Numéro de résolution | Ex. 2025-11-001 |
| Date de réunion | Format AAAA-MM-JJ |
| Description courte | 1 phrase sur l'objet de la résolution |
| Décision | Adoptée / Rejetée / Reportée |

Le PV de la réunion contient le texte complet de la résolution. Le registre est l'index, pas le contenu.

---

## Le parcours complet d'un document à l'OAQ

| Étape | Espace | Statut |
|---|---|---|
| 1. Rédaction et travail collaboratif | Canal de projet Teams (ou équipe comité pour la variante comité) | VT |
| 2. Soumission au C.A. | PDF déposé dans Espace CA. Original Word reste dans le canal source. | VT |
| 3. Décision du C.A. | C.A. adopte, renvoie ou rejette. Décision documentée dans le PV avec numéro de résolution. | VFA |
| 4. Archivage du canal | Alice archive le canal de projet. Tout reste accessible en lecture seule. | Canal archivé |
| 5. Bibliothèque centrale | Alice dépose le PDF (VFA ou VFP) avec les cinq métadonnées. | PDF indexé |

**Variante comité** : pour un document de comité qui n'a pas besoin du C.A. (autorité finale du comité), les étapes 2 et 3 sont remplacées par l'adoption au comité. Le PV du comité contient la décision et le PDF est déposé directement à la bibliothèque centrale.

**Règles communes :** le code du département ou comité d'origine reste dans le nom du fichier tout au long du parcours. Le document Word original reste toujours dans son canal ou équipe source — seul le PDF circule. Seule Alice dépose dans la bibliothèque centrale.

---

*Suite : Phase 6 — Intelligence documentaire*
