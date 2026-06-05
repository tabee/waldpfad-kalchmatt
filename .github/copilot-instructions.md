# GitHub Copilot Instructions

## Project Identity

This repository contains a simple static website for a digital forest learning trail in a small privately owned forest near 3436 Zollbrück, Canton Bern, Switzerland.

The public website is German only. These developer instructions are English so GitHub Copilot and coding agents can follow them consistently.

The site explains selected trees and forest habitat structures along a physical forest path. Visitors scan QR codes on small posts and open the corresponding station page. The site must help visitors understand why the forest is intentionally managed close to nature and why features such as deadwood, branch piles, stone piles, young trees, natural regeneration, and mixed tree species are not signs of neglect.

## Product Principle

Build a lightweight, mobile-first, Markdown-driven static website.

Optimize for visitors standing in a forest with a smartphone and possibly weak mobile reception.

The site must be:

- Fast.
- Simple.
- Robust.
- Accessible.
- Easy to maintain through Markdown.
- Useful without GPS.
- Useful without strong mobile connectivity.
- Clear enough for teenagers from about age 14 upward.

## Core User Journey

1. Visitor arrives at one of two entrance boards.
2. Visitor scans the entrance QR code.
3. Website opens the homepage or trail overview.
4. Visitor walks the approximate 400-meter forest path.
5. Visitor scans QR codes at selected stations.
6. Each QR code opens the corresponding tree or object page.
7. Visitor quickly learns what they are looking at, why it matters, and what they should not disturb.

## Content Language and Tone

Public-facing content must be written in German.

Use natural, simple, understandable High German.

Tone:

- Factual.
- Educational.
- Calm.
- Slightly narrative where useful.
- Not childish.
- Not bureaucratic.
- Not marketing-heavy.
- Not too academic.

The target reading level is approximately teenagers from age 14 upward plus adults without forestry knowledge.

Use short paragraphs, clear headings, and direct explanations.

## Main Educational Message

Many visitors think a forest is only well managed when it looks tidy. This website must explain why a healthy, biodiverse forest can look less "clean" than a park.

Always reinforce this message where relevant:

- The forest is not neglected.
- The forest is intentionally developed close to nature.
- Deadwood, branch piles, stone piles, young trees, and natural regeneration can be valuable habitat structures.
- A mixed forest is more resilient than a monoculture.
- Future-oriented forest development takes decades.
- Visitors help by staying on the path and not disturbing habitat structures.

## Technical Scope

Keep the implementation intentionally simple.

Allowed:

- Static site generation.
- Markdown or MDX content.
- Semantic HTML.
- CSS modules, plain CSS, or a small utility-first CSS setup if already selected.
- Minimal JavaScript where clearly justified.
- Simple data collections for trees and object stations.

Avoid unless explicitly requested:

- Heavy frontend frameworks.
- Complex client-side state.
- Server-side rendering requirements.
- Databases.
- Authentication.
- User accounts.
- Comment systems.
- Forms.
- CMS integrations.
- Large JavaScript bundles.
- Animation-heavy interfaces.
- Map systems requiring GPS.
- Tracking-heavy third-party scripts.

## Architecture Rules

Separate content from presentation and code.

Content must live in Markdown files. Components and layouts must render that content consistently.

Adding a new station should not require editing layout logic.

Prefer a structure similar to:

```text
content/
  baeume/
    eiche.md
    buche.md
  objekte/
    asthaufen.md
    steinhaufen.md
src/
  components/
  layouts/
  pages/
public/
  images/
.github/
  copilot-instructions.md
  instructions/
    content-model.instructions.md
PROJECT.md
```

Actual structure may vary by framework, but the principle must remain: Markdown content is the source of truth.

## URL Rules

Use stable, human-readable German URLs.

Preferred examples:

- `/baeume/eiche/`
- `/baeume/buche/`
- `/baeume/[baumart]/`
- `/objekte/asthaufen/`
- `/objekte/steinhaufen/`
- `/objekte/totholz/`

Entrance QR codes should point to the homepage or trail overview page.

Station QR codes should point directly to the station page.

Once a URL is used for a printed QR code, treat it as permanent. If a URL changes later, add redirects.

Do not use random IDs, generated hashes, or unstable route names in public URLs.

## Pages to Build

Recommended site pages:

