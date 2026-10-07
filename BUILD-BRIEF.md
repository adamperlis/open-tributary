> Current implementation: the accepted layout now uses the monochrome, exact-source Gateway Flow direction in DIRECTION.md and THREEUI-SOURCE.md. Earlier palette and ribbon notes below are historical. The hero and first diagram are adjacent full-frame scenes with one continuous field.

# Tributary: revised launch build brief

Status: static design preview built, checked on desktop/mobile, and deployed to https://open-tributary.vercel.app. Forms and payments remain illustrative.

The complete redesign in DIRECTION.md supersedes the historical layout, typography, theme, and identity notes below. Adam explicitly authorized rebuilding every page and publishing the existing public preview. The creator-first audience and proposal scope remain.
Date: 2026-10-07
Source: https://claude.ai/artifact/QxSKqSWXxPho5eCv4zmG3k#171e4950-9494

## Scope and audience

Tributary is a proposed payment protocol for routing royalties to software creators. The Open Royalty License (ORL) is the proposed license standard alongside it. Primary audience: creators and maintainers who publish projects other people build on. Lead with their potential to receive royalties. Builders remain a supporting audience whose adoption incentives matter. This priority was explicitly requested by Adam after reviewing the preview.

The launch site explains the proposal, publishes draft principles and the manifesto, collects interest, and invites critique. It does not present working payments, accounts, dashboards, settled rates, or final license terms.

Intake decision: review the artifact and recommend changes. The repository currently has only a README, so there is no existing product UI to preserve. This document advances the review into an implementation brief; it does not authorize publication or claim an approved visual design.

Primary archetype: developer infrastructure proposal. Secondary influence: editorial publishing. The conversion is interest or feedback, not product activation.

Concept: This site should feel like a clearly annotated river map because maintainers and builders need to understand how value could return through a dependency chain and see what is still unresolved.

## Nature-derived visual study

Adam renewed the Windsurf reference and supplied a river-lettering image after the earlier visual pause. Study original natural curves and confluences for Tributary. /brand-study presents a compact confluence mark and expressive river lettering; header identity remains pending review of those studies. The homepage diagram adopts layered sediment/current/canopy gradient ribbons, with widths explicitly illustrative. Adam’s painting reference supplies warm parchment, vermilion, gold, olive, and blue. Light reading surfaces alternate with forest imagery and a dark community section. VIDEO-STUDY.md records the inspected brand-video frames and limitations. Preserve creator-first framing, draft status, and transparent limitations. No reference assets or proprietary lettering are used.

## Current creator-first direction

Homepage headline: “Your code. Their products. You should get paid.” Lead with potential income from products built on a creator’s project; qualify the mechanism as a whitepaper proposal. Primary action: “Join as a creator.” Secondary: “Read the proposal.”

The river diagram starts in royalty mode. Product A, Product B, and Product C are sample earning products; “Your project” is the royalty recipient. Royalties point from those products to the creator; code points outward in the opposite direction. Both desktop and mobile diagrams share this perspective. No earnings figures or functioning payments are implied.

The explanatory sequence is publish a project, others build on it, and share in eligible product earnings. Existing rights and final terms remain unresolved. Homepage links directly to flaws, with clean-room development first. The license page discusses adoption, attribution, payment coverage, license boundaries, royalty stacking, and governance, and states conditions under which the model should change or stop. The manifesto’s attribution overclaim has been corrected. Attribution records would distinguish reuse, adaptation, and known references; credit alone would not establish payment liability. The draft now addresses source-informed AI rewrites and rejects an automatic AI rewrite discount.

The signup role labeled “Creator” retains the existing `maintainer` query/value for compatibility. The old two-audience copy below documents the initial proposal and does not override this decision.

## Composition choice

Direction A, recommended: an asymmetric opening with the proposition on the left and a labeled dependency/royalty diagram on the right. The diagram is evidence of the proposed mechanism and establishes the river identity. Use typography, connecting lines, and whitespace rather than a dashboard or card grid.

