# Guide TI — Configuration Microsoft 365
## Gestion documentaire 2.0 — OAQ

*Printemps 2026*

---

## Contexte et portée

Ce document est destiné à l'administration TI responsable de la configuration Microsoft 365 de l'OAQ. Il décrit les tâches techniques nécessaires pour supporter les phases 1 à 5 du projet Gestion documentaire 2.0. L'approche est volontairement minimaliste : on configure ce qui est nécessaire, sans automatisation complexe.

### Environnement technique requis

- Microsoft 365 Business Standard ou supérieur
- Microsoft Teams avec SharePoint intégré
- Droits d'administration Microsoft 365 (Global Admin ou SharePoint Admin)
- Accès au Centre d'administration Microsoft 365

---

## 1. Configuration des équipes Teams

### 1.1 Équipes à créer

Créer les équipes suivantes dans l'ordre indiqué. Toutes les équipes sont de type **Privé**. L'administration TI crée les équipes — les employés créent des canaux à l'intérieur des équipes existantes.

**Règle des propriétaires :** chaque équipe Teams doit avoir au minimum 2 propriétaires en tout temps. Lors de la création, désigner 2 propriétaires dès le départ. En cas de départ d'un propriétaire, l'administration TI désigne un remplaçant avant de désactiver le compte.

| Nom de l'équipe | Type | Membres initiaux |
|---|---|---|
| OAQ — Général | Standard | Tous les employés |
| OAQ — Projets internes | Standard | Tous les employés |
| OAQ — Conseil d'administration | Standard | Membres du C.A. + personnel désigné |
| OAQ — Comité d'audit | Standard | Membres CAUD + personnel désigné |
| OAQ — Comité d'éthique et déontologie | Standard | Membres CEED + personnel désigné |
| OAQ — Comité de gouvernance et éthique | Standard | Membres CGOU + personnel désigné |
| OAQ — Comité des ressources humaines | Standard | Membres CRH + personnel désigné |
| OAQ — Comité d'inspection professionnelle | Standard | Membres CIP + personnel désigné |
| OAQ — [Autres comités selon besoins] | Standard | Membres respectifs + personnel désigné |

### 1.2 Canaux permanents dans OAQ — Général

| Nom du canal | Type | Description |
|---|---|---|
| Général | Standard | Annonces officielles et communications à toute l'équipe |
| Ressources | Standard | Documents de référence permanents |
| Administratif | Standard | Calendriers, horaires, logistique interne |

### 1.3 Canal boîte à outils dans OAQ — Projets internes

