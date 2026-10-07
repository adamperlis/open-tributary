# Current review: monochrome Gateway Flow, 2026-10-07

## Vertical-to-fan follow-up

The hero’s single authored field starts at -90° with a transverse scale of 0.44. Browser measurement at 1440 × 900, scroll=0: transform matrix (0,-1,0.44,0), one source iframe. At scroll=520, progress=0.6675: angle=-52.279°, scale=0.6747, still one iframe. At the complete diagram frame: angle=0°, scale=1, label opacity=1, and field/map rectangles both x=576, y=121, width=864, height=779. Reverse scrolling to progress=0.5379 returns the angle to -77.928°. No source rebuild or component-prop changes occur during the transition. The controller batches scroll updates through one requested animation frame and removes listeners/cancels its frame on cleanup. Reduced motion bypasses the transform and uses the existing static companion.

Phone framing shifts the vertical current beside the hero actions and interpolates to the centered diagram. Current source hashes are unchanged. Final type/build and deployed checks follow the same required commands as above.

- `npm run check`: 27 files, zero errors, warnings, or hints. `npm run build`: six pages built successfully. All three registered source hashes verified locally and in the Vercel production build.
- Rendered authored Gateway Flow iframe with the canonical canvas, all configured props, and original sandbox. Exercised its canvas click interaction in the browser. The preserved runtime renders fine white paths and streaming square particles, not the source’s residual login UI.
- Desktop 1440 × 900: two 779px scenes beneath 121px chrome. At the complete diagram frame, shared field and annotation map are both x=576, y=121, width=864, height=779. After scrolling beyond the frame, their top coordinates both equal -239: the field releases with the diagram rather than spilling into the reading chapter.
- Responsive browser checks at 1280 × 720, 390 × 844, and 320 × 740. No horizontal overflow. Phone diagram uses the same source canvas coordinate region as its annotation map. At 390px both are x=0, y≈428, width=390, height≈249. Endpoint labels remain clear of controls. The shortest phone uses a 640px reading scene minimum rather than clipping content to its shorter viewport.
- Source canvas remains mounted across the hero/diagram scroll transition. Wheel input over the iframe scrolls the parent document. Only one authored field runs for the connected story.
- Code selection updates caption, figure number, pressed state, and reverses arrow markers. Keyboard tab operation reaches the next actionable element. The caption states that ambient source particles continue converging in both views.
- Pause removes the iframe and displays the static cubic-path companion; resume recreates the source runtime. Live reduced-motion and visibility accommodations verified in source. No browser preference emulation or physical-device performance profiling is claimed.
- Hero eyebrow removed. Native same-origin page View Transitions opt-in confirmed in the rendered stylesheet. Navigation to the proposal works. CSS uses a 160/180ms root crossfade and opts out under reduced motion. Browsers without the native feature retain ordinary navigation. Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@view-transition .
- Mobile signup has no overflow. Demo email submission reaches the explicit preview confirmation stating that nothing was sent or saved. No live collection, payments, or royalty allocation added.
- Favicon, social SVG/PNG, diagram, mark, static current artwork, reading pages, and forms follow the black/white/neutral identity. The registered shared source stylesheet remains unchanged even where it includes unused color styles for other effects.
- Existing Astro 5 dependency audit reports inherited vulnerabilities. This deployment is static, without server image optimization, server islands, or untrusted content rendering. No framework major migration was mixed into this visual change.

Local phone evidence: `/Users/adamperlis/Documents/Codex/2026-10-07/i-want-you-to-clone-a/tributary-gateway-phone.jpg`.

Production deployment: https://open-tributary-r7moicez3-adamperlis-projects.vercel.app . Public alias: https://open-tributary.vercel.app . Vercel reported the production build complete and alias assigned.

---

# Historical verification before the monochrome direction

# Current review: complete redesign, 2026-10-07

This section supersedes the historical visual reviews below. Adam rejected the palette-only revision and explicitly authorized a full rebuild. Direction, alternatives, reference evidence, and motion decisions are in DIRECTION.md. The homepage film’s detailed study is in VIDEO-STUDY.md.

## Shipped result

