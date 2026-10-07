# Current review: builder gap fixed and distinct footer, 2026-10-07

The rectangular gap in participation came from separated curve endpoints at x=.46 and x=.54. The curves now share x=.5 and a continuous tangent, then extend across the other bank. Static and WebGL geometry both change. A regression check covers continuity, tangent matching and particles reaching the opposite bank. The footer uses a new braided-current preset with two crossing filament ribbons, replacing its repeated Gateway silhouette. Its canvas fills the complete section on desktop and mobile to avoid an internal rectangular crop.

Astro check: 50 files, zero errors/warnings/hints. Static build and canonical ThreeUI hashes pass. Ambient verification covers 41,600 finite fallback positions plus junction continuity, closed orbital paths, native aspect crops and existing lifecycle guards. Desktop 1440x900 and phone 390x844 browser checks show the closed participation gap and distinctive woven footer, with no horizontal overflow. Footer diagnostics show 20,500 desktop / 10,000 phone particles, two draw calls and cached inputs. Browser error/warning logs are empty. These are rendering checks, not physical-device FPS benchmarks.

Evidence in the task workspace: tributary-builder-gap-fixed-mobile.jpg, tributary-woven-footer-desktop.jpg and tributary-woven-footer-mobile.jpg. Full-detail materials, source provenance, main story and reveal timing remain intact.

---

# Current review: unique moving supporting fields, 2026-10-07

The supporting scenes now use confluence curtains, a meandering sweep, a fan, rounded square orbits, a descending cascade and circular ripples. The unchanged opening story and sideways Gateway footer share the same palette and two-pass renderer. Static fallbacks are sampled from the same supporting paths. All 14 previously extracted Holotx frames were visually revisited for shape, thin-line and dust references.

Validation: Astro check reports 50 files with zero errors/warnings/hints. The final static build passes and verifies all three registered ThreeUI hashes. The new lifecycle check verifies 36,400 finite fallback positions, closed orbits, aspect-preserving crops, lazy loading, bounded context cache, phase-preserving recreation, hidden tabs, reduced motion, BFCache and disposal. Existing camera/particle performance, native resolution and reveal lifecycle checks pass; no visible reveal brightness reset is reintroduced. Shared shapes add 0.53 kB gzip; renderer totals 4.73 kB gzip; shared layout script totals 8.19 kB gzip. No new dependency.

Browser review at 1440x900 and 390x844 covers actual WebGL shapes, readable content, section edges and overlaps. At the invitation/footer boundary both visible fields run and earlier fields release. Mobile runs 10,000 particles per field; desktop runs 20,500, with two draw calls and cached vertex inputs. Returning to participation after eviction resumes its previously recorded phase rather than resetting. At 3840x2160, the masthead canvas has a native 3840x540 backing at DPR1. Horizontal overflow is zero in inspected views. The backing-resolution test separately covers DPR2 and hardware limits. Browser diagnostics are rendering evidence, not physical-device FPS measurements; reduced-motion/BFCache/hidden-tab behavior is covered by the lifecycle test rather than browser preference emulation.

Screenshots in the task workspace: tributary-curtains-desktop.jpg, tributary-curtains-mobile.jpg, tributary-meander-desktop.jpg, tributary-meander-mobile.jpg, tributary-orbit-desktop.jpg, tributary-orbit-mobile.jpg, tributary-orbit-4k.jpg, tributary-cascade-mobile.jpg and tributary-ripple-mobile.jpg. Community text masks were strengthened after the initial desktop review. Signup and feedback delivery still require the previously documented Resend credentials; this visual update does not activate email delivery.

---

# Current review: scroll brightness reset fixed, 2026-10-07

The offset entrance previously let content enter view at full authored brightness before the reveal trigger suddenly dimmed it. The initial opacity and transform now stage offscreen, then the same frames take over at the delayed trigger. The author’s inline styles restore when entrances finish or are interrupted. All offscreen preparation releases under reduced motion, hidden tabs, page cleanup and animation failure; returning tabs rearm pending entrances. Already-visible content remains still. Footer utility copy no longer has a reveal because the bottom inset cannot reach it at the end of the document. The footer renderer loads within a 300px observer margin rather than at the visible edge.

