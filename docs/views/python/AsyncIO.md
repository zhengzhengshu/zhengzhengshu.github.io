---
title: 完整的Python异步IO操作之旅
date: 2019-12-05
tags:
 - Async
 - 异步
categories: 
 - Python
---

异步 IO 是一种并发编程设计，Python3.4 开始，已经有专门的标准库 asyncio 来支持异步 IO 操作。你可能会说，我知道并发用多线程，并行用多进程，这里面的知识已经够我掌握的了，异步 IO 又是个什么鬼？ 本文将会回答该问题，从而使你更加牢固地掌握 Python 的异步 IO 操作方法。

<!-- more -->

几个名词先解释下：

**异步：** 异步是什么意思？这不是一个严格的定义，从下面两个方面来理解：
1. 异步程序可以在等待其最终结果的同时“暂停”并让其他程序同时运行。
2. 通过上述机制，异步代码有助于并发执行。换句话说，异步代码表现出了并发的特点。

**异步IO：** 一种与语言无关的范例(模型) ，很多编程语言都有这种实现，它是一种单线程，单进程设计：它使用协作多任务处理，尽管在单个进程中使用单个线程，异步 IO 仍具有并发的感觉。

**async/await：** 两个用于定义协程的新 Python 关键字。

**asyncio：** Python 标准库，为运行和管理协程提供了基础和 API。

## 同步和异步的区别：

假设你去参加象棋比赛，有以下条件：
- 24 个对手
- 在 5 秒内使每盘棋移动
- 对手各花费 55 秒采取行动
- 游戏平均 30 对动作(总共 60 个动作) 

同步：你一次只能和一个对手下棋，在一局比赛结束前不能进入下一个。每个游戏需要(55 + 5) x 30 == 1800 秒或 30 分钟。整个展览需要 24 * 30 == 720 分钟或 12 个小时。

异步：你在棋盘之间移动，在每个棋盘上移动一步，离开桌子，让对手在等待时间内和另一个对手下棋。在所有 24 场比赛中，一动需要 24 x 5 == 120 秒或 2 分钟。现在整个展览减少到 120 x 30 == 3600 秒，或仅 1 小时

你只有两只手，一次只能移动一步。但是异步的方法可以从 12 小时减少到 1 小时。因此，协作式多任务处理是一种奇特的方式，可以说程序的事件循环与多个任务进行通信，以使每个任务在最佳时间轮流运行。


## 异步并不简单

网上流传这样的话：当必须使用多线程时那就使用多线程，否则都尽可能使用异步 IO 。构建健壮的多线程程序是困难的且容易出错，异步 IO 避免了线程设计可能会遇到的某些潜在速度瓶颈。

这并不是说写异步 IO 代码是简单的，请注意：当你进入底层时，异步编程也可能会很困难！Python 的异步模型是基于诸如回调，事件，传输，协议和期程( futures )  之类的概念构建的，这些术语可能令人生畏。

幸运的是，asyncio 已经发展的非常成熟，它的大多数功能不再是临时的，文档已得到了巨大的改进，与此相关的一些优质资源也开始出现。


## async/await 语法及协程

异步 IO 的核心是协程。协程是一种特殊的 Python 函数，可以在到达返回值之前暂停其执行，并且可以将控制权间接传递给另一个协程一段时间。了解协程最简单的方法就是写一个 hello world 的代码来感受一下：

```python
#!/usr/bin/env python3
# countasync.py

import asyncio

async def count() :
    print("One") 
    await asyncio.sleep(1) 
    print("Two") 

async def main() :
    await asyncio.gather(count() , count() , count()) 

if __name__ == "__main__":
    import time
    s = time.perf_counter() 
    asyncio.run(main()) 
    elapsed = time.perf_counter()  - s
    print(f"{__file__} executed in {elapsed:0.2f} seconds.") 
```

执行结果：

```
One
One
One
Two
Two
Two
e:\countasync.py executed in 1.01 seconds.
```

这里使用 time.sleep() 和 asyncio.sleep() 是有区别的，time.sleep() 可以表示任何耗时的阻塞函数调用，而 asyncio.sleep 不阻塞，可将 CPU 的控制权交给下一个协程。


