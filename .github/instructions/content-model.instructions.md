---
applyTo: "**/*.{md,mdx,yml,yaml,json,ts,tsx,astro,vue,svelte,html}"
---

# Content Model Instructions for the Digital Forest Learning Trail

## Purpose

These instructions define how station content, page content, metadata, and content-related code should be structured for the digital forest learning trail.

The public website is German only. Use English only for code, comments, schemas, internal field names, and developer documentation.

The website content must explain selected trees and habitat structures along a physical forest path. It must help visitors understand why the forest is intentionally managed close to nature and why apparent "untidiness" can be ecologically valuable.

## Content Source of Truth

Markdown files are the source of truth for station content.

Do not hard-code station text inside components.

Do not hard-code station lists inside page templates if they can be derived from content collections or frontmatter.

Adding a station should require adding a Markdown file, image metadata, and frontmatter, not editing multiple components.

## Recommended Content Directories

Use a structure similar to:

```text
content/
  baeume/
    eiche.md
    buche.md
    [baumart].md
  objekte/
    asthaufen.md
    steinhaufen.md
    totholz.md
  seiten/
    infotafel.md
    impressum.md
```

If the selected framework uses a different content directory convention, preserve the same logical separation:

- Trees under `baeume`.
- Objects under `objekte`.
- General pages under `seiten` or equivalent.

## Station Types

Supported station types:

- `baum` for tree stations.
- `objekt` for habitat structures or ecological measures.

Examples of object stations:

- `asthaufen`.
- `steinhaufen`.
- `totholz`.
- `wildhecke`.
- `benjeshecke`.
- `nistkasten`.
- `insektenhotel`.
- `waldlichtung`.

Do not assume all object types will be used. The project starts with 7 selected trees and 2 to 3 selected objects, but the model must support more stations later.

## Required Frontmatter Fields

Every station Markdown file should include frontmatter similar to this:

```yaml
title: "[German public title]"
slug: "[stable-german-url-slug]"
type: "baum" # baum | objekt
status: "planned" # planned | active | archived
draft: true
summary: "[Short German summary]"
keyMessage: "[Most important German takeaway in one or two sentences]"
order: 1
locationLabel: "[Short German location description along the trail]"
qrLabel: "[Short label printed on the QR-code post]"
image:
  src: "/images/[filename].jpg"
  alt: "[German alt text]"
  source: "[Image source or own photo]"
  author: "[Author if required]"
  license: "[License if external]"
  attribution: "[Attribution text if required]"
externalLinks:
  - label: "[German link label]"
    url: "https://example.org"
    sourceType: "official" # official | forestry | science | education | other
```

For unknown values, use explicit placeholders such as:

```yaml
title: "[Baumname-Platzhalter]"
latinName: "[Lateinischer Name Platzhalter]"
```

Do not silently omit important fields just because final content is unknown.

## Additional Tree Frontmatter Fields

Tree stations should include:

```yaml
germanName: "[German tree name]"
latinName: "[Latin tree name]"
treeStatus: "existing" # existing | newly-planted | planned | unknown
approximateAge: "[German text or placeholder]"
ecologicalFunction: "[Short German phrase]"
climateRelevance: "[Short German phrase, cautious if uncertain]"
foresterNote: "[German text or placeholder]"
```

Do not invent Latin names. Use placeholders until verified.

Do not claim a species is climate-resilient unless the claim is sourced or provided by the project owner/forester.

## Additional Object Frontmatter Fields

Object stations should include:

```yaml
objectType: "[asthaufen | steinhaufen | totholz | wildhecke | benjeshecke | nistkasten | insektenhotel | waldlichtung | other]"
ecologicalFunction: "[Short German phrase]"
doNotDisturb: "[Short German visitor instruction]"
```

Object pages must clearly explain why the object is not waste, disorder, or neglect.

## Tree Page Body Structure

Every tree page should follow this order:

```md
# [German tree name]

## Kurz erklärt

[2–4 short sentences. State the main takeaway first.]

## Steckbrief

[Use a rendered fact box if the framework supports it.]

## Warum dieser Baum hier steht

[Explain why this tree is part of the future forest.]

## Bedeutung für den Wald der Zukunft

[Explain generation-tree logic, climate adaptation, mixed forest, long-term thinking.]

## Nutzen für Tiere und Biodiversität

[Explain ecological value without exaggeration.]

## Boden, Wasser und Mikroklima

[Only include relevant, accurate points.]

## Holz und Nutzung

[Optional. Explain calmly. Do not frame the forest as profit-oriented.]

## Pflege und Rolle des Försters

[Explain care, protection, natural regeneration, or planting if known.]

## Begriffe einfach erklärt

[Explain technical terms used on the page.]

## Weiterführende Informationen

[Links to reliable external sources.]
```

Keep sections short. Prefer several short sections over one long block of text.

## Object Page Body Structure

Every object page should follow this order:

```md
# [German object name]

## Kurz erklärt

[2–4 short sentences. State the main takeaway first.]

## Warum gibt es das hier?

[Explain why the object exists or remains in the forest.]

## Warum ist das keine Unordnung?

[Directly address the common visitor misunderstanding.]

## Nutzen für Tiere, Pflanzen, Pilze oder Insekten

[Explain habitat value.]

## Bitte nicht stören

[Explain what visitors should not do and why.]

## Begriffe einfach erklärt

[Explain technical terms used on the page.]

## Weiterführende Informationen

[Links to reliable external sources.]
```