Validation: Astro check reports 47 files, zero errors/warnings/hints. Static build and canonical ThreeUI hashes pass. The reveal lifecycle test now covers pre-staged brightness, authored opacity restoration, skipped entrances, hidden-tab rearming and cleanup, as well as the existing timing/accessibility safeguards. No new dependencies or animation loop. Desktop browser at 1440 × 900 confirms pre-staged pending invitation/footer targets, full-opacity settled footer text, and no replay on reverse scroll. Footer WebGL remains available across the boundary with 20,500 particles, two draw calls, cached inputs and full quality; horizontal overflow is zero. Screenshot: tributary-footer-no-flicker.jpg alongside this task. Mobile lifecycle behavior is exercised by the automated check, not a new physical-device benchmark.

---

# Current review: visible reveal timing, 2026-10-07

Later-page entrances now trigger farther inside the viewport: 18% of viewport height on desktop, 14% on mobile, expressed in pixels to avoid width-relative IntersectionObserver percentage margins. A 220ms desktop / 160ms mobile base pause gives each arrival a visible beat. Related elements stagger by 50ms / 40ms, capped at 200ms. Headlines settle over 900ms, body copy 780ms, details 650ms and ambient SVG artwork 1100ms, with 80% durations on phones and a less abrupt ease-out. Travel, layout, river camera choreography and GPU effects are preserved.

Validation: Astro check passes for 47 files with zero errors/warnings/hints; the static build and all three canonical source hashes pass. The existing reveal lifecycle check now verifies height-based trigger offsets and the visible pause, as well as one-time staging, mobile travel/duration, focus/press interruption, reduced motion, animation failure, BFCache restore and cleanup. No dependency or continuous animation loop is added.

Desktop browser at 1440 × 900: keyboard PageDown scrolling reaches pending participation entrances. Live computed-style samples show the creator paragraph holding at opacity 0.42 / 18px travel, then easing through opacity 0.44–0.74 as the transform approaches its resting position. All participation content subsequently settles to opacity 1 / transform none; horizontal overflow is zero. Rendered evidence: tributary-delayed-reveals-desktop.jpg alongside this task. Mobile timing is covered by the lifecycle check; a new mobile browser pass is not claimed. Reduced-motion and fast-scroll/readiness safeguards remain verified by that check.

---

# Current review: email submission integration, 2026-10-07

Signup, license feedback and manifesto feedback now use a shared asynchronous submit flow and one standalone Vercel `/api/contact` function. Emails are addressed only to support@b150.ai; visitor addresses become Reply-To. Input validation, bounded bodies, same-origin checks, a honeypot, a best-effort warm-instance rate window and provider idempotency keys protect the endpoint. Plain text avoids HTML/header interpolation. No database or marketing subscription is introduced. Success requires a provider email ID; errors preserve the message and restore the submit button. The feedback action container remains and signup gains the same readable button contrast.

Astro check: 47 files, zero errors/warnings/hints. Static build: six pages and all three canonical hashes pass. `npm run verify:forms` covers both forms, fixed recipient and optional Reply-To, header injection/invalid input, page and role validation, malformed/oversized bodies, honeypot, idempotency, missing credentials, provider rejection/timeouts/unconfirmed acceptance and rate-window expiry; it sends no real emails. `vercel build` compiles a standalone Node 24 function successfully. Invoking its packaged entry returns the expected 503 with credentials absent. Actual local HTTP requests return 200 for the homepage, 503 for unconfigured delivery, 400 for invalid email and 413 for oversized bodies.

Desktop feedback and 390 × 844 mobile signup were exercised in the browser. Both report the actual missing-credentials error, retain entered text, allow retry and avoid a false success or signup redirect. Builder role selection from the URL remains intact and mobile has no horizontal overflow. Direct email links and noscript fallback remain. The local server was replaced with a fresh full preview on the same localhost:4325 URL; terminal session 26573 was not reused. Rendered evidence: tributary-email-feedback-desktop.jpg and tributary-email-signup-mobile.jpg alongside this task.

Activation is outstanding: Vercel reports no environment variables, and there is no local email key. Configure a Resend sending key and verify b150.ai (or another chosen sender domain), then deploy and verify actual delivery to the inbox. No real email or live deployment for this integration has occurred. Existing root dependency warnings predate this integration; the email function adds no runtime SDK or Astro server adapter. README and .env.example document setup and operational limits.

---

# Current review: contained preview feedback action, 2026-10-07

The shared feedback form now groups its action and preview-only note in a lightly shaded, bordered container. The submit button has a black fill and white text, with the existing arrow motion and white/black hover and focus treatment. On mobile the action and note stack; the button spans the available space. This fixes the formerly white button disappearing against the white reading surface on the license and manifesto pages.