The homepage, proposal, manifesto, signup, confirmation, navigation, footer, favicon, and social image now share the new confluence identity. Public alias: https://open-tributary.vercel.app . Deployment: https://open-tributary-n1w2mtfss-adamperlis-projects.vercel.app . Vercel production build completed successfully and the alias was applied. Read-only unauthenticated requests returned 200 for home, proposal, manifesto, and signup; the alias contains the new chapter IDs and AI-rewrite/relative-value limitations.

Astro check: 22 files, zero errors, warnings, or hints. Production build: six static pages plus robots/sitemap, successful locally and on Vercel. The shared client bundle is 19.28kB / 5.64kB gzip. Draft indexing controls, real canonical preview domain, and truthful structured data remain. Future opentributary.com is not used as an owned domain.

## Rendered and exercised

Actual desktop viewports: 1280 × 720 and 1440 × 900. Actual mobile viewports: 390 × 844 and 320 × 740. Home, proposal, manifesto, and signup have zero horizontal overflow at 320px; home also has zero overflow at both desktop sizes and 390px. Document mastheads, reading outlines, role controls, and the closing chapter were inspected. The mobile diagram is recomposed vertically rather than scaled from the desktop SVG. The stacked mobile navigation keeps every primary destination available.

Both flow buttons update pressed state, caption, figure number, and arrow direction. The changed code-flow state was captured in full at desktop and 320px. A real Tab/Enter sequence activates the code-flow button, with a visible focus outline. The first Tab exposes the skip link. Native signup validation blocks an empty email and focuses the email field; preview@example.com reaches the explicitly simulated confirmation. Builder query selects Builder, and maintainer query selects Creator. No submission is sent or stored.

Lenis initializes on desktop and is absent at mobile widths. Its desktop anchors account for the sticky header. Runtime observation verifies activation and layout behavior; this is not a real-device performance profile. Reduced-motion code prevents initialization and removes CSS animations/transitions; preference listeners reconfigure it live. Browser reduced-motion emulation was not performed. Static built HTML contains all reading content and baseline diagram meaning without JavaScript; demo buttons are disabled until enhancement loads. No JavaScript-disabled browser runtime claim is made.

Revisions after rendering: protected the final outlined action from bright ribbons, added a forest shading layer to its chapter, capped the diagram at 640px, corrected a font package import, increased the narrow nav action to 44px, and disabled Lenis below 769px. No observer-delayed reading content, perpetually moving background, or decorative tilted card remains.

## Animation audit

src/styles/global.css:8 — reviewed button/flow states: consistent 180ms ease-out, pressed scale 0.98, stable hit areas.
src/styles/global.css:13 — reviewed hero entrance: one decorative focal group, 1800ms ease-out once; static text is always visible. This autonomous introduction is not a user-triggered control transition.
src/styles/global.css:21 — reviewed reduced motion: no animation and zero transition duration.
src/layouts/Layout.astro:34 — desktop capability/width gate and reduced-motion check; touch remains native.
src/layouts/Layout.astro:44 — reviewed user scrolling/anchor timing: 260ms with cubic ease-out, below 300ms.

No adverse findings in the implemented animation paths. Spring/overshoot, context-menu entrance, modal dimming, and stagger rules are not applicable. Native text fields retain native input behavior.

## Saved evidence

Images live in the task workspace /Users/adamperlis/Documents/Codex/2026-10-07/i-want-you-to-clone-a/:

- tributary-redesign-desktop.jpg — settled hero, 1440 × 900.
- tributary-redesign-panels.jpg — connected creator/builder panels, 1440 × 900.
- tributary-redesign-flow.jpg — changed diagram state, 1440 × 900.
- tributary-redesign-mobile.jpg — hero, 320 × 740.
- tributary-redesign-flow-mobile.jpg — changed diagram state, 320 × 740.
- tributary-redesign-phone.jpg — hero, 390 × 844.
- tributary-redesign-proposal-mobile.jpg — proposal opening, 390 × 844.

The screenshot records are real browser renders. Earlier nature screenshots below belong to the rejected revision.

## Limits

