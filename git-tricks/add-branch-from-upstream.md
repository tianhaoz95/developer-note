---
layout: single
title: How to add a new branch from upstream
comments: true
author_profile: true
---

```bash
git remote add upstream https://github.com/[upstream username]/[upstream repository name].git
git fetch upstream
git checkout -b newbranch upstream/newbranch
git push -u origin newbranch
```

<br/>

<iframe data-aa="1180202" src="//acceptable.a-ads.com/1180202?size=Adaptive&background_color=141010&text_color=ff9f00&title_color=ff9900&title_hover_color=ff9900&link_color=ff9900&link_hover_color=ff9900" scrolling="no" style="border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>