Astro check reports 42 files, zero errors/warnings/hints. The build passes and verifies the canonical ThreeUI hashes. Desktop license review at 1440 × 900 and mobile manifesto review at 390 × 844 show the action container and readable button with no horizontal overflow. A valid local preview reveals the existing confirmation and focuses its status message; no submission endpoint is introduced. Browser error/warning logs are empty. Evidence: tributary-feedback-container-desktop.jpg and tributary-feedback-container-mobile.jpg alongside this task.

---

# Current review: continuous invitation edge and sideways footer, 2026-10-07

The invitation's SVG viewport used to crop its upper curves at an internal horizontal edge. A section-sized artwork layer now allows those curves to overflow the SVG and applies a 96px fade at the section top. Existing shape, placement, material and entrance timing remain. The footer turns the constellation sideways through a native WebGL camera option, with an aspect-aware horizontal span and the existing reading gradient. Its static fallback also turns horizontally. The homepage story still uses its original camera; source hashes and particle materials are unchanged.

Validation: Astro check reports 42 files, zero errors/warnings/hints. Build passes for six pages and verifies all three canonical hashes. Existing field performance and resolution checks pass: 24,240 camera positions, 30,507 seed/material assignments, 140 moving-product positions and native 4K/Retina/phone resolutions. The renderer adds no draw pass or dependency.

Browser review at 2048 × 1000 reproduces the supplied wide composition: invitation curves extend above the former SVG edge and fade smoothly at the outer boundary; the horizontal footer remains readable. At 390 × 844 both the invitation fade and sideways footer render without horizontal overflow. Footer diagnostics retain 10,000 phone particles, two draw calls and a 488 × 456 native backing, and it stops rendering when scrolled offscreen. Error/warning logs are empty. Reduced-motion/static behavior was reviewed in source rather than forced in the browser. Evidence alongside this task: tributary-invitation-unclipped-wide.jpg, tributary-invitation-unclipped-mobile.jpg, tributary-footer-sideways-wide.jpg, and tributary-footer-sideways-mobile.jpg.

---

# Current review: footer constellation, 2026-10-07

The shared footer uses the existing custom WebGL constellation field and blue-white palette behind its closing statement. A right-side composition, reading gradient and mobile placement keep the accepted wordmark, links and copy clear. The canonical ThreeUI bundle remains unchanged; this reuses the authorized material adaptation rather than claiming an unmodified registered runtime.

Validation: Astro check reports 42 files with zero errors, warnings or hints; the build produces six pages and verifies the three canonical hashes. The new native footer controller is 2.39 kB / 1.15 kB gzip. Vite extracts the common field into a shared 9.33 kB / 4.40 kB gzip chunk; no animation dependency or React island is added.

Browser review at http://localhost:4325/ covers 1440 × 900 desktop and 390 × 844 mobile. Before reaching the footer, its field remains uninitialized. At the bottom, it renders with 20,500 desktop / 10,000 mobile particles, two draw calls and cached vertex inputs. The desktop backing is 2188 × 1190 for a 1094.4 × 595.0 CSS-pixel area at DPR 2; mobile is 488 × 456 at DPR 1. The main story is suspended while the footer runs. Scrolling away stops the footer; a later mobile snapshot retains its phase at 27.5864. Both layouts have zero horizontal overflow, clear text and links. Keyboard navigation reaches GitHub with a visible focus outline. Browser error/warning logs are empty. These are rendered-state checks, not physical-device FPS measurements.

Reduced-motion/static, hidden-tab, context-loss and BFCache behavior are reviewed in source; browser preferences and WebGL loss were not forced. Rendered evidence alongside this task: tributary-footer-desktop.jpg and tributary-footer-mobile.jpg.

---

# Current review: coordinated page entrances, 2026-10-07

The accepted layout, proposal copy, fonts, palette, river geometry and particle effects are preserved. Thirty later-page targets now use one native IntersectionObserver and short Web Animations entrances: facts, participation, questions, invitation, supporting flow artwork, and footer. Related targets use 40ms stagger capped at 120ms; mobile uses 30ms stagger, 55% travel and 80% duration. Headlines carry the emphasis; body/detail movement is quieter. No animation dependency, continuous frame loop, permanent will-change layer, blur or decorative tilt is added. Effects release after completion and do not replay on backward scrolling.

