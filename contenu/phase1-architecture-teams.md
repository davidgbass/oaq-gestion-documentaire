# Phase 1 — Architecture Teams
## Gestion documentaire 2.0 — OAQ

*Printemps 2026*

---

## Contexte

Sans règles claires sur où travailler et comment s'organiser, chaque employé invente son propre système. Quand quelqu'un quitte l'OAQ, son travail disparaît avec lui. Ce guide définit la structure permanente des espaces de collaboration — les équipes Teams — de sorte que tout projet, toute décision et tout document important reste accessible à toute l'équipe, maintenant et dans dix ans.

Le risque principal que ce guide vise à éliminer est la dépendance aux personnes : si un employé quitte l'organisation, son travail, ses décisions et ses échanges ne doivent pas disparaître avec lui. Tout doit vivre dans le système.

---

## Architecture Teams de l'OAQ

L'OAQ utilise quatre types d'espaces Teams distincts, selon la nature des collaborateurs impliqués.

| Type d'équipe | Objectif | Membres |
|---|---|---|
| OAQ — Général | Communications générales, annonces, ressources partagées | Tous les employés de l'OAQ |
| OAQ — Projets internes | Centralise tous les projets collaboratifs internes | Tous les employés de l'OAQ |
| OAQ — [Nom du comité] | Espace dédié par comité, avec permissions adaptées | Membres du comité + personnel désigné |
| OAQ — [Nom du partenaire] | Collaboration avec des personnes externes à l'OAQ | Membres internes concernés + collaborateurs externes |

---

## Principe fondamental : une équipe = un ensemble de permissions

> **Pourquoi gérer les permissions au niveau de l'équipe ?**
> Modifier les permissions d'un canal individuel crée de la confusion et des risques d'accès non voulus. En gérant les permissions au niveau de l'équipe, on sait toujours exactement qui voit quoi — et on peut vérifier facilement en cas de doute.

Les permissions sont gérées au niveau de l'équipe (Team), jamais au niveau du canal. Si un groupe de personnes a besoin d'un accès différent, on crée une équipe distincte ou un canal privé justifié. On ne modifie jamais les permissions canal par canal.

---

## Canaux permanents — OAQ — Général

L'équipe OAQ — Général est l'espace de communication de toute l'équipe interne. Elle contient trois canaux permanents.

| Canal | Contenu |
|---|---|
| Général | Annonces officielles, communications à toute l'équipe |
| Ressources | Documents de référence permanents (procédures, guides) |
| Administratif | Calendriers, horaires, logistique interne |

Ces canaux sont permanents et ne peuvent pas être renommés ni supprimés.

---

## OAQ — Projets internes : la boîte à outils

Le canal Général de l'équipe OAQ — Projets internes est le point d'entrée pour tout nouveau projet collaboratif. Il contient :

- Les gabarits de documents (fiche synthèse, ordre du jour, procès-verbal, compte rendu)
- Les gabarits de structure de dossiers pour les nouveaux canaux de projet
- Le registre des projets (liste SharePoint — voir Phase 4)
- Les guides des phases 1 à 6

Quand un employé doit démarrer un nouveau projet, ce canal contient tout ce dont il a besoin — sans avoir à demander à quelqu'un. La création d'un canal de projet suit les règles définies dans la **Phase 4 — Gestion de projets**.

---

## Canaux à accès restreint

Deux canaux privés existent au sein de leurs équipes respectives pour des évaluations confidentielles.

| Équipe | Canal privé | Personnes exclues | Personnes incluses |
|---|---|---|---|
| OAQ — Comité de gouvernance et éthique | Évaluation-Président | La présidence | Membres du CGOU uniquement |
| OAQ — Comité des ressources humaines | Évaluation-DG | La direction générale | Membres du CRH uniquement |

> **Pourquoi des canaux privés pour ces évaluations ?**
> Les canaux privés créent une sous-bibliothèque SharePoint distincte, invisible aux personnes exclues. Ces deux canaux permettent aux comités compétents de conduire les évaluations annuelles sans que la personne évaluée ait accès aux échanges, aux documents de travail ou aux délibérations.

La création de canaux privés est réservée à l'administration TI, sur demande de la direction générale.

---

## Liste des équipes Teams de l'OAQ

Ces équipes sont créées et configurées par l'administration TI. Toutes les équipes sont de type **privé** : les membres y sont invités, personne ne peut y accéder sans invitation explicite.

| Nom de l'équipe | Membres initiaux |
|---|---|
| OAQ — Général | Tous les employés |
| OAQ — Projets internes | Tous les employés |
| OAQ — Conseil d'administration | Membres du C.A. + personnel désigné |
| OAQ — Comité d'audit | Membres CAUD + personnel désigné |
| OAQ — Comité d'éthique et déontologie | Membres CEED + personnel désigné |
| OAQ — Comité de gouvernance et éthique | Membres CGOU + personnel désigné |
| OAQ — Comité des ressources humaines | Membres CRH + personnel désigné |
| OAQ — Comité d'inspection professionnelle | Membres CIP + personnel désigné |
| OAQ — [Autres comités selon besoins] | Membres respectifs + personnel désigné |

> **Pourquoi la création des équipes est-elle réservée à l'administration TI ?**
> Chaque équipe Teams crée automatiquement un site SharePoint associé avec ses propres permissions. Une équipe créée par erreur ou en double produit une confusion durable et difficile à corriger. La création centralisée garantit une structure cohérente et auditable.

---

## Règles de gouvernance

| Règle | Détail |
|---|---|
| Création des équipes | Réservée à l'administration TI |
| Propriétaires par équipe | Minimum 2 propriétaires par équipe Teams en tout temps |
| Création des canaux | Les employés peuvent créer des canaux dans les équipes auxquelles ils appartiennent |
| Canaux privés | Créés par l'administration TI sur demande de la direction générale |
| Enregistrements de réunions | Supprimés automatiquement après 60 jours |
| Canaux archivés | Conservés indéfiniment, consultables en lecture seule |

> **Pourquoi exiger 2 propriétaires par équipe ?**
> Si la seule personne propriétaire d'une équipe quitte l'OAQ, l'équipe devient orpheline : personne ne peut modifier les membres, les canaux ou les permissions sans intervention de l'administration TI. Deux propriétaires garantissent la continuité en cas de départ ou d'absence prolongée.

> **Pourquoi supprimer les enregistrements après 60 jours ?**
> Les enregistrements vidéo occupent un volume de stockage important et contiennent souvent des discussions préliminaires qui n'ont pas vocation à être conservées. Les décisions prises en réunion sont documentées dans les comptes rendus et procès-verbaux — c'est ce qui constitue la mémoire institutionnelle officielle.

---

## Responsabilités

| Rôle | Responsabilité |
|---|---|
| Administration TI | Créer toutes les équipes Teams et les canaux privés |
| Direction générale | Approuver toute demande de nouvelle équipe ou de canal privé |
| Direction générale | Coordonner les ajouts et retraits de membres avec l'administration TI |
| Tout le personnel | Utiliser les espaces existants — ne pas créer d'équipes sans autorisation |
| Tout le personnel | Tenir toutes les conversations de projet dans les canaux appropriés, jamais par courriel |

---

*Suite : Phase 2 — Nomenclature des fichiers*
