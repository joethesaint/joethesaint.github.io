# TP–7 concept / future project shelf

Purpose: Joseph's reusable product-modelling study for a later project, separate from the biogas models. Started 2026-10-05 from the supplied TP-7 Field Recorder.html prototype; that original was kept unchanged. The new concept corrects its 120 × 150 × 24 envelope to the manufacturer-published 68 × 96 × 16 mm body envelope and adds a reference-inspired connector/control arrangement.

Run from the portfolio root: node biogas-ui/concepts/tp7/build.mjs. Output: public/biogas/tp7.html, a bundled HTML with Three.js and OrbitControls inline. Open the downloaded file directly without a server; no runtime CDN or font requests are required. Existing project vendors provide dependencies. Local imports are relative to this source checkout.

Features: orthographic orbit/zoom, camera presets, tap-to-inspect external parts, hairline geometry, theme switch, simulated Record/Play/Stop/Memo/scrub actions, shared live display and SVG isometric transport plate. Keyboard R/P/S operates the same handlers. Reduced motion stops the decorative reel rotation. No audio capture, permissions, recording files or internal device CAD are implemented.

Reference basis:
- https://teenage.engineering/products/tp-7 — product imagery, motorised reel, side rocker/memo, connectors and published body dimensions.
- https://teenage.engineering/guides/tp-7 — external hardware reference.
- Public product-image references obtained from the official product page: https://assets.teenage.engineering/_img/684689e25740f25d964ac614_128.webp and https://assets.teenage.engineering/_img/6847eb4cba47600f133d4741_128.webp . Images remain source references rather than redistributed assets.
- https://github.com/MrBongoC/ai-iso-skill — skills/iso-figure/SKILL.md, fetched through GitHub; MIT projection kernel, non-scaling hairline strokes, numerical plate framing, shared state, working pressable SVG controls and live readout.

Skill adaptation: the user explicitly requested a TP-7 in Three.js, so the skill's SVG-only/no-product-silhouette defaults are overridden for the 3D reference study. Its independent SVG plate retains monochrome planar construction. This does not install a global skill or turn the model into manufacturer-certified geometry.

Accuracy: envelope is specification-based. Reel diameter, radii, button sizes, engraving, port offsets and rear screws are approximations interpreted from references, not measured CAD. Product revisions may vary; verify multiple high-resolution orthogonal photos before treating this as a faithful replica. The rocker is inspectable and uses a simplified +5-second tap rather than a complete pressure-controlled scrubbing mechanism.

Next-project possibilities: dedicated portfolio case study, wheel drag scrubbing with pointer capture and bounded angular delta, genuine local audio demo with explicit consent, more accurate control symbols/engraving, and camera-fit automation. Do not invent the device's internal electronics for an exploded view without evidence.

## Additional user-supplied reference

Tripo model: https://studio.tripo3d.ai/3d-model/99d6611b-c4cc-42bb-a0e4-825658729d09?invite_code=QZXME0
Saved on 2026-10-05 for later review. The shared viewer was inaccessible through the available retrieval route; no model geometry was downloaded or merged. Biogas remains the main project.