Validation: `npm run check` reports 40 files with zero errors/warnings/hints; the build produces six pages and verifies all three canonical ThreeUI hashes. The shared Layout bundle is 21.80 kB / 6.58 kB gzip (previously 19.28 / 5.64); the river island stays 16.43 / 7.19. `node scripts/verify-page-reveals.mjs` exercises one-time staging, authored opacity, bounded stagger, mobile travel, focus and press interruption, reduced motion, animation failure, BFCache restore and cleanup.

Desktop browser: 1440 × 900. Facts and participation transition from ready to settled at opacity 1, without residual transforms. Tab from the builder CTA focuses the first question with a visible outline and immediate settled state while the four neighboring rows remain entering. All rows then settle to opacity 1 / transform none. Invitation and footer complete their sequence; offscreen river rendering remains suspended. Screenshots alongside this task: `tributary-facts-reveal-desktop.jpg`, `tributary-participation-motion-desktop.jpg`, and `tributary-questions-motion-desktop.jpg`.

Mobile browser: 390 × 844, zero horizontal overflow. Live computed opacity captures show the heading, label, copy and CTA actively entering; below-screen builder targets remain ready until reached. The stacked builder section and SVG flow subsequently enter independently. All content settles to opacity 1 / transform none. The closing SVG animates from opacity 0.468 to its authored 0.65, preserving its mobile treatment. A direct tap on the first question navigates to `/license#clean-room`; that reading page has zero reveal targets. Returning through the wordmark restores the homepage. Footer entrances also run. Error/warning logs are empty. Screenshots: `tributary-motion-hero-mobile.jpg`, `tributary-reveal-transition-mobile.jpg`, `tributary-participation-motion-mobile.jpg`, and `tributary-questions-motion-mobile.jpg`. These are browser viewport and rendered-state checks, not a physical-device FPS benchmark.

Fallback evidence: ordinary server HTML/CSS keeps all content visible; there are no initial hidden reveal classes. Reduced-motion, failed-animation and BFCache cases are exercised by the lifecycle check and reviewed in source; browser preference toggling and JavaScript-disabled browser mode were not forced. Focus/press handling and native navigation were exercised in the real browser.

Animation-principle audit and revisions:

- `src/styles/gateway.css:39` — [easing-exit-ease-in] Root page exit used ease-out; corrected to 160ms ease-in, retaining the 180ms ease-out entrance.
- `src/styles/centered-river.css:173` — [physics-active-state] Footer links lacked press feedback; added the existing 0.98 scale convention with 180ms transitions.
- `src/lib/page-reveals.ts:23` — [staging-one-focal-point] New entrances use a lead/body/detail hierarchy, small eased travel and bounded stagger; interaction never waits for an entrance.

| Rule | Corrected findings | Severity |
| --- | --- | --- |
| easing-exit-ease-in | 1 | LOW |
| physics-active-state | 1 | MEDIUM |

No outstanding findings in this motion scope. Scroll entrances are passive reading choreography; direct interaction feedback remains under 300ms. Earlier review entries below describe prior work.

---

# Current review: moving product nodes, full-detail performance and constant river height, 2026-10-07

The river retains its 1.65 vertical scale throughout the hero and diagram, removing the earlier 1.65-to-1 compression. The static diagram gets the same scale. Native resolution, line samples, brightness, colors, texture, dust, glints, moving dashes and camera zoom remain. Automatic under-load particle reduction is removed: the accepted 20,500 desktop / 10,000 phone particles remain at full density.

Rendering uses two passes instead of three: one line batch and one point batch that preserves both materials and original seed/draw order. Optional vertex-array caching has a plain WebGL fallback. Camera uniforms update only on scroll/resize; uniform-only camera trigonometry is prepared on the CPU instead of in each vertex. Line vertices skip unused glint math, and points skip unused dash math. Scroll dimensions are cached on resize, product-label updates avoid allocating unused curves, and diagnostic DOM writes occur at most four times per second. Offscreen/hidden suspension preserves particle phase; camera changes and resizing queue the latest state without drawing while suspended.

Products A–G now follow seven actual incoming source lanes using the field’s integrated, reversible phase. Their staggered arrivals enter wide, shrink and fade before the project. Native transform/opacity updates reuse the existing renderer loop; labels do not sit in a separate row. Seven static annotations remain in the fallback.

Validation: `npm run check` reports 39 files, no errors/warnings/hints. Build: six pages, three canonical hashes verified; scene island 16.43 kB / 7.19 kB gzip. `verify-field-performance.mjs` checks 24,240 equivalent camera positions with the requested constant height and 30,507 exact particle seeds/material assignments, with no particles dropped, plus 140 canonical product positions and convergence/shrink/fade/reversal/wrap behavior across four viewport sizes. Resolution, camera timing and existing curve-continuity checks pass.

