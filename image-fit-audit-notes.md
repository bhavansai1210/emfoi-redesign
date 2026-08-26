# EMFOI Image-Fit Audit Notes

## Initial findings

The representative desktop and mobile route captures show that the source photography is not inherently malformed: the hero and software-delivery assets are wide 16:9 images with intentionally composed negative space on the left. The likely issue is presentation inside containers whose aspect ratios vary substantially by breakpoint.

The home hero preserves the intended right-weighted composition on desktop but becomes very narrow on mobile, so the mobile media treatment needs to be checked for a deliberate focal crop rather than relying on one global `object-position` rule. The Capabilities and Industries dossier images render as full-width media bands on mobile and are generally contained, but their neighboring text panels and image heights should be checked for consistent visual rhythm. The About portrait cards are portrait-oriented and appear to use mixed image framing; these need explicit focal points so faces remain visible at narrow widths.

The Insights image and Contact map appear contained without obvious overflow. DoFiling and CareHigh product artwork should retain full-logo visibility, which means `contain` or a product-specific framing rule is safer than a broad `cover` rule. The 404 captures were route misses from incorrect test paths, not image-fit defects.

## Next inspection targets

1. Enumerate every media wrapper and page-specific image class in `client/src/index.css`, `Home.tsx`, `Capabilities.tsx`, `InfoPage.tsx`, and product pages.
2. Match each asset's natural aspect ratio to its rendered frame at desktop and mobile breakpoints.
3. Apply targeted `object-fit`, `object-position`, `aspect-ratio`, and mobile height corrections rather than changing source assets.
4. Re-capture representative pages after the fix and confirm no stretching, accidental face crops, logo clipping, or horizontal overflow.


## Verification after first correction

The desktop and mobile captures confirm that the Capabilities and Industries evidence panels now preserve useful subject framing, and the DoFiling, CareHigh, and contact-map media retain complete proportions without stretching. The homepage capability mosaic is more legible on mobile after converting the narrow cards to media bands.

The About team portrait frames remain visually blank in full-page captures even though the local portrait sources are valid 4:5 images. Their markup uses `loading="lazy"`, and the capture does not trigger those below-fold requests consistently; this is an image-visibility issue rather than a bad source. The portraits should be eager-loaded because they are a small, important section and should remain visible in full-page previews.

The homepage's large first capability image is still intentionally softened by its editorial overlay, but it can be made more readable by reducing the overlay opacity further while keeping the text contrast. No image request failures were present in the recent network log.


## Final visual verification

After the patch, the About portraits load consistently on both desktop and mobile and preserve the head-and-shoulder composition in their 4:5 frames. The homepage capability mosaic remains responsive, with wide media bands on mobile rather than narrow, over-cropped thumbnails. The product logos and contact map remain contained and undistorted. The light overlay on the homepage lead card was reduced so the source artwork reads more clearly without weakening the copy contrast.
