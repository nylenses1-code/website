# Dutch FC landing page

This directory contains the mobile-first Dutch FC match-photography page served at `/dutchfc/`.

## Configure the Pixieset gallery

Open `dutchfc/config.js` and replace the empty `galleryUrl` value:

```js
galleryUrl: "https://YOUR-PIXIESET-GALLERY-URL"
```

Until a valid `https://` URL is added, all gallery buttons remain on the page and display a setup warning instead of opening an invented destination.

## Add real Dutch FC photographs

1. Create the directory `dutchfc/photos/`.
2. Add approved, optimized WebP or JPEG files.
3. Add each photograph to `featuredPhotos` in `dutchfc/config.js`:

```js
featuredPhotos: Object.freeze([
  Object.freeze({
    src: "/dutchfc/photos/dutch-fc-match-01.webp",
    alt: "Dutch FC player controlling the ball during a match"
  })
])
```

Keep `featuredPhotos` empty until real photographs with appropriate permission are available. The page will display branded “Photo Coming Soon” placeholders in the meantime.

## Editable information

All frequently changed content is in `dutchfc/config.js`:

- Pixieset gallery URL
- Instagram handle and link
- Email address
- Package names, prices, and descriptions
- Featured real photographs and alt text

The page itself is plain HTML, CSS, and JavaScript with no additional dependencies or build step.
