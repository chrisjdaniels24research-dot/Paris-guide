# Paris — a working list

A simple, mobile-first Paris recommendations site. One self-contained `index.html`.
No backend, no API keys, no build step. Open the file and it works.

Built for a phone: browse by activity or neighbourhood, search, filter, an
interactive map, and a few ready-made days. The list is aggregated from friends —
labels are neutral (Highly recommended / Recommended / Want to try), not one
person's picks.

## Open it locally

Double-click `index.html`, or drag it into a browser tab. That's it.
(An internet connection is needed for the map tiles and the fonts.)

## Put it online (pick one)

**Fastest — no repo (Netlify Drop):**
1. Go to https://app.netlify.com/drop
2. Drag the whole folder (or just `index.html`) onto the page.
3. You get a public link in seconds. Send that.

**GitHub Pages (stable URL):**
1. Make a **new** repo (e.g. `paris-guide`) — keep it separate from any other project.
2. Add `index.html` (and this README) to the repo.
3. Repo → **Settings → Pages** → Source: `main` branch, `/root` → Save.
4. After a minute the site is live at `https://<you>.github.io/paris-guide/`.

Any static host works the same way (Cloudflare Pages, Vercel, etc.).

## What's in the site

- **Explore** — search, quick filters, browse by activity, browse by neighbourhood.
- **Map** — every locatable place on one Leaflet / OpenStreetMap map, filter by
  category, tap a pin for details + Google Maps + walking directions.
- **Days** — three ready-made days plus shorter ideas; "Open route" drops the
  stops on the map in order.
- **More** — Before you go, the full neighbourhood index, and what the labels mean.

## Editing or adding places

All content lives in **one JavaScript array** near the top of the `<script>` in
`index.html`, called `PLACES`. Every view is generated from it — add a place once
and it shows up everywhere.

```js
p({
  id:"unique-slug",
  name:"Place name",
  cat:"Restaurants",                 // must match a category in CATS
  hood:"Le Marais",                  // must match a neighbourhood in HOODS
  arr:"3e",
  status:"recommended",              // highly-recommended | recommended | want-to-try | unresolved
  book:true,                         // optional: shows a "Book ahead" tag
  tags:["cheap","late-night"],       // optional context tags (see TAG_LABEL)
  kw:"extra search words",           // optional: helps search only
  note:"Short friend note, 2–3 sentences.",
  lat:48.8578, lng:2.3520            // use null, null if you can't locate it (kept off the map)
})
```

Rules kept in the data:
- **Do not invent coordinates.** If a place can't be located confidently, set
  `lat:null, lng:null` and give it `status:"unresolved"` — it stays in the lists
  but is left off the map.
- Ready-made days are in the `DAYS` and `MINI` arrays; each step can reference a
  place `id` so "Open route" can map it.

## Notes

- Map tiles come from OpenStreetMap (no key required).
- Google Maps links use the universal `?api=1` format, so they open the maps app
  on a phone. Directions default to walking.
- Two entries are deliberately marked **Unresolved** (Dim Sum House, and the
  second Açà near the canal) because the source name didn't match one exact place.
