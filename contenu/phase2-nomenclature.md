# Phase 2 — Nomenclature des fichiers
## Gestion documentaire 2.1 — OAQ

*Printemps 2026*

---

## Contexte

Aujourd'hui, chaque employé nomme ses fichiers à sa façon. Quand quelqu'un quitte l'organisation ou qu'on cherche un document de trois ans, on perd un temps précieux à fouiller. Une nomenclature commune garantit que n'importe qui peut trouver n'importe quel document en quelques secondes — maintenant et dans dix ans.

La standardisation assure aussi la pérennité de la mémoire organisationnelle : la continuité des activités et la transmission du savoir ne dépendent plus des personnes en poste. Elle prépare également le système à intégrer des outils de recherche documentaire avancés, notamment l'intelligence artificielle.

---

## Principe central : deux noms, deux publics

La nomenclature codée décrite ici s'applique à la **production interne et à la conservation** des documents. Elle est conçue pour Alice, l'équipe interne et les outils de recherche (humains ou IA).

Les documents diffusés aux membres ou au public sont **republiés sous un nom lisible distinct** (voir section *Noms publics* en fin de phase). Les membres et le public reçoivent un nom qui communique la valeur du document, pas son histoire administrative.

---

## Structure de nomenclature interne

```
[SujetComité]-[TypeDoc]-[Sujet]-[AAAA-MM-JJ]-[Version]
```

**Principe :** le nom d'un fichier doit permettre d'identifier son contenu, son contexte et son statut sans avoir à l'ouvrir. Il est court, sans accents, sans espaces, sans points (sauf avant l'extension) et sans barres de soulignement.

---

## 1. Sujet ou comité (SujetComité)

Chaque document est associé à un département ou à une instance de l'OAQ. Ces codes sont fixes.

### Départements

| Département | Code |
|---|---|
| Administration générale | ADM |
| Affaires juridiques | JUR |
| Affaires professionnelles | PRO |
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

Demander à la DG avant d'ajouter un code.

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

### Note sur la redondance visuelle COM-COMEX, AFPRO-COMEX, etc.

Quand un document est une communication externe officielle émise par un département, son nom contient à la fois le code du département (émetteur) et le code TypeDoc (catégorie). Les deux codes portent deux informations distinctes — la redondance est visuelle, pas sémantique. `COM-COMEX-...` indique « Communications émet une communication externe officielle » ; `AFPRO-COMEX-...` indique « Affaires professionnelles émet une communication externe officielle ». Cette distinction est utile pour filtrer par département émetteur sans perdre la catégorie du document.

---

## 3. Sujet

Le champ Sujet identifie le contenu spécifique du document.

**Règles de rédaction :** 2 à 3 mots-clés maximum, chiffres en chiffres, mots courts et significatifs, acronymes reconnus (OTC, OPSO, LSSSS), tiret comme séparateur. Pas d'accents, pas d'espaces, pas de barres de soulignement, pas de points à l'intérieur du nom, pas de mots vides (le, la, les, du, des), pas de phrases complètes.

**Le sujet est toujours présent, même pour les PV et ODJ.** Pour un PV de réunion régulière du C.A. du 14 septembre 2025, le nom est `CAUD-PV-2025-09-14-reguliere-VT.docx` — le sujet `reguliere` (ou `extraordinaire`, `huis-clos`, etc.) distingue les types de réunions et reste lisible pour l'humain comme pour l'IA.

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
> Sans suffixe, on ne sait pas si on lit la version officielle ou un brouillon.

| Version | Code | Description |
|---|---|---|
| Version de travail | VT | Document en cours de rédaction ou de révision |
| Version finale adoptée | VFA | Adopté par le C.A. ou un comité compétent |
| Version finale publiée | VFP | Diffusé officiellement à l'interne ou à l'externe |

**Important :** pas de numéro après le code de version (VT2, VT3). Le versionnage natif de SharePoint conserve l'historique complet.

---

## Exemples concrets

### Exemple 1 — Procès-verbal du comité d'audit

| Version à éviter | Version conforme |
|---|---|
| Comite audit – proces verbal – 14 sept 2025 brouillon 2.docx | CAUD-PV-2025-09-14-reguliere-VT.docx |
| Comite d'audit – PV – 25 mars 2025 v1.docx | CAUD-PV-2025-03-25-reguliere-VFA.docx |

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

La liste officielle des codes vit dans une page Markdown de la bibliothèque centrale, mise à jour quand un code est ajouté. Demander à la DG avant d'ajouter un code.

---

## Noms publics distincts des noms codés

Tout document avec **Diffusion = Membres** ou **Diffusion = Public** existe sous deux noms.

| Endroit | Format du nom | Exemple |
|---|---|---|
| Bibliothèque centrale (interne) | Nomenclature codée complète | `AFPRO-LDIR-Gestion-acouphenes-2025-07-01-VFP.pdf` |
| Publication sur Octave ou site public | Nom propre lisible | `Lignes directrices — Gestion des acouphènes (juillet 2025).pdf` |

### Pourquoi

Les codes existent pour Alice, l'équipe interne et la recherche par l'IA. Les membres et le public reçoivent un nom qui communique la valeur du document, pas son histoire administrative.

### Mise en œuvre

Le pipeline OAQ-v2 peut générer automatiquement le nom propre à partir des métadonnées (type de document + sujet + date), au moment de la publication. Alice valide.

### Documents concernés

- Tous les COMEX (infolettres, communiqués, avis aux membres)
- Lignes directrices (LDIR) publiées
- Guides publiés
- Rapports annuels (RAP) publics
- Politiques (POL) si publiées au public

Les POL, PRO, FS, PV, COMIN qui restent à l'interne conservent uniquement leur nom codé.

---

*Suite : Phase 3 — Soumission au C.A.*
