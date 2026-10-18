---
target: /collana scaffale (screenshot)
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:/Users/massimilianolapuma/projects/antonella/src/pages/collana.astro"
target_fingerprint: "sha256:5eb2dfde47bc3a54bd79e61b6a0bf924ece3f84554f869c7d50b2346d29dec7c"
target_path: /Users/massimilianolapuma/projects/antonella/src/pages/collana.astro
timestamp: 2026-10-18T18-43-55Z
slug: src-pages-collana-astro
---
# Critique — /collana (first screen + shelf)
Method: dual-agent (A: design review · B: detector + browser)

## Heuristics 22/32 (69%, Acceptable; #7, #10 n/a)
1:3 status only in caption · 2:3 ghosts read as chart · 3:3 · 4:2 three labels for one signup · 5:3 · 6:3 ghosts show only numbers · 8:2 empty right half, 80% blank boxes, title collision · 9:3

## Specificity
Shelf = authored, right for brief; half-finished (8/10 grey dashed boxes). Below fold generic template.
Detector: 0 on Shelf.astro/collana.astro; 9 URL findings all on BookCard placeholder covers + cream body (known false positives). Measurements: shelf 672px in 1072 container (400px empty right at 1190/1440); ghost dashed border 3.24:1; caption link 43.8px at 360.
Divergence: Chromium titles fit with zero slack; user's screenshot (likely Safari) shows "Sole e la Paura" touching/crossing top border — user view wins.

## Priority issues
- [P0] Spine title overflows top in user's browser (Shelf.astro:146-153, vertical-rl + rotate(180deg), no slack, Paura spine 16.2rem). Fix: sideways-lr w/ @supports fallback, center title above badge, max-block-size + overflow hidden, more top padding; test Safari. /impeccable polish
- [P1] Left-hugging composition, empty right half; caption+link on fold at 1190x800. Fix: intro ~5 cols + shelf ~7 cols side by side, or shelf full-width hero. /impeccable layout
- [P1] Ghost spines sell absence (cold #8b8a99 hard-coded, random heights). Fix: pale brand-pigment tints + dashed edge, vertical "in arrivo" or small sun per spine. /impeccable colorize
- [P2] Mobile: sticky bar covers shelf bottom on first screen; caption below fold. Fix: move "2 su 10" below shelf / shorten lede; data-hides-mobile-bar on shelf. /impeccable adapt
- [P2] One signup, three labels on page. Fix: use brief label "Ricevi per prima le prossime emozioni" for caption link + mobile bar here. /impeccable clarify

## Personas
Jordan: ghosts look like empty/loading; slashed-zero "10"; spines not obviously clickable; "Copertina provvisoria".
Casey: bar covers tappable spines; 24px ghosts give no feedback.
Sam: ol list-style none → add role="list"; stray space "Sole e l'Amore , volume 1"; caption repeats "in arrivo".

## Minor
Hard-coded plank/ghost colors; count stated twice in intro; "Com'è fatto ogni volume" one grey paragraph; "per prima" feminine (brief label, flag to author); BookCard pills wrap, emotion pill redundant.

## Questions
Shelf as hero? One "in arrivo" block vs 8 slots (brief requires 10)? Spine click pulls book out instead of duplicate cards?
