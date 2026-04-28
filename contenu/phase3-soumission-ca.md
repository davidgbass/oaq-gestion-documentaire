# Phase 3 — Soumission au C.A. et traçabilité documentaire
## Gestion documentaire 2.0 — OAQ

*Printemps 2026*

---

## Contexte

La Phase 4 définit comment les projets sont gérés dans Teams jusqu'à leur archivage. Mais elle ne répond pas à une question critique : quand un document de projet est prêt pour le conseil d'administration, comment le transférer sans créer deux versions vivantes du même fichier ?

Sans protocole clair, trois problèmes surviennent :
- Le document original est déplacé hors du canal de projet, perdant son contexte de travail
- Des copies multiples sont créées à différents endroits, causant confusion sur la version officielle
- Une fois le canal archivé, il devient impossible de retrouver le document source à partir du dossier de réunion du C.A.

Ce protocole résout ces trois problèmes en un seul mouvement simple.

---

## Principe fondamental : l'original reste dans le canal de projet

Le document Word original reste toujours dans le canal de projet. Ce qui se rend au C.A. est une copie PDF accompagnée d'une référence de traçabilité qui pointe vers l'original.

Ce principe garantit que :
- Le canal de projet conserve l'historique complet du travail (brouillons, commentaires, réunions, décisions intermédiaires)
- Le C.A. reçoit un document stable et non modifiable
- Toute personne qui lit le PDF soumis au C.A. peut retrouver le contexte complet en suivant la référence de traçabilité
- Même si le canal de projet est archivé des années plus tard, le lien entre le PDF et son contexte reste intact

**Règle absolue :** on ne déplace jamais le document Word original hors du canal de projet.

---

## Les deux types de dépôt au C.A.

> **Pourquoi cette distinction est-elle critique pour la gouvernance ?**
> Un document déposé pour information n'a pas la même valeur institutionnelle qu'une résolution adoptée. Un outil d'IA qui ne fait pas cette distinction risque de présenter une analyse non approuvée comme une décision officielle. Cette distinction protège l'intégrité des décisions de l'Ordre.

| Type de dépôt | Description | Dans le procès-verbal |
|---|---|---|
| Pour information | Document transmis au C.A. à titre informatif. Aucune résolution requise. | Mentionné comme « transmis pour information » |
| Pour adoption | Document sur lequel le C.A. vote. Lié à un numéro de résolution. | Mentionné avec numéro de résolution et décision |

**Règle de dépôt à la bibliothèque centrale :** tout document soumis au C.A. — qu'il soit pour information ou pour adoption — est déposé dans la bibliothèque centrale après la réunion, avec les métadonnées appropriées.

---

## Documents concernés

### La fiche synthèse (FS)

La fiche synthèse est le document central de la gouvernance. Elle résume pour les membres du conseil tout ce qu'ils doivent savoir pour prendre une décision éclairée : contexte, analyse, risques, recommandation.

- Elle est rédigée par le responsable du projet et vit dans le dossier Documents du canal de projet
- Elle est toujours un document pré-décisionnel — elle présente l'analyse, pas la décision
- La décision et son contexte apparaissent dans le procès-verbal du C.A. (PV), pas dans la fiche synthèse
- Elle est nommée selon la nomenclature Phase 2 : ex. `CA-FS-OTC-protheses-2025-11-15-VT.docx`
- C'est le document de référence principal pour l'intelligence organisationnelle (Phase 6)

### Le document officiel soumis

Selon la nature du dossier, un deuxième document peut accompagner la fiche synthèse : une politique, un rapport, une analyse juridique, un projet de règlement.

- Ce document vit également dans le dossier Documents du canal de projet
- Il est nommé selon la nomenclature Phase 2
- Exemple : `CA-POL-formation-continue-2025-11-15-VT.docx`

Seuls la fiche synthèse et le document officiel sont soumis au C.A. Les documents de travail, les brouillons, les comptes rendus de réunions de projet et les échanges dans le canal ne sont jamais soumis au C.A.

---

## Cycle de vie d'un document soumis au C.A.

| État | Code | Description | Emplacement |
|---|---|---|---|
| Version de travail | VT | Document en cours de rédaction. Devient la version soumise au C.A. sans changement de statut. | Canal de projet / Documents/ |
| Version finale adoptée | VFA | Adopté par résolution du C.A. | Canal de projet + Bibliothèque centrale (Phase 5) |
| Version finale publiée | VFP | Diffusé officiellement aux membres ou à l'externe | Canal de projet + Bibliothèque centrale (Phase 5) |

---

## Protocole de transfert vers le C.A.

### Déclencheur

Le protocole est déclenché quand le responsable du projet juge que le document est prêt pour présentation au C.A. et qu'il a été révisé par toutes les parties concernées.

### Étapes

Responsabilité du responsable du projet :

1. **Finaliser le document** dans le canal de projet. Il porte toujours le suffixe VT.
   - Exemple : `CA-FS-OTC-protheses-2025-11-15-VT.docx`

2. **Ajouter la référence de traçabilité** dans le pied de page du document Word avant l'export :
   ```
   Source : [Nom exact du canal Teams]
   Code projet : [Code PRJ]
   Document original conservé dans : OAQ — Projets internes > [Canal] > Documents
   ```

3. **Exporter le document en PDF** en conservant le même nom de fichier.
   - Exemple : `CA-FS-OTC-protheses-2025-11-15-VT.pdf`

