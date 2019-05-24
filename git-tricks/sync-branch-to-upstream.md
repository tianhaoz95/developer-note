---
layout: single
title: How to sync a branch to upstream
---

```bash
git remote add upstream https://github.com/[upstream username]/[upstream repository name].git
git fetch upstream
git checkout master
git reset --hard upstream/master 
git push origin master --force
```
