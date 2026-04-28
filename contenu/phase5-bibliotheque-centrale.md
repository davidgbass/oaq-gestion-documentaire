# Phase 5 — Bibliothèque centrale et migration
## Gestion documentaire 2.0 — OAQ

*Printemps 2026*

---

## Contexte

Les phases 1 à 4 assurent que les documents sont bien nommés et bien organisés dans les espaces de travail. La Phase 5 crée les deux espaces documentaires officiels de l'OAQ : la bibliothèque centrale, accessible à tous les employés, et l'espace documentaire du C.A., à accès restreint. Ensemble, ils constituent la mémoire institutionnelle de l'Ordre.

---

## Deux espaces documentaires distincts

L'OAQ maintient deux espaces documentaires officiels, séparés selon l'accès et la nature des documents.

| Espace | Accès | Contenu |
|---|---|---|
| Bibliothèque centrale | Tous les employés (lecture) | Documents officiels qui s'appliquent à l'organisation — politiques, procédures, lignes directrices, rapports publiés, communications |
| Espace C.A. | Membres du C.A. + personnel désigné | Délibérations et documents de travail du conseil — PV, fiches synthèses, ordres du jour, registre des résolutions |

> **Pourquoi séparer les deux espaces ?**
> Les délibérations du C.A. — fiches synthèses, procès-verbaux, ordres du jour — sont des documents confidentiels qui ne concernent pas l'ensemble du personnel. Les décisions qui s'appliquent à tous (politiques adoptées, lignes directrices) sont publiées dans la bibliothèque centrale une fois approuvées. Cette séparation respecte le principe de la Phase 1 : les permissions se gèrent au niveau de l'équipe, pas au niveau du dossier.

---

## 1. Bibliothèque centrale

### Principe

**Règle absolue :** seuls des PDF en statut VFA ou VFP entrent dans la bibliothèque centrale. Jamais de fichiers Word.

### Gatekeeper

L'adjointe de direction est la gatekeeper principale. Elle est la seule personne autorisée à déposer des documents dans la bibliothèque centrale au quotidien.

En son absence (vacances, maladie), la responsabilité est déléguée selon l'ordre suivant :
1. **Adjointe de direction** — gatekeeper principale
2. **Présidence** — gatekeeper de relève
3. **Direction générale** — gatekeeper de relève

La délégation est documentée avant chaque absence de l'adjointe de direction de plus de 5 jours ouvrables.

### Structure de la bibliothèque

```
Bibliothèque centrale OAQ/
    Administration/              ← Politiques, procédures et directives internes (ADM)
    Affaires-juridiques/         ← Analyses, avis, correspondances officielles (JUR)
    Affaires-professionnelles/   ← Documents relatifs à la pratique professionnelle (PRO)
    Communications/              ← Communications officielles aux membres et au public (COM)
    Finances/                    ← Rapports financiers, budgets publiés (FIN)
    Ressources-humaines/         ← Documents RH publiés (RH)
    Archives-migration/          ← Documents migrés en attente de validation complète
```

Les documents adoptés par le C.A. sont classés sous leur département responsable, pas sous une catégorie Gouvernance. Le lien avec la décision du C.A. est porté par le champ Numéro de résolution dans les métadonnées.

### Métadonnées de la bibliothèque centrale

