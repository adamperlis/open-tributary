# Tributary: complete redesign, 2026-10-07

## Brief and authorization

Adam explicitly authorized a complete redesign after rejecting the earlier palette revision. Start from scratch across the homepage, proposal, manifesto, signup, confirmation, shared navigation, and footer. Preserve the product: a whitepaper proposal for returning royalties to software creators, with builders as a supporting audience. Preserve transparent limitations and community feedback. No functioning payment or collection system is claimed.

Primary archetype: research/editorial proposal. Secondary influence: expressive developer identity. Conversion: creator participation and informed critique. Concept: a confluence with a clear route back to its source, because creators need to see that shared code can carry shared upside.

## Reference evidence

The Metalab homepage walkthrough was inspected at 1024px using 18 chronological frames spanning 0–14 seconds. Source: https://cdn.sanity.io/files/nuxb3jim/production-july-2025/eb4efa4799949c0bd26ea7af274e60626fe7b46b.mp4 . Details and limits are in VIDEO-STUDY.md. Structural observations: diagonal ribbons across a navy opening at 1–3 seconds, hairline-separated light information at 4–5 seconds, a shared ribbon crossing two colored audience panels at 6–9 seconds, a full pink statement at 10 seconds, and recomposed mobile color chapters at 11–14 seconds. No source footage, trademark, proprietary font, or reference artwork is redistributed.

Adam’s river-logo image supplies the method of deriving identity from natural bends and confluences. The painting supplies warm cream, coral, yellow, green, and blue. Their literal muted palette alone failed the brief; the new design combines these with more expressive contrast and composition.

## Composition decision

A, selected: a full-width dark identity opening with a creator proposition, bright meandering ribbons, and a cream manifesto note; then cream thesis/status facts, a sage interactive mechanism, unequal plum/forest audience panels, a full coral flaws chapter, a forest participation chapter, and a navy typographic footer. The mechanism has its own explanatory scene after the identity moment.

B, rejected: a centered editorial manifesto first, followed by restrained reading sections and a small diagram. It would delay the creator’s potential income and repeat the earlier design’s weak hierarchy.

The proposal has a full plum masthead and a sticky reading outline. The manifesto has a coral masthead, actual author byline, and essay outline. Signup has a forest story alongside cream fields. The confirmation stays explicitly a preview.

## Measured composition and typography

Desktop reviewed at 1280 × 720 and 1440 × 900. At 1440px, the hero headline is 95.76px, weight 400, line-height 1.02, with three deliberate lines. Outer inset 64px; hero copy width 448px; manifesto note width 296px, inset 24px; hero art height 640px, cropped below/right. Thesis grid 7:4, mechanism 4:6, audience panels 7:5, reading grid 3:8. The diagram is capped at 640px so labels, caption, and controls remain one readable scene. Audience panel safe inset 48px; radius 8px is a deliberate identity-panel departure from the skill’s optional 24px recipe. Small actions and form fields use square corners. No tilted cards.

Mobile reviewed at 390 × 844 and 320 × 740. Headline 40px and 36px respectively; the narrowest phone wraps the last phrase across two lines. Outer insets 24px and 16px. Navigation becomes two rows; the manifesto note follows an enlarged ribbon crop. The vertical mobile diagram is a separate SVG composition. Audience panels stack, reading outlines become inline links, and signup’s story precedes the fields. Text and controls stay above decorative art; the final outlined action has a solid forest backing after a contrast correction.

DM Sans Variable carries headlines, prose, and controls: open counters, light oversized forms, and readable long-form text. It replaces Inter/system serif. DM Mono carries figure numbers, provenance/status labels, and section indices. These are the only two loaded families. Both use self-hosted OFL files with license notices under public/fonts. The original pairing was compared on the actual headline and prose; the new pairing better connects expressive chapters to precise proposal annotations. Solar remains the coherent icon set.

## Motion and media opportunity pass

- Load → one hero ribbon group shifts 4% and settles over 1800ms with ease-out. Text is available immediately. This is a single decorative introduction, not a loop. Reduced motion removes it.
- Diagram selection → reversed arrow markers, changed caption/figure number, and pressed state; transitions at 180/240ms. Static HTML begins in royalty mode with the explanatory caption already visible. Buttons enable only when JavaScript loads.
- Desktop wheel/anchor navigation → Lenis 1.3.26, 260ms cubic ease-out, running only on fine pointers at widths above 768px. Touch remains native. Reduced motion disables the instance; preference changes are handled live. Page hide destroys the instance; restored pages reconfigure it. The document uses native layout and semantic anchors, with the sticky header offset accounted for.
- Action presses → 0.98 scale with consistent 180ms timing; focus is immediate. No overshoot, stagger, fake payment processing, or observer-hidden reading content.

GPU/shader media was considered for evolving gradients. Original SVGs provide scalable confluence geometry, controllable gradients, portable static fallbacks, and a small payload; this scene does not need 3D space or material simulation. Keeping native document layout also preserves reading, selection, and anchor behavior. Real-device performance profiling remains unverified.

## Evidence and limitations

See REVIEW.md for actual rendered checks, keyboard operation, form behavior, and screenshot paths. JavaScript-disabled and reduced-motion behavior were checked in source/static build; no browser runtime emulation is claimed. The signup and feedback forms remain explicit demonstrations. Allocation rules, rates, clean-room boundaries, AI provenance, license compatibility, and payment collection remain unresolved proposal questions.
