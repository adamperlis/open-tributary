# Registered Gateway Flow integration

Source bundle: https://threeui.com/source-code/gateway-flow.json . Requested revision: `1920ad4fe34f`. Fetched and read in full before edits on 2026-10-07.

The three registered files are preserved byte for byte at their supplied paths. `src/shaders/source-manifest.json` records their full SHA-256 hashes. `npm run verify:threeui` verifies all three, and runs before every build.

The registered `NeuformBatchEffects.tsx` imports eighteen canonical HTML documents. The bundle supplies only Gateway Flow. The other seventeen imports were recovered from the official `@designcodeio/threeui@1.2.0` npm tarball using a TypeScript AST to decode literal strings without executing the downloaded modules. Its decoded Gateway Flow document matches the registered SHA-256. The shared stylesheet’s Fragment Mono font asset was recovered from the same official package. MIT, font, and third-party notices are retained under `src/shaders/THREEUI-*`.

The registered module’s `ConstellationField` export is the base constellation effect; it does not route the requested variant. `src/shaders/threeui-entry.tsx` supplies the variant routing from the official package’s public ConstellationField entry point. Vite aliases resolve the requested `@designcodeio/threeui` imports to these pinned local files. The three registered files remain unchanged.

The active homepage now mounts `src/components/RegisteredGatewayScene.tsx` with the exact requested variant and props. The registered source bundle was fetched again on 2026-10-07 and all three downloaded files match the pinned local hashes. The previous original WebGL renderer remains in version history/source but is no longer imported by the homepage.

The page host rotates the authored horizontal Gateway Flow field 90 degrees onto a vertical axis. Its CSS frame travels from the hero's lower junction to the diagram's project node inside one sticky stage. The source iframe remains mounted during this scroll transition. Host-level tint, opacity and a fading artwork mask retain the site's blue-gray material and clear reading hierarchy; no canonical control points, shaders, scripts, configured props, or dependencies are edited. Static scene paths and relationship arrow segments are derived from the rotated canonical cubic.

Pause, reduced motion, offscreen suspension, and hidden-tab suspension unmount the source iframe and reveal a static companion. Resume mounts a fresh authored scene; particle phase does not survive that explicit suspension. The registered effect retains its original converging particle motion, while the chart controls reverse the illustrative relationship arrows and update the explanation. They do not reverse the authored particles. The iframe keeps its `allow-scripts` sandbox. External CDN scripts and fonts described by the canonical source remain; the Tailwind CDN's own production warning remains visible in browser logs.
