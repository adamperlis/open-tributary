# Current review: exact Gateway Flow restoration and arrow motion, 2026-10-07

Fetched https://threeui.com/source-code/gateway-flow.json again and confirmed every downloaded registered file matches its supplied SHA-256 and the pinned local file. The active homepage mounts the exact configured component and preserves its scripts, geometry, dependencies and source CSS. Host-level rotation, placement, tint and fading connect the hero to the vertical chart.

`npm run check`: 30 files, zero errors, warnings or hints. `npm run build`: six pages built, three canonical hashes verified. Active scene island: 153.16 kB / 32.57 kB gzip. Geometry checks include the legacy 252 connected states plus 320 source-derived rotated paths and bounded canonical relationship arrows across desktop/phone frames.

Browser inspection at http://localhost:4325/ confirmed the registered Gateway Flow iframe, its `allow-scripts` sandbox, vertically oriented authored shape, streaming points, preserved wordmark-only layout, and absent divider motif. At 1440 × 900 the source junction and project card center both measure approximately y=603.98; the source remains one iframe through scroll. Pause removes the iframe, displays the companion, and resume restores one iframe. Code mode updates its pressed state and caption. No claim is made that chart mode reverses the authored particles.

Hovering the hero CTA moved its arrow to `matrix(1, 0, 0, 1, 4, 0)` without changing the button rectangle. Keyboard navigation reaches links with `:focus-visible`; arrows use the same CSS motion. A 390 × 844 browser viewport retains the source shape, visible 36px pause control, no horizontal overflow, and a readable chart. Physical phone profiling and browser reduced-motion preference emulation are not claimed.

The canonical Tailwind CDN emits its production-use warning; no application error was observed. Automated clicking within the rotated iframe was refused by the browser controller because it could not inspect fractional iframe input coordinates, so the source click pulse was reviewed in source and was not confirmed by an automated interaction. Host pointer interaction remains enabled and the canonical click handler is unchanged. Chart mode, pause/resume, scroll and hover were exercised in the browser.

Animation review: `src/styles/centered-river.css` uses one 200ms eased arrow translation, no layout animation, no overshoot or stagger, and honors reduced motion. No new animation-rule findings. Earlier review entries below describe superseded implementations.

---

# Current local review: continuous stage and river mark, 2026-10-07

The opening sequence uses a full-viewport canvas in one sticky stage, shared by the hero and vertical relationship diagram. Product labels and arrows retain the relationship coordinates while the visual river uses one broad centerline; the same particle phase survives the transition and direction switch. The identity uses the wordmark alone; standalone river marks have been removed. The four CurrentSeam divider instances, component, and styles have been removed.

Browser checks at http://localhost:4325/ confirmed active WebGL, the hero and settled diagram, working direction controls, and no horizontal overflow at 390 × 844. Desktop 1440 × 900 was also inspected. The 390px diagram controls and project card remain separate and visible within the viewport. Browser logs returned no errors or warnings. The DOM contains zero miniature flowchart dividers, brand SVGs, or project icons and retains section padding. The built HTML and CSS also contain no instances of the removed divider motif. The final single-current field was inspected in the desktop hero and mobile hero/diagram; direction switching and pause/resume were checked on desktop. These are desktop-browser viewport checks, not physical phone profiling.

The geometry verification script checks 252 states across four desktop/phone frames, including both curve joins, tangent continuity, the centered confluence, and bounded arrows. `npm run check` reports 30 files with zero errors, warnings, or hints. `npm run build` builds six pages; the three registered ThreeUI source hashes still verify during build. Static/reduced-motion fallbacks and focus transfer were reviewed in source; preference emulation and keyboard transition testing are not claimed for this revision.

This revision is available on the local preview. Adam requested one large river instead of three arms; the active field and static companion use one centerline. Earlier checks below refer to previous revisions and deployments.

---

# Current review: persistent WebGL field, 2026-10-07

This supersedes the historical active ThreeUI runtime notes below. The registered ThreeUI files and exact configured usage remain preserved, while the current homepage uses an explicitly authorized original raw WebGL renderer. No WhyCavalry dependency is installed.