The section "Warum ist das keine Unordnung?" is important. Use it on pages about deadwood, branch piles, stone piles, hedges, and similar structures.

## General Page Structure

Homepage should include:

- Project title with placeholder if final name is unknown.
- Short explanation of the digital forest trail.
- Clear link to station overview.
- Clear explanation that the forest is intentionally not fully tidied up.
- Short visitor rules.
- Mention that the trail works without a guide.

Trail overview should include:

- Simple explanation of the 400-meter path.
- Two entrances.
- Simple map or schematic station list.
- Tree stations.
- Object stations.
- Reminder to stay on the path.

Entrance board content page should include:

- The short text used on the physical board.
- Link to deeper website content.
- Visitor rules.
- Short project explanation.

Imprint/privacy page should include:

- Responsibility placeholder.
- Privacy text placeholder.
- Analytics status placeholder.
- Image attribution information if needed.

## Writing Rules for Public German Content

Use German public content.

Write in simple High German.

Use:

- Short sentences.
- Short paragraphs.
- Concrete examples.
- Active voice.
- Friendly explanations.
- Clear terms such as "Asthaufen", "Steinhaufen", "Totholz", "Mischwald", "Naturverjüngung".

Avoid:

- Long academic text.
- Bureaucratic wording.
- Marketing language.
- Overly emotional nature romanticism.
- Unsupported claims.
- Complex legal statements.
- Overpromising climate resilience.

When explaining technical terms, use a short pattern:

```md
**Naturverjüngung:** Junge Bäume wachsen von selbst aus Samen, die bereits im Wald vorhanden sind.
```

## Key Message Patterns

Use patterns like these when useful:

```md
Dieser Asthaufen ist kein Abfall. Er bietet Verstecke, Nahrung und Lebensraum für viele kleine Tiere, Insekten und Pilze.
```

```md
Dieser Baum ist ein Generationenbaum. Er wurde ausgewählt, weil er auch für den Wald der Zukunft wichtig sein kann.
```

```md
Der Wald wird bewusst nicht überall aufgeräumt. Einige Strukturen bleiben liegen, weil sie dem Boden, der Biodiversität und der natürlichen Entwicklung helfen.
```

Adapt wording to the specific station. Do not copy the same paragraph everywhere.

## Visitor Rule Content

Whenever visitor rules are shown, explain the reason.

Good pattern:

```md
Bitte bleiben Sie auf dem Pfad. So schützen Sie junge Bäume, den Waldboden und ruhige Lebensräume für Tiere.
```

Avoid rule-only text like:

```md
Betreten verboten.
```

unless legally required and explicitly requested.

## External Links

External links should be used for deeper information, not as replacements for concise local explanations.

Prefer reliable sources:

- Official forestry agencies.
- Swiss forestry associations.
- Educational forestry resources.
- Universities or research institutions.
- Nature conservation organizations.

Use descriptive German labels. Do not use "click here".

Example:

```yaml
externalLinks:
  - label: "Weitere Informationen zu Totholz im Wald"
    url: "https://..."
    sourceType: "forestry"
```

## Image Metadata Rules

Every image used in station content must have:

- `src`.
- German `alt` text.
- Source information.
- License information if external.

Alt text should describe the learning-relevant content, not generic decoration.

Good:

```yaml
alt: "Rinde einer jungen Eiche mit tiefen Furchen"
```

Bad:

```yaml
alt: "Bild"
```

Prefer own photos once available. Until then, use placeholders rather than questionable external images.

## Draft and Placeholder Rules

Use `draft: true` for incomplete station pages.

Use placeholders clearly:

- `[Baumname-Platzhalter]`
- `[Lateinischer Name Platzhalter]`
- `[Bildquelle ergänzen]`
- `[Försterhinweis ergänzen]`
- `[Externer Fachlink ergänzen]`

Never make placeholders look like final content.

Do not publish pages with unresolved critical placeholders unless explicitly requested.

## Data Validation Preferences

If the framework supports schemas, validate station frontmatter.

Validate at least:

- `title` is required.
- `slug` is required.
- `type` is either `baum` or `objekt`.
- `summary` is required.
- `keyMessage` is required.
- `order` is numeric.
- `image.alt` is required when image exists.
- `externalLinks.url` is a valid URL when present.

For tree pages, validate `germanName` and `latinName`, but allow explicit placeholders during draft state.

## Routing and Collections

Generate station pages from content files.

Generate overview lists from frontmatter.

Sort stations by `order` if present.

Group stations by `type`:

- Bäume.
- Objekte.

Do not require GPS coordinates.

Do not display "Station 1 of 10" unless explicitly requested. The project owner does not want that flow.

## SEO Position

Do not optimize aggressively for SEO.

Still implement basic technical hygiene:

- Unique page titles.
- Basic meta descriptions from summaries.
- Semantic headings.
- Meaningful URLs.
- Correct language attribute: `de`.

Do not add structured data, keyword-heavy text, or SEO plugins unless explicitly requested.

## Completion Checklist for Content Changes

Before completing content-related work, verify:

- Public text is German.
- The most important message is at the top.
- The page explains why the station matters.
- Technical terms are explained simply.
- Visitor impact or rule is explained where relevant.
- Claims are cautious if not sourced.
- Images have usable German alt text.
- External links are descriptive and credible.
- Placeholder values remain visibly marked.
- No layout logic was placed inside Markdown.
