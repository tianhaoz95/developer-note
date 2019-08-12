---
layout: single
title: Reverse String
comments: true
toc: true
toc_sticky: true
author_profile: true
---

```python
class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        left = 0
        right = len(s) - 1
        while left < right:
            tmp = s[left]
            s[left] = s[right]
            s[right] = tmp
            left += 1
            right -= 1
```