Direction B, considered: an editorial manifesto opening with an oversized statement and a river divider before the explanation. This gives the argument prominence but delays the mechanism for visitors arriving from the article. Retain its long-reading qualities for the manifesto instead.

This is a composition proposal, not a completed reference study. Stripe and Linear are broad architecture influences from the source brief; no claim is made that their pages were visually inspected for this review.

## Routes and shared navigation

- `/`: proposition, proposed flow, audiences, open questions, signup.
- `/license`: proposed principles, draft status, unresolved questions, feedback.
- `/manifesto`: supplied article, byline, discussion link, feedback.
- `/join`: standalone signup; support `?role=maintainer`, `builder`, or `both`.
- `/join/thanks`: signup confirmation and optional sharing.

Header: Tributary wordmark linked home; Manifesto; License; Join the waitlist.
Footer: License; Manifesto; GitHub; X when the actual account is supplied; B150. Attribution: “A B150 project.”

License feedback should link to its own feedback section, not route a visitor into signup. Feedback is available independently of the waitlist.

## Home: final proposed copy and sequence

### 1. Opening

Eyebrow: “A proposed royalty model for shared software”
Headline: “Open source should pay the people who build it.”
Subhead: “Free to build on. Royalties when you earn. We’re designing Tributary to route them back to the creators your app depends on.”
Primary action: “Join the waitlist”
Secondary action: “Read the manifesto”
Status line: “In development. License principles are a public draft.”

Keep the original headline as the thesis. The status and subhead distinguish intent from a working service. Do not characterize the ORL’s formal license classification without resolving that wording separately.

### 2. The proposed flow

Heading: “When an app earns, value should flow back.”
Introduction: “Shared code makes new software possible. Tributary proposes a way for the people maintaining that foundation to share in the value it creates.”

Three steps:
1. “Build freely.” — “The proposed ORL would allow personal use and remixing without a royalty.”
2. “Earn revenue.” — “Commercial revenue would trigger a royalty under terms still being developed.”
3. “Return value.” — “Tributary is intended to distribute that royalty across the creators in your app’s dependency chain.”

Diagram caption: “Illustrative dependency chain. Proposed flow; no rates or payment amounts are shown.”
Pairing line beneath the diagram: “The ORL defines the proposed obligation. Tributary would handle the distribution.”

### 3. Two audiences, one signup

Heading: “Help shape the model.”
Maintainers: “You maintain the foundation.” — “Tell us what a fair royalty model would need to do for your project.” Action: “Join as a maintainer”.
Builders: “You build on it.” — “Help define a model that is practical to adopt and clear to build with.” Action: “Join as a builder”.

These can be two aligned text columns separated by a rule. Their actions select the role in the form without moving keyboard focus unexpectedly. On mobile, stack them before the form.

### 4. Open questions

Heading: “The details need to stand up to scrutiny.”
Copy: “What counts as revenue? How should royalties reach indirect dependencies? How would the ORL work alongside other licenses? These questions are part of the proposal, not settled terms.”
Action: “Read the draft principles”.
Secondary action: “Give feedback”.

Keep this short. The license page carries the fuller discussion. This section supplies honesty and a useful reason to explore rather than repeating the hero.

### 5. Signup

Heading: “Be part of what comes next.”
Copy: “Join as a maintainer, builder, or both. We’ll share progress as the proposal develops.”
Fields: email required; role required (Maintainer, Builder, Both); project or GitHub URL optional; note optional.
Button: “Join the waitlist”.
Privacy note: “We’ll use your email for Tributary updates. You can unsubscribe.” Use only after that handling and unsubscribe path are implemented.

Footer positioning line: “The proposed model aligns Tributary’s revenue with creators’ royalties.”

## License page

Title: “Open Royalty License”
Badge: “Draft principles”; omit a version identifier until an actual revision history exists.
Intro: “The ORL proposes a royalty obligation when products built on licensed code earn revenue. These principles describe the intended model; the terms are still being developed.”
Prominent notice: “This is a statement of principles, not final license terms. Legal text is in progress.”