Browser 4K: 3840 × 2039 native backing at DPR 1, 20,500 particles, two draw calls and cached vertex inputs. Normal desktop retains its 2880 × 1558 backing at DPR 2. Idle CPU submission snapshots changed from 0.040 to 0.018 ms/frame at desktop and 0.026 to 0.020 ms/frame at 4K. These small timing samples vary; they measure CPU submission only, not GPU execution, physical-device FPS or a guaranteed speedup. The stronger evidence is the reduced command/attribute/uniform work and preserved visual parameters.

Desktop and 390 × 844 mobile browser review confirms moving native labels, the taller diagram, continuous third scene, working reversal, focus transfer and unchanged phase while offscreen. Direct mobile taps switch both modes; mobile retains a 390 × 691 backing and 10,000 particles, with no horizontal overflow. The final 3840 × 2160 browser check retains a native 3840 × 2039 backing, 20,500 particles and two draw calls. No errors/warnings were observed. Optional vertex-array-unavailable and reduced-motion/context-loss paths are reviewed in source, not claimed as forced browser tests. Evidence: `tributary-moving-products-desktop.jpg` and `tributary-moving-products-mobile.jpg` alongside this task. Older review entries below describe superseded adaptive density and three-pass rendering.

---

# Current review: crisp large-screen rendering and brighter extremes, 2026-10-07

The fixed 900,000/420,000-pixel backing-store budgets and quality-dependent resolution scale are removed. The renderer uses display pixel density up to 2× DPR, respecting GPU viewport dimensions. Adaptive economy mode reduces particle density without blurring the canvas. Sampling retains 160 segments for the curved source paths and 80 for their straight extensions. Outer filaments have 45% more opacity and outer particles 20% more; the hero's top fade floor increases from 0.42 to 0.80. Existing text masks and confluence attenuation remain.

`npm run check`: 35 files, no errors/warnings/hints. Final build: six pages, three canonical hashes verified; active island 14.87 kB / 6.62 kB gzip. `node scripts/verify-field-resolution.mjs` passes native 4K, 2× Retina, phone and hardware-limited cases. At a 3840 × 2160 browser viewport, the canvas CSS area and backing store both measure 3840 × 2039 at DPR 1, replacing the earlier 1302 × 691 backing store. At the normal 1440 × 900 viewport with DPR 2, it measures 2880 × 1558 for a 1440 × 779 CSS area. The 4K DOM has no horizontal overflow and the hero remains centered.

Browser rendering confirms WebGL availability and brighter blue-white strands at the top. A 390 × 844 mobile viewport retains a native 390 × 691 backing store at DPR 1, readable hero/diagram text and no horizontal overflow. Browser error/warning logs are empty. Screenshots: `tributary-crisp-4k.jpg` and the updated `tributary-full-height-hero.jpg` alongside this task. These are browser viewport/resolution checks, not physical monitor performance profiling. Earlier pixel-budget notes below describe the superseded renderer.

---

# Current review: full-height hero and continuous camera, 2026-10-07

The hero reaches the top of its frame, and the diagram continues into a black third chapter. The camera rotates, pushes 16% closer and tracks along tangent extensions of the same source-derived current. Particles retain their lanes, seeded buffers and integrated phase; no dispersal/regrouping or contour replacement remains. The third scene identifies creators and maintainers as the proposed destination of value. Its destination label follows the same camera position. Existing diagram layout and original physical opening-scroll timing remain.

Validation: `npm run check` reports 33 files and zero errors, warnings or hints. `npm run build` builds six pages and verifies the three preserved canonical SHA-256 hashes. Active scene island is approximately 14.5 kB / 6.5 kB gzip. `node scripts/verify-river-story.mjs` verifies opening timing across four frames, settled reading holds and 1,000 bounded continuous camera states. The existing geometry verifier passes 252 joined/tangent-continuous states and 320 canonical-path assertions.

Browser review at http://localhost:4325/ used 1440 × 900 and 390 × 844. Both show the taller hero, unchanged vertical diagram, camera turn and final continuation with readable copy. Mobile has no horizontal overflow. Direction controls reverse settled velocity and phase without resetting the field; negative phase continues through the turn. Focus moves from the departing direction control to the arriving third-scene heading. Reverse scrolling was exercised. Browser errors/warnings are empty after the final build. These are browser viewport checks, not physical-device performance measurements.