- Homepage.
- Trail overview.
- Simple map or station overview.
- Tree detail pages.
- Object detail pages.
- Entrance board content page.
- Imprint and privacy page.

Do not build a contact page unless explicitly requested.

Do not build teacher download areas, quizzes, worksheets, or learning management features unless explicitly requested.

## Mobile-First Requirements

Assume 99% of visitors use smartphones.

Prioritize:

- Readable text on small screens.
- Large tap targets.
- Clear navigation back to overview.
- Fast first load.
- Small images.
- Minimal JavaScript.
- No layout shifts that make reading difficult.
- Offline-tolerant structure where practical.

Desktop support is required, but desktop is secondary.

## Performance Requirements

Performance matters because the forest may have weak mobile reception.

Implement:

- Static pages whenever possible.
- Optimized images.
- Lazy-loading for non-critical images.
- Minimal JavaScript.
- Minimal external dependencies.
- No unnecessary fonts from third-party CDNs.
- No heavy map libraries unless explicitly requested.
- No background video.
- No autoplay media.

Prefer system fonts unless a specific visual identity is later defined.

## Accessibility Requirements

Use accessible, semantic HTML.

Follow WCAG 2.2 AA principles where practical.

Implement:

- Proper heading order.
- Descriptive link text.
- Meaningful image alt text.
- Sufficient color contrast.
- Keyboard-accessible navigation.
- Visible focus states.
- Large enough touch targets.
- No information conveyed by color alone.
- No auto-moving content.
- Clear language.

Do not create custom controls when native HTML elements work.

## Visual Design Direction

The visual style should be:

- Natural.
- Modern.
- Simple.
- Functional.
- Friendly for families.
- Not childish.
- Not corporate-heavy.

The site should feel like a calm digital nature trail, not a startup landing page.

Use images only when they teach something: tree, bark, leaf, fruit, seed, branch pile, stone pile, deadwood, or a simple explanatory illustration.

Avoid decorative stock images that do not help identification or understanding.

## Content Accuracy Rules

Do not invent forestry facts, species claims, ecological benefits, legal statements, or climate-resilience claims.

When content is uncertain, use placeholders or cautious wording.

Use reliable forestry, environmental, or official sources for detailed factual claims.

External links may point to reputable sources such as forestry associations, government agencies, educational forestry resources, or scientific/nature conservation organizations.

Do not present placeholders as final facts.

## Legal and Approval Boundaries

The website may mention that coordination with the forester and municipality is still required.

Do not claim that QR-code posts, signs, or boards are legally approved unless explicitly stated in project content.

Do not add legal guarantees or liability disclaimers without explicit instruction.

Do not make claims about Swiss or Canton Bern law unless content has been provided or verified.

Use placeholders where legal or approval details are pending.

## Analytics and Privacy

Do not add Google Analytics or any tracking script by default.

Analytics may be added only after explicit approval and with a clearly defined privacy approach.

If analytics is later added:

- Prefer a cookie-free configuration where possible.
- Do not enable advertising features.
- Do not enable remarketing.
- Document analytics in the imprint/privacy page.
- Avoid intrusive cookie banners unless a legal/privacy decision requires them.

If uncertain, implement the website without analytics.

## Image Licensing Rules

Use legally safe images only.

Prefer own photos from the forest when available.

If external images are used:

- Store source URL.
- Store author/creator where required.
- Store license information.
- Store attribution text where required.
- Do not use images with unclear rights.

Do not scrape or hotlink images from external sites.

## Development Style

When generating code:

- Keep components small.
- Use descriptive names.
- Prefer readable code over clever abstractions.
- Avoid premature generalization.
- Avoid adding dependencies without justification.
- Keep content schemas explicit.
- Validate required frontmatter fields if the framework supports it.
- Provide sensible placeholder content when final content is unknown.

## Validation Checklist Before Completing a Change

Before finalizing any implementation, verify:

- Public content is German.
- Developer comments and instructions may remain English.
- Pages work on mobile widths.
- Station URLs are stable and readable.
- New content is Markdown-driven.
- Images have alt text.
- Navigation is clear without GPS.
- No unnecessary JavaScript was added.
- No analytics was added without approval.
- No unverified legal or ecological claim was introduced.
- Placeholder values are visibly marked as placeholders.
- The site remains useful under weak mobile connectivity.