Proposed principles:
- “Personal use stays free.” Personal use and remixing would not trigger royalties.
- “Earnings trigger an obligation.” Revenue-generating uses would contribute under terms still being defined.
- “Contributions relate to revenue.” The royalty basis, thresholds, and rates remain open design questions.
- “Distribution should be automatic.” Tributary would aim to track dependencies and route royalties; the mechanism is not yet implemented.
- “Attribution follows the code.” Creator credit and dependency attribution should survive reuse.

Follow with open questions about defining revenue, identifying dependency contributions, compatibility, and auditing attribution. Invite relevant experience without presenting answers as settled.

Feedback anchor: `#feedback`. Heading: “Help us make the principles workable.” Source tag: `license`.
Do not include comparative claims about MIT/GPL until the specific comparison has been checked. This brief makes no legal assessment.

## Manifesto and confirmation

Manifesto title: “The era of personal software”. Use the actual article; do not invent its body or publication date. Reading width 680px, relaxed line height, supplied byline, stable headings. Include the original X post only when its URL is supplied.
Feedback heading: “This is a proposal. Tell us what we got wrong.” Name optional; email optional; role required (Maintainer, Builder, Company, Other); feedback required. Email helper: “Optional, if you’d like a reply.” Button: “Send feedback”. Success: “Thanks. Your feedback has been received.” Source tag: `manifesto`.

Thanks page: “You’re on the list.” Copy: “We’ll share updates as Tributary and the ORL take shape.” Actions: “Read the draft principles” and optional “Share on X”. Proposed share copy: “I’m following Tributary: a proposed way for software creators to earn royalties when products built on their code make money. [canonical URL]”. Do not ship the placeholder URL.

## Visual system and responsive geometry

Maintain the source brief’s calm tone and river identity. Recommend a warm paper surface with dark slate text and restrained river-blue accents for the first prototype. Long-form pages share the same system. Add dark mode after one composition is verified, before public launch if retaining the source requirement.

Retain Inter for interface/heading text and the system Baskerville stack for editorial reading, as specified in the source. Do not bundle a proprietary Baskerville font without suitable rights. Use no more than two families. Font loading and actual wraps require verification during implementation.

- Desktop content width: 1200px maximum; 32px outer inset. Hero split approximately 5:7; 48px column gap; 96px vertical spacing.
- At 768px and below: single column; 24px outer inset; 64px major section gaps. Opening copy first, diagram second. Avoid shrinking the entire desktop diagram.
- At 390px: 40px headline, 16px supporting text/actions, 12px eyebrow/status; desktop headline 64px. Hero weights 400/500/600, maximum three sizes per component.
- Section headings 32px desktop/28px mobile; body 18px. Editorial body 20px with approximately 1.65 line height and 680px maximum width.
- Use an 8px spacing scale. If a bordered signup surface helps grouping, use 24px radius and 24px safe inset; do not wrap every section in cards.
- Keep documents, labels, and diagram nodes straight and aligned. No decorative rotation or perspective.
- Use Solar Linear icons only where needed, subject to glyph and license verification. Text remains the primary explanation.
- Give touch controls at least 44px targets; visible focus; labelled fields; errors beside fields; adequate text/control contrast in both themes.

## Diagram specification

Depict three named sample dependency nodes feeding an app. Distinguish a conceptual dependency map from actual tracked projects. Do not use real project logos or imply adoption.

Code/dependency flow: creators and dependencies toward the app. Royalty flow: from an earning app back toward its dependencies. Name the direction in text; do not depend on animation or color alone.

Suggested illustrative labels: “UI library”, “Data toolkit”, “Utility package”, “Your app”. Add “Sample dependencies”. Use separate labeled views or paths so opposing flows do not compete. In the settled state show the full relationship and its labels.

Mobile: recompose as a vertical dependency tree and a separate royalty-return explanation, keeping labels legible. Provide equivalent semantic text. Static SVG first; defer animation until the still diagram explains the model.

## Motion contract: 12-principles pass

