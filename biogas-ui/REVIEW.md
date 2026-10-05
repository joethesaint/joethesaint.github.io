# Biogas viewer review — 5 October 2026

Scope: current Three.js viewer, React/Motion controls, portfolio narrative and personal-document exposure. This is a code inspection and browser heuristic review, not a conversion study, real-device benchmark or engineering validation.

## Findings and changes

| Priority | Finding | Change | Verification |
| --- | --- | --- | --- |
| High | The case study linked directly to a personal Google Doc. | Removed the report URL from the shipped page. Kept the engineering context in the case study. | Shipped HTML contains no Google Docs/Drive report link. This does not revoke the document's existing sharing permissions or remove previously shared copies. |
| Medium | Reset did not restore camera interaction after orbit was paused. | Centralized orbit locking; Reset enables orbit and restores the toggle. | Pause → Reset → camera drag regression check. |
| Medium | Assembly buttons updated the model but left the explosion slider stale. | One setter updates the target, slider and accessible percentage together. | Exploded = 100; Assembled and Reset = 0. |
| Medium | A radial action could leave focus on a hidden button after closing. | Return focus to the control toggle when focus would otherwise remain inside the closed radial menu. Panel actions retain focus in their opened panel. | Keyboard Flow action and Escape; panel focus retention. |
| Medium | The portfolio description did not make the software contribution immediately testable. | Specific implementation claims, a working assembly CTA, and an implementation explanation. Kept concept/reference distinctions and unverified engineering limits. | Case-study CTA closes the dialog and opens the exploded model. |
| Medium | WebGL failure left scene actions clickable even though the renderer was unavailable. | Disable scene actions in the failure path while keeping the case study and implementation notes available. | Forced WebGL failure: scene CTA disabled, notes still open. |
| Medium | Hidden-dialog liquid surfaces could animate from zero size and lag behind their labels. | Observe the real content bounds directly; spring the shared content/surface target on press. Retained the radial menu’s bouncy motion. | Visually inspect the case-study surface after opening; existing action regressions still pass. |
| Low | Icon-only controls lacked complete accessible names or visible gesture instructions. | Added fullscreen/fit names and a screen-reader description for the movable control. | Names present; fullscreen name tracks its state. |

## Heuristic rationale

Jakob Nielsen's heuristics: visible status, clear recovery, recognition over recall, consistent controls and task-focused help. Preserve the top-centre preparing indicator, selected-state feedback, bounded gestures, native dialog semantics and keyboard alternatives.

Source: https://www.nngroup.com/articles/ten-usability-heuristics/

The liquid styling is decorative. It must not obscure labels, reduce touch targets, alter focus order or make state harder to understand. Bare panels still need readability checks over each model; eliminating duplicate backgrounds does not itself prove sufficient contrast.

## Scientific Advertising applied to a portfolio

Specificity: name the actual software work instead of calling the project advanced or revolutionary.

Demonstration: let visitors inspect, explode and change views before asking them to read more. The live viewer and inspectable source provide evidence without publishing the personal report.

Relevance: connect the school engineering context to software skills—geometry, input handling, camera control, state synchronization and resource budgets.

Honesty: configuration completeness scores are provisional; concepts and reference systems are identified. No claims of validated biogas yield, fabrication readiness, guaranteed frame rate or improved hiring conversion.

Testing: the stronger presentation is a hypothesis. Ask visitors to identify the software contribution, find the exploded view and return to the assembled view without coaching. Record completion and confusion, then compare alternative copy or action labels. No analytics or tracking was added.

Source: Claude C. Hopkins, *Scientific Advertising*, particularly Being Specific, Use of Samples and Test Campaigns. https://books.google.com/books/about/Scientific_Advertising.html?id=gi-oDwAAQBAJ

## Remaining technical limits

- `app.js` still combines procedural model construction, scene management and UI handlers. Separate these responsibilities before expanding the viewer substantially.
- React controls bridge into imperative DOM state. Preserve node identity and handler ownership; a gradual move to explicit shared state would reduce synchronization risk.
- Several global observers/listeners live for the page lifetime. A route-mounted version needs a complete disposal API for controls, observers, React roots and WebGL resources.
- The drawing loop avoids idle scene drawing but still schedules animation frames. Do not describe this as a fully stopped idle animation loop.
- Thumbnail generation temporarily rebuilds the main scene. An isolated preview scene would make this easier to maintain and avoid changing the main camera during gallery preparation.
- Browser emulation covers interaction regressions, not actual Android/Safari frame rate, thermal behavior or user conversion. Those remain unmeasured.
