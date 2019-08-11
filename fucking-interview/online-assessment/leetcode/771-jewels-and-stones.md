---
layout: single
title: Jewels and Stones
---

## Python Version

For description, please check it out on [LeetCode](https://leetcode.com/problems/jewels-and-stones/)

```python
class Solution(object):
    def numJewelsInStones(self, J, S):
        """
        :type J: str
        :type S: str
        :rtype: int
        """
        jdict = {j: 1 for j in J}
        clist = [1 if s in jdict else 0 for s in S]
        return sum(clist)
```