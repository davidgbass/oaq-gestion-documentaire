# Phase 4 — Gestion de projets
## Gestion documentaire 2.0 — OAQ

*Printemps 2026*

---

## Contexte

Sans cadre défini, les équipes créent des canaux en double, perdent du temps à chercher des documents et ne savent pas où collaborer. Ce guide définit comment distinguer une tâche d'un projet, comment structurer un canal de projet, comment communiquer pendant les travaux et comment fermer proprement un dossier une fois terminé.

---

## Tâche ou projet ?

> **Pourquoi distinguer tâche et projet ?**
> Créer un canal pour chaque petite action surchargerait le système. Ne pas créer de canal quand la collaboration est réelle cause des pertes de contexte. Cette règle des trois critères tranche clairement et évite les deux extrêmes.

Avant de créer un canal dans l'équipe OAQ — Projets internes, il faut se poser trois questions. Si les trois réponses sont OUI, c'est un projet. Si l'une des réponses est NON, c'est une tâche.

| Critère | OUI → Projet | NON → Tâche |
|---|---|---|
| 2 personnes ou plus collaborent activement ? (échanger, co-rédiger — pas juste valider ou être informé) | Plusieurs personnes impliquées | Travail en solo |
| Il y a un livrable concret ? (document, lettre, communication, décision, rapport) | Livrable identifié | Échange informel |
| Il y a plusieurs étapes à coordonner ? (rédaction → révision → approbation → diffusion) | Étapes multiples | Action unique |

- **OUI aux 3 critères → PROJET** : créer un canal dans OAQ — Projets internes
- **NON à au moins 1 critère → TÂCHE** : utiliser Microsoft To Do personnel ou un message Teams direct

### Exemples concrets

| Situation | Verdict | Raison |
|---|---|---|
| La présidence doit signer et envoyer une lettre de routine déjà rédigée | TÂCHE | 1 seule personne, action unique |
| L'équipe travaille sur un guide d'appareillage pédiatrique | PROJET | Plusieurs personnes, livrable, étapes longues |
| Un employé doit commander des fournitures de bureau | TÂCHE | 1 personne, aucun livrable collaboratif |
| Rédaction d'une lettre à l'Office des professions impliquant 3 départements | PROJET | 2+ personnes, livrable, étapes de révision et d'adoption |

**Principe : quand on doute, on crée un canal.** Le coût de créer un canal est presque nul. Le coût de ne pas en créer — perte de contexte, confusion sur l'avancement, dépendance aux personnes — est élevé.

---

## Nomenclature des canaux de projet

Tout canal de projet dans OAQ — Projets internes est nommé selon la structure suivante :

```
PRJ-[CodeOAQ]-[NNN] - [Nom lisible en 2 à 4 mots]
```

- **CodeOAQ** : le code du département ou de l'instance concerné (voir Phase 2)
- **NNN** : numéro séquentiel attribué par la direction générale lors de l'inscription au registre
- **Nom lisible** : description courte du projet, en 2 à 4 mots

> **Pourquoi un numéro séquentiel attribué par la direction générale ?**
> Un numéro attribué de façon centralisée garantit qu'il n'y a jamais deux projets avec le même code. C'est ce code qui lie le canal de projet au registre des projets et à la référence de traçabilité documentaire (Phase 3).

### Exemples de noms de canaux

| Situation | Nom du canal |
|---|---|
| Réponse à la demande d'enquête du syndic | PRJ-SYN-001 - Enquête syndic octobre 2025 |
| Dossier prothèses auditives en vente libre pour le C.A. | PRJ-CA-001 - OTC prothèses CA 2026 |
| Révision de la politique de formation continue | PRJ-CFOR-001 - Politique formation continue |
| Préparation de l'assemblée annuelle | PRJ-ADM-001 - Assemblée annuelle 2026 |
| Rapport annuel de l'OAQ | PRJ-ADM-002 - Rapport annuel 2026 |

---

## Communication pendant le projet

> **Pourquoi trois modes de communication distincts ?**
> Mélanger les retours de contenu, les questions opérationnelles et les discussions complexes dans le même fil crée de la confusion. Ces trois modes séparent clairement les types d'échanges et réduisent le bruit.

| Mode | Usage | Délai attendu |
|---|---|---|
| Conversation dans le canal | Questions générales, coordination, annonces liées au projet. Utiliser @mention pour notifier les personnes concernées. | 24 à 48 heures ouvrables |
| Commentaires dans le document | Retours sur le contenu d'un document spécifique. Utiliser le mode révision de Word ou PowerPoint. | Selon l'échéance fixée |
| Réunion Teams | Discussion complexe ne pouvant pas être résolue de façon asynchrone. Tenue dans le canal du projet. Compte rendu déposé dans Réunions/ [AAAA-MM-JJ]. | Sur convocation |

**Règle d'or :** les retours sur le contenu restent dans le document (mode révision). Les questions de coordination restent dans le canal. Si une conversation devient trop longue, on convoque une réunion.

**Pendant le projet :**
- Toutes les conversations liées au projet se font dans le canal, jamais par courriel
- Tous les documents de travail vivent dans l'onglet Fichiers du canal
- Les réunions du projet sont tenues dans le canal (réunion Teams)

