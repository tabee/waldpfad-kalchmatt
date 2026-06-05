# Project Brief: Digital Forest Learning Trail "[Forest Name Placeholder]"

## 1. Project Summary

This project is a simple, mobile-first website for a digital forest learning trail in a small privately owned forest near 3436 Zollbrück, Canton Bern, Switzerland. The forest is located along the Emme, between the river and an existing forest path.

The physical trail is approximately 400 meters long and has two entrances. At both entrances, visitors will find an information board with a short overview and a QR code leading to the website. Along the trail, selected trees and forest habitat structures will be marked with small posts carrying QR codes. Each QR code opens the corresponding detail page on the website.

The website explains why specific trees and forest structures are present, what ecological function they serve, and how the forest is being developed sustainably over generations.

The site is not a commercial forestry website. It is a concise, educational, field-oriented digital nature trail.

## 2. Core Problem the Project Explains

Many visitors expect a well-managed forest to look clean, tidy, and "ordered". They may see deadwood, branch piles, stone piles, young trees, natural regeneration, and irregular forest structures as signs of neglect or disorder.

This project must explain the opposite clearly and calmly:

- A healthy forest is not a park.
- A natural forest does not need to look fully cleaned up.
- Deadwood, branch piles, stone piles, young growth, mixed tree species, and uneven forest structures can be valuable ecological features.
- Some apparent "mess" is intentional and beneficial for biodiversity, soil, insects, fungi, birds, small mammals, reptiles, and long-term forest resilience.

The website must help visitors understand why the forest is managed this way and why staying on the path matters.

## 3. Project Goals

The website must:

- Explain the purpose of the digital forest learning trail.
- Present selected trees and habitat structures as learning stations.
- Help visitors identify the selected tree species.
- Explain why these species were selected for the future forest.
- Explain how climate change affects tree selection and forest planning.
- Explain why mixed forests are more resilient than monocultures.
- Explain why the forest is intentionally not fully "cleaned up".
- Explain why deadwood, branch piles, stone piles, hedges, nesting structures, and forest edges can be ecologically valuable.
- Communicate simple visitor rules in a friendly but clear way.
- Work well for self-guided visitors without any human guide.
- Be useful for walkers, interested families, nature-oriented visitors, and school classes visiting independently.
- Be understandable for teenagers from about age 14 upward.
- Stay lightweight and usable under weak mobile network conditions.

## 4. Non-Goals

The website must not become:

- A complex web application.
- A full forestry management system.
- A blog or diary documenting every forest action.
- A school platform with worksheets or teacher downloads.
- A commercial forestry or timber sales website.
- A tourism portal.
- A heavily animated marketing website.
- A website optimized primarily for SEO.
- A website with login, comments, forms, user accounts, or interactive tracking-heavy features.

## 5. Target Audience

Primary audiences:

- Walkers.
- Nature-interested families.
- Teenagers from about age 14 upward.
- Independent school classes.
- Visitors who wonder why the forest does not look "tidied up".
- People interested in local nature, biodiversity, trees, and sustainable forest development.

The tone must assume curiosity but limited forestry knowledge.

## 6. Educational Approach

The content model should follow a Wikipedia-like information hierarchy:

1. Most important facts first.
2. Short summary near the top.
3. Clear structure with headings.
4. Simple explanations before detailed information.
5. Technical terms explained in plain language.
6. Additional information lower down the page.
7. External links for deeper reading.

The writing style must be:

- German on the public website.
- Simple, natural, understandable High German.
- Factual but not dry.
- Educational but not patronizing.
- Slightly narrative where helpful.
- Concise; no long essays.
- Clear enough for teenagers from about age 14 upward.

The development instructions are written in English because the coding assistant should follow English instructions. The public website content itself is German only.

## 7. Physical Trail Concept

The trail is approximately 400 meters long.

It has:

- Two entrances.
- One existing forest path.
- Entrance information boards.
- QR-code posts at selected learning stations.
- No GPS requirement.
- No location tracking for navigation.
- No guided-tour dependency.

Visitors should be able to understand the trail by using:

- The entrance information board.
- A simple map or schematic overview.
- Station names.
- QR-code posts.
- Clear URLs.
- The website overview page.

The website must avoid features that require precise GPS or strong mobile reception.

## 8. Learning Stations

The initial trail contains selected learning stations:

- 7 selected trees or tree species.
- 2 to 3 additional forest objects or ecological measures.

