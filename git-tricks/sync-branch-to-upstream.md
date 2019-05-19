---
layout: single
---

# How to sync a branch to upstream

> This example is made while working on XRT, so change the git url is necessary

```bash
git remote add upstream https://github.com/Xilinx/XRT.git
git fetch upstream
git checkout master
git reset --hard upstream/master 
git push origin master --force
```