## Async IO 的规则


理解了 async，await 的规则，对掌握异步/等待功能非常重要。关键字 async def 可以定义一个协程函数或一个异步生成器函数。关键字 await 将功能控制传回事件循环。比如：

```python

async def g() :
    # Pause here and come back to g()  when f()  is ready
    r = await f() 
    return r

```
这里的 await 挂起了本次协程的执行。如果 Python 在 g() 范围内遇到 await f() 表达式，那就意味着，“暂停 g() 的执行，直到我等待f() 返回结果。同时，让其他协程运行。”。当然也有一些规则要求什么地方可以使用 async/await 关键字，什么地方不能用：

- 使用 async def 定义的函数是一个协程，它内部可以使用 await，return，yield，也可以都不用。
    - 使用 wait 或 return 创建一个coroutine函数。要调用 coroutine 函数，你必须使用 await 关键字。
    - 很少情况下会在 async del 的代码块中使用 yield ，如果用了，会产生一个异步的生成器。
    - 任何 async def 内都不能使用 yield from，会抛出语法错误。

- 就像不能在函数外面使用 yield 一样，也不能在 async def 外使用 await。会抛出语法错误。


下面是一些例子：

```python
async def f(x) :
    y = await z(x)   # OK - `await` and `return` allowed in coroutines
    return y

async def g(x) :
    yield x  # OK - this is an async generator

async def m(x) :
    yield from gen(x)   # No - SyntaxError

def m(x) :
    y = await z(x)   # Still no - SyntaxError (no `async def` here) 
    return y
```

言归正传，让我们来看一个更复杂的例子：给定一个产生随机数的函数 makerandom，它产生一个 0-9 之间的随机数，直到超过给定数据后结束，让此协程的多个调用无需等待彼此即可执行，代码如下：

```python
import asyncio
import random

# ANSI colors
c = (
    "\033[0m",   # End of color
    "\033[36m",  # Cyan
    "\033[91m",  # Red
    "\033[35m",  # Magenta
) 

async def makerandom(idx: int, threshold: int = 6)  -> int:
    print(c[idx + 1] + f"Initiated makerandom({idx}) .") 
    i = random.randint(0, 10) 
    while i <= threshold:
        print(c[idx + 1] + f"makerandom({idx})  == {i} too low; retrying.") 
        await asyncio.sleep(idx + 1) 
        i = random.randint(0, 10) 
    print(c[idx + 1] + f"---> Finished: makerandom({idx})  == {i}" + c[0]) 
    return i

async def main() :
    res = await asyncio.gather(*(makerandom(i, 10 - i - 1)  for i in range(3)) ) 
    return res

if __name__ == "__main__":
    random.seed(444) 
    r1, r2, r3 = asyncio.run(main()) 
    print() 
    print(f"r1: {r1}, r2: {r2}, r3: {r3}") 
```

运行结果如下：

![result](./asyncio-rand.dffdd83b4256.gif)

该程序使用一个主协程 makerandom() ，并在 3 个不同的输入上同时运行它。大多数程序将包含小型模块化协程和一个包装器功能，用于将每个较小的协程链接在一起。main() 通过在一些可迭代或池中映射中央协程来收集任务。在此示例中，池为 range(3) 。尽管“制作随机整数”(比CPU绑定更多的东西) 可能不是 asyncio 的最佳选择，但在示例中正是 asyncio.sleep() 旨在模仿 IO 绑定的过程等待时间不确定的地方。例如，asyncio.sleep() 调用可以表示在消息应用程序的两个客户端之间发送和接收的延迟。

## 异步 IO 设计模式

异步 IO 的设计模式，分为以下几种：

### 链式协程

协程的一个关键特征是它们可以链接在一起。请记住，一个协程对象是可以 await 的，因此另一个协程可以等待它。利用这一点可以将程序分解为较小的，可管理的，可回收的协程：

