---
layout: single
title: tmux cheat sheet
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
