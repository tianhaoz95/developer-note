---
layout: single
title: tmux cheat sheet
comments: true
author_profile: true
---

## How to automatically login existing session

```bash
# Inside ~/.bashrc

if [[ -z "$TMUX" ]] && [ "$SSH_CONNECTION" != "" ]; then
    tmux attach-session -t ssh_tmux || tmux new-session -s ssh_tmux
fi
```

This command evaluates if the new session is both in tmux and has a ssh session 
to attach to, and if so, connnect the new tmux seesion to the existing ssh session.

## FAQ

### Why shortcuts don't work?

The shortcut sequence is `Control+b`, then **release both**. After releasing, type the command, for example `%` for vertial splitting or `"` for horizontal splitting.

> Note: a common mistake is to press all the keys together. That is not how `tmux` works.
