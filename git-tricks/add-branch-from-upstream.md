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

<br/>

<iframe data-aa="1180215" src="//acceptable.a-ads.com/1180215" scrolling="no" style="border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>