No real payment integration, provenance classifier, agreed rates, allocation algorithm, final license text, or live form collection is claimed. The new discussion distinguishes attribution from payment liability and does not grant an automatic AI rewrite discount. Brand materials are original SVGs informed by natural confluences, not copied reference assets. A mid-range physical-device motion/performance review remains unverified. Visual quality remains open to Adam’s review; this record does not imply design approval.

---

# Historical reviews

# Tributary preview review

Design preview: https://open-tributary.vercel.app

## What was implemented

Adam requested a creator-first audience shift. Homepage copy, CTAs, signup role labels, sharing image, and river direction now address the person publishing code and potentially receiving royalties. Builders remain a secondary audience. The default diagram shows royalties to the creator’s project; its code mode shows code flowing outward.

Astro renders the page text and navigation in HTML. Each route has its own title and description. Canonicals, Open Graph and Twitter image URLs use the deployed origin, configurable through SITE_URL when a domain is acquired. A 1200 × 630 PNG is included for sharing. Homepage copy identifies Tributary as a whitepaper proposal; payment and form states remain explicitly illustrative.

JSON-LD declares the visible B150 publisher, a homepage WebSite, each WebPage, an Article by Adam Perlis for the manifesto, and a draft CreativeWork for the license principles. No publication dates were invented. NewsArticle and speakable were omitted because the manifesto is not a news report and Google's speakable feature concerns news/Assistant use. Schema represents the content rather than promising AI inclusion.

The sitemap contains the homepage, manifesto, and license. Preview robots block crawling and pages carry noindex. PUBLIC_SITE_INDEXABLE=true enables the public content pages only; join, confirmation, and the identity study remain noindex. SITE_URL should change to opentributary.com only after ownership and DNS are established.

