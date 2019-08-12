---
layout: single
title: Move Zeroes
comments: true
toc: true
toc_sticky: true
author_profile: true
---

## Question in Human Language

## Thought No. 1

### Implementation

#### Python Ver. 1

```python
class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        cnt = 0
        del_idxs = []
        for idx, num in enumerate(nums):
            if num == 0:
                del_idxs.append(idx)
                cnt += 1
        for del_idx in del_idxs[::-1]:
            del nums[del_idx]
        nums += [0 for i in range(cnt)]
```