```python
#!/usr/bin/env python3
# chained.py

import asyncio
import random
import time

async def part1(n: int)  -> str:
    i = random.randint(0, 10) 
    print(f"part1({n})  sleeping for {i} seconds.") 
    await asyncio.sleep(i) 
    result = f"result{n}-1"
    print(f"Returning part1({n})  == {result}.") 
    return result

async def part2(n: int, arg: str)  -> str:
    i = random.randint(0, 10) 
    print(f"part2{n, arg} sleeping for {i} seconds.") 
    await asyncio.sleep(i) 
    result = f"result{n}-2 derived from {arg}"
    print(f"Returning part2{n, arg} == {result}.") 
    return result

async def chain(n: int)  -> None:
    start = time.perf_counter() 
    p1 = await part1(n) 
    p2 = await part2(n, p1) 
    end = time.perf_counter()  - start
    print(f"-->Chained result{n} => {p2} (took {end:0.2f} seconds) .") 

async def main(*args) :
    await asyncio.gather(*(chain(n)  for n in args)) 

if __name__ == "__main__":
    import sys
    random.seed(444) 
    args = [1, 2, 3] if len(sys.argv)  == 1 else map(int, sys.argv[1:]) 
    start = time.perf_counter() 
    asyncio.run(main(*args)) 
    end = time.perf_counter()  - start
    print(f"Program finished in {end:0.2f} seconds.") 
```

注意观察输出，part1() 睡眠一段时间，part2() 在结果可用时开始处理它们：

```python
$ python3 chained.py 9 6 3
part1(9)  sleeping for 4 seconds.
part1(6)  sleeping for 4 seconds.
part1(3)  sleeping for 0 seconds.
Returning part1(3)  == result3-1.
part2(3, 'result3-1')  sleeping for 4 seconds.
Returning part1(9)  == result9-1.
part2(9, 'result9-1')  sleeping for 7 seconds.
Returning part1(6)  == result6-1.
part2(6, 'result6-1')  sleeping for 4 seconds.
Returning part2(3, 'result3-1')  == result3-2 derived from result3-1.
-->Chained result3 => result3-2 derived from result3-1 (took 4.00 seconds) .
Returning part2(6, 'result6-1')  == result6-2 derived from result6-1.
-->Chained result6 => result6-2 derived from result6-1 (took 8.01 seconds) .
Returning part2(9, 'result9-1')  == result9-2 derived from result9-1.
-->Chained result9 => result9-2 derived from result9-1 (took 11.01 seconds) .
Program finished in 11.01 seconds.
```
在以上代码中，main() 的运行时间将等于它收集在一起的协程任务的最大运行时间。


### 使用队列

asyncio.Queue 类在与标准库 queue 的功能相似。前述示例中，并不需要队列结构。在 chained.py 中，每个任务都由一组协程组成，这些协程明确地相互等待，并在每个链中传递单个输入。

还有一种可以与异步 IO 一起使用的数据结构：许多彼此不相关的生产者将项目添加到队列中。每个生产者可以在交错、随机、未通知的时间将多个项目添加到队列中。一群消费者将它们从队列中拉出，而不必等待任何其他信号。

在这种设计中，没有任何消费者链接到生产者。消费者不知道生产者的数量，甚至不知道将要添加到队列中的项目的累计数量。每个生产者或消费者花费可变的时间分别从队列中放入和提取项目。队列充当可以与生产者和消费者进行通信的桥梁，而无需他们直接相互交谈。

下面是示例代码 asyncq.py。该工作流程中具有挑战性的部分是，需要向消费者发出生产已经完成的信号。否则，await q.get() 会无限期挂起，因为队列已被完全处理，但是消费者不会知道生产已经完成。main 函数中的 q.join，该操作将阻塞直到队列中的所有项目都已接收并处理，否则将挂断并无休止地等待其他队列项目出现。