- One focal animation: the explanatory river. Remove the CTA border beam and universal scroll reveals.
- Prefer a short user-selected flow explanation over perpetual particles. Trigger: choose “Code flows in” or “Royalties return”. Consequence: corresponding path emphasis changes; settled state: its directional labels remain visible.
- Selection feedback uses 180ms ease-out transitions; user-triggered motion completes within 300ms. If any longer autonomous explanatory sequence is added later, provide pause/replay and assess its purpose separately.
- Use a short moving segment with non-linear easing only if its direction remains intelligible. Constant linear motion is reserved for progress indication under the selected animation skill.
- Buttons: 160ms transform/color transitions and active scale 0.98. Similar controls share timing; no arbitrary squash/stretch or bounces on signup actions.
- Entrances ease out, exits ease in. If a sequence needs overshoot, use a spring; the current design does not need it.
- Stagger at most 50ms per item; no staged reveal is needed for basic reading content.
- Reduced motion: immediate path emphasis and static directional arrows. All meaning remains available without motion, hover, or JavaScript.
- Loading state reflects the actual request. Never animate an apparent successful payment or signup before server confirmation.
- Avoid a modal where inline forms suffice. If a dialog is introduced, dim the backdrop and define explicit overlay layering. Context menus should not animate on entrance.

No animation-code findings are claimed: there is no implementation to audit yet.

## Forms and data behavior

Keep Astro, TypeScript, Supabase, Resend, and Vercel as the intended stack. Confirm current package/adapter configuration against official documentation when implementing. Prerender content routes; use server endpoints for submissions.

Server-only database access, validated payloads, and policies denying anonymous table reads are required. Prefer submission through controlled endpoints rather than granting broad anonymous table inserts. Keep privileged keys off the client. Define bounded field lengths, accepted roles, email validation, safe URL handling, request rate limits, and an invisible honeypot.

Waitlist record: id, normalized email, role, optional project_url/note, bounded source metadata, created_at. Establish duplicate-email behavior: return a generic confirmation without revealing whether the address was already present. Do not silently overwrite an existing role or note. Use idempotency for retries.

Feedback record: id, optional name/email, role, message, bounded source metadata, created_at. Save the record before attempting notification delivery. Queue or record failed delivery for retry; email failure must not invalidate a saved submission. Avoid duplicate notifications on retries.

Send signup confirmation once per new signup. Notify support@b150.ai of feedback; use validated optional reply-to. Escape user text in emails. Preserve user-entered fields on recoverable failures and prevent simultaneous duplicate submissions.

Track successful durable signups by role and source, without sending email, notes, or feedback text to analytics. Capture a small allowlist of UTM values rather than arbitrary URLs/query strings. Verify the chosen analytics configuration before claiming it is cookieless.

Include privacy information, retention and unsubscribe behavior appropriate to the actual implementation. Do not promise behavior that is absent.

## Implementation order and acceptance evidence

1. Build the static home plus shared header/footer and still diagram. Review desktop and mobile before adding other visual effects.
2. Add license principles and the supplied manifesto. Keep draft status visible, with separate feedback paths.
3. Implement waitlist and feedback server endpoints, database constraints/policies, delivery retries, and complete form states.
4. Add the limited motion contract and theme support. Verify reduced-motion and JavaScript-disabled reading behavior.
5. Add per-page metadata/OG images, sitemap, canonical URLs, analytics, and source capture once the domain is known.
6. Verify a new signup, duplicate signup, invalid input, saved feedback, email-delivery failure, rate limit, and retry. Use clearly identified test submissions. Verify the real storage and delivery boundaries before calling forms functional.

Save screenshots at 1440x900 and 390x844: opening viewport, diagram, and form success/error. Check keyboard order, focus, visible error association, 320px overflow, contrast, both themes, and reduced motion. Run build/type checks. A screenshot alone does not verify animation or backend behavior.

## Inputs still needed for launch

- Original X post URL. The updated Claude artifact supplied the full manifesto and Adam Perlis byline; both are now included.
- Canonical domain and actual social/GitHub links.
- Reviewed principles wording and any decision about a draft version number.
- Supabase/Resend configuration, verified sender, and operational handling for delivery retries.
- Privacy/contact text and unsubscribe handling.

These do not block a static concept preview. Publication, production submissions, and legal conclusions are outside this review’s completed scope.
