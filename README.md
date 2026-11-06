# FZBOY Personal Website — Live Discord Edition

## One-time setup required
1. Join the [Lanyard Discord server](https://discord.gg/lanyard) using the Discord account with ID `1549995551288852584`.
2. Keep Discord presence visible; Invisible mode appears offline.
3. Upload all files/folders to your GitHub repository without changing the folder structure.
4. GitHub **Settings → Pages → Deploy from a branch → main → /(root)**.

The site fetches `https://api.lanyard.rest/v1/users/1549995551288852584` and subscribes to live updates. Lanyard only exposes presence for users who opt in by joining its server.

## Files
- `index.html` — website structure
- `css/style.css` — responsive dark styling and avatar decoration overlay
- `js/script.js` — snowfall, enter screen, music controls and live Discord integration
- `assets/` — add your own `music.mp3` here

Real Discord avatar, username, equipped avatar decoration (if provided by Discord/Lanyard), and online/idle/DND/offline status load dynamically. Not every profile badge or collectible is rendered. No Discord bot token is exposed in this public website.
