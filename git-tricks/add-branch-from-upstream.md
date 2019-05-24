---
layout: single
title: How to add a new branch from upstream
---

```bash
git remote add upstream https://github.com/[upstream username]/[upstream repository name].git
git fetch upstream
git checkout -b newbranch upstream/newbranch
git push -u origin newbranch
```