---

## Registre des projets

Le registre des projets est une liste SharePoint dans le site associé à l'équipe OAQ — Projets internes. Il est accessible via l'onglet Registre dans le canal Général de cette équipe.

> **Pourquoi un registre centralisé ?**
> Sans registre, il est impossible de savoir en un coup d'œil quels projets sont actifs, qui en est responsable et où en sont les travaux. Le registre est le précurseur d'un tableau de bord de projets — et la donnée qui alimentera éventuellement un outil de suivi automatisé.

### Colonnes du registre

| Colonne | Obligatoire | Notes |
|---|---|---|
| Code de projet | Oui | Ex. : PRJ-CA-001. Valeur unique, attribuée par la direction générale. |
| Nom du projet | Oui | Nom lisible du canal Teams |
| Responsable | Oui | Sélection dans l'annuaire OAQ |
| Date de création | Oui | Date d'ouverture du canal |
| Date de clôture prévue | Non | Échéance cible |
| Statut | Oui | Non démarré / En cours / En pause / Bloqué / Annulé / Archivé |
| Lien vers le canal | Oui | URL directe vers le canal Teams |
| Notes | Non | Observations et contexte |

La direction générale attribue les numéros séquentiels et tient le registre à jour.

---

## Fermeture et archivage du canal

Quand le livrable final est complété et diffusé, le canal doit être fermé. C'est l'adjointe de direction qui valide et exécute l'archivage.

### Processus d'archivage

1. Vérifier que le livrable final est déposé dans la bibliothèque centrale (Phase 5) avec le bon suffixe (VFA ou VFP)
2. Mettre à jour le statut du projet dans le registre des projets : **Archivé**
3. Archiver le canal dans Teams — il devient lecture seule mais reste accessible et consultable

> **Pourquoi conserver les canaux archivés indéfiniment ?**
> Un canal archivé n'est pas une archive morte. Tout le contexte — conversations, fichiers, décisions intermédiaires — est préservé. C'est la mémoire organisationnelle en action. Si le projet doit reprendre, le canal peut être réactivé sans perte d'information.

### Accès aux canaux archivés

- Tous les membres de l'équipe peuvent consulter les canaux archivés à tout moment
- Tout membre peut réactiver un canal archivé si le travail doit reprendre
- La réactivation est signalée à la direction générale

---

## Revue trimestrielle des canaux

La direction générale effectue une revue trimestrielle de tous les canaux actifs, en s'appuyant sur le registre des projets. Cette revue vise à :

- Identifier les projets inactifs depuis plus de 30 jours
- Contacter le responsable pour confirmer l'état du projet
- Archiver les canaux dont le projet est terminé
- Identifier les projets bloqués et proposer une résolution
- Vérifier que les collaborateurs externes ont toujours besoin de leur accès
- Identifier et supprimer le contenu périmé dans les canaux actifs (doublons, brouillons abandonnés, versions de travail sans suite)

> **Pourquoi nettoyer le contenu périmé ?**
> Les canaux de projet accumulent naturellement des brouillons, des versions intermédiaires et des échanges sans suite. Ce contenu n'a pas de valeur institutionnelle, mais il sera indexé par un outil d'IA et peut produire des réponses confuses ou incorrectes. Un nettoyage trimestriel maintient la qualité de la mémoire organisationnelle à long terme.

---

## Gestion des accès externes

Certains projets nécessitent la collaboration de personnes extérieures à l'OAQ. Ces collaborateurs sont ajoutés à une équipe externe dédiée — jamais à une équipe interne.

- Le responsable du projet peut ajouter des collaborateurs externes à une équipe dédiée sans approbation préalable
- Les collaborateurs externes n'ont jamais accès aux équipes internes de l'OAQ
- La direction générale effectue une revue trimestrielle des accès externes
- Lors de l'archivage d'un projet, l'adjointe de direction vérifie que les accès externes ont été retirés

---

## Responsabilités

| Rôle | Responsabilité |
|---|---|
| Tout le personnel | Créer un canal de projet dès que les 3 critères sont remplis |
| Tout le personnel | Respecter la nomenclature des canaux (PRJ + code OAQ + numéro) |
| Tout le personnel | Déposer tous les documents du projet dans l'onglet Fichiers du canal |
| Responsable du canal | Créer la structure initiale des dossiers à la création du canal |
| Responsable du canal | Aviser la direction générale pour inscription au registre des projets |
| Responsable du projet | Maintenir l'état d'avancement dans le registre des projets |
| Responsable du projet | Aviser l'adjointe de direction quand le projet est terminé |
| Direction générale | Tenir et réviser le registre des projets |
| Direction générale | Effectuer la revue trimestrielle des canaux et des accès externes |
| Direction générale | Approuver toute modification de ce guide |
| Adjointe de direction | Valider la conformité des documents avant archivage |
| Adjointe de direction | Exécuter l'archivage des canaux terminés |
| Adjointe de direction | Former les nouveaux membres du personnel sur ce guide |

---

*Suite : Phase 5 — Bibliothèque centrale et migration*