Basis: [Google's AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article), [structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), and [speakable scope](https://developers.google.com/search/docs/appearance/structured-data/speakable). Local distilled research was reviewed; the vault connector and public research index were unavailable, so official guidance was used. No AI citation guarantees or universal channel percentages are assumed.

## What still needs attention

Final legal terms, royalty rate/threshold, allocation methodology, refund behavior, and license compatibility remain open. The manifesto now distinguishes dependency identification from proof of authorship or AI-code provenance. A public limitations section covers clean-room development, adoption, license boundaries, attribution, royalty stacking, payment coverage, and governance. It states conditions under which the model should change or stop. Copyright and payment scope statements link to primary sources; proposed guardrails remain explicitly unresolved.

Forms do not send or save data. Connect a working feedback destination before inviting actual submissions. Payment collection and payouts are proposals, not implemented product features. Acquiring a domain, turning indexing on, and connecting Search Console remain launch work. Structured data cannot compensate for these content and implementation gaps.

## Off-site recommendations

1. GitHub: publish a versioned proposal and use issues or Discussions for allocation examples and compatibility questions. Stable public evidence helps readers assess the standard. Do not claim OSI approval.
2. Sustain Open Source forum: share a substantive comparison with thanks.dev, Flossbank, and Prosperous Software and ask about adoption barriers. Their existing dependency-funding discussions make this audience relevant. No posts have been sent.
3. Founder LinkedIn and YouTube: show a worked hypothetical example from a product payment through a dependency graph, clearly stating which elements are proposals. Link to the same versioned whitepaper and invite critique rather than presenting the system as launched.

These recommendations target maintainers and builders, with consistent entity descriptions across web and assistant retrieval. They are hypotheses to measure, not guaranteed citation channels.

## How to measure

After the domain is acquired and indexing enabled, verify in Search Console and submit the sitemap; inspect the three content URLs for indexing and canonical selection. Track impressions, clicks, queries, and the AI search reports available in the account. Track actual community replies once feedback works.

Monthly, repeat prompts in ChatGPT, Perplexity and Gemini: "How can a commercial app fund its open-source dependencies?", "Tools for distributing payments across a dependency tree", and "What is Tributary's Open Royalty License proposal?" Record whether Tributary appears, the cited URL, and whether the answer correctly calls it a proposal. Separate branded retrieval from unbranded discovery, and compare repeat runs rather than relying on one answer.

## Verification

Previous visual checks: 1440 × 900, 390 × 844, and 320 × 740; light/dark themes, reduced motion, keyboard-accessible river modes and demo form states. Deployed homepage checked at 390 × 844 with page width equal to viewport width. Unauthenticated request to the public Vercel alias returned HTTP 200 and the proposal content. That earlier preview preceded the natural-flow reference study.

Build and metadata checks should be rerun after substantive changes. Screenshot evidence is in the task workspace as tributary-proposal-preview.png.

Creator-first revision checks: Astro check reported zero errors, warnings, and hints; static build passed. Home and creator signup fit 320px without overflow; the creator CTA selected the Creator role. Both river modes changed the explanatory text and reversed the arrow markers. Desktop opening and mobile opening/river/clean-room screenshots were saved in the task workspace as tributary-creator-desktop.png, tributary-creator-mobile.png, tributary-creator-river-mobile.png, and tributary-flaws-mobile.png.

## Nature-derived brand exploration

Reference: https://www.metalab.com/work/windsurf (retrieved and visually inspected 2026-10-07 at 1440 × 1000). Inspected the opening, flow poster, tote symbol/gradient, event graphics, and pool/hoodie application. The case study’s body describes a wave-based mark and nature-derived color. This supports a natural motif extending from a symbol into larger flow bands. No proprietary fonts, logo, or assets were copied. The supplied Photo 1.jpg was visually inspected; its explanatory sequence shows river imagery informing letterforms.

Two original compositions are reviewable at /brand-study: a compact confluence “t” with a readable wordmark, and expressive meander lettering for larger use. The compact direction is recommended for small applications. The existing header logo remains while these are studies. Their curves are drawn interpretations, not claims of satellite tracing.

Homepage river paths now use sediment, current, and canopy gradients merging into a deeper tone. The diagram stays creator-first, with static directional arrows and the two existing flow controls. Widths are explicitly illustrative; no amounts or rates are implied. A quantified Sankey is deferred until a verified allocation example exists. No perpetual motion, shaders, or new font families were added. The trigger remains a mode selection, with text and arrows communicating its consequence; reduced-motion styles apply.


## Warm palette and light/dark revision

The homepage now uses parchment reading surfaces, a forest diagram field, and a full-width forest community section with original landscape ribbons. Adam’s painting reference informed vermilion, gold, olive, and blue accents. Long-form pages retain readable single-surface layouts. The identity study is always noindex and offers two logo directions for review. Detailed video observations and sampling limitations are in VIDEO-STUDY.md.

Astro check passed for 21 files with zero errors, warnings, or hints; the static build passed. Visual review at 1280px and 320px found no horizontal overflow. Both desktop and mobile controls update their captions and pressed state, and reverse their arrow markers. Light and dark surfaces keep labels readable. Existing reduced-motion rules remove transition duration. New screenshot evidence is saved in the task workspace as tributary-nature-hero.png, tributary-nature-mobile-river.png, and tributary-nature-landscape.png.


## Relative contribution and allocation

Added an explicit button-versus-system limitation at /license#relative-value and a homepage question linking to it. Equal package payouts and code-size-only valuation are challenged. A single capped pool with unequal, disclosed shares is presented as a candidate to test, with agreement before adoption, challenges to allocations, and protection against double-counting and package splitting. No rates, scores, or working allocation system are claimed. Tidelift’s published weights and subscriber-usage approach supplies source context. Excessive allocation-dispute costs are now another reason to revise or stop the proposal.


## AI rewrites: attribution and compensation

Added /license#ai-rewrites, a homepage link, and a clarified attribution principle. Proposed source records distinguish reused, adapted, and referenced contributions. Credit alone does not establish a royalty claim. An agreed share could reflect a smaller retained contribution; AI rewriting itself earns no automatic discount. A materially independent implementation may keep voluntary reference credit without an automatic output royalty, while separate source-access/copying terms remain relevant. Source-informed rewrites are not labeled clean-room merely because AI generated new text. Legal context links to U.S. copyright provisions, Copyright Office program guidance, and Cornell’s clean-room explanation. No settled licensing terms, similarity threshold, provenance classifier, or payment feature is claimed.
