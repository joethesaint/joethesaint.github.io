# Biogas menu and button handoff

Use this as the implementation contract for another agent. Preserve behaviour before adding decoration.

## Copy/paste brief

Build mobile-first floating controls over a full-window 3D workspace. Give the movable menu a single gooey surface, a 56px circular toggle and labelled actions. Separate taps from drags, open the fan inward from the nearest edge, clamp every action to the viewport, and mirror a bare hairline vertical arc picker beside it. Apply the same liquid surface and press response to ordinary buttons, but exclude arc-picker options. Keep semantic native buttons, keyboard access, focus recovery and reduced-motion fallbacks. Do not leave old rectangular backgrounds behind the liquid layer. Loading belongs near the top centre and represents actual work. Do not add artificial waiting or unsupported performance claims.

## Where the implementation lives

- src/floating-controls.jsx: draggable toggle, edge-aware fan and keyboard controls.
- src/gooey-controls.jsx: shared liquid surfaces around existing native buttons.
- src/arc-picker.jsx: independent bare arc picker.
- src/effects.jsx: effect mounting, loading orb and shared press feedback.
- dist/style.css: single-surface styling, viewport layout and touch targets.
- dist/app.js: model state and native action handlers.

In the portfolio checkout these React sources live in biogas-ui/src and the deployed viewer lives in public/biogas. Build React effects with the existing build-effects script; do not alter the portfolio root framework just to import these effects.

## Input contract

1. Accept the primary pointer and left mouse button. Capture it on pointer-down so fast movement cannot escape the control.
2. Record starting pointer coordinates and menu position. Keep x/y in Motion values rather than rerendering React every frame.
3. Treat movement under 8px as a tap. A real drag closes the fan and changes position; releasing it must never also toggle the menu.
4. Handle tap explicitly on pointer-up. Suppress the following synthetic click briefly (currently 500ms), while retaining normal keyboard click behaviour.
5. Pointer cancel, root lost-capture and Escape restore the starting position. Ignore bubbled child lost-capture events.
6. Enter/Space activate the toggle; arrow keys move it 24px. Escape closes it. Expose instructions, aria-expanded and meaningful Open/Close labels.
7. A menu action closes the fan and returns focus to the toggle unless the action deliberately moved focus into a panel.

Do not disable touch scrolling across the entire interface to make one control draggable. Restrict gesture ownership to the actual control; the 3D canvas owns its own orbit/pinch gestures.

## Position and fan contract

Use measured viewport and persistent control bounds. Keep a 12px edge margin, reserve the header, and avoid the bottom assembly bar. Reclamp on resize and orientation changes. Use safe-area insets where needed.

Mirror horizontal fan offsets toward the centre: positive when docked left, negative when docked right. Mirror vertical offsets downward in the upper half and upward in the lower half. Clamp each 56px action individually after calculating its offset. The current reference offsets are 120/56, 66/110 and 0/134 pixels; treat them as tunable layout values, not a universal pattern.

Publish dock position when it moves. The arc responds to location by changing its anchor and curve direction. Its labels remain native tappable radio controls, with swipe, keyboard and selected-state feedback.

## One surface, two jobs

Liquid handles the merging silhouette. Motion handles position and press feedback.

- Liquid: neutral fill #30383b, blur 6, contrast 18; enough filter padding for the fan.
- Liquid.Item: use the working default morph positioning with x/y and a bouncy transition. In the installed version the move branch did not honour the same positioning path; verify package behaviour before changing it.
- Keep text and icons crisp and labels meaningful.
- Remove legacy button/container backgrounds, shadow plates and pseudo-element layers. Do not stack a rectangle behind the goo.
- Selection uses a subtle underline and font weight, not a second coloured plate.
- Shared press feedback: scale 0.94 then spring to 1 (stiffness 420, damping 24). Animate the same native host measured by the liquid observer so the silhouette and content move together.
- Release press feedback on document pointer-up/cancel, lost capture and window blur, because pointer capture can retarget the release.
- Keep closed fan actions mounted for animation but noninteractive and out of the tab order.
- For reduced motion or forced colours use plain controls with immediate state changes.
- Long reading panels can have one legible surface. The arc keeps its hairline brackets and does not inherit gooey backgrounds.

## Architecture caution

The current viewer enhances existing imperative DOM buttons using React host wrappers, preserving node identity and native handlers. For a new React application prefer React-owned button components with a shared variant API. If retaining enhancement wrappers, provide an explicit mount/unmount disposer and remove observers/listeners. Do not blindly copy selectors into another app.

## UX and evidence principles

Expose actual state with labels and aria-pressed/expanded, rather than making users interpret animation. Provide a recovery action such as Reset. Use at least 44px touch targets, clear visible focus and readable contrast. Show a thinking orb only while loading or transitioning.

Use specific, demonstrable promises: “Explore the assembly”, “Front”, “Plan”, “Fit”. Let the working interaction provide the evidence. Do not claim validated engineering performance, high frame rates or conversion gains without measurements. This applies the specificity, demonstration and testing principles discussed for Scientific Advertising without adding sales clutter.

## Acceptance checks

- Tap opens once; rapid mouse drag and finger drag reposition without accidental opening.
- Cancelling restores position. A second finger does not take over the gesture.
- All fan actions remain reachable at all four corners and after orientation changes.
- Dragging left/right mirrors the arc; labels remain tappable and swipe settles without fighting selection updates.
- Pointer-up outside a button restores its pressed scale.
- Every menu action, keyboard path, Escape and focus return still works.
- Closed actions have no tab stops; reduced motion/forced colours remain usable.
- No rectangular legacy surface remains behind gooey buttons.
- Test 320px, 375px, landscape and desktop sizes on actual touch as well as mouse.
- Reset recovers camera state; loading ends on completion and exposes failure instead of waiting forever.

# Storage and industrial model contract

Storage is model-specific. Do not copy a tyre tube into every design or infer “no storage” merely because there is no separate vessel.

| Model | Representation in this viewer |
| --- | --- |
| A | External concept capsules; original illustrative arrangement, unverified |
| B | External tyre-tube store from the school assembly |
| C | External tyre tube retained in the proposed supported layout |
| D | Gas space integrated into the fixed dome |
| E | Gas buffer integrated into the floating bell |
| F | Gas headspace within the tubular envelope; no separate holder shown |
| G | Raw-biogas roof buffers, digestate holding, and separate downstream LNG/CO₂ product tanks |

## German industrial reference

Model G is a schematic inspired by EnviTec's BioEnergiepark Güstrow. Public references describe double-membrane roofs providing variable gas storage, membrane upgrading, Bio-LNG production and CO₂ recovery/storage. These are different process functions: raw gas buffer, liquid digestate holding and downstream product storage.

Sources:
- https://www.envitec-biogas.com/references/guestrow
- https://www.envitec-biogas.com/news/important-milestone-for-envitec-biogas-in-sight

The model shows reception/metering, two sealed digesters with mixers and roof buffers, controlled digestate discharge, gas conditioning, membrane upgrading, LNG/CO₂ equipment, CHP utilities and a standby flare. Counts, dimensions, siting, piping and equipment shapes are illustrative, not a reconstruction or a safety-rated engineering design.

“Closed” here means gas-tight process containment with controlled feed, gas and digestate connections. It is not a thermodynamically closed system: material and energy cross the plant boundary. Do not advertise zero emissions, guaranteed safety or validated production.

The existing A/B/C design-completeness scores are not a comparison against the industrial plant. Industrial scale alone does not make a concept superior; feedstock, throughput, retention time, gas yield, energy use, operability and cost need a defined basis before scoring.