```python
#!/usr/bin/env python3
# asyncq.py

import asyncio
import itertools as it
import os
import random
import time

async def makeitem(size: int = 5)  -> str:
    return os.urandom(size) .hex() 

async def randsleep(a: int = 1, b: int = 5, caller=None)  -> None:
    i = random.randint(0, 10) 
    if caller:
        print(f"{caller} sleeping for {i} seconds.") 
    await asyncio.sleep(i) 

async def produce(name: int, q: asyncio.Queue)  -> None:
    n = random.randint(0, 10) 
    for _ in it.repeat(None, n) :  # Synchronous loop for each single producer
        await randsleep(caller=f"Producer {name}") 
        i = await makeitem() 
        t = time.perf_counter() 
        await q.put((i, t)) 
        print(f"Producer {name} added <{i}> to queue.") 

async def consume(name: int, q: asyncio.Queue)  -> None:
    while True:
        await randsleep(caller=f"Consumer {name}") 
        i, t = await q.get() 
        now = time.perf_counter() 
        print(f"Consumer {name} got element <{i}>"
              f" in {now-t:0.5f} seconds.") 
        q.task_done() 

async def main(nprod: int, ncon: int) :
    q = asyncio.Queue() 
    producers = [asyncio.create_task(produce(n, q))  for n in range(nprod) ]
    consumers = [asyncio.create_task(consume(n, q))  for n in range(ncon) ]
    await asyncio.gather(*producers) 
    await q.join()   # Implicitly awaits consumers, too
    for c in consumers:
        c.cancel() 

if __name__ == "__main__":
    import argparse
    random.seed(444) 
    parser = argparse.ArgumentParser() 
    parser.add_argument("-p", "--nprod", type=int, default=5) 
    parser.add_argument("-c", "--ncon", type=int, default=10) 
    ns = parser.parse_args() 
    start = time.perf_counter() 
    asyncio.run(main(**ns.__dict__)) 
    elapsed = time.perf_counter()  - start
    print(f"Program completed in {elapsed:0.5f} seconds.") 
```


第一个协程是辅助函数，它们返回一个随机字符串。生产者将 1 到 5 个项目放入队列中。每个项目都是(i，t) 的元组，其中 i 是随机字符串，t 是生产者尝试将元组放入队列的时间。

消费者将商品拉出时，它仅使用放入商品的时间戳来计算商品在队列中的经过时间。

请记住，asyncio.sleep() 用于模仿其他一些更复杂的协程，如果这是常规的阻止函数，则会消耗时间并阻止所有其他执行。

这是由两个生产者和五个消费者进行的测试结果：
```python
$ python3 asyncq.py -p 2 -c 5
Producer 0 sleeping for 3 seconds.
Producer 1 sleeping for 3 seconds.
Consumer 0 sleeping for 4 seconds.
Consumer 1 sleeping for 3 seconds.
Consumer 2 sleeping for 3 seconds.
Consumer 3 sleeping for 5 seconds.
Consumer 4 sleeping for 4 seconds.
Producer 0 added <377b1e8f82> to queue.
Producer 0 sleeping for 5 seconds.
Producer 1 added <413b8802f8> to queue.
Consumer 1 got element <377b1e8f82> in 0.00013 seconds.
Consumer 1 sleeping for 3 seconds.
Consumer 2 got element <413b8802f8> in 0.00009 seconds.
Consumer 2 sleeping for 4 seconds.
Producer 0 added <06c055b3ab> to queue.
Producer 0 sleeping for 1 seconds.
Consumer 0 got element <06c055b3ab> in 0.00021 seconds.
Consumer 0 sleeping for 4 seconds.
Producer 0 added <17a8613276> to queue.
Consumer 4 got element <17a8613276> in 0.00022 seconds.
Consumer 4 sleeping for 5 seconds.
Program completed in 9.00954 seconds.
```

在这种情况下，生产或消费的每一个处理过程将在几分之一秒内完成处理。延迟可能有两个原因：

1. 标准开销，在很大程度上是不可避免的开销
2. 队列中时所有消费者都在睡觉的情况

关于第二点原因，扩展到成百上千的消费者是完全正常的。python3 asyncq.py -p 5 -c 100 应该没有问题。从理论上讲，你可以在不同的系统上使用不同的用户来控制生产者和消费者的管理，而队列则作为中间桥梁。

## 一个完整的异步 http 请求

接下来将使用 aiohttp (一种非常快的异步 HTTP 客户端/服务器框架) 来构建可抓取网址的 URL 爬虫程序 areq.py。这样的工具可用于映射站点集群之间的连接，链接形成有向图。

