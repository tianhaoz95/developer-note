---
layout: single
title: Jewels and Stones
---

## Question in Human Language

This question is asking how many characters from string `S` also exist in string `J`.

For **INHUMAN** description, please check it out on [LeetCode](https://leetcode.com/problems/jewels-and-stones/)

## Thought No. 1

We can iterate through all the characters in string `S` and see if this character exist in string `J`, and count all the ones that exist in string `J`.

Now the problem is finding a character in a string is `O(n)` complex, which is not good. However, finding it in a hash table is `O(1)` and guess what, we
can easily convert a string to a hashtable.

The steps are:
1. Convert `J` from string to a hash table
2. Iterate through `S`
3. Count all the ones in `S` that also exist in the hash table we just generated
4. Return the count value

### Python Version

```python
class Solution(object):
    def numJewelsInStones(self, J, S):
        """
        :type J: str
        :type S: str
        :rtype: int
        """
        jdict = {j: 1 for j in J} # step 1
        clist = [1 if s in jdict else 0 for s in S] # step 2
        return sum(clist) # step 3 and 4
```