Tree species are not finalized yet. Use placeholders until final species are selected.

Additional station types may include:

- Branch pile.
- Stone pile.
- Deadwood.
- Wild hedge.
- Benjes hedge.
- Nesting box.
- Insect hotel.
- Forest clearing or light gap.

Do not document every tree, every branch pile, or every small measure. Only selected examples should be documented as learning stations.

The system must allow future stations to be added easily by creating new Markdown files.

## 9. Generation Trees and Climate Change

A central concept is the idea of "generation trees".

In this project, generation trees are trees selected, planted, protected, or promoted for future generations. They represent long-term forest thinking under climate change.

The website must explain:

- Why tree selection matters under climate change.
- Why some species may be better suited to future heat, drought, storms, pests, or changing site conditions.
- Why a mixed forest is more resilient than a monoculture.
- Why the forest is planned over decades, not seasons.
- Why natural regeneration and targeted planting can complement each other.
- Why some young trees need protection and patience.

The site must avoid making unsupported scientific claims about specific species. If a claim about climate resilience, ecology, or forestry is uncertain, phrase it cautiously and link to reliable external sources.

## 10. Sustainable Forest Development Strategy

The forest should be managed for beauty, ecological value, stability, and long-term resilience rather than timber profit.

The strategy includes:

- Promoting natural regeneration.
- Promoting climate-resilient tree species.
- Increasing biodiversity.
- Developing a mixed forest instead of a monoculture.
- Keeping or creating valuable habitat structures.
- Explaining why some wood and branches remain in the forest.
- Supporting animals, plants, fungi, insects, soil life, and ecological processes.
- Reinvesting any income from harvested and sold wood fully back into the forest.

The site may explain the role of the forester. If the forester’s name is later provided and approved, it may be shown. Until then, use placeholders such as "[Forester Name Placeholder]".

The forester’s role may include:

- Advising on suitable species.
- Supporting the forest development strategy.
- Planning planting and care measures.
- Evaluating safety and forest health.
- Supporting long-term mixed-forest development.

## 11. QR Code and URL Concept

Each QR-code station should open a specific page.

Preferred URL pattern:

- `/baeume/eiche/`
- `/baeume/buche/`
- `/baeume/[baumart]/`
- `/objekte/asthaufen/`
- `/objekte/steinhaufen/`
- `/objekte/totholz/`

The entrance QR codes should open the homepage or trail overview page.

URL requirements:

- Use stable, human-readable URLs.
- Do not use temporary IDs in public URLs.
- Do not change existing station URLs after QR codes are printed.
- If a URL must change, implement redirects.
- Keep German slugs for public pages because the website content is German.

Each physical QR-code post should also show a short visible label such as the tree name or object name, so visitors can understand the station without scanning.

## 12. Entrance Information Boards

Both entrances should have an information board.

The board is the abstract. The website contains the deeper explanation.

The information board should include:

- Project name: "[Forest Name Placeholder]" or a generic phrase such as "Waldpfad".
- Short explanation of the project.
- Simple trail map.
- QR code to the website overview.
- Short explanation that the forest is intentionally developed close to nature.
- Visitor rules.
- Request to stay on the path.
- Optional note that the area is private forest.
- Optional imprint/responsibility information.

The board text should be understandable for teenagers from about age 14 upward.

## 13. Visitor Rules

The website must explain visitor rules clearly and politely.

Core rules:

- Stay on the path.
- Do not step on young trees or natural regeneration.
- Do not dismantle branch piles, stone piles, deadwood, or habitat structures.
- Do not remove branches, stones, plants, fungi, or animals.
- Keep dogs under control.
- Take waste home.
- Do not damage QR-code posts or signs.
- Treat the forest as a living habitat, not as a playground or disposal area.

Always explain why the rule exists. Example: staying on the path protects young trees, soil life, and quiet habitat zones.

## 14. Website Structure

Recommended pages:

- Homepage.
- Trail overview.
- Map or station overview.
- Tree detail pages.
- Object detail pages.
- Entrance board content page.
- Imprint and privacy page.

No separate contact page is required.

## 15. Tree Page Content Pattern

Each tree page should use a consistent structure:

1. German title with the tree name.
2. Short summary.
3. Key message in 2 to 4 sentences.
4. Image of the tree, bark, leaf, fruit, seed, or similar identifying feature.
5. Fact box:
   - German name.
   - Latin name.
   - Station type.
   - Location description on the trail.
   - Existing tree or newly planted tree.
   - Approximate age if known.
   - Ecological function.
