---
layout: single
title: Find Words That Can Be Formed by Characters
comments: true
toc: true
toc_sticky: true
author_profile: true
---

## Question in Human Language

A good word is one that can be constructed using given characters (limited both types and quantities).
What is the sum of lengths of all the good words?

For **INHUMAN** description, please check it out on [LeetCode](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/)

## Thought No. 1

To determine if a word is good, just count how many of each unique character does it need and compare with the characters we are given.

### Implementation

The steps are:
1. Convert `chars` from string to a `dict` where the key is unique character and the value is how many of that unique character there are.
2. Iterate through `words`.
    1. Convert the current word from string to a `dict` where the key is unique character and the value is how many of that unique character there are.
    2. Compare with the `dict` we got from `chars` which is our limit.
    3. If it has a unseen character or the number exceeds the limit, it's not good, otherwise it's good.
    4. If it is good, increament the result with the length of this good word.
3. Return our result.

#### Python Ver. 1

```python
class Solution(object):
    def countCharacters(self, words, chars):
        """
        :type words: List[str]
        :type chars: str
        :rtype: int
        """
        cdict = {}
        for c in chars:
            if c not in cdict:
                cdict[c] = 0
            cdict[c] += 1
        gcnt = 0
        for w in words:
            wdict = {}
            for c in w:
                if c not in wdict:
                    wdict[c] = 0
                wdict[c] += 1
            is_good = True
            for c, cnt in wdict.items():
                if c not in cdict or cnt > cdict[c]:
                    is_good = False
                    break
            if is_good:
                gcnt += len(w)
        return gcnt
```

### Review

Well done!

![acceptance](./asset/1160-find-words-that-can-be-formed-by-characters-acceptance.png)

![cat rocks](https://media.giphy.com/media/fy5iARUXimtVK/giphy.gif)
