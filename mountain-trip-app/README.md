# Mountain Trip

A standalone, iPhone-first group mountain trip planner that lives inside the Paris-guide repository but is fully isolated under `/mountain-trip-app`.

## Product rules
- This is a separate product, not a Paris reskin.
- Only housing/lodging costs are tracked.
- No combined trip cost, flight cost, food cost, rental-car cost, ski cost, fishing-guide cost, or activity-cost rollup.
- Group members can vote on destinations, comment, save destinations, add housing listings, and vote for **Most Fachable Chalet**.
- Destination pages include direct links for housing searches, restaurants, nightlife, activities, maps, and booking/research.
- The U.S. map visualizes where the group is leaning.
- The web app is installable as a PWA on iPhone via Safari → Share → Add to Home Screen.

## Current data model
The current prototype persists votes, comments, profile, trip board, housing listings, and chalet votes in browser localStorage.

For true multi-device live group collaboration, plug the same UI into a shared backend (Supabase/Firebase) and replace the localStorage adapter with authenticated reads/writes.

## Entry point
`mountain-trip-app/index.html`