| Colonne | Obligatoire | Valeurs |
|---|---|---|
| Département / Comité | Oui | Administration générale (ADM), Affaires juridiques (JUR), Affaires professionnelles (AFPRO), Communications (COM), Finances (FIN), Ressources humaines (RH), Conseil d'administration (CA), Comité d'audit (CAUD), Comité d'enquête à l'éthique et à la déontologie (CEED), Comité d'innovation et développement professionnel (CIDP), Comité d'équivalence des diplômes et de formation (CEDF), Comité de gouvernance et éthique (CGOU), Comité de la formation (CFOR), Comité de la formation continue (CFC), Comité de révision (CREV), Comité des ressources humaines (CRH), Conseil de discipline (CDIS), Comité d'inspection professionnelle (CIP), Syndic (SYN) |
| Type de document | Recommandé | Communication externe officielle (COMEX), Communication interne officielle (COMIN), Fiche synthèse (FS), Ligne directrice (LDIR), Ordre du jour (ODJ), Politique (POL), Procédure (PRO), Procès-verbal (PV), Rapport (RAP), Résolution (RES), Autre |
| Date du document | Oui | Format AAAA-MM-JJ |
| Date d'entrée en vigueur | Non | Date — applicable principalement aux POL et LDIR |
| Statut | Oui | Actif, Archivé |
| Diffusion | Oui | Interne, Membres (Octave), Public |
| Numéro de résolution | Non | Ex. : CA 2024.06.07.4.1 — obligatoire si le document découle d'une résolution du C.A. |
| Date de prochaine révision | Non | Date — applicable aux POL et LDIR |
| Code de projet | Non | Ex. : PRJ-CA-001 |
| Résumé | Recommandé | 2 à 3 phrases — important pour l'IA |

> **Pourquoi le champ Diffusion ?**
> Certains documents adoptés s'appliquent uniquement à l'interne (employés). D'autres sont publiés aux membres via le portail Octave, ou au grand public. Ce champ indique à la gatekeeper ce qu'il faut faire avec le document après le dépôt dans la bibliothèque — et guidera éventuellement l'accès de l'IA aux bons documents selon l'audience.

> **Pourquoi le Type de document est-il recommandé plutôt qu'obligatoire ?**
> Certains documents ne correspondent pas exactement aux types définis. Plutôt que de forcer une catégorie inexacte, on recommande fortement de choisir le type le plus approprié, et d'utiliser « Autre » en dernier recours. Le type est déjà dans le nom du fichier — la colonne sert à faciliter le filtrage dans SharePoint.

### Gestion des versions dans la bibliothèque

Quand une nouvelle version d'une politique ou procédure est adoptée :
- L'ancienne version reste dans la bibliothèque, mais son statut passe à **Archivé**
- La nouvelle version est déposée avec le statut **Actif**
- Un outil d'IA sait automatiquement quelle version est en vigueur en filtrant par statut Actif

### Protocole de dépôt

#### Déclencheurs

| Déclencheur | Documents concernés | Délai |
|---|---|---|
| Réunion du C.A. complétée — politique adoptée | POL ou LDIR adoptée (VFP) | Dans les 5 jours ouvrables suivant l'adoption |
| Projet archivé (Phase 4) | Livrable final (VFA ou VFP) si destiné à tous | Au moment de l'archivage du canal Teams |
| Document officiel publié | Politiques, procédures, lignes directrices (VFP) | Au moment de la publication |
| Correspondance officielle envoyée | Lettres officielles au nom de l'Ordre (VFP) | Dans les 2 jours ouvrables suivant l'envoi |

#### Processus de dépôt

Responsabilité de la gatekeeper :

1. Recevoir le document final du responsable du dossier (fichier PDF + informations requises)
2. Vérifier que le nom du fichier respecte la nomenclature de la Phase 2
3. Vérifier la présence de la référence de traçabilité dans le document (Phase 3)
4. Remplir tous les champs de métadonnées, en particulier Diffusion et Statut
5. Vérifier le numéro de résolution si le document découle d'une décision du C.A.
6. Remplir le champ Résumé (obligatoire pour les analyses; recommandé pour les autres)
7. Déposer le PDF dans le bon dossier de la bibliothèque centrale
8. Si Diffusion = Membres ou Public : publier sur Octave selon le processus en vigueur
9. Confirmer le dépôt au responsable du dossier

*Note : le processus de publication sur Octave sera documenté séparément quand la structure du portail sera établie.*

---

## 2. Espace documentaire du C.A.

L'espace documentaire du C.A. vit dans le site SharePoint associé à l'équipe `OAQ — Conseil d'administration`. Il est accessible uniquement aux membres du C.A. et au personnel désigné.

### Contenu de l'espace C.A.

