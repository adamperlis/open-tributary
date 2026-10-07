# Registered Gateway Flow integration

Source bundle: https://threeui.com/source-code/gateway-flow.json . Requested revision: `1920ad4fe34f`. Fetched and read in full before edits on 2026-10-07.

The three registered files are preserved byte for byte at their supplied paths. `src/shaders/source-manifest.json` records their full SHA-256 hashes. `npm run verify:threeui` verifies all three, and runs before every build.

The registered `NeuformBatchEffects.tsx` imports eighteen canonical HTML documents. The bundle supplies only Gateway Flow. The other seventeen imports were recovered from the official `@designcodeio/threeui@1.2.0` npm tarball using a TypeScript AST to decode literal strings without executing the downloaded modules. Its decoded Gateway Flow document matches the registered SHA-256. The shared stylesheet’s Fragment Mono font asset was recovered from the same official package. MIT, font, and third-party notices are retained under `src/shaders/THREEUI-*`.

The registered module’s `ConstellationField` export is the base constellation effect; it does not route the requested variant. `src/shaders/threeui-entry.tsx` supplies the variant routing from the official package’s public ConstellationField entry point. Vite aliases resolve the requested `@designcodeio/threeui` imports to these pinned local files. The three registered files remain unchanged.

The originally configured component and exact requested props remain in `src/components/RegisteredGatewayScene.tsx`. The three registered files, recovered supporting documents, fonts, notices, and alias remain unchanged and verified by every build.

After studying Adam’s uploaded Holotx reference, Adam authorized the proposed original WebGL renderer. The current homepage therefore uses `src/lib/tributary-field.ts`, mounted by `GatewayScene.tsx`. This is an original Tributary implementation, not the registered ThreeUI effect or an approximation presented as exact source. It uses the same cubic relationship geometry to retain the accepted centered vertical composition and annotation alignment, with newly authored fine filaments, round particles, blue-violet texture, and scroll dispersion.

One GPU canvas remains mounted across both scenes. Pause freezes its phase; resume continues from that phase. Direction reversal changes velocity without resetting positions. Reduced motion, no WebGL, shader failure, and context loss show the static companion. Hidden tabs and offscreen stories stop the animation loop. The active homepage no longer loads the isolated iframe or its external script/font dependencies. The original configured component is retained separately for provenance, rather than patched to claim new motion is authored ThreeUI behavior.
