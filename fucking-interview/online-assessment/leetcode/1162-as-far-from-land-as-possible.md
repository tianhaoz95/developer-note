---
layout: single
title: As Far from Land as Possible
comments: true
toc: true
toc_sticky: true
author_profile: true
---

```python
class Solution(object):
    def isLand(self, x, y, grid):
        if x < 0 or y < 0:
            return False
        if x >= len(grid):
            return False
        if y >= len(grid[0]):
            return False
        if grid[x][y] == 0:
            return False
        return True
        
    def canReachLand(self, x, y, grid, dist):
        for dx in range(dist + 1):
            dy = dist - dx
            if self.isLand(x + dx, y + dy, grid):
                return True
            if self.isLand(x - dx, y + dy, grid):
                return True
            if self.isLand(x + dx, y - dy, grid):
                return True
            if self.isLand(x - dx, y - dy, grid):
                    return True
        return False
    
    def getMinDist(self, x, y, grid):
        bound = len(grid) + len(grid[0])
        for dist in range(bound):
            if self.canReachLand(x, y, grid, dist):
                return dist
        return -1
    
    def maxDistance(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        max_dist = -1
        for x in range(len(grid)):
            for y in range(len(grid[0])):
                if not self.isLand(x, y, grid):
                    min_dist = self.getMinDist(x, y, grid)
                    max_dist = max(max_dist, min_dist)
        return max_dist
        
```
