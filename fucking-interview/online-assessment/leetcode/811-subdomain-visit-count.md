---
layout: single
title: Subdomain Visit Count
comments: true
toc: true
toc_sticky: true
author_profile: true
---

```python
class Solution(object):
    def subdomainVisits(self, cpdomains):
        """
        :type cpdomains: List[str]
        :rtype: List[str]
        """
        counter = {}
        result = []
        for cp in cpdomains:
            cnt = int(cp.split(' ')[0])
            sub_domains = cp.split(' ')[1].split('.')
            for i in range(len(sub_domains)):
                sub_domain = '.'.join(sub_domains[i:])
                if sub_domain not in counter:
                    counter[sub_domain] = 0
                counter[sub_domain] += cnt
        for sub_domain, cnt in counter.items():
            result.append(str(cnt) + ' ' + sub_domain)
        return result
```