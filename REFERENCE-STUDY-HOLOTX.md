# Holotx reference study — Tributary
Date: 2026-10-07

Reference: https://www.instagram.com/p/DQcjmmljJlI/?img_index=5
Author shown on the public post: holotx.
Evidence: the user-uploaded 720 × 900, 30 fps, 15-second MP4. Reviewed fourteen chronological frames at approximately one-second intervals, plus native-resolution detail frames at 0, 2.5, 5, and 10.5 seconds. Observations describe the visible result, not the artist's implementation.

## Visual structure and motion

At approximately 0–1 seconds, four families of curved filaments turn around a black cross-shaped opening. Around 2–3 seconds, these filaments lose coherence into a granular cloud as a circular opening emerges. Around 4–9 seconds, nested circular contours sit within broader rounded-square contours. Around 10–12 seconds, the lines disperse into a field of particles and the four curved arms return.

The defining behavior is continuity: the field appears to reorganize, with temporary loss of line definition during the transition. It does not read as separate illustrations being crossfaded or a rigid object being rotated. Changes in point density and brightness make the shape change feel material. The contour phases hold longer than the transition phases.

The dark opening is a major part of the composition. Lines and particles describe its boundary while leaving the center mostly empty. The overall geometry is ordered, but local brightness and particle placement remain irregular.

## Coloring

The background reads as black. Most visible material is exceptionally dark indigo, blue-gray, and violet. Thin lines occasionally reach a cold silver; tiny highlights appear brighter than the surrounding field. There is little broad, saturated color.

Approximate median decoded colors, grouped by brightness across the four detail JPEGs:

| Layer | Sampled range | Role |
| --- | --- | --- |
| Dark particle body | #050714 to #080816 | Almost-black blue/violet density |
| More visible material | #161628 to #1C1E2B | Quiet contour/particle field |
| Filament highlights | #37384C to #414350 | Fine cool lines |
| Sparse bright points | #838695 to #898A96 | Cold silver glints |

These are observations from decoded video frames, not an official brand palette or the shader's original color values. Alpha, antialiasing, and video compression affect the samples. The background should be treated separately as black.

Across the four native-resolution samples, 57.5–71.4% of pixels have no channel above 15/255. Only 0.16–0.37% have a channel of 128/255 or greater. This supports a dark composition with rare highlights, rather than evenly luminous artwork.

## Thin lines

The strongest contours are approximately one source pixel wide, with softer/subpixel-looking neighboring traces. They remain fine even where many curves overlap. Some traces are continuous; others appear fragmented by small gaps and specks. Brightness differs between adjacent paths and along a single path. The outer, more isolated curves are easier to distinguish; crowded bends become dense textured bands.

The reference does not look like a small set of equally spaced, equally bright dashed paths. Its apparent depth comes from multiple levels of clarity, density, and intensity.

## Dots, particles, and texture

Most points are extremely small, with a few sharper highlights. Density increases within the curved structures and drops into sparse floating flecks in the black gaps. There is a broad range of opacity, producing faint background material behind more legible filaments.

During the shape transition, points become more visually dominant as continuous contours weaken. The same texture accompanies both structured and dispersed phases.

The visible texture is integrated into the geometry: dense tiny points, fragmented strands, irregular spacing, and layered brightness. It is not a uniform grain overlay across the whole image. Some finest noise may also come from the compressed video; that should not be mistaken for confirmed shader behavior.

## Application to Tributary

Preserve the accepted composition: centered headline, subhead, actions, and two vertical flow scenes on one centerline.

Use the reference's material treatment for the river itself: fine cool filaments, dense dim particles, rare silver glints, and black negative space. Keep interface text and controls black/white while the visualization carries the restrained blue/violet color.

Give the field multiple visual layers: quiet background dust, coherent hairlines, and sparse brighter moving points. Avoid making every particle equally large or bright. Texture should become denser around the current and junction, while the reading area stays calm.

For the transition into the diagram, maintain the same field and vertical axis. Let strands loosen into points briefly and settle back into the labeled tributaries. Reveal diagram meaning as the material settles; keep labels and controls upright and readable. The reference's cross-to-circle sequence is an observation, not a requirement to change Tributary's flow topology.

Use a slow overall shape progression with quieter local particle motion. Keep form changes tied to scroll for the two scenes and reversible with scroll direction. Under reduced motion, retain the structured field and clear diagram with a static rendering.

The exact ThreeUI registered source must remain preserved. Its current Canvas 2D implementation uses fixed cubic paths and moving square particles. Matching the reference's changing field geometry would require a separate original renderer or integration layer, rather than silently changing those pinned files. WebGL is authorized by the user and is appropriate to evaluate for the denser field and shape interpolation.

## Evidence paths

Full sequence: /private/tmp/tributary-holotx-upload/frames/
Native-resolution details: /private/tmp/tributary-holotx-detail/frames/

The installed FFmpeg 9 removed the watch script's old -vsync option. A temporary copy under /tmp/tributary-watch-ffmpeg9 uses -fps_mode vfr instead. Installed skill files were not modified.
