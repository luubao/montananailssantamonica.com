# Montana Nails Site

Static website for Montana Nails in Santa Monica.

## Structure

- `index.html` main page
- `styles.css` site styles
- `script.js` small interactions
- `images/logo` brand assets
- `images/hero` homepage featured photos
- `images/gallery` website-ready gallery photos
- `images/raw` source photos not yet prepared for web
- `videos/web` browser-ready video clips for the site
- `videos/raw` original phone exports and source clips

## Updating photos

1. Add new homepage photos to `images/hero`.
2. Add new website-ready work photos to `images/gallery`.
3. Keep original phone exports or HEIC files in `images/raw`.
4. Update `index.html` if you want different featured images.

## Updating videos

1. Put original iPhone clips in `videos/raw`.
2. Convert clips to website-friendly `.mp4` files before using them on the site.
3. Put finished web clips in `videos/web`.
4. Recommended filenames:
   - `hero-loop.mp4`
   - `salon-loop.mp4`
   - `detail-loop.mp4`
5. Keep videos short and lightweight when possible:
   - 3 to 8 seconds
   - muted loop
   - vertical clips are fine for gallery sections
   - horizontal clips work best for hero backgrounds

## Current recommendation

- Keep using the existing JPG and PNG photos immediately.
- Convert the strongest MOV clips to MP4 before adding them to the page.
- Best early candidates for website video use:
  - `IMG_4178.MOV`
  - `IMG_6415.MOV`
  - `IMG_6424.MOV`

## Naming convention

Use a simple pattern:

`category-style-number`

Examples for website-ready files:

- Hero images
  - `hero-salon-01.jpg`
  - `hero-detail-01.jpg`
  - `hero-signature-01.jpg`
- Gallery images
  - `gallery-almond-soft-pink-01.jpg`
  - `gallery-french-white-01.jpg`
  - `gallery-chrome-green-01.jpg`
  - `gallery-heart-red-01.jpg`
  - `gallery-bridal-white-gold-01.jpg`
- Videos
  - `hero-loop-01.mp4`
  - `detail-loop-01.mp4`
  - `salon-loop-01.mp4`
  - `gallery-process-01.mp4`

Recommended rule:

- Keep original phone export names only in `images/raw` and `videos/raw`.
- Rename only the converted website-ready files.

## Git workflow

```powershell
git add .
git commit -m "Update site photos"
git push
```
=======
# montananailssantamonica.com
Montana Nails website