Three draw calls and the existing pixel/DPR/particle budgets remain. Tangent extensions are uploaded once with the field, not generated during scroll. Reduced-motion, no-WebGL and script-free static scenes were reviewed in source; browser preference emulation/context-loss tests are not claimed. The registered ThreeUI runtime remains preserved separately; the active scene is the authorized custom material/camera adaptation.

Rendered evidence alongside this task: `tributary-full-height-hero.jpg`, `tributary-connected-desktop.jpg`, and `tributary-connected-mobile.jpg` in `/Users/adamperlis/Documents/Codex/2026-10-07/i-want-you-to-clone-a/`.

---

# Current review: shared blue-white artwork palette, 2026-10-07

The hero shader, shared FlowBands artwork, and static companions now use the same ink tokens: blue filaments (128,158,209), blue particles (120,158,219), and white glints (240,247,255). The gray currentColor override is removed, and shared artwork includes distinct white highlights. Invalid five-digit black alpha colors were corrected to valid eight-digit values, removing the gray fallback overlay on the closing invitation and restoring intended reading masks.

`npm run check`: 31 files, zero errors/warnings/hints. `npm run build`: six pages; all canonical ThreeUI hashes verify. Browser computed colors confirm both blue and white particles in the homepage community panel and closing CTA, manifesto, license proposal, signup, and confirmation artwork. Desktop 1440 × 900 and mobile 390 × 844 artwork were visually reviewed; mobile signup has no horizontal overflow. Hero motion/geometry remain unchanged. Lower artwork retains its static treatment. Rendered evidence: `tributary-shared-palette-desktop.jpg` and `tributary-shared-palette-mobile.jpg` alongside this task.

---

# Current review: streaming lines, restored material, simplified flow, 2026-10-07

The active renderer is the original Tributary WebGL material adapted to the rotated Gateway source cubic, rather than the registered iframe runtime. Source hashes remain unchanged and verify before every build. The diagram contains one headline, four labels, one segmented control and a short illustrative-model caption. There are zero pause controls and zero relationship-arrow overlays in the connected chart. The earlier review entries below refer to superseded revisions.

Validation: `npm run check` reports 30 files and zero errors/warnings/hints. `npm run build` builds six pages and verifies all three canonical hashes. Active scene island: 12.31 kB / 5.58 kB gzip. The geometry script passes its 252 legacy continuity cases and 320 rotated canonical-path checks across four viewport frames. Browser review used 1440 × 900 and 390 × 844 at http://localhost:4325/.

Desktop: one canvas remains through the hero, midpoint, and settled diagram. Its phase continues forward through scroll; source and native project center share the same 66% stage junction. Code selection reports outward motion, negative settled velocity, decreasing phase, and the correct pressed button; royalty selection restores positive velocity and increasing phase. The shader uses this same phase for moving line dashes and particles. Reversal does not reseed particles. Offscreen suspension stops the field and preserves phase. The first material pass made lines too faint; the final pass raises filament contrast, reduces strand count, and makes travelling dashes visible. Screenshots were reviewed after this correction.

Mobile: the final hero and diagram retain the streaming lines, blue-white particles, clear spacing, and no horizontal overflow. Controls are 44px high; the project label and controls do not overlap. Mobile code selection also reverses the field and updates pressed state. These are browser viewport checks, not physical-device profiling.

Secondary-button checks: actual pointer hover on hero and bottom CTA returns white backgrounds with black text and arrows. Keyboard focus on hero, bottom CTA, and confirmation secondary buttons returns the same colors with visible focus treatment. Arrow motion remains 200ms and uses the existing reduced-motion rule. No new application errors were observed; the browser log retains a Tailwind CDN warning from the earlier iframe revision.

Reduced-motion, script-free, unavailable-WebGL, and context-loss fallback paths were reviewed in source; browser preference emulation and forced context-loss tests are not claimed. The visible pause control was removed as explicitly requested.

Rendered evidence is saved alongside this task: `tributary-streaming-hero.jpg`, `tributary-streaming-midpoint.jpg`, `tributary-streaming-diagram.jpg`, `tributary-streaming-mobile-hero.jpg`, and `tributary-streaming-mobile-diagram.jpg` in `/Users/adamperlis/Documents/Codex/2026-10-07/i-want-you-to-clone-a/`.

---

# Historical reviews

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
