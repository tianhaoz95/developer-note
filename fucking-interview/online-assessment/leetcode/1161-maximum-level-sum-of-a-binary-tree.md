---
layout: single
title: Maximum Level Sum of a Binary Tree
comments: true
toc: true
toc_sticky: true
author_profile: true
---

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def sumNextLevel(self, roots):
        next_roots = []
        lvl_sum = 0
        for r in roots:
            lvl_sum += r.val
            if r.left:
                next_roots.append(r.left)
            if r.right:
                next_roots.append(r.right)
        return next_roots, lvl_sum

    def maxLevelSum(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        next_roots = [root]
        max_sum = 0
        max_lvl = 0
        current_lvl = 0
        while next_roots:
            next_roots, current_sum = self.sumNextLevel(next_roots)
            current_lvl += 1
            if current_sum > max_sum:
                max_sum = current_sum
                max_lvl = current_lvl
        return max_lvl
```

![acceptance](./asset/1161-maximum-level-sum-of-a-binary-tree-acceptance.png)