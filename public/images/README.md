# Image assets — pending

This project currently ships with **no real raster/photo assets**. Everywhere a
photo would normally appear (logo, hero image, founder photos, staff/volunteer
photos), the site uses a labeled placeholder component instead so the layout,
accessibility attributes, and `next/image` usage are all correct and ready to
receive real files.

## TODO before launch

- `logo.png` (or `.svg`) — Brain Warrior Academy logo, transparent background.
- `hero.jpg` — hero/banner photo for the homepage.
- `founders.jpg` — photo of the two founders for the "Our Story" section.
- `founders-about.jpg` — a second founders/story photo for the About page.

Once real files are added here, swap the corresponding placeholder components
(see `components/ui/PlaceholderImage.tsx`) for `next/image` usage pointing at
these files, and update the alt text `TODO` comments throughout
`components/sections` and `app/about/page.tsx`.
