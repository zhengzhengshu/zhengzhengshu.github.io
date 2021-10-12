(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{685:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("说实话昨天的文章划水了，这里读者的水平还是很高的，一看就看出了我的偷懒，标题 Python 的整数有边界么？ 肯定没有啊，于是就不打开看了。不过今天，我想接着昨天的话题，聊一聊 Python 是如何实现整数想加而不溢出的？")]),s._v(" "),a("h2",{attrs:{id:"_1、如何表示一个整数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、如何表示一个整数"}},[s._v("#")]),s._v(" 1、如何表示一个整数")]),s._v(" "),a("p",[s._v("要想了解这个，那就需要看 Python 的"),a("a",{attrs:{href:"https://github.com/python/cpython",target:"_blank",rel:"noopener noreferrer"}},[s._v("源代码"),a("OutboundLink")],1),s._v("，Python中的整数底层对应的结构体是PyLongObject，它位于 "),a("a",{attrs:{href:"https://github.com/python/cpython/blob/main/Include/longobject.h",target:"_blank",rel:"noopener noreferrer"}},[s._v("longobject.h"),a("OutboundLink")],1),s._v(" 中。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtldaup2k2j60zb0u0tdj02.jpg",alt:""}})]),s._v(" "),a("p",[s._v("逐步展开如下：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//longobject.h")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("_longobject")]),s._v(" PyLongObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Revealed in longintrepr.h */")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//longintrepr.h")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("_longobject")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    PyObject_VAR_HEAD\n    digit ob_digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//合起来可以看成")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    PyObject_VAR_HEAD\n    digit ob_digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" PyLongObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("再把宏定义 PyObject_VAR_HEAD 展开：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    PyObject_HEAD\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" ob_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    digit ob_digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" PyLongObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("再把宏定义 PyObject_HEAD 展开，结构体中的变量我已经作了注释：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" ob_refcnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//引用计数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("_typeobject")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ob_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//变量类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" ob_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用来指明变长对象中一共容纳了多少个元素")]),s._v("\n    digit ob_digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//digit类型的数组,长度为1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" PyLongObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这里面的 ob_size 用来指明变长对象中一共容纳了多少个元素，也就是 ob_digit 数组的长度，而这个 ob_digit 数组显然只能是用来维护具体的值。")]),s._v(" "),a("p",[s._v("到这里已经很明显了，Python 将大整数切割后存在 ob_digit，这个数组的长度是可变的，数据越大，数组越长，只要内存够用，存多大的数都可以。")]),s._v(" "),a("p",[s._v("那么下面的重点就在这个 ob_digit 数组了，我们看看 Python 中整数对应的值，比如 256，是怎么放在这个数组里面的。不过首先我们要看看这个digit 是个什么类型，它同样定义在 longintrepr.h 中")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("PYLONG_BITS_IN_DIGIT "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint32_t")]),s._v(" digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("PYLONG_BITS_IN_DIGIT "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),s._v(" digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("PYLONG_BITS_IN_DIGIT 是一个宏，如果你的机器是 64 位的，那么它会被定义为 30，32 位机器则会被定义为 15。")]),s._v(" "),a("p",[s._v("而我们的机器现在基本上都是 64 位的，所以 PYLONG_BITS_IN_DIGIT会等于 30，因为 digit 等价于 uint32_t(unsigned int)，所以它是一个无符号 32 位整型。")]),s._v(" "),a("p",[s._v("所以 ob_digit 这个数组是一个无符号 32 位整型数组，长度为 1。当然这个数组具体多长则取决于你要存储的 Python 整数有多大，因为 C 中数组的长度不属于类型信息，你可以看成是长度 n，而这个 n 是多少要取决于你的整数大小。显然整数越大，这个数组就越长，那么占用空间就越大。")]),s._v(" "),a("p",[s._v("为了说明 256 是如何存放在 ob_digit 里的，我们来简化下，这里假如 ob_digit 这个数组是一个无符号 8 位整型数组，8 位二进制，最大只能表示 255，我们要表示 256，那就只能再申请一个 8 位，也许你认为再申请一个 8 位来表示 1，其实不是的，是使用一个新的 8 位整数来模拟更高的位，如下所示：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("256 = [1,1] 的形式也不是真实情况，为了你理解，先这样写，它表达的意思就是 256 = 1 + 1 * (2^8 - 1) = 1 + 1 * 255 = 256。")]),s._v(" "),a("p",[s._v("也就是说 ob_digit 表示 x 进制数，ob_digit[0] 是低位，ob_digit[1] 是高位，具体 x 是多少，取决于 ob_digit 的类型，这里 8 位，就是 255 进制。")]),s._v(" "),a("p",[s._v("刚才提到 256 = [1,1] 的形式也不是真实情况，因为 PyLongObject 不仅仅是为了存储大整数，也需要参与运算，具体怎么运算呢，那就是 ob_digit 逐位相加即可。")]),s._v(" "),a("p",[s._v("既然是相加，即又可能溢出，比如 [255 , 1] + [255, 1] = [510,2]")]),s._v(" "),a("p",[s._v("这里的 510 就超出了 8 位，为了简化处理，只要我们不用满 8 位，就不会溢出，也就是说，比如说只用 7 位，那最大也就是 [127,...] + [127,...] = [254,...] 也就不会溢出了。")]),s._v(" "),a("p",[s._v("到这里，你会明白，为什么 digit 虽然是无符号 32 位整数，却只使用 30 位了吧：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("PYLONG_BITS_IN_DIGIT "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("uint32_t")]),s._v(" digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("PYLONG_BITS_IN_DIGIT "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("short")]),s._v(" digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("聪明的你，可能会问，31 位就可以保证不溢出，为啥牺牲两位，用 30 位，答案我也不知道，可能是因为 64 是 32 的两倍， 30 也是 15 的两倍，这样看起来更舒服吧。")]),s._v(" "),a("p",[s._v("那如何表示负数呢，其实负数的话，就是 ob_size 变成了负的，其他没变。整数的正负号是通过这里的 ob_size 决定的。ob_digit 存储的其实是绝对值，无论 n 取多少，-n 和 n 对应的 ob_digit 是完全一致的，但是ob_size 则互为相反数。所以 ob_size 除了表示数组的长度之外，还可以表示对应整数的正负。")]),s._v(" "),a("p",[s._v("所以 Python 在比较两个整型的大小时，会先比较 ob_size，如果 ob_size 不一样则可以直接比较出大小来。")]),s._v(" "),a("p",[s._v("总结一下，就是当 "),a("code",[s._v("PYLONG_BITS_IN_DIGIT == 30")]),s._v(" 的时候，"),a("code",[s._v("整数 = ob_digit[0] + ob_digit[1] * 2 ** 30 + ob_digit[2] * 2 ** 60 + ...")])]),s._v(" "),a("h2",{attrs:{id:"_2、整数占用内存大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、整数占用内存大小"}},[s._v("#")]),s._v(" 2、整数占用内存大小")]),s._v(" "),a("p",[s._v("理解了这一点，我们在看一下这个结构体：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" ob_refcnt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//引用计数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("_typeobject")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ob_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//变量类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" ob_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用来指明变长对象中一共容纳了多少个元素")]),s._v("\n    digit ob_digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//digit类型的数组,长度为1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" PyLongObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("一个整数占用多少个字节，取决于 PyLongObject 这个结构体占用多少字节，ob_refcnt、ob_type、ob_size 这三个是整数所必备的，它们都是 8 字节，加起来 24 字节。所以任何一个整数所占内存都至少 24 字节，至于具体占多少，则取决于 ob_digit 里面的元素都多少个。")]),s._v(" "),a("p",[s._v("现在的你不难理解以下结果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtlp8nlscij60ec0bwt9702.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_3、整数池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、整数池"}},[s._v("#")]),s._v(" 3、整数池")]),s._v(" "),a("p",[s._v("此外 Python 中的整数属于"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/hytXrbe52lV8tb8H01byZQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("不可变对象"),a("OutboundLink")],1),s._v("，运算之后会创建新的对象:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("140220663619152")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("140220663619408")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这样就势必会有性能缺陷，因为程序运行时会有对象的创建和销毁，就是射击内存的申请和垃圾回收，一个常用的手段就是使用对象池，将频率高的整数预先创建好，而且都是"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/_WN82tV-7WNGgATbFFwsPg",target:"_blank",rel:"noopener noreferrer"}},[s._v("单例模式"),a("OutboundLink")],1),s._v("，需要使用时直接返回。")]),s._v(" "),a("p",[s._v("小整数对象池的实现位于 "),a("a",{attrs:{href:"https://github.com/python/cpython/blob/main/Include/internal/pycore_interp.h",target:"_blank",rel:"noopener noreferrer"}},[s._v("pycore_interp.h"),a("OutboundLink")],1),s._v(" 中：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtlpjvf1cpj60ui0d275l02.jpg",alt:""}})]),s._v(" "),a("p",[s._v("验证一下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" b\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" b\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" b\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("257")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("257")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" b\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("不同的版本可能会不同，我这里 Python3.8，区间为 [-5,257)。")]),s._v(" "),a("h2",{attrs:{id:"_4、整数加减法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、整数加减法"}},[s._v("#")]),s._v(" 4、整数加减法")]),s._v(" "),a("p",[s._v("有了前面的铺垫，现在我们来看下 Python 中大整数是如何相加的，源代码 "),a("a",{attrs:{href:"https://github.com/python/cpython/blob/main/Objects/longobject.c",target:"_blank",rel:"noopener noreferrer"}},[s._v("longobject.c : long_add 函数"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtlq0qs1jwj60u00uv77t02.jpg",alt:""}})]),s._v(" "),a("p",[s._v("可以看到 long_add 根据 ob_size 的正或负来调用 x_add 或 x_sub。")]),s._v(" "),a("p",[s._v("现在看一下 x_add 的源代码：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtlq3zeslkj60u00u3adl02.jpg",alt:""}})]),s._v(" "),a("p",[s._v("可以看到，Python 大整数的相加就是底层数组的相加，当然还会涉及到进位等操作：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" size_b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tcarry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("ob_digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("ob_digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("ob_digit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" carry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" PyLong_MASK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tcarry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>=")]),s._v(" PyLong_SHIFT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("x_sub 的源代码：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtlq8lr9wmj60u01dw7ac02.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_4、整数乘法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、整数乘法"}},[s._v("#")]),s._v(" 4、整数乘法")]),s._v(" "),a("p",[s._v("Python 整数乘法使用的是 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Karatsuba_algorithm",target:"_blank",rel:"noopener noreferrer"}},[s._v("Karatsuba multiplication"),a("OutboundLink")],1),s._v(" 算法进行的大数乘法，感兴趣的可以研究一下。")]),s._v(" "),a("h2",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[s._v("#")]),s._v(" 最后的话")]),s._v(" "),a("p",[s._v("源码之下无秘密，看源码会比较辛苦，却可以学到精髓和本质，本文通过源码逐层展开，带你了解了下 Python 整数对象的实现、整数内存大小的计算，整数池，整数加减法源码，相信你已经知道了 Python 是如何实现整数想加而不溢出的。")]),s._v(" "),a("p",[s._v("都看到这里了，你确定不关注一下：")])])}),[],!1,null,null,null);t.default=e.exports}}]);