| Type de document | Description |
|---|---|
| Procès-verbaux (PV) | Comptes rendus officiels des réunions du C.A. |
| Fiches synthèses (FS) | Documents d'analyse soumis au C.A. pour décision |
| Ordres du jour (ODJ) | Agenda des réunions du C.A. |
| Rapports (RAP) | Rapports déposés pour information ou adoption |
| Résolutions (RES) | Résolutions formelles du C.A. (si produites séparément) |

Ces documents restent dans l'espace C.A. après les réunions. Seuls les livrables adoptés et destinés à tout le personnel (POL, LDIR, COMEX) migrent vers la bibliothèque centrale en statut VFP.

### Métadonnées de l'espace C.A.

| Colonne | Obligatoire | Valeurs |
|---|---|---|
| Type de document | Recommandé | Fiche synthèse (FS), Ordre du jour (ODJ), Procès-verbal (PV), Rapport (RAP), Résolution (RES), Autre |
| Date de réunion | Oui | Format AAAA-MM-JJ |
| Statut de gouvernance | Oui | Approuvé par résolution, Pour information, Archivé |
| Résumé | Recommandé | 2 à 3 phrases — critique pour l'IA |

---

## 3. Registre des résolutions

Le registre des résolutions est une liste SharePoint dans l'espace C.A. Il centralise toutes les décisions du C.A. sous forme d'index consultable, indépendamment des procès-verbaux.

> **Pourquoi un registre distinct des PV ?**
> Un procès-verbal contient typiquement 5 à 15 résolutions. Sans registre, retrouver une décision spécifique exige d'ouvrir et de parcourir chaque PV. Le registre permet de localiser n'importe quelle résolution en quelques secondes — par date, par sujet ou par numéro. C'est également la source principale que l'IA utilisera pour répondre à « qu'est-ce que le C.A. a décidé sur X ? »

### Format du numéro de résolution

Le numéro de résolution suit le format officiel de l'OAQ :

```
CA AAAA.MM.JJ.X.X
```

Exemple : `CA 2024.06.07.4.1` = Conseil d'administration, réunion du 7 juin 2024, point 4.1 de l'ordre du jour.

### Colonnes du registre

| Colonne | Obligatoire | Valeurs / Notes |
|---|---|---|
| Numéro de résolution | Oui | Format CA AAAA.MM.JJ.X.X |
| Date de réunion | Oui | Format AAAA-MM-JJ |
| Description courte | Oui | 1 à 2 phrases résumant la décision |
| Décision | Oui | Adoptée, Rejetée, Reportée, Annulée |
| Suivi | Non | À implémenter, En cours, Complété |
| Lien vers le PV | Non | URL vers le document dans l'espace C.A. |
| Lien vers le document adopté | Non | URL vers la bibliothèque centrale si VFP |

Le registre est mis à jour par l'adjointe de direction dans les 5 jours ouvrables suivant chaque réunion du C.A.

---

## 4. Migration des documents existants

### Principe

La migration suit une logique de priorité stratégique : on commence par les documents qui ont le plus de valeur pour l'intelligence organisationnelle.

### Hiérarchie de priorité

| Priorité | Type de document | Volume estimé (5 ans) | Destination |
|---|---|---|---|
| 1 — Immédiat | Procès-verbaux du C.A. | ~30 documents | Espace C.A. |
| 2 — Court terme | Fiches synthèses liées à des résolutions | ~150 documents | Espace C.A. |
| 3 — Court terme | Analyses juridiques et avis (JUR) | ~50 documents | Bibliothèque centrale |
| 4 — Moyen terme | Politiques et procédures officielles (VFP) | ~30 documents | Bibliothèque centrale |
| 5 — Moyen terme | PV des comités | ~200 documents | Espace comité concerné |
| 6 — Long terme | Correspondances officielles stratégiques | Variable | Bibliothèque centrale |
| 7 — Au fil du temps | Tous les autres documents | Variable | Selon nature |

### Méthode de migration

**Étape 1 — Inventaire**
L'adjointe de direction produit un inventaire des documents existants par catégorie de priorité.

