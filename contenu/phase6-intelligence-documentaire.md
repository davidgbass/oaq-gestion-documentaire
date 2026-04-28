# Phase 6 — Intelligence documentaire
## Gestion documentaire 2.0 — OAQ

*Printemps 2026*

---

## Contexte

Les phases 1 à 5 bâtissent la fondation : des espaces bien structurés, une nomenclature cohérente, un protocole de gouvernance rigoureux et une bibliothèque centrale fiable. La Phase 6 est la destination finale de ce travail : connecter un outil d'IA à cette bibliothèque pour que n'importe quel membre de l'équipe puisse interroger la mémoire institutionnelle de l'OAQ en langage naturel.

Ce document présente les grands concepts. Le détail technique et opérationnel de la Phase 6 sera développé quand les phases précédentes seront appliquées de façon stable.

---

## La vision

Dans deux à trois ans, un membre de l'équipe ou de la présidence pourra poser une question comme :

> *« Qu'est-ce que le C.A. a décidé sur les prothèses auditives en vente libre depuis 2022 ? »*

Et obtenir une réponse complète en quelques secondes — avec les sources, les numéros de résolution et le contexte — sans dépendre de la mémoire de qui que ce soit.

C'est ce que les phases 1 à 5 rendent possible. Sans elles, l'IA travaillerait dans le vide. Avec elles, elle travaille à partir d'une bibliothèque fiable, structurée et mise à jour.

---

## Ce que l'IA peut faire

Un outil d'IA connecté à la bibliothèque centrale pourra répondre à des questions comme :

- « Qu'est-ce que le C.A. a décidé sur les prothèses auditives en vente libre depuis 2022 ? »
- « Quelle est la position juridique actuelle de l'OAQ sur l'équivalence des diplômes étrangers ? »
- « Quelles résolutions ont été adoptées lors des trois dernières réunions du C.A. ? »
- « Est-ce qu'on a déjà traité une demande d'enquête similaire à celle du syndic en octobre 2025 ? »
- « Quelle est la politique en vigueur sur la formation continue ? »

L'IA ne remplace pas le jugement — elle rend l'information institutionnelle accessible instantanément à ceux qui doivent prendre des décisions.

---

## Pourquoi la qualité de la bibliothèque détermine la qualité des réponses

Connecter un outil d'IA à une bibliothèque mal structurée donne des résultats médiocres. Connecter un outil d'IA à une bibliothèque bien structurée, avec des métadonnées cohérentes et des résumés de qualité, donne des résultats fiables.

Ce qu'on fait dans les phases 1 à 5 détermine la qualité des réponses dans 18 mois :

| Action des phases 1 à 5 | Impact sur l'IA |
|---|---|
| Nomenclature des fichiers cohérente | Le nom du fichier est une métadonnée en soi — l'IA identifie le type et le comité sans ouvrir le document |
| Taxonomie des sujets contrôlée | L'IA trouve tous les documents pertinents sur un sujet, sans en manquer |
| Métadonnées complètes dans SharePoint | L'IA filtre par comité, date, statut de gouvernance et type de document |
| Résumés de qualité dans le champ Résumé | L'IA répond sans lire chaque document en entier |
| Distinction Approuvé par résolution / Pour information | L'IA distingue les décisions officielles des analyses préliminaires |
| Statut Actif / Archivé dans la bibliothèque | L'IA sait quelle version d'une politique est en vigueur |

---

## Ce que l'IA ne fera pas

L'IA connectée à la bibliothèque centrale de l'OAQ sera configurée pour :

- Travailler uniquement à partir des documents de la bibliothèque centrale — pas des canaux de projet, pas des courriels, pas des documents en VT
- Citer ses sources à chaque réponse (document, date, numéro de résolution)
- Signaler quand elle ne trouve pas de réponse dans la bibliothèque — plutôt qu'inventer
- Ne pas modifier les documents de la bibliothèque

---

## Les documents Markdown

Pour être lus efficacement par un outil d'IA, les PDF de la bibliothèque centrale sont convertis en fichiers texte au format Markdown (`.md`). Ces fichiers sont des copies de lecture — les PDF originaux restent la référence officielle dans la bibliothèque.

La conversion en Markdown fait partie du travail de préparation de la Phase 6. Elle sera exécutée par la gatekeeper avec le support de l'administration TI.

---

## Seuils de maturité avant connexion de l'IA

La direction générale autorise la connexion à un outil d'IA quand ces seuils sont atteints :

| Indicateur | Seuil recommandé |
|---|---|
| Procès-verbaux du C.A. migrés | 100 % des 5 dernières années |
| Métadonnées complètes | 95 % des documents dans la bibliothèque |
| Champ Résumé rempli | 100 % des PV et analyses juridiques |
| Taxonomie des sujets validée | Liste officielle stable depuis 6 mois |
| Protocole de dépôt appliqué | Zéro dépôt sans métadonnées complètes depuis 3 mois |

Ces seuils garantissent que la bibliothèque est suffisamment fiable pour alimenter un outil d'IA sans produire de réponses erronées ou incomplètes.

---

## Ce qui sera développé dans la Phase 6

Le détail opérationnel de la Phase 6 comprendra notamment :

- Le choix et la configuration de l'outil d'IA
- Le protocole de conversion des PDF en Markdown
- Les règles d'utilisation de l'IA par l'équipe
- La gouvernance des réponses de l'IA (vérification, correction, limites)
- L'intégration dans les flux de travail quotidiens

Ce travail sera initié quand les seuils de maturité documentaire de la Phase 5 seront atteints.

---

*Suite : Guide TI — Configuration Microsoft 365*