你可能想知道为什么 Python 的 requests 库与异步 IO 不兼容，原因是 requests 库建立在 urllib3 之上，而 urllib3 又使用 Python 的 http 和套接字模块， 默认情况下，套接字操作处于阻塞状态。这意味着 Python 不会使用 await request.get(url) ，因为 get() 无法等待。相反，aiohttp 中的几乎所有内容都是可等待的协程，例如 session.request() 和 response.text()。

一个高级别的程序结构应该是这样的：

1. 从一个本地文件 urls.txt 中读取一系列 URLs。
2. 对 1 中的 URL 发送 GET 请求，并解码返回的结果，如果这一步失败，就停止对此 URL 操作。
3. 在 2 的结果中查找超链接，并将超链接信息保存在 foundurls.txt 中
4. 尽可能使用并发异步操作执行以上过程。使用 aiohttp 进行网络请求，aiofiles 操作文件。

url.txt 的内容如下：

```
$ cat urls.txt
https://regex101.com/
https://docs.python.org/3/this-url-will-404.html
https://www.nytimes.com/guides/
https://www.mediamatters.org/
https://1.1.1.1/
https://www.politico.com/tipsheets/morning-money
https://www.bloomberg.com/markets/economics
https://www.ietf.org/rfc/rfc2616.txt

```

列表中的第二个 URL 应该返回 404 响应，你需要对其进行适当处理。在实际使用中，可能需要处理比这更棘手的问题，例如服务器断开连接和无止尽的重定向。 请求本身应使用单个会话发出，以充分利用会话的内部连接池。

让我们看一下完整的程序：

```python

#!/usr/bin/env python3
# areq.py

"""Asynchronously get links embedded in multiple pages' HMTL."""

import asyncio
import logging
import re
import sys
from typing import IO
import urllib.error
import urllib.parse

import aiofiles
import aiohttp
from aiohttp import ClientSession

logging.basicConfig(
    format="%(asctime) s %(levelname) s:%(name) s: %(message) s",
    level=logging.DEBUG,
    datefmt="%H:%M:%S",
    stream=sys.stderr,
) 
logger = logging.getLogger("areq") 
logging.getLogger("chardet.charsetprober") .disabled = True

HREF_RE = re.compile(r'href="(.*?) "') 

async def fetch_html(url: str, session: ClientSession, **kwargs)  -> str:
    """GET request wrapper to fetch page HTML.

    kwargs are passed to `session.request() `.
    """

    resp = await session.request(method="GET", url=url, **kwargs) 
    resp.raise_for_status() 
    logger.info("Got response [%s] for URL: %s", resp.status, url) 
    html = await resp.text() 
    return html

async def parse(url: str, session: ClientSession, **kwargs)  -> set:
    """Find HREFs in the HTML of `url`."""
    found = set() 
    try:
        html = await fetch_html(url=url, session=session, **kwargs) 
    except (
        aiohttp.ClientError,
        aiohttp.http_exceptions.HttpProcessingError,
    )  as e:
        logger.error(
            "aiohttp exception for %s [%s]: %s",
            url,
            getattr(e, "status", None) ,
            getattr(e, "message", None) ,
        ) 
        return found
    except Exception as e:
        logger.exception(
            "Non-aiohttp exception occured:  %s", getattr(e, "__dict__", {}) 
        ) 
        return found
    else:
        for link in HREF_RE.findall(html) :
            try:
                abslink = urllib.parse.urljoin(url, link) 
            except (urllib.error.URLError, ValueError) :
                logger.exception("Error parsing URL: %s", link) 
                pass
            else:
                found.add(abslink) 
        logger.info("Found %d links for %s", len(found) , url) 
        return found

async def write_one(file: IO, url: str, **kwargs)  -> None:
    """Write the found HREFs from `url` to `file`."""
    res = await parse(url=url, **kwargs) 
    if not res:
        return None
    async with aiofiles.open(file, "a")  as f:
        for p in res:
            await f.write(f"{url}\t{p}\n") 
        logger.info("Wrote results for source URL: %s", url) 

async def bulk_crawl_and_write(file: IO, urls: set, **kwargs)  -> None:
    """Crawl & write concurrently to `file` for multiple `urls`."""
    async with ClientSession()  as session:
        tasks = []
        for url in urls:
            tasks.append(
                write_one(file=file, url=url, session=session, **kwargs) 
            ) 
        await asyncio.gather(*tasks) 

if __name__ == "__main__":
    import pathlib
    import sys

    assert sys.version_info >= (3, 7) , "Script requires Python 3.7+."
    here = pathlib.Path(__file__) .parent

    with open(here.joinpath("urls.txt"))  as infile:
        urls = set(map(str.strip, infile)) 

    outpath = here.joinpath("foundurls.txt") 
    with open(outpath, "w")  as outfile:
        outfile.write("source_url\tparsed_url\n") 

    asyncio.run(bulk_crawl_and_write(file=outpath, urls=urls)) 

```


