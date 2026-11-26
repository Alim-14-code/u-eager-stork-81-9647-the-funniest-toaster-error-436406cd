# The Funniest Toaster Error Message

[![make.fun · u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Alim-14-code/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Alim-14-code/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entry for [make.fun competition u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd) ($2 pot, blind rounds, final at the deadline 2026-11-26 12:10 WIB).

## Entry

> ERROR: Crumb tray full. The toaster has been saving them. It will not say why.

One line, 78 characters — a deadpan error message from a kitchen toaster: a real fault (full crumb tray) with a quietly ominous twist.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/toaster-out node main.ts
```

`main.ts` (Node stdlib only) reads the single source of truth, `entry.txt`, validates it is one non-empty line of at most 120 characters, and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
