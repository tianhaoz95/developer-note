---
layout: single
title: Move Zeroes
comments: true
toc: true
toc_sticky: true
author_profile: true
---

## Question in Human Language

Move all the zeros in a list to the end without creating a new list.

For **INHUMAN** description, please check it out on [LeetCode](https://leetcode.com/problems/move-zeroes/)

## Thought No. 1

What if we delete all the zeros keeping track of how many have we deleted and then append
that many zeros to the back? Sounds like a plan.

### Implementation

The steps are:
1. Iterate through the list
    1. When we see a zero
        1. Write down its location
        2. Increament the zero count
2. Iterate backwards through the location for deletion
    1. Delete the entry at the current location
3. Append zero count that many zeros to the list

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
        """
        step 1: iterate through the list
        """
        for idx, num in enumerate(nums):
            """
            step 1.1: find out if a number is zero
            """
            if num == 0:
                """
                step 1.1.1: write down its location
                """
                del_idxs.append(idx)
                """
                step 1.1.2: increament zero count
                """
                cnt += 1
        """
        step 2: iterate backwards through the location for deletion
        """
        for del_idx in del_idxs[::-1]:
            """
            step 2.1: delete the entry at the current location
            """
            del nums[del_idx]
        """
        step 3: append zero count that many zeros to the list
        """
        nums += [0 for i in range(cnt)]
```