**Étape 2 — Renommage**
Pour chaque lot, l'adjointe de direction propose des noms conformes à la Phase 2. Les outils d'IA peuvent accélérer ce travail, mais la validation finale appartient toujours à l'adjointe de direction.

**Étape 3 — Dépôt avec métadonnées**
Chaque document est déposé dans le bon espace (C.A. ou bibliothèque centrale) avec ses métadonnées complètes.

**Étape 4 — Mise à jour du registre des résolutions**
Pour chaque PV migré, les résolutions correspondantes sont ajoutées au registre.

**Étape 5 — Validation**
Après chaque lot, l'adjointe de direction vérifie : noms conformes, métadonnées complètes, documents dans les bons espaces. La direction générale est informée de l'avancement.

---

## 5. Le parcours complet d'un document à l'OAQ

### Trajectoire A — Document de projet interne → C.A.

| Étape | Espace | Statut |
|---|---|---|
| 1. Rédaction | Canal de projet Teams | VT |
| 2. Travail collaboratif | Canal PRJ-[Code]-[NNN] dans OAQ — Projets internes | VT |
| 3. Soumission au C.A. | PDF déposé dans OAQ — Conseil d'administration. Original Word reste dans le canal. | VT |
| 4. Décision du C.A. | C.A. adopte, renvoie ou rejette. Décision documentée dans le PV avec numéro de résolution. | VFA |
| 5. Mise à jour du registre | L'adjointe de direction ajoute la résolution au registre des résolutions. | — |
| 6. Archivage du canal | L'adjointe de direction archive le canal. | Canal archivé |
| 7a. Documents délibératifs | PV et FS restent dans l'espace C.A. | PDF dans espace C.A. |
| 7b. Documents publiés | Si POL, LDIR ou COMEX adopté et destiné à tous : VFP déposé dans la bibliothèque centrale avec Diffusion appropriée. | PDF dans bibliothèque centrale |

### Trajectoire B — Document de comité → C.A.

| Étape | Espace | Statut |
|---|---|---|
| 1. Travail du comité | Équipe Teams dédiée au comité | VT |
| 2. Adoption par le comité | Le comité adopte son PV. PV reste dans l'espace Teams du comité. | VFA |
| 3. Soumission au C.A. (si requis) | PDF déposé dans OAQ — Conseil d'administration selon protocole Phase 3. | VT |
| 4. Décision du C.A. | Décision documentée dans le PV du C.A. avec numéro de résolution. | VFA |
| 5. Registre et bibliothèque | Même processus que la Trajectoire A. | Selon la nature du document |

---

## 6. Seuils de maturité avant connexion de l'IA

| Indicateur | Seuil recommandé |
|---|---|
| Procès-verbaux du C.A. migrés (espace C.A.) | 100 % des 5 dernières années |
| Registre des résolutions complété | 100 % des résolutions des 5 dernières années |
| Métadonnées complètes (bibliothèque centrale) | 95 % des documents |
| Champ Résumé rempli | 100 % des PV et analyses |
| Protocole de dépôt appliqué | Zéro dépôt sans métadonnées complètes depuis 3 mois |

---

## 7. Responsabilités

| Rôle | Responsabilité |
|---|---|
| Direction générale | Approuver toute modification du protocole de dépôt |
| Direction générale | Autoriser la connexion à un outil d'IA quand les seuils de maturité sont atteints |
| Direction générale | Nommer et documenter le gatekeeper de relève en cas d'absence de l'adjointe |
| Adjointe de direction | Gatekeeper principale — seule personne autorisée à déposer au quotidien |
| Adjointe de direction | Maintenir le registre des résolutions à jour |
| Adjointe de direction | Coordonner et exécuter la migration des documents existants |
| Adjointe de direction | Publier sur Octave les documents dont la Diffusion est Membres ou Public |
| Adjointe de direction | Produire un rapport trimestriel sur l'état de la bibliothèque |
| Tout le personnel | Remettre les documents finaux à l'adjointe avec les informations nécessaires |
| Tout le personnel | Respecter la nomenclature Phase 2 pour tout nouveau document |

---

*Suite : Phase 6 — Intelligence documentaire*
