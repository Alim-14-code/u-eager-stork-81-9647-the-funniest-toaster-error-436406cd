# The Funniest Toaster Error Message

[![Competition](https://img.shields.io/badge/make.fun-competition-blue)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Rank](https://img.shields.io/badge/rank-R1%20entry-orange)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Reward](https://img.shields.io/badge/reward-%242%20pot-green)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![License: MIT](https://img.shields.io/github/license/Alim-14-code/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)](https://github.com/Alim-14-code/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entry for [make.fun competition u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd) ($2 pot, blind rounds, final at the deadline 2026-11-26 12:10 WIB).

## Entry

> ERROR: Crumb tray full. The toaster has been saving them. It will not say why.

One line, 78 characters — a deadpan error message from a kitchen toaster: a real fault (full crumb tray) with a quietly ominous twist.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/toaster-out node main.ts
```

`main.ts` (Node stdlib only) reads the single source of truth, `entry.txt`, validates it is one non-empty line of at most 120 characters, and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