4. **Déposer le PDF** dans le dossier de réunion approprié de l'équipe `OAQ — Conseil d'administration`.

5. **Aviser la direction générale** du dépôt pour mise à jour du registre des projets.

Le document Word original reste dans le canal de projet. Seul le PDF est transmis à l'équipe OAQ — Conseil d'administration. On ne déplace jamais l'original.

---

### Après la réunion du C.A.

| Décision du C.A. | Action sur le document source | Nouveau suffixe | Destination |
|---|---|---|---|
| Document adopté (usage interne) | Renommer dans le canal de projet | VFA | Espace C.A. — PV et FS y restent |
| Document adopté avec modifications | Appliquer les modifications, puis renommer | VFA | Espace C.A. |
| Document adopté et devant être publié | Produire la version publiable | VFP | Bibliothèque centrale — avec Diffusion appropriée |
| Document renvoyé pour révision | Reprendre le travail dans le canal de projet | VT (inchangé) | Non — pas encore adopté |
| Document rejeté | Conserver le document VT comme archive dans le canal | VT (inchangé) | Non |

---

## Traçabilité : le lien entre le PDF et l'original

> **Pourquoi investir dans la traçabilité maintenant ?**
> Dans deux ans, un nouveau membre du conseil lit une résolution dans les archives et veut comprendre pourquoi cette décision a été prise. Sans référence de traçabilité, le PDF est une île isolée. Avec elle, il a accès à l'analyse complète, à l'historique des versions, aux échanges de l'équipe. C'est la différence entre une organisation qui apprend et une organisation qui répète ses erreurs.

Chaque PDF soumis au C.A. porte une référence explicite vers son contexte source, intégrée dans le pied de page avant l'export.

### Format de la référence de traçabilité

```
Source : PRJ-CA-001 - OTC prothèses CA 2026
Code projet : PRJ-CA-001
Document original conservé dans : OAQ — Projets internes > PRJ-CA-001 - OTC prothèses CA 2026 > Documents
```

Cette référence reste valide même si le canal est archivé des années plus tard. Les canaux archivés restent accessibles dans Teams — le lien ne brise jamais.

### Le rôle des procès-verbaux

Le procès-verbal (PV) du C.A. est le document officiel qui certifie les décisions. Il contient le numéro de résolution unique, la description de la décision prise, la référence au document ayant fondé la décision et le résultat du vote.

La fiche synthèse explique le « pourquoi », le PV confirme le « quoi a été décidé ». Un outil d'IA qui interroge la bibliothèque centrale trouvera d'abord les PV pour savoir ce qui a été décidé, puis les fiches synthèses pour comprendre le contexte et le raisonnement. Ces deux types de documents sont complémentaires et indissociables.

---

## Où vivent les documents à chaque étape

| Étape | Document | Emplacement | Format |
|---|---|---|---|
| Rédaction et révision | Document de travail (VT) | Canal de projet / Documents/ | Word (.docx) |
| Soumission au C.A. | Document source (VT) | Canal de projet / Documents/ | Word (.docx) |
| Soumission au C.A. | Copie pour le C.A. | OAQ — Conseil d'administration / [Date réunion] / | PDF |
| Après adoption | Document final (VFA) | Canal de projet / Documents/ | Word (.docx) |
| Dépôt bibliothèque centrale | Copie finale | Bibliothèque centrale SharePoint (Phase 5) | PDF uniquement |
| Archivage | Tous les documents | Canal archivé (lecture seule) | Word et PDF |

**Règle fondamentale :** seuls des PDF entrent dans la bibliothèque centrale. Jamais de fichiers Word. Cela garantit que personne ne peut modifier accidentellement un document officiel.

---

## Récapitulatif du flux documentaire

```
CANAL DE PROJET (OAQ — Projets internes)
    Documents/
        CA-FS-OTC-protheses-2025-11-15-VT.docx     ← Rédaction et soumission au C.A.
        CA-FS-OTC-protheses-2025-11-15-VFA.docx    ← Après adoption par résolution

        [Pied de page — tous les documents soumis au C.A. :]
        Source : PRJ-CA-001 - OTC prothèses CA 2026
        Code projet : PRJ-CA-001

OAQ — CONSEIL D'ADMINISTRATION (accès restreint)
    2025-11-20/
        CA-FS-OTC-protheses-2025-11-15-VT.pdf      ← PDF soumis pour délibération
        CA-PV-2025-11-20-VFA.pdf                   ← PV adopté, reste dans l'espace C.A.
        CA-FS-OTC-protheses-2025-11-15-VFA.pdf     ← FS adoptée, reste dans l'espace C.A.
    Registre des résolutions/
        [CA 2025.11.20.X.X — résolution mise à jour par l'adjointe de direction]

BIBLIOTHÈQUE CENTRALE (Phase 5) — uniquement si document publié à tous
    Administration/
        ADM-POL-signature-contrats-2025-11-20-VFP.pdf
        [Métadonnée : Numéro de résolution CA 2025.11.20.4.1, Statut Actif, Diffusion Membres]
```

---

## Responsabilités

| Rôle | Responsabilité |
|---|---|
| Responsable du projet | Finaliser le document avec le suffixe VT avant tout transfert au C.A. |
| Responsable du projet | Ajouter la référence de traçabilité dans le pied de page avant l'export PDF |
| Responsable du projet | Exporter le PDF et le déposer dans l'équipe OAQ — Conseil d'administration |
| Responsable du projet | Renommer le document source après la décision du C.A. (VFA ou VFP) |
| Adjointe de direction | Vérifier la présence de la référence de traçabilité avant tout archivage de canal |
| Adjointe de direction | S'assurer que le document source porte le bon suffixe après la réunion du C.A. |
| Adjointe de direction | Déposer les PDF des documents VFA et VFP dans la bibliothèque centrale (Phase 5) |
| Direction générale | Mettre à jour le registre des projets après chaque décision du C.A. |
| Tout le personnel | Ne jamais déplacer ou modifier un PDF déjà déposé dans l'équipe OAQ — Conseil d'administration |

---

*Suite : Phase 4 — Gestion de projets*
