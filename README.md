# makefun-robot-apology-suga

[![make.fun · u-suga-the-robot-apology-dd96bb59](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/h05meigames/makefun-robot-apology-suga/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/h05meigames/makefun-robot-apology-suga/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)

A two-line robot apology for the [u-suga-the-robot-apology-dd96bb59](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59) bounty on [make.fun](https://make.fun/r/0ene8b3q) — one sentence owning a specific mistake, one sentence naming the lesson and what changes.

## The apology

> I'm sorry — I watered your grandmother's orchid instead of the fern, and it spent the afternoon drowning in the wrong pot.
> I've learned to read the label before I lift the can, so from now on I photograph each tag first and water only what it names.

## How it works

`main.ts` (Node 22, standard library only) writes the two lines to
`/output/entry.txt` — UTF-8, 1 to 400 characters, per the kit gate. It
also prints the same text to stdout, and verifies the file on disk by
reading it back before exiting.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
