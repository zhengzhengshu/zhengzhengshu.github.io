---
title: 如何使用Python基于接口编程
date: 2020-02-14
tags:
 - abstractmethod
categories: 
 - Python
---

软件行业，唯一不变的就是变化。产品经理会变，产品需求会变，代码同样要跟着变。

<!-- more -->


不同的代码设计，变化所带来的工作量更是不同，有的每改一次需求，近乎一次重构，而有的只需要修改一个配置文件，或者在类里添加一行代码。当然比较好的代码设计，由于有着良好的可扩展性，高内聚，低耦合，因而易维护， 以少变应万变。如果才能有好的代码设计，就需要我们学习设计模式。今天为你分享的是在Python中，如何基于接口编程。

1994 年 GoF 的《设计模式》一书中有一个重要的原则就是：基于接口而非实现编程，英文源文是「Program to an interface,not an implementaion」，这里的所说的 interface，并不是特定编程语言中的接口，它是语言无关的，是指开发者提供给使用者的一个功能列表，理解了这一点非常重要。接口在 java 语言中是有关键字 interface 来实现的，java 不支持类的多重继承，但支持接口的多重继承，所在 java 开发者对接口非常熟悉了，Python 其实完全不需要 Java 那样的设计，但可以借鉴接口的优点。

## 先通过一个实例来了解下接口到底解决什么问题。

比如你正在实现一个图片上传功能，目前采用七牛云来存储，你的类可能是这样的。

```python
class QnyImageStore(object):

    def getToken():
        pass

    def upload_qny(self,image):
        print("Qny upload.")
        #do something
    
    def download_qny(self,image):
        print("Qny download.")
        #do something

```
实际的开发中，代码会有很多行，函数也不止三个，它被成百上千个地方被调用，分散在好几百个文件中。 过了一段时间，公司自建了私有云，要求不能再使用七牛云了，要改成自己的云存储，于是你不得不重新写一个类：

```python
class OwnImageStore(object):

    def upload_own(self,image):
        print("Qny upload.")
        #do something
    
    def download_own(self,image):
        print("Qny download.")
        #do something
```

然后你在使用七牛去的地方，都进行替换，还要替换函数的名称，最后还要多次测试，生活哪一处没有考虑到，运行报错。好不容易改好了，突然有一天，需求又变了，由于自己的云服务经常出问题，于是要换阿里云。经过上次的一翻痛苦折腾，看到这次又要改，直接吐血。

其实问题就在于你写的代码不够通用，命名不够抽象。假如你的类的函数命名使用 upload,download 这样，那么你修改的代码量可能会减少到一半，只替换一下类名就可以了。实际上，我们可以使用接口来减少代码的改动量：通过接口和实现相分离的模式，封装不稳定的实现，暴露稳定的接口。上下游系统在使用我们开发的功能时，只需要使用接口中声明的函数列表，这样当实现发生变化的时候，上游系统的代码基本上不需要做改动，以此来降低耦合性，提高扩展性。下面就该问题，提供一种基于接口的代码实现方式。


#### 定义一个接口
```python
from abc import ABCMeta, abstractmethod

class ImageStore(metaclass = ABCMeta):
    
    @abstractmethod
    def upload(self,image): 
        pass
        #raise NotImplementedError

    @abstractmethod
    def download(self,image): 
        pass
        #raise NotImplementedError
```

定义了该接口之后，任何继承该接口的类要想正确的使用，必须重写 upload 和 download 方法，否则均会抛出异常，这里我们不需要自己在接口中抛出异常，标准库 abc 已经为我们做好了这些工作。

####定义类，继承接口

目的其实是是为了强制约束，也就是说必须实现 upload 和 download 方法，在编译时进行检查，确保程序的健壮。

```python
class OwnImageStore2(ImageStore):

    def upload(self,image):
        print("Own upload.")
        #do something
    
    def download(self,image):
        print("Own download.")
        #do something

 

class QnyImageStore2(ImageStore):

    def getToken():
        pass

    def upload(self,image):
        print("Qny upload.")

    def download(self,image):
        print("Qny download.")
        #do something

````

接下来，我们定义一个接口，可以自动的根据类型来选择调用对应对象的方法。

```python
class UsedStore(object):

    def __init__(self, store):
        if not isinstance(store, ImageStore): raise Exception('Bad interface')
        self._store = store

    def upload(self):
        self._store.upload('image')

    def download(self):
        self._store.download('image')
```

最后，我们可以在配置文件中指明我们使用的是哪个具体的接口：

```python

