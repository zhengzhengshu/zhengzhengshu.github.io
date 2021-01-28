---
title: 并发编程之Concurrent.futures vs Multiprocessing
date: 2019-07-24
tags:
 - 并发
categories: 
 - Python
---


并发编程是刚需，尤其是在多I/O操作时，多线程，协程，多进程三路英雄各显神通。多线程，协程属于并发操作，多进程属于并行操作，那么你是否清楚了什么是并发，什么是并行？
<!-- more -->

## 并发与并行的区别

借用知乎用户的回答：

>你吃饭吃到一半，电话来了，你一直到吃完了以后才去接，这就说明你不支持并发也不支持并行。
你吃饭吃到一半，电话来了，你停了下来接了电话，接完后继续吃饭，这说明你支持并发。
你吃饭吃到一半，电话来了，你一边打电话一边吃饭，这说明你支持并行。
并发的关键是你有处理多个任务的能力，不一定要同时。
并行的关键是你有同时处理多个任务的能力。

**多线程**： 在 Python 里，由于有全局锁 (GIL) 的存在，并发就是多个线程轮流使用 CPU，同一时刻只一个线程在工作，操作系统会在合适的时间进行切换，由于线程的切换速度非常快，给人的感觉是多个任务都在运行。在 I/O 密集型任务场景中，线程切换后，I/O 操作仍然在进行，线程 1 在进行 I/O 操作时，线程 2 可以获得 CPU 资源进行计算，虽然增加了切换成本，却提高了效率。

**协程**：
协程是轻量级线程，是单线程，却可以执行并发任务，原因是协程把切换的权利交给程序员，由程序员决定在哪些环节进行切换。协程可以处理上万的并发，多线程即不可以，因为切换成本太大，会耗尽计算机资源，可以搜索下 C10K 问题。

**多进程**： 并行，真正的同一时刻多个任务同时进行。如果想使用多核，就选多进程。

Python 协程标准库只有一个，即 asyncio，而支持多线程，多进程的标准库却有两个：Concurrent.futures 和 Multiprocessing。本文分享一下这两者的使用区别。先看下基本用法。

## Multiprocessing

Multiprocessing 即有线程池，也是进程池，简单的使用方法如下：

线程池：

```python
from multiprocessing.dummy import Pool as ThreadPool
with ThreadPool(processes=100) as executor:
    executor.map(func, iterable)
```

进程池：

```python
from multiprocessing import Pool as ProcessPool
with ProcessPool(processes=10) as executor:
    executor.map(func, iterable)
```

## Concurrent.futures

线程池：

```python
from concurrent.futures import ThreadPoolExecutor
with ThreadPoolExecutor(max_workers=5) as executor:
     executor.map(function, iterable)
```

进程池：

```python
from concurrent.futures import ProcessPoolExecutor
with ProcessPoolExecutor(max_workers=5) as executor:
     executor.map(function, iterable)
```

有没有觉得他们的使用方法简直一模一样，那么官方为何要提供这样两个标准库呢？

## 二者区别

其实，本质区别并不大，有的也只是调用方式略有差异。

先有的 multiprocessing，后有的 concurrent.futures，后者的出现就是为了降低编写代码的难度，后者的学习成本较低。

在速度上，并无谁快谁慢之说。获得多少加速（如果有）取决于硬件，操作系统的详细信息，尤其取决于特定任务需要多少进程间通信。在后台，所有进程都依赖于相同的 OS 原语，使用这些原语的高级 API 并不是j影响速度的主要因素。接下来分享下二者的详细用法。


### 关于 concurrent.futures

官方说 concurrent.futures 模块是更高级别的接口，主要是因为它并发和并行的代码更简单了。该模块提供以下对象和函数：

- 期程对象：concurrent.futures.Future
- 模块函数：concurrent.futures.wait
- 执行器对象：concurrent.futures.｛Executor,ThreadPoolExecutor,ProcessPoolExecutor}

比如，Futures 中的 Executor 类，当我们执行 executor.submit(func) 时，它便会安排里面的 func() 函数执行，并返回创建好的 future 实例，以便你之后查询调用。

这里再介绍一些常用的函数。Futures 中的方法 done()，表示相对应的操作是否完成——True 表示完成，False 表示没有完成。不过，要注意，done() 是 non-blocking 的，会立即返回结果。相对应的 add\_done\_callback(fn)，则表示 Futures 完成后，相对应的参数函数 fn，会被通知并执行调用。

Futures 中还有一个重要的函数 result()，它表示当 future 完成后，返回其对应的结果或异常。而 as_completed(fs)，则是针对给定的 future 迭代器 fs，在其完成后，返回完成后的迭代器。


官方给的 ThreadPoolExecutor 例子：

```python
import concurrent.futures
import urllib.request

URLS = ['http://www.foxnews.com/',
        'http://www.cnn.com/',
        'http://europe.wsj.com/',
        'http://www.bbc.co.uk/',
        'http://some-made-up-domain.com/']

# Retrieve a single page and report the URL and contents
def load_url(url, timeout):
    with urllib.request.urlopen(url, timeout=timeout) as conn:
        return conn.read()

# We can use a with statement to ensure threads are cleaned up promptly
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
    # Start the load operations and mark each future with its URL
    future_to_url = {executor.submit(load_url, url, 60): url for url in URLS}
    for future in concurrent.futures.as_completed(future_to_url):
        url = future_to_url[future]
        try:
            data = future.result()
        except Exception as exc:
            print('%r generated an exception: %s' % (url, exc))
        else:
            print('%r page is %d bytes' % (url, len(data)))
```

请注意：

ProcessPoolExecutor 是 Executor 的子类，它使用进程池来实现异步执行调，使用 multiprocessing 回避 Global Interpreter Lock 但也意味着，作为进程的函数只可以处理和返回可序列化的对象， `__main__` 模块必须可以被子进程导入，这意味着 ProcessPoolExecutor 不可以工作在交互式解释器中。


### 关于 multiprocessing 

multiprocessing 是一个用于产生进程的包，具有与 threading 模块相似 API。 multiprocessing 包同时提供本地和远程并发，使用子进程代替线程，有效避免 Global Interpreter Lock 带来的影响。因此，multiprocessing 模块允许程序员充分利用机器上的多核。可运行于 Unix 和 Windows 。

multiprocessing 模块还引入了在 threading 模块中没有的 API。一个主要的例子就是 Pool 对象，它提供了一种快捷的方法，赋予函数并行化处理一系列输入值的能力，可以将输入数据分配给不同进程处理（数据并行）。下面的例子演示了在模块中定义此类函数的常见做法，以便子进程可以成功导入该模块。这个数据并行的基本例子使用了 Pool ，

```python
from multiprocessing import Pool

def f(x):
    return x*x

if __name__ == '__main__':
    with Pool(5) as p:
        print(p.map(f, [1, 2, 3]))
```


## 结论

因此，简单的并发应用，请使用 concurrent.futures，复杂些的，要自己动手实现的，请使用 multiprocessing 吧。初学者直接学习 concurrent.futures。


参考文档：

[https://docs.python.org/zh-cn/3/library/concurrent.futures.html](https://docs.python.org/zh-cn/3/library/concurrent.futures.html)

[https://docs.python.org/zh-cn/3/library/multiprocessing.html](https://docs.python.org/zh-cn/3/library/multiprocessing.html)



(完)

关注微信公众号：Python七号，像玩游戏一样学习 Python。

![](../images/PythonSevenW.jpg)