`npm run check`: 30 files, zero errors, warnings, or hints. `npm run build`: six static pages built, with all three registered SHA-256 hashes verified. The field island is 8.79 kB / 4.17 kB gzip in this build, versus the previous 148 kB / 30.51 kB gzip island; shared React remains 215.57 kB / 67.09 kB gzip. These are bundle-size measurements, not device frame-rate guarantees.

Browser verification on https://open-tributary.vercel.app confirmed the native WebGL canvas, filaments, fine round particles, subdued blue-violet material, and silver glints. A shader precision mismatch discovered in the first deployment selected the static fallback correctly; matching explicit uniform and varying precision fixed the GPU rendering. No errors/warnings appeared in the subsequent browser log.

The same canvas remains mounted through scroll, direction reversal, pause, and resume. Pause returned `fieldRunning=false` with one canvas retained; resume returned `true` and the same reported phase. Code selection changed both pressed state and particle direction to outward; royalty selection restored return. Velocity reversal integrates into the existing phase, avoiding a particle position jump. The annotation and field share identical frame dimensions and transforms; at the complete 320px phone diagram both rectangles were x=40, y=476.70, width=240, height=351. Both centers are x=160. At 1440px both centers are x=720; at 390px, hero headline, description, actions, and current all center at x=195.

Responsive rendering checked at 1440 × 900, 1280 × 720, 390 × 844, and 320 × 740; no horizontal overflow. Small phones retain additional reading height. Desktop initializes 20,500 particles; phone initialization uses 10,000. One line batch and two point batches draw from static GPU buffers. Pixel budgets and DPR caps bound raster work, and sustained slow frame intervals reduce particle density and resolution. The browser's observed callback interval is not a physical-device performance benchmark.

Offscreen story and hidden-document checks stop the animation loop. Reduced-motion preference, unavailable WebGL, compile/link failure, and context loss retain the static filaments; lifecycle cleanup releases observers, listeners, buffers, programs, shaders, and animation frames. Reduced-motion/context-loss paths were reviewed in source; no browser preference emulation or physical phone profiling is claimed.

Fine curves and round points extend into static panel/masthead artwork, the mark, and chapter seams. Hero eyebrow remains absent; both opening scenes remain vertical and centered. Proposal content, community feedback framing, transparent unresolved issues, native page transitions, desktop Lenis, and demo-only forms remain. The field is decorative and relationship arrows are illustrative, not measured Sankey/payment amounts.

Public alias: https://open-tributary.vercel.app . Screenshot evidence is saved in the calling Codex task directory. Historical checks below describe earlier implementations.

---

# Centered vertical composition correction, 2026-10-07

This review supersedes the earlier vertical-to-horizontal fan-out below. Both the hero and diagram stay vertical throughout the scroll. The scroll rotation/expansion controller was removed. One sticky source canvas remains mounted across the two scenes with a constant 90° host rotation; the annotation SVG shares the identical frame and transform. The headline, subhead, actions, and both visual centers share the horizontal midpoint.

Rendered at 1440 × 900, 1280 × 720, 390 × 844, and 320 × 740. DOM measurements at 1280px return center x=640 for headline, subhead, action group, source current, annotation frame, and project. At 320px the equivalent midpoint is x=160. No horizontal overflow. The products appear above the project, with upright labels and downward royalty arrows; short-screen typography and diagram dimensions keep the desktop scenes visible. Small phones use additional reading height.

The direction switch updates pressed states and captions. Pause removes the iframe (count=0); resume remounts it. Only one source iframe is mounted while active. Browser error log returned no errors during the local check. The three registered source files remain unchanged. Authored Canvas 2D rendering is retained; the user's permission to use WebGL does not require replacing the exact source implementation.

`npm run check`: 27 files, zero errors, warnings, or hints. `npm run build`: six static pages completed; all three registered SHA-256 hashes verified. Published verification follows deployment. Prior checks below are historical and do not describe the current orientation or coordinates.

---

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