如果你想了解更多内容，请在 [https://github.com/realpython/materials/tree/master/asyncio-walkthrough](https://github.com/realpython/materials/tree/master/asyncio-walkthrough)  查看。这是所有执行过程的结果，areq.py 在一秒钟之内即可获取，解析并保存9个网址的结果：

```
$ python3 areq.py
21:33:22 DEBUG:asyncio: Using selector: KqueueSelector
21:33:22 INFO:areq: Got response [200] for URL: https://www.mediamatters.org/
21:33:22 INFO:areq: Found 115 links for https://www.mediamatters.org/
21:33:22 INFO:areq: Got response [200] for URL: https://www.nytimes.com/guides/
21:33:22 INFO:areq: Got response [200] for URL: https://www.politico.com/tipsheets/morning-money
21:33:22 INFO:areq: Got response [200] for URL: https://www.ietf.org/rfc/rfc2616.txt
21:33:22 ERROR:areq: aiohttp exception for https://docs.python.org/3/this-url-will-404.html [404]: Not Found
21:33:22 INFO:areq: Found 120 links for https://www.nytimes.com/guides/
21:33:22 INFO:areq: Found 143 links for https://www.politico.com/tipsheets/morning-money
21:33:22 INFO:areq: Wrote results for source URL: https://www.mediamatters.org/
21:33:22 INFO:areq: Found 0 links for https://www.ietf.org/rfc/rfc2616.txt
21:33:22 INFO:areq: Got response [200] for URL: https://1.1.1.1/
21:33:22 INFO:areq: Wrote results for source URL: https://www.nytimes.com/guides/
21:33:22 INFO:areq: Wrote results for source URL: https://www.politico.com/tipsheets/morning-money
21:33:22 INFO:areq: Got response [200] for URL: https://www.bloomberg.com/markets/economics
21:33:22 INFO:areq: Found 3 links for https://www.bloomberg.com/markets/economics
21:33:22 INFO:areq: Wrote results for source URL: https://www.bloomberg.com/markets/economics
21:33:23 INFO:areq: Found 36 links for https://1.1.1.1/
21:33:23 INFO:areq: Got response [200] for URL: https://regex101.com/
21:33:23 INFO:areq: Found 23 links for https://regex101.com/
21:33:23 INFO:areq: Wrote results for source URL: https://regex101.com/
21:33:23 INFO:areq: Wrote results for source URL: https://1.1.1.1/
```

## 其他高级别的异步函数

除了 asyncio.run() 之外，你还看到了其他一些函数，例如 asyncio.create_task() 和 asyncio.gather() 。你可以使用 create_task() 安排协程对象的执行，然后使用 asyncio.run() ：

```python
>>> import asyncio

>>> async def coro(seq) -> list:
...     """'IO' wait time is proportional to the max element."""
...     await asyncio.sleep(max(seq))
...     return list(reversed(seq))
...
>>> async def main():
...     # This is a bit redundant in the case of one task
...     # We could use `await coro([3, 2, 1])` on its own
...     t = asyncio.create_task(coro([3, 2, 1]))  # Python 3.7+
...     await t
...     print(f't: type {type(t)}')
...     print(f't done: {t.done()}')
...
>>> t = asyncio.run(main())
t: type <class '_asyncio.Task'>
t done: True

```

如果不在 main() 中使用 await ，它可能会在 main() 本身完成之前就结束了。因为 asyncio.run(main()) 调用 loop.run_until_complete(main()) ，所以事件循环仅关注 main() 完成，而不关注在 main() 中创建的任务是否完成。如果不等待，循环的其他任务可能会在完成之前被取消。如果需要获取当前待处理任务的列表，则可以使用 asyncio.Task.all_tasks() 。

另外，还有 asyncio.gather() 。尽管它没有做任何特别的事情，但是 collect()  的目的是将协程的集合整齐地放在一个 future。结果，它返回一个 future 的对象，如果你等待 asyncio.gather() 并指定多个任务或协程，则你正在等待所有这些任务或协程完成。这与我们前面的示例有点类似 queue.join() ，collect() 的结果将是输入结果的列表：

```python
>>> import time
>>> async def main():
...     t = asyncio.create_task(coro([3, 2, 1]))
...     t2 = asyncio.create_task(coro([10, 5, 0]))  # Python 3.7+
...     print('Start:', time.strftime('%X'))
...     a = await asyncio.gather(t, t2)
...     print('End:', time.strftime('%X'))  # Should be 10 seconds
...     print(f'Both tasks done: {all((t.done(), t2.done()))}')
...     return a
...
>>> a = asyncio.run(main())
Start: 16:20:11
End: 16:20:21
Both tasks done: True
>>> a
[[1, 2, 3], [0, 5, 10]]

```
你可能已经注意到，collect() 等待传递给它的 Future 或协程的整个结果集。你可以遍历 asyncio.as_completed() 以按完成顺序获取任务结果。该函数返回一个迭代器，该迭代器在完成任务时产生任务。下面，在coro([10，5，0]) 完成之前，可使用coro([3，2，1]) 的结果，而用 collect() 则不是这样：

```python
>>> async def main():
...     t = asyncio.create_task(coro([3, 2, 1]))
...     t2 = asyncio.create_task(coro([10, 5, 0]))
...     print('Start:', time.strftime('%X'))
...     for res in asyncio.as_completed((t, t2)):
...         compl = await res
...         print(f'res: {compl} completed at {time.strftime("%X")}')
...     print('End:', time.strftime('%X'))
...     print(f'Both tasks done: {all((t.done(), t2.done()))}')
...
>>> a = asyncio.run(main())
Start: 09:49:07
res: [1, 2, 3] completed at 09:49:10
res: [0, 5, 10] completed at 09:49:17
End: 09:49:17
Both tasks done: True

```

## 实例：pyppeteer 模块

pyppeteer 模块，它是无头浏览器 Puppeteer 的 Python 移植，API 跟 JavaScript 版本基本一致。下面是安装命令。

```python
#!/usr/bin/env python3
# screenshot.py

import asyncio
from pyppeteer import launch

async def main():
    browser = await launch()
    page = await browser.newPage()
    await page.goto('http://example.com')
    await page.screenshot({'path': 'example.png'})
    await browser.close()

asyncio.run(main())
```
上面代码中，启动浏览器（launch）、打开新 Tab（newPage()）、访问网址（page.goto()）、截图（page.screenshot()）、关闭浏览器（browser.close()），这一系列操作都是异步任务，使用 await 命令写起来非常自然简单。执行这个脚本，当前目录下就会生成截图文件 example.png。

如果脚本执行时报错 No usable sandbox!，可以参考[这里](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#setting-up-chrome-linux-sandbox)。另外，第一次执行这个脚本，会下载安装 Puppeteer，可能需要等待较长时间，但是此后的执行就会很快。

Pyppeteer 的[官网](https://miyakogi.github.io/pyppeteer/)还有其他实例，比如向网页注入 JavaScript 代码。


## 参考链接
1. [Async IO in Python: A Complete Walkthrough](https://realpython.com/async-io-python/), Brad Solomon
2. [Python 异步编程入门](http://www.ruanyifeng.com/blog/2019/11/python-asyncio.html)，阮一峰


(完)

关注微信公众号：Python七号，像玩游戏一样学习 Python。

![](../images/PythonSevenW.jpg)