#在其他文件中，应该这样调用
img = QnyImageStore2()
# img = OwnImageStore2() 把这些放在配置文件中，只需要更新配置文件就可以替换 
store = UsedStore(img)
store.upload()
store.download()
```

这样，后面再增加新的图片存储，我们只需要添加相应的类，继承接口，并修改下配置文件即可，减轻大量的代码修改工作。


## Python 抽象基类的介绍 (PEP3119)

python 标准库 abc，全称是Abstract Base Classes，它提供以下功能：

- 一种重载isinstance()和issubclass()的方法
- 一个新的模块abc作为“Abstract Base Classes支持框架”。它定义了一个用于abc的元类和一个可以用来定义抽象方法的装饰器
-  容器和迭代器的特定抽象基类，将被添加到 collections 模块

**基本原理**：

在面向对象程序设计领域，与对象交互的设计模式可以分为两个基本类别，即“调用”和“检查”。

调用是指通过调用对象的方法与对象进行交互。 通常，这会与多态性结合使用，因此调用给定方法可能会根据对象的类型运行不同的代码。

检查是指外部代码（在对象的方法之外）检查该对象的类型或属性，并根据该信息来决定如何处理该对象的能力。

两种使用模式均服务于相同的通用目的，即能够以统一的方式支持处理多种多样且可能新颖的对象，但同时允许为每种不同类型的对象定制处理决策。

在经典的 OOP 理论中，调用是首选的设计模式，并且不鼓励检查，因为检查被认为是较早的过程编程风格的产物。 但是，实际上，这种观点过于教条和僵化，导致了某种设计僵化，与诸如 Python 之类的语言的动态特性大相径庭。

特别是，通常需要以对象类的创建者无法预期的方式处理对象。 内置到满足该对象的每个可能用户需求的每个对象方法中，并非总是最佳的解决方案。 而且，有许多强大的调度哲学与严格地封装在对象中的经典OOP行为要求形成鲜明对比，例如规则或模式匹配驱动的逻辑

另一方面，经典的 OOP 理论家对检查的批评之一是缺乏形式主义和被检查内容的特殊性质。 在诸如 Python 这样的语言中，几乎可以通过外部代码反映并直接访问对象的任何方面，有很多不同的方法来测试对象是否符合特定的协议。 例如，如果询问“此对象是否是可变序列容器？”，则可以寻找“列表”的基类，或者可以寻找名为“ __getitem__”的方法。 但是请注意，尽管这些测试看似显而易见，但它们都不正确，因为其中一个会产生假阴性，而另一个会产生假阳性。

普遍同意的补救措施是对测试进行标准化，并将其分组为正式形式。 通过继承机制或其他某种方式，通过与每个类关联一组标准的可测试属性，最容易做到这一点。 每个测试都带有一组承诺：它包含有关类的一般行为的承诺，以及有关其他可用的类方法的承诺。

PEP为组织这些测试提出了一种特殊的策略，称为抽象基类（ABC）。 ABC只是添加到对象的继承树中的Python类，以将对象的某些功能发送给外部检查器。 使用isinstance（）完成测试，并且特定ABC的存在意味着测试已通过。

此外，ABC定义了建立该类型特征行为的最少方法集。 根据对象的ABC类型区分对象的代码可以相信，这些方法将始终存在。 这些方法中的每一个都附带有ABC文档中描述的广义抽象语义定义。 这些标准的语义定义不是强制性的，但强烈建议使用。

像Python中的所有其他内容一样，这些承诺属于绅士协议的性质，在这种情况下，这意味着尽管该语言确实执行了ABC中做出的某些承诺，但具体类的实现者必须确保 剩下的保留下来。


看完上面的描述，你可以简单的理解为，ABC 是一个基类，继承它，你可以写一个类似于 java 的接口，接口中的方法将始终存在，可以放心使用，不需要再进行探测。

PEP3119 还给了样例代码让你理解：

```python
from abc import ABCMeta, abstractmethod

class A(metaclass=ABCMeta):
    @abstractmethod
    def foo(self): pass

A()  # raises TypeError

class B(A):
    pass

B()  # raises TypeError

class C(A):
    def foo(self): print(42)

C()  # works
```

多的不说了，希望你可以正确地使用 ABC，同时强烈推荐，学习 Python，就看 Python 的官方文档和 PEP 提案，这里有最权威的讲解。

此外，设置模式也是非常重要的编程之术和编程之道，它是基本功，基本功如果不够，把一台战斗机放你面前，你都不知道如何欣赏和品味。

掌握了设计模式，再看别人的代码，你会拥有火眼金睛，哪些是战斗机，哪些是拖拉机，对自己的学习和提升也非常有帮助，写的代码也会更加具有可维护性，可读性，可扩展性，灵活性。

如果你对设计模式感兴趣，那么就加入和我一起学习吧，从下图购买设计模式的同学，加我好友（somenzz），返现 12 元，并带你加入大佬群一起交流 Python 技术，不要独学无友，孤陋寡闻 。

![设计模式之美-王争](https://tva1.sinaimg.cn/large/00831rSTgy1gcmg7bw3a5j30u01hdkjl.jpg)


(完)

关注微信公众号：Python七号，像玩游戏一样学习 Python。

![](../images/PythonSevenW.jpg)
