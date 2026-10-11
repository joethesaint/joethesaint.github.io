# Biogas viewer style contract

Hairline is the default on first load, Reset and Clear saved view. Existing saved camera/design settings migrate once to Hairline; subsequent explicit style choices are saved in `biogas-design-studio-state-v2` and restored on reload.

- Keep the charcoal workspace, precise silhouettes and fine feature edges. Geometry supplies the detail: fittings, fasteners, seams, supports and valve mechanisms.
- A visible style readout tracks the active selection. Switching designs, process routes or camera views preserves it. Gallery thumbnails use that same style in an isolated scene.
- Hairline keeps solid surfaces dark and edges readable. CAD keeps original material colours with edges; Solid keeps materials; Skeleton and X-ray expose internal geometry.
- Gas markers are an educational route overlay. They use real 3D route coordinates with depth testing disabled so opaque Hairline pipework cannot hide the explanation. They do not represent emitted light, measured gas flow or pressure.
- Valve motion, marker fading and cycle status share the same pure cycle model. The handle opens through a quarter turn and closes before the resting phase.
- The compression route is labelled as a concept. Its equipment geometry has no dimensional, capacity, certification or pressure-rating claim.
- Keep controls outside the moving geometry, use safe-area spacing and 44 px touch targets, retain explicit exits, and preserve step navigation with reduced motion.

Anatomy reference: https://skills.wheresryan.sh/anatomy