6. Why this tree is here.
7. Why this tree matters for the future forest.
8. Benefits for animals and biodiversity.
9. Benefits for climate adaptation, soil, water, shade, or microclimate where relevant.
10. Wood use or cultural meaning where relevant.
11. Care and role of the forester.
12. Plain-language glossary for technical terms.
13. External links for further reading.

## 16. Object Page Content Pattern

Each object page should use a consistent structure:

1. German title with the object name.
2. Short summary.
3. Key message in 2 to 4 sentences.
4. Image if useful.
5. Fact box:
   - Object type.
   - Location description on the trail.
   - Ecological function.
   - What visitors should not disturb.
6. Why this object is here.
7. Why it is not "mess" or neglect.
8. Benefits for animals, plants, fungi, insects, soil, or microhabitats.
9. What visitors should observe without touching.
10. External links for further reading.

## 17. Technical Direction

The site should be a very simple static website.

Preferred principles:

- Static generation.
- Markdown-driven content.
- Mobile-first design.
- Fast loading on weak mobile networks.
- Works on desktop but is optimized for smartphones.
- Minimal JavaScript.
- No unnecessary framework complexity.
- No login.
- No comments.
- No forms.
- No CMS unless explicitly approved later.
- Clean separation between content, layout, and code.
- Simple navigation.
- Accessible markup.
- No SEO-heavy optimization beyond basic semantic HTML and metadata.

The site will initially be hosted on GitHub or GitHub Pages. A custom domain may be added later.

## 18. Content Management

All station content must be maintained through Markdown files.

Each station should have its own Markdown file with structured frontmatter.

The content author should not need to edit layout components to add or update station text.

Adding a station should usually mean:

1. Add a new Markdown file.
2. Add or reference an image.
3. Fill in frontmatter.
4. Write the German content.
5. The site automatically includes the station in the relevant overview if `draft: false`.

## 19. Images and Media

Images should be used sparingly and only when they help visitors learn.

Useful images:

- Full tree.
- Bark.
- Leaf.
- Fruit or seed.
- Branch pile.
- Stone pile.
- Deadwood.
- Simple icon or diagram.

Use legally safe images only.

Prefer own photos from the forest once available. If external images are used, document license, source, author, and required attribution.

Do not use decorative stock imagery that does not help identify or understand a station.

## 20. Analytics and Privacy

The website may use privacy-friendly Google Analytics or an alternative lightweight analytics solution.

Requirements:

- Do not add analytics until the implementation has been explicitly approved.
- Prefer cookie-free analytics where technically possible.
- Do not enable advertising features.
- Do not enable remarketing.
- Do not add tracking popups unless a legal/privacy decision requires them.
- Mention analytics transparently in the imprint/privacy page.
- Keep the privacy text simple and accurate.

If there is uncertainty about analytics, implement the site without analytics first.

## 21. Legal and Local Coordination Notes

The forest path already exists, but the learning trail, QR-code posts, and entrance boards are new.

Open coordination points:

- Clarify details with the forester.
- Clarify with the municipality whether QR-code posts and information boards are permitted.
- Clarify any Canton Bern permission requirements for installations in or near the forest.
- Confirm final wording for private forest / responsibility / imprint information.

The website should not make legal claims beyond what has been explicitly confirmed.

## 22. Success Criteria

The project is successful when visitors understand:

- Which selected tree species they saw.
- Why those species were chosen.
- What generation trees are.
- Why mixed forests matter.
- Why climate change influences tree selection.
- Why deadwood, branch piles, stone piles, and similar structures are valuable.
- Why the forest is not fully tidied up.
- Why they should stay on the path.
- Why the forest is being developed for future generations rather than short-term timber profit.

The desired visitor takeaway:

"This forest is not messy. It is intentionally managed as a living, resilient, biodiverse forest for future generations."

## 23. Placeholders

Use placeholders until final decisions are available:

- `[Forest Name Placeholder]`
- `[Forester Name Placeholder]`
- `[Owner / Responsibility Placeholder]`
- `[Municipality Approval Placeholder]`
- `[Tree Species Placeholder]`
- `[Object Station Placeholder]`
- `[Domain Placeholder]`
- `[Analytics Decision Placeholder]`
