# Phase 2 — Nomenclature des fichiers
## Gestion documentaire 2.0 — OAQ

*Printemps 2026*

---

## Contexte

Aujourd'hui, chaque employé nomme ses fichiers à sa façon. Quand quelqu'un quitte l'organisation ou qu'on cherche un document de trois ans, on perd un temps précieux à fouiller. Une nomenclature commune garantit que n'importe qui peut trouver n'importe quel document en quelques secondes — maintenant et dans dix ans.

La standardisation assure aussi la pérennité de la mémoire organisationnelle : la continuité des activités et la transmission du savoir ne dépendent plus des personnes en poste. Elle prépare également le système à intégrer des outils de recherche documentaire avancés, notamment l'intelligence artificielle.

---

## Structure de nomenclature

```
[SujetComité]-[TypeDoc]-[Sujet]-[AAAA-MM-JJ]-[Version]
```

**Principe fondamental :** le nom d'un fichier doit permettre d'identifier son contenu, son contexte et son statut sans avoir à l'ouvrir. Il doit être court, sans accents, sans espaces, sans points (sauf avant l'extension) et sans barres de soulignement.

---

## 1. Sujet ou comité (SujetComité)

Chaque document est associé à un département ou à une instance de l'OAQ. Ces codes sont fixes et ne peuvent être modifiés sans l'approbation de la direction générale. Ils servent également de métadonnées dans SharePoint.

### Départements

| Département | Code |
|---|---|
| Administration générale | ADM |
| Affaires juridiques | JUR |
| Affaires professionnelles | AFPRO |
| Communications | COM |
| Finances | FIN |
| Ressources humaines | RH |

### Instances

| Instance | Code |
|---|---|
| Conseil d'administration | CA |
| Comité d'audit | CAUD |
| Comité d'enquête à l'éthique et à la déontologie | CEED |
| Comité d'innovation et développement professionnel | CIDP |
| Comité d'équivalence des diplômes et de formation | CEDF |
| Comité de gouvernance et éthique | CGOU |
| Comité de la formation | CFOR |
| Comité de la formation continue | CFC |
| Comité de révision | CREV |
| Comité des ressources humaines | CRH |
| Conseil de discipline | CDIS |
| Comité d'inspection professionnelle | CIP |
| Syndic | SYN |

> **Pourquoi des codes fixes ?**
> Un code qui change rend introuvables tous les documents créés avec l'ancien code. La stabilité des codes est ce qui permet à la nomenclature de fonctionner dans dix ans comme aujourd'hui.

Toute demande d'ajout ou de modification d'un code doit être adressée à la direction générale. Aucun employé ne peut créer un nouveau code de façon autonome.

---

## 2. Type de document (TypeDoc)

> **Pourquoi codifier le type ?**
> Savoir qu'un fichier est un procès-verbal (PV) ou une fiche synthèse (FS) sans l'ouvrir permet de filtrer les recherches efficacement — surtout quand un outil d'IA interroge des centaines de documents.

Les abréviations de types de documents s'appliquent aux documents récurrents et officiels. Pour tous les autres types, on utilise un ou deux mots-clés descriptifs directement dans le champ Sujet.

| Type de document | Code |
|---|---|
| Communication externe officielle | COMEX |
| Communication interne officielle | COMIN |
| Fiche synthèse | FS |
| Ligne directrice | LDIR |
| Ordre du jour | ODJ |
| Politique | POL |
| Procédure | PRO |
| Procès-verbal | PV |
| Rapport | RAP |
| Résolution | RES |

---

## 3. Sujet

Le champ Sujet identifie le contenu spécifique du document. Il constitue également une métadonnée de recherche dans SharePoint.

**Règles de rédaction :**

- Utiliser 2 ou 3 mots-clés maximum
- Écrire les chiffres en chiffres
- Choisir des mots courts et significatifs
- Utiliser des acronymes reconnus (ex. : OTC, OPSO, LSSSS)
- Séparer les mots par un tiret ( - )

**À éviter absolument :**

- Les mots vides : le, la, les, du, des, un, une…
- Les lettres accentuées (é, à, û, î, ô)
- Les espaces
- Les barres de soulignement ( _ )
- Les points à l'intérieur du nom
- Les phrases complètes ou les titres longs

