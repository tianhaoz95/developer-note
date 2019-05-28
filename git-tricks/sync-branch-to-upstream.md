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

<br/>

<iframe data-aa="1180210" src="//acceptable.a-ads.com/1180210" scrolling="no" style="border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>
