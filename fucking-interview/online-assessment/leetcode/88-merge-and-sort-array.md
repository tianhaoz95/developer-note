---
layout: single
title: Merge Sorted Array
comments: true
toc: true
toc_sticky: true
author_profile: true
---

```python
class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        end_index = m + n - 1
        end_nums1_index = m - 1
        end_nums2_index = n - 1
        while end_index >= 0:
            if end_nums2_index < 0:
                return
            elif end_nums1_index < 0:
                while end_nums2_index >= 0:
                    nums1[end_index] = nums2[end_nums2_index]
                    end_nums2_index -= 1
                    end_index -= 1
                return
            else:
                if nums1[end_nums1_index] >= nums2[end_nums2_index]:
                    nums1[end_index] = nums1[end_nums1_index]
                    end_nums1_index -= 1
                else:
                    nums1[end_index] = nums2[end_nums2_index]
                    end_nums2_index -= 1
                end_index -= 1
```