> **Pourquoi le sujet doit-il être stable dans le temps ?**
> Le dossier des prothèses auditives en vente libre doit toujours s'écrire de la même façon (ex. : OTC-protheses). Si chaque employé choisit ses propres mots, une recherche ne retrouvera qu'une partie des documents pertinents. La direction générale valide et stabilise la liste des sujets récurrents — voir Phase 5.

---

## 4. Date

> **Pourquoi le format AAAA-MM-JJ ?**
> C'est la norme internationale ISO 8601. Elle garantit que les fichiers se trient automatiquement par ordre chronologique dans tous les systèmes — Windows, SharePoint, Teams — sans aucune intervention manuelle.

| Format | Description | Exemple |
|---|---|---|
| AAAA-MM-JJ | Année-mois-jour (date complète) | 2025-09-14 |
| AAAA-MM | Année-mois (quand le jour est non pertinent) | 2025-09 |
| AAAA | Année seulement | 2025 |
| AAAA-AAAA | Période sur deux années | 2025-2026 |

---

## 5. Version

> **Pourquoi codifier les versions ?**
> Un document s'appelle « rapport-OTC.docx » que ce soit un brouillon ou la version finale adoptée par le C.A. Sans suffixe de version, on ne sait pas si on lit la version officielle ou un brouillon de travail.

Le suffixe de version indique l'état du document dans son cycle de vie. Les étapes ne sont pas toutes obligatoires : un document peut passer directement de VT à VFA selon sa nature.

| Version | Code | Description |
|---|---|---|
| Version de travail | VT | Document en cours de rédaction ou de révision |
| Version finale adoptée | VFA | Adopté par le C.A. ou un comité compétent |
| Version finale publiée | VFP | Diffusé officiellement à l'interne ou à l'externe |

**Important :** il n'est pas nécessaire d'ajouter un numéro après le code de version (ex. : VT2, VT3). Le versionnage natif de SharePoint conserve l'historique complet des versions antérieures sans modifier le nom du fichier.

---

## Exemples concrets

### Exemple 1 — Procès-verbal du comité d'audit

| Version à éviter | Version conforme |
|---|---|
| Comite audit – proces verbal – 14 sept 2025 brouillon 2.docx | CAUD-PV-2025-09-14-VT.docx |
| Comite d'audit – PV – 25 mars 2025 v1.docx | CAUD-PV-2025-03-25-VFA.docx |

Problèmes dans la version à éviter : nom non standardisé, accents et espaces incompatibles, date ambiguë, mention de version contradictoire.

### Exemple 2 — Rapport du comité RH

| Version à éviter | Version conforme |
|---|---|
| Rapport comite RH – augmentation cotisation annuelle – version deposee CA sept 2025.docx | CRH-RAP-cotisation-annuelle-2025-09-10-VFA.docx |

### Exemple 3 — Communication au syndic

| Version à éviter | Version conforme |
|---|---|
| Lettre reponse au syndic demande enquete octobre 2025.docx | SYN-COMIN-enquete-reponse-2025-10-22-VFA.docx |

---

## Gouvernance de la nomenclature

> **Pourquoi des règles de gouvernance ?**
> Une nomenclature n'est utile que si tout le monde l'applique de la même façon. Une seule personne qui invente ses propres codes suffit à briser la cohérence du système.

### Responsabilités

| Rôle | Responsabilité |
|---|---|
| Direction générale | Valider et maintenir la liste des codes (comités, départements, sujets récurrents) |
| Adjointe de direction | Superviser l'application de la nomenclature et former les nouveaux membres du personnel |
| Tout le personnel | Appliquer la nomenclature pour tout nouveau document créé |
| Tout le personnel | Consulter avant de créer un nouveau code ou une nouvelle abréviation |

### Règles immuables

- Aucun employé ne peut créer de nouveaux codes de façon autonome
- Les codes existants ne peuvent pas être renommés sans validation de la direction générale
- La liste officielle des codes vit dans un fichier central : `ADM-INV-codes-nomenclature-[AAAA-MM-JJ]-VFP.xlsx`
- Ce fichier est mis à jour au moins une fois par année

### Évolution du système

Toute évolution de la nomenclature doit :
1. Être approuvée par la direction générale
2. Faire l'objet d'une communication à toute l'équipe
3. Être documentée dans le fichier central des codes
4. Ne pas modifier rétroactivement les fichiers existants (sauf exception justifiée)

---

*Suite : Phase 3 — Soumission au C.A. et traçabilité documentaire*