Le canal Général de l'équipe OAQ — Projets internes est la boîte à outils. Y épingler :
- Un lien vers le registre des projets (liste SharePoint)
- Les gabarits de documents (dossier Gabarits dans l'onglet Fichiers)
- Les guides des phases 1 à 6

### 1.4 Canaux privés sensibles

Ces deux canaux sont créés sur demande de la direction générale. Les canaux privés créent une sous-bibliothèque SharePoint séparée — l'administration TI doit comprendre cette distinction avant de les créer.

| Équipe | Canal privé | Personnes exclues | Personnes incluses |
|---|---|---|---|
| OAQ — Comité de gouvernance et éthique | Évaluation-Président | La présidence | Membres du CGOU uniquement |
| OAQ — Comité des ressources humaines | Évaluation-DG | La direction générale | Membres du CRH uniquement |

---

## 2. Registre des projets — Liste SharePoint

### 2.1 Emplacement

Créer une liste SharePoint dans le site associé à l'équipe OAQ — Projets internes. Épingler cette liste comme onglet dans le canal Général sous le nom **Registre**.

### 2.2 Colonnes à créer

| Nom de la colonne | Type SharePoint | Obligatoire | Notes |
|---|---|---|---|
| Code de projet | Ligne de texte unique | Oui | Ex. : PRJ-CA-001. Valeur unique. |
| Nom du projet | Ligne de texte unique | Oui | Nom lisible du canal Teams |
| Responsable | Personne ou groupe | Oui | Sélection dans l'annuaire OAQ |
| Date de création | Date et heure | Oui | Date d'ouverture du canal |
| Date de clôture prévue | Date et heure | Non | Échéance cible |
| Statut | Choix | Oui | Non démarré, En cours, En pause, Bloqué, Annulé, Archivé |
| Lien vers le canal | Lien hypertexte | Oui | URL directe vers le canal Teams |
| Notes | Plusieurs lignes de texte | Non | Observations et contexte |

Configurer la colonne **Statut** avec les six valeurs exactes ci-dessus. Ne pas permettre aux utilisateurs de créer leurs propres valeurs.

---

## 3. Bibliothèque centrale SharePoint

### 3.1 Création de la bibliothèque

- Dans le site SharePoint principal de l'OAQ, créer une nouvelle bibliothèque de documents
- Nommer la bibliothèque : **Bibliothèque centrale OAQ**
- Configurer les permissions (voir section 3.4)
- Désactiver la création de dossiers par les utilisateurs standards
- Créer la structure de dossiers (voir section 3.2)
- Créer les colonnes de métadonnées (voir section 3.3)
- Créer un lien vers la bibliothèque depuis le canal Ressources de OAQ — Général

### 3.2 Structure de dossiers à créer

```
Bibliothèque centrale OAQ/
    Administration/              ← Documents ADM
    Affaires-juridiques/         ← Documents JUR
    Affaires-professionnelles/   ← Documents PRO et comités professionnels
    Communications/              ← Documents COM
    Finances/                    ← Documents FIN
    Ressources-humaines/         ← Documents RH
    Archives-migration/          ← Documents migrés en attente de validation
```

Les délibérations du C.A. (PV, fiches synthèses, ordres du jour) ne vont pas dans la bibliothèque centrale — elles restent dans l'espace documentaire de l'équipe OAQ — Conseil d'administration.

### 3.3 Colonnes de métadonnées à créer — Bibliothèque centrale

Ces colonnes s'appliquent à l'ensemble de la bibliothèque. Les créer dans l'ordre ci-dessous.

| Nom de la colonne | Type SharePoint | Obligatoire | Valeurs |
|---|---|---|---|
| Département / Comité | Choix | Oui | Administration générale (ADM), Affaires juridiques (JUR), Affaires professionnelles (AFPRO), Communications (COM), Finances (FIN), Ressources humaines (RH), Conseil d'administration (CA), Comité d'audit (CAUD), Comité d'enquête à l'éthique et à la déontologie (CEED), Comité d'innovation et développement professionnel (CIDP), Comité d'équivalence des diplômes et de formation (CEDF), Comité de gouvernance et éthique (CGOU), Comité de la formation (CFOR), Comité de la formation continue (CFC), Comité de révision (CREV), Comité des ressources humaines (CRH), Conseil de discipline (CDIS), Comité d'inspection professionnelle (CIP), Syndic (SYN) |
| Type de document | Choix | Non (recommandé) | Communication externe officielle (COMEX), Communication interne officielle (COMIN), Fiche synthèse (FS), Ligne directrice (LDIR), Ordre du jour (ODJ), Politique (POL), Procédure (PRO), Procès-verbal (PV), Rapport (RAP), Résolution (RES), Autre |
| Date du document | Date et heure | Oui | Format date uniquement (sans heure) |
| Date d'entrée en vigueur | Date et heure | Non | Applicable aux POL et LDIR |
| Statut | Choix | Oui | Actif, Archivé |
| Diffusion | Choix | Oui | Interne, Membres (Octave), Public |
| Numéro de résolution | Ligne de texte unique | Non | Format CA AAAA.MM.JJ.X.X — ex. : CA 2024.06.07.4.1 |
| Date de prochaine révision | Date et heure | Non | Applicable aux POL et LDIR |
| Code de projet | Ligne de texte unique | Non | Ex. : PRJ-CA-001 |
| Résumé | Plusieurs lignes de texte | Non | 2 à 3 phrases — fortement recommandé |

**Important :** pour la colonne Type de document, permettre la valeur « Autre » mais ne pas permettre aux utilisateurs de créer leurs propres valeurs au-delà de la liste définie.

### 3.4 Colonnes de métadonnées — Espace C.A.

Ces colonnes sont créées dans la bibliothèque de documents du site SharePoint associé à l'équipe OAQ — Conseil d'administration.

| Nom de la colonne | Type SharePoint | Obligatoire | Valeurs |
|---|---|---|---|
| Type de document | Choix | Non (recommandé) | Fiche synthèse (FS), Ordre du jour (ODJ), Procès-verbal (PV), Rapport (RAP), Résolution (RES), Autre |
| Date de réunion | Date et heure | Oui | Format date uniquement |
| Statut de gouvernance | Choix | Oui | Approuvé par résolution, Pour information, Archivé |
| Résumé | Plusieurs lignes de texte | Non (recommandé) | 2 à 3 phrases |

### 3.5 Registre des résolutions — Liste SharePoint (espace C.A.)

Créer une liste SharePoint dans le site associé à l'équipe OAQ — Conseil d'administration. Cette liste est distincte de la bibliothèque de documents du C.A.

| Nom de la colonne | Type SharePoint | Obligatoire | Notes |
|---|---|---|---|
| Numéro de résolution | Ligne de texte unique | Oui | Format CA AAAA.MM.JJ.X.X — valeur unique |
| Date de réunion | Date et heure | Oui | Format date uniquement |
| Description courte | Plusieurs lignes de texte | Oui | 1 à 2 phrases résumant la décision |
| Décision | Choix | Oui | Adoptée, Rejetée, Reportée, Annulée |
| Suivi | Choix | Non | À implémenter, En cours, Complété |
| Lien vers le PV | Lien hypertexte | Non | URL vers le document dans l'espace C.A. |
| Lien vers le document adopté | Lien hypertexte | Non | URL vers la bibliothèque centrale si VFP |

Épingler le registre comme onglet dans le canal Général de l'équipe OAQ — Conseil d'administration.

### 3.6 Permissions de la bibliothèque centrale

| Groupe | Niveau d'accès | Notes |
|---|---|---|
| Adjointe de direction | Contrôle total | Gatekeeper principale — seule personne autorisée à déposer au quotidien |
| Présidence | Lecture + modification des métadonnées | Gatekeeper de relève en l'absence de l'adjointe |
| Direction générale | Lecture + modification des métadonnées | Gatekeeper de relève en l'absence de l'adjointe |
| Tous les employés | Lecture uniquement | Peuvent consulter et télécharger, pas modifier |
| Membres du C.A. | Lecture des dossiers CA/ uniquement | Accès restreint selon les besoins |

---

## 4. Paramètres de rétention et cycle de vie

### 4.1 Enregistrements de réunions Teams

Configurer la suppression automatique des enregistrements de réunions Teams après 60 jours.

- Centre d'administration Microsoft 365 → Teams → Stratégies de réunion
- Configurer : Conservation des enregistrements de réunion = **60 jours**
- Appliquer à : Tous les utilisateurs de l'OAQ

Les notes de réunion et comptes rendus ne sont pas concernés par cette politique.

### 4.2 Canaux archivés

Les canaux archivés dans Teams sont conservés indéfiniment. **Ne pas configurer de politique de suppression automatique pour les canaux Teams.** La décision de supprimer un canal archivé doit toujours être une décision humaine délibérée.

---

## 5. Sécurité et gestion des accès

### 5.1 Règles générales

- Toutes les équipes Teams sont de type **Privé** — les membres sont invités, personne ne peut rejoindre sans invitation
- La création de nouvelles équipes Teams est réservée à l'administration TI
- Les employés peuvent créer des canaux dans les équipes auxquelles ils appartiennent
- Les canaux privés ne sont créés que par l'administration TI sur demande de la direction générale

### 5.2 Arrivées et départs

| Événement | Action requise | Délai |
|---|---|---|
| Arrivée d'un nouvel employé | Créer le compte M365, ajouter aux équipes Teams appropriées | Avant le premier jour |
| Départ d'un employé | Désactiver le compte M365, retirer des équipes, transférer la propriété des canaux actifs | Le jour du départ |
| Ajout d'un collaborateur externe | Créer le compte invité, ajouter à l'équipe dédiée uniquement — jamais à une équipe interne | Sur demande du responsable de projet |
| Retrait d'un collaborateur externe | Désactiver le compte invité | Sur demande ou lors de la revue trimestrielle |

---

## 6. Checklist de déploiement

### Phase A — Teams

- [ ] Créer toutes les équipes Teams listées en section 1.1
- [ ] Créer les canaux permanents dans OAQ — Général
- [ ] Créer les canaux privés sensibles (Évaluation-Président, Évaluation-DG)
- [ ] Configurer la boîte à outils dans le canal Général de OAQ — Projets internes
- [ ] Vérifier les permissions de chaque équipe
- [ ] Configurer la suppression automatique des enregistrements de réunions (60 jours)

### Phase B — Registre des projets

- [ ] Créer la liste SharePoint du registre des projets dans OAQ — Projets internes
- [ ] Créer toutes les colonnes listées en section 2.2
- [ ] Épingler le registre comme onglet dans le canal Général de OAQ — Projets internes
- [ ] Tester avec un projet fictif pour valider le fonctionnement

### Phase C — Bibliothèque centrale

- [ ] Créer la bibliothèque centrale SharePoint
- [ ] Créer la structure de dossiers (section 3.2)
- [ ] Créer toutes les colonnes de métadonnées (section 3.3)
- [ ] Configurer les permissions d'accès (section 3.6)
- [ ] Créer un lien vers la bibliothèque depuis le canal Ressources de OAQ — Général
- [ ] Tester un dépôt de document avec l'adjointe de direction

### Phase C2 — Espace documentaire C.A.

- [ ] Créer les colonnes de métadonnées dans la bibliothèque de l'équipe OAQ — Conseil d'administration (section 3.4)
- [ ] Créer la liste SharePoint Registre des résolutions (section 3.5)
- [ ] Épingler le registre comme onglet dans le canal Général de OAQ — Conseil d'administration
- [ ] Configurer les permissions — accès restreint aux membres du C.A. et personnel désigné
- [ ] Tester un dépôt de PV et une entrée au registre avec l'adjointe de direction

### Phase D — Validation finale

- [ ] Vérifier avec l'adjointe de direction qu'elle peut déposer dans la bibliothèque centrale
- [ ] Vérifier qu'un employé standard peut consulter mais pas modifier dans la bibliothèque
- [ ] Vérifier que le registre des projets est accessible et modifiable
- [ ] Vérifier que les canaux privés sont invisibles pour les personnes exclues
- [ ] Former l'adjointe de direction sur les opérations SharePoint de base

---

## 7. Responsabilités

| Rôle | Responsabilité |
|---|---|
| Administration TI | Exécuter toutes les configurations décrites dans ce guide |
| Administration TI | Gérer les arrivées et départs de personnel dans M365 |
| Administration TI | Effectuer la revue trimestrielle des comptes invités externes |
| Direction générale | Valider la liste des valeurs pour la colonne Sujet avant la configuration |
| Direction générale | Approuver toute modification de la structure Teams ou de la bibliothèque |
| Adjointe de direction | Valider la configuration avec l'administration TI avant le lancement |
| Adjointe de direction | Signaler tout problème technique à l'administration TI |
