---
layout: single
title: Best Time to Buy and Sell Stock
comments: true
toc: true
toc_sticky: true
---

```python
class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        current_max = 0
        max_profit = 0
        for p in prices[::-1]:
            current_max = max(current_max, p)
            max_profit = max(current_max - p, max_profit)
        return max_profit
```