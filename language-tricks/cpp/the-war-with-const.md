---
layout: single
---

# The War with `const`

## How to convert a `const` pointer to normal pointer

```cpp
int main() {
   const int a = 3;
   int& b = const_cast<int&>(a);
   b = 3;
}
```
