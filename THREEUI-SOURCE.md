# Registered Gateway Flow integration

Source bundle: https://threeui.com/source-code/gateway-flow.json . Requested revision: `1920ad4fe34f`. Fetched and read in full before edits on 2026-10-07.

The three registered files are preserved byte for byte at their supplied paths. `src/shaders/source-manifest.json` records their full SHA-256 hashes. `npm run verify:threeui` verifies all three, and runs before every build.

The registered `NeuformBatchEffects.tsx` imports eighteen canonical HTML documents. The bundle supplies only Gateway Flow. The other seventeen imports were recovered from the official `@designcodeio/threeui@1.2.0` npm tarball using a TypeScript AST to decode literal strings without executing the downloaded modules. Its decoded Gateway Flow document matches the registered SHA-256. The shared stylesheet’s Fragment Mono font asset was recovered from the same official package. MIT, font, and third-party notices are retained under `src/shaders/THREEUI-*`.

The registered module’s `ConstellationField` export is the base constellation effect; it does not route the requested variant. `src/shaders/threeui-entry.tsx` supplies the variant routing from the official package’s public ConstellationField entry point. Vite aliases resolve the requested `@designcodeio/threeui` imports to these pinned local files. The three registered files remain unchanged.

`src/components/GatewayScene.tsx` uses the exact configured component, variant, mode, and ten numeric props. The authored component creates a sandboxed srcDoc document containing its canonical effect and isolation controls. This is its implementation, not an embedded documentation page. Its scripts, paths, click response, curves, responsive resizing, and motion are preserved. The Gateway Flow variant actually draws on Canvas 2D; no extra WebGL implementation is invented from the runtime category in the brief.

One mounted runtime serves both the hero and first mechanism scene. Its containing sticky stage releases at the end of the second scene. Desktop places the field to the right of the copy; mobile allocates a shared lower field so the prose remains legible. Annotation arrows and companion SVGs use the canonical cubic geometry. These show illustrative relationships, not measured payment volumes. Selecting code reverses the semantic arrow markers; the authored ambient particles still converge in both modes, as stated in the caption.

Pause removes the authored iframe, stopping its animation, and displays a static companion derived directly from the canonical 80 cubic paths. A live reduced-motion preference does the same. Offscreen and background tabs also suspend the mounted runtime. These are host-level accommodations, with no patch to the registered code. Resuming recreates the authored runtime. The original external GSAP, Tailwind, Iconify, Google Fonts, and residual document asset paths remain unchanged, per the source-preservation requirement.
