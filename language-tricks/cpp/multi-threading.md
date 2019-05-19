---
layout: single
---

# Multi-Threading

## How to do multi-threading with class

basically the first argument of a member function is the pointer to the class instance.

```cpp
#include <thread>
#include <iostream>

class bar {
public:
  void foo() {
    std::cout << "hello from member function" << std::endl;
  }
  
  void test() {
    std::thread t(&bar::foo, this);
  }
};

int main()
{
  std::thread t(&bar::foo, bar());
  t.join();
}
```
