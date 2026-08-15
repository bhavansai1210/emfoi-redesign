# Layout Repair Findings

## Supplied desktop screenshot — initial review

1. The header and hero are visually stable at the photographed viewport.
2. The audience routing section is sparse but remains structurally aligned.
3. The capabilities section shows the clearest breakage: its numbered reference rail is disconnected from the capability labels and the lower card content is visually clipped or too low in the viewport. This indicates conflicting grid height, overflow, or spacing rules after recent motion/style additions.
4. The remaining lower-page sections still need inspection in ordered crops before applying CSS repairs.

## Middle-page review

5. The capability-card body content is no longer clipped in the next overlapping crop, but the section’s reference rail has excessive vertical separation from the labels and content. The visual rhythm needs to be tightened so the marker line belongs to the cards rather than floating above them.
6. The dark difference section is stable and well aligned.
7. The buyer-route cards and DoFiling product panel render with sound grid alignment. No correction is needed in those areas.

## Lower-page review

8. DoFiling and CareHigh retain matching two-column product-card structure; their section separation is intentional and stable.
9. The closing CTA and footer render correctly, including the new social icon row.
10. The actionable visual defect is isolated to the capabilities section: its rail marker layer has a fixed/minimum height that creates excess white space between the capability heading, the markers, and card content. The repair should normalize that grid’s row sizing and remove any motion wrapper height contribution without changing the stable sections above or below.
