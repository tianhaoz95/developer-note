---
layout: single
title: How to add a new branch from upstream
---

```bash
git remote add upstream https://github.com/Xilinx/XRT.git
git fetch upstream
git checkout -b newbranch upstream/newbranch
git push -u origin newbranch
```