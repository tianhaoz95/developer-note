---
layout: single
title: Jewels and Stones
---

For description, please check it out on [LeetCode](https://leetcode.com/problems/jewels-and-stones/)

## Sample Solutions

### Python Version

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