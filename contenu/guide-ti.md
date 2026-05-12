# Guide TI — Configuration Microsoft 365
## Gestion documentaire 2.1 — OAQ

*Printemps 2026*

---

## Contexte et portée

Ce document est destiné à l'administration TI responsable de la configuration Microsoft 365 de l'OAQ. Il décrit les tâches techniques nécessaires pour supporter les phases 1 à 5 du projet Gestion documentaire 2.1. L'approche est volontairement minimaliste : on configure ce qui est nécessaire, sans automatisation complexe.

### Environnement technique requis

- Microsoft 365 Business Standard ou supérieur
- Microsoft Teams avec SharePoint intégré
- Droits d'administration Microsoft 365 (Global Admin ou SharePoint Admin)
- Accès au Centre d'administration Microsoft 365

---

## 1. Configuration des équipes Teams

### 1.1 Équipes à créer

Créer les équipes suivantes dans l'ordre indiqué. **Toutes les équipes sont de type Privé** (Phase 1) : les membres sont invités, personne ne peut y accéder sans invitation explicite.

**Règle des propriétaires :** chaque équipe Teams doit avoir au minimum 2 propriétaires en tout temps. Lors de la création, désigner 2 propriétaires dès le départ. En cas de départ d'un propriétaire, l'administration TI désigne un remplaçant avant de désactiver le compte.

| Nom de l'équipe | Type | Membres initiaux |
|---|---|---|
| OAQ — Général | Privé | Tous les employés |
| OAQ — Projets internes | Privé | Tous les employés |
| OAQ — Conseil d'administration | Privé | Membres du C.A. + personnel désigné |
| OAQ — Comité d'audit | Privé | Membres CAUD + personnel désigné |
| OAQ — Comité d'éthique et déontologie | Privé | Membres CEED + personnel désigné |
| OAQ — Comité de gouvernance et éthique | Privé | Membres CGOU + personnel désigné |
| OAQ — Comité des ressources humaines | Privé | Membres CRH + personnel désigné |
| OAQ — Comité d'inspection professionnelle | Privé | Membres CIP + personnel désigné |
| OAQ — [Autres comités selon besoins] | Privé | Membres respectifs + personnel désigné |

### 1.2 Canal unique dans OAQ — Général

L'équipe OAQ — Général a **un seul canal permanent : Général** (Phase 1). Aucun canal Ressources ou Administratif distinct — c'est inutile pour 6 personnes et ça encombre la barre latérale.

Dans l'onglet **Fichiers** du canal Général, créer deux dossiers :

| Dossier | Contenu |
|---|---|
| `Ressources/` | Documents de référence permanents (procédures, guides, lien vers la bibliothèque centrale) |
| `Administratif/` | Calendriers, horaires, logistique interne |

### 1.3 Canal boîte à outils dans OAQ — Projets internes

Le canal Général de l'équipe OAQ — Projets internes est la boîte à outils. Y épingler :

- Un lien vers le registre des projets (liste SharePoint — voir section 2)
- Les gabarits de documents (dossier `Gabarits/` dans l'onglet Fichiers)
- Les guides des phases 1 à 6

### 1.4 Canaux privés d'évaluation — créés par les utilisateurs

> **Note importante :** ces canaux ne sont **pas** créés par l'administration TI sur demande. Selon la Phase 1, ils sont créés directement par la personne qui en a besoin (David pour `Évaluation-Président`, Alice pour `Évaluation-DG`), sans procédure particulière.

L'administration TI n'intervient que si l'utilisateur rencontre un problème technique.

| Équipe | Canal privé | Créé par | Personnes exclues |
|---|---|---|---|
| OAQ — Comité de gouvernance et éthique | Évaluation-Président | David (présidence) | La présidence |
| OAQ — Comité des ressources humaines | Évaluation-DG | Alice (DG) | La direction générale |

---

## 2. Registre des projets — Liste SharePoint

### 2.1 Emplacement

Créer une liste SharePoint dans le site associé à l'équipe OAQ — Projets internes. Épingler cette liste comme onglet dans le canal Général sous le nom **Registre**.

### 2.2 Colonnes à créer

Selon la Phase 4, le registre des projets contient **4 colonnes, toutes obligatoires** :

| Nom de la colonne | Type SharePoint | Obligatoire | Notes |
|---|---|---|---|
| Nom du projet | Ligne de texte unique | Oui | Nom lisible du canal Teams (ex. `CA — OTC prothèses 2026`) |
| Responsable | Personne ou groupe | Oui | Sélection dans l'annuaire OAQ |
| Statut | Choix | Oui | Non démarré, En cours, En pause, Bloqué, Annulé, Archivé |
| Lien vers le canal | Lien hypertexte | Oui | URL directe vers le canal Teams |

Configurer la colonne **Statut** avec les six valeurs exactes ci-dessus. Ne pas permettre aux utilisateurs de créer leurs propres valeurs.

Pas de colonne Code de projet, Date de création, Date de clôture, Notes. Tout le reste (dates, notes, contexte) vit dans le canal Teams directement.

---

## 3. Bibliothèque centrale SharePoint

### 3.1 Création de la bibliothèque

- Dans le site SharePoint principal de l'OAQ, créer une nouvelle bibliothèque de documents
- Nommer la bibliothèque : **Bibliothèque centrale OAQ**
- Configurer les permissions (voir section 3.5)
- Désactiver la création de dossiers par les utilisateurs standards
- Créer la structure de dossiers (voir section 3.2)
- Créer les colonnes de métadonnées (voir section 3.3)
- Épingler la bibliothèque comme onglet dans le canal Général de OAQ — Général, et placer un raccourci dans le dossier `Ressources/` du canal

### 3.2 Structure de dossiers à créer

Selon la Phase 5, profondeur maximale **2 niveaux**. Pas de sous-dossiers par année — c'est le filtre par date dans les métadonnées qui joue ce rôle.

```
Bibliothèque centrale OAQ/
    Gouvernance/
        CA/              ← Procès-verbaux, fiches synthèses, résolutions du C.A. (PDF adoptés)
        Comités/         ← Documents finaux des comités
    Affaires-juridiques/ ← Analyses, avis, correspondances officielles
    Affaires-professionnelles/
    Communications/
    Finances/
    Ressources-humaines/
```

**Pas de dossier `Archives-migration/`** : un document migré occupe directement sa place finale dans la structure, avec son statut Actif ou Archivé dans les métadonnées.

### 3.3 Colonnes de métadonnées — Bibliothèque centrale

Selon la Phase 5, exactement **5 colonnes, toutes obligatoires**, configurées dans SharePoint dès la création de la bibliothèque.

| Nom de la colonne | Type SharePoint | Obligatoire | Valeurs |
|---|---|---|---|
| Département / Comité | Choix | Oui | Administration générale (ADM), Affaires juridiques (JUR), Affaires professionnelles (PRO), Communications (COM), Finances (FIN), Ressources humaines (RH), Conseil d'administration (CA), Comité d'audit (CAUD), Comité d'enquête à l'éthique et à la déontologie (CEED), Comité d'innovation et développement professionnel (CIDP), Comité d'équivalence des diplômes et de formation (CEDF), Comité de gouvernance et éthique (CGOU), Comité de la formation (CFOR), Comité de la formation continue (CFC), Comité de révision (CREV), Comité des ressources humaines (CRH), Conseil de discipline (CDIS), Comité d'inspection professionnelle (CIP), Syndic (SYN) |
| Date du document | Date et heure | Oui | Format date uniquement (AAAA-MM-JJ, sans heure) |
| Statut | Choix | Oui | Actif, Archivé |
| Diffusion | Choix | Oui | Interne, Membres (Octave), Public |
| Résumé | Plusieurs lignes de texte | Oui | 2 à 3 phrases — généré automatiquement par OAQ-v2 et validé par Alice |

> **Métadonnées intentionnellement absentes** (Phase 5) :
> - **Type de document** → déjà dans le nom du fichier (`-PV-`, `-FS-`, `-POL-`). Recherche par filtre de nom dans SharePoint.
> - **Date d'entrée en vigueur** → si elle compte, elle est dans le document.
> - **Numéro de résolution** → vit dans le registre des résolutions, lié au PV par la date (section 3.4).
> - **Date de prochaine révision** → géré au cas par cas, pas systématique.
> - **Code de projet** → la nomenclature n'utilise plus de numéro séquentiel (Phase 4).

### 3.4 Registre des résolutions — Liste SharePoint (espace C.A.)

Selon la Phase 5, le registre des résolutions est distinct de la bibliothèque de documents — c'est l'index des décisions du C.A., pas leur contenu. Le PV de la réunion contient le texte complet de chaque résolution.

Créer une liste SharePoint dans le site associé à l'équipe OAQ — Conseil d'administration. Cette liste est distincte de la bibliothèque de documents du C.A.

**4 colonnes, toutes obligatoires** :

| Nom de la colonne | Type SharePoint | Obligatoire | Notes |
|---|---|---|---|
| Numéro de résolution | Ligne de texte unique | Oui | Format `AAAA-MM-NNN` (ex. : `2025-11-001`). Valeur unique. |
| Date de réunion | Date et heure | Oui | Format date uniquement |
| Description courte | Plusieurs lignes de texte | Oui | 1 phrase sur l'objet de la résolution |
| Décision | Choix | Oui | Adoptée, Rejetée, Reportée |

Épingler le registre comme onglet dans le canal Général de l'équipe OAQ — Conseil d'administration.

### 3.5 Permissions de la bibliothèque centrale

| Groupe | Niveau d'accès | Notes |
|---|---|---|
| Adjointe de direction | Contrôle total | Gatekeeper principale — seule personne autorisée à déposer au quotidien |
| Présidence | Lecture + modification des métadonnées | Gatekeeper de relève en l'absence de l'adjointe |
| Direction générale | Lecture + modification des métadonnées | Gatekeeper de relève en l'absence de l'adjointe |
| Tous les employés | Lecture uniquement | Lecture complète de la bibliothèque ; pas de modification |

### 3.6 Permissions de l'Espace C.A.

L'Espace C.A. (site SharePoint de l'équipe OAQ — Conseil d'administration) est restreint.

| Groupe | Niveau d'accès |
|---|---|
| Membres du C.A. + personnel désigné | Accès complet à la bibliothèque de documents et au registre des résolutions |
| Tous les autres employés | Pas d'accès |

---

## 4. Paramètres de rétention et cycle de vie

### 4.1 Enregistrements de réunions Teams

Configurer la suppression automatique des enregistrements de réunions Teams après 60 jours.

- Centre d'administration Microsoft 365 → Teams → Stratégies de réunion
- Configurer : Conservation des enregistrements de réunion = **60 jours**
- Appliquer à : Tous les utilisateurs de l'OAQ

Les notes de réunion et comptes rendus déposés dans `Réunions/[AAAA-MM-JJ]` du canal de projet ne sont pas concernés par cette politique — ils restent dans le canal indéfiniment.

### 4.2 Canaux archivés

Les canaux archivés dans Teams sont conservés indéfiniment en lecture seule. **Ne pas configurer de politique de suppression automatique pour les canaux Teams.** La décision de supprimer un canal archivé doit toujours être une décision humaine délibérée.

---

## 5. Sécurité et gestion des accès

### 5.1 Règles générales

- Toutes les équipes Teams sont de type **Privé** — les membres sont invités, personne ne peut rejoindre sans invitation
- La création de nouvelles équipes Teams est réservée à l'administration TI, sur approbation de la direction générale
- Les employés peuvent créer des canaux dans les équipes auxquelles ils appartiennent
- Les canaux privés d'évaluation sont créés directement par les utilisateurs concernés (David ou Alice) — pas via l'administration TI

### 5.2 Arrivées et départs

| Événement | Action requise | Délai |
|---|---|---|
| Arrivée d'un nouvel employé | Créer le compte M365, ajouter aux équipes Teams appropriées | Avant le premier jour |
| Départ d'un employé | Désactiver le compte M365, retirer des équipes, transférer la propriété des canaux actifs | Le jour du départ |
| Ajout d'un collaborateur externe | Créer le compte invité, ajouter à l'équipe externe dédiée uniquement — jamais à une équipe interne | Sur demande du responsable du projet |
| Retrait d'un collaborateur externe | Désactiver le compte invité | Sur demande ou lors de la revue annuelle |

---

## 6. Checklist de déploiement

### Phase A — Équipes Teams

- [ ] Créer toutes les équipes Teams listées en section 1.1 — toutes en **Privé**
- [ ] Désigner 2 propriétaires pour chaque équipe
- [ ] Vérifier les permissions de chaque équipe
- [ ] Configurer la suppression automatique des enregistrements de réunions (60 jours)

### Phase B — Canal Général et boîte à outils

- [ ] Dans le canal Général de OAQ — Général, créer les dossiers `Ressources/` et `Administratif/` dans l'onglet Fichiers
- [ ] Configurer la boîte à outils dans le canal Général de OAQ — Projets internes (gabarits, lien vers le registre, guides des phases 1 à 6)

### Phase C — Registre des projets

- [ ] Créer la liste SharePoint du registre des projets dans le site de OAQ — Projets internes
- [ ] Créer les 4 colonnes listées en section 2.2
- [ ] Épingler le registre comme onglet **Registre** dans le canal Général de OAQ — Projets internes
- [ ] Tester avec un projet fictif pour valider le fonctionnement

### Phase D — Bibliothèque centrale

- [ ] Créer la bibliothèque centrale SharePoint (section 3.1)
- [ ] Créer la structure de dossiers à 2 niveaux maximum (section 3.2)
- [ ] Créer les 5 colonnes de métadonnées (section 3.3)
- [ ] Configurer les permissions d'accès (section 3.5)
- [ ] Épingler la bibliothèque comme onglet dans OAQ — Général et créer un raccourci dans le dossier `Ressources/`
- [ ] Tester un dépôt de document avec l'adjointe de direction

### Phase E — Espace C.A.

- [ ] Créer la liste SharePoint Registre des résolutions dans le site de OAQ — Conseil d'administration (section 3.4)
- [ ] Créer les 4 colonnes du registre des résolutions
- [ ] Épingler le registre comme onglet dans le canal Général de OAQ — Conseil d'administration
- [ ] Configurer les permissions de l'Espace C.A. — accès restreint aux membres du C.A. et au personnel désigné (section 3.6)
- [ ] Tester un dépôt de PV et une entrée au registre avec l'adjointe de direction

### Phase F — Validation finale

- [ ] Vérifier avec l'adjointe de direction qu'elle peut déposer dans la bibliothèque centrale
- [ ] Vérifier qu'un employé standard peut consulter mais pas modifier dans la bibliothèque
- [ ] Vérifier que le registre des projets est accessible et modifiable par tous les employés
- [ ] Vérifier que l'Espace C.A. est invisible pour les personnes non autorisées
- [ ] Former l'adjointe de direction sur les opérations SharePoint de base

---

## 7. Responsabilités

| Rôle | Responsabilité |
|---|---|
| Administration TI | Exécuter toutes les configurations décrites dans ce guide |
| Administration TI | Gérer les arrivées et départs de personnel dans M365 |
| Administration TI | Effectuer la revue annuelle des comptes invités externes |
| Direction générale | Valider la taxonomie des sujets avant la configuration |
| Direction générale | Approuver toute modification de la structure Teams ou de la bibliothèque |
| Adjointe de direction | Valider la configuration avec l'administration TI avant le lancement |
| Adjointe de direction | Signaler tout problème technique à l'administration TI |
