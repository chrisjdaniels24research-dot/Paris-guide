# Mountain Trip

A standalone, iPhone-first group mountain trip planner under `/mountain-trip-app`. It is isolated from the Paris guide even though both projects live in the same repository.

## Live app

GitHub Pages serves the app at:

`https://chrisjdaniels24research-dot.github.io/Paris-guide/mountain-trip-app/`

On iPhone: Safari → Share → **Add to Home Screen**.

## Product rules

- Only **housing / lodging costs** are tracked.
- No combined trip cost or flight / food / rental-car / skiing / fishing / activity-cost rollup.
- The 12 destinations are based on the Easy-Access U.S. Mountain Trips field report.
- Destination pages include airport access, seasonality, specific bars, restaurants, skiing, fishing, activities, lodging strategy, watch-outs, maps and booking/research links.
- Real photo galleries load from Wikimedia Commons at runtime.
- The app includes destination voting, saved comparisons, chalet shortlists, **Most Fachable Chalet**, comments, a group feed, a 2026 availability calendar and extended-weekend highlights.
- Navigation always exposes Explore / Map / Group / Trip, with explicit Back / Explore controls inside detail views.

## Shared collaboration without Supabase

GitHub Pages is static and cannot safely accept anonymous writes on its own. The no-backend release therefore uses **GitHub Issues as the durable shared layer**:

- Group chat: issue #2
- Shared availability: issue #3
- One persistent discussion issue for each destination: issues #4–#15

The app reads public issue comments back through GitHub's public API. Posting, editing and deleting shared comments happens in GitHub's own UI, so no GitHub token or secret is exposed in the browser.

**Important:** this repository is public, so comments posted to those GitHub threads are public. Do not put sensitive information there.

Fast scratch notes, quick local comments, destination votes, chalet shortlists and calendar taps still use browser `localStorage`. They can be deleted in the app, but they are per-device. Shared comments and shared availability summaries belong in the linked GitHub threads.

## iOS

The project is an installable PWA now. `capacitor.config.ts` and `IOS.md` provide the path to wrap the same project in a native iOS shell later with Xcode / TestFlight.
