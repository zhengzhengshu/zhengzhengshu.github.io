(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{415:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("今天发现了迭代器的妙用，忍不住想分享给你。")]),s._v(" "),a("p",[s._v("关于可迭代对象，迭代器，生成器的定义和理解，可以参考前文"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/--zEhMcQ6nzwzFguOVxaVg",target:"_blank",rel:"noopener noreferrer"}},[s._v("Python基础系列--可迭代对象、迭代器与生成器"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("简而言之，它们的关系可以使用下图表示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlgy1gji6re7u03j30iu06xaaf.jpg",alt:""}})]),s._v(" "),a("p",[s._v("理解了生成器是懒人版本的迭代器之后，我们来做一道算法题：")]),s._v(" "),a("blockquote",[a("p",[s._v("给定字符串 s 和 t ，判断 s 是否为 t 的子序列。")])]),s._v(" "),a("blockquote",[a("p",[s._v("你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。")])]),s._v(" "),a("blockquote",[a("p",[s._v('字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。')])]),s._v(" "),a("blockquote",[a("p",[s._v("来源：力扣（LeetCode）\n链接：https://leetcode-cn.com/problems/is-subsequence")])]),s._v(" "),a("p",[s._v("要解决这个问题，常规算法是贪心算法，维护两个指针 Ps,Pt 分别指向两个字符串 s,t 的最开始，然后对字符串 t 一路扫过去，如果某个字符和 Ps 一样，那么就把 Ps 指针前进一步，当 Ps 移出字符串 s 的最后一个字符的时候，返回 True，否则返回 False。")]),s._v(" "),a("p",[s._v("不过，这个代码写下来怎么也得 10 行左右。")]),s._v(" "),a("p",[s._v("如果使用迭代器和生成器，两行就搞定了:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("is_subseq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("     t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("iter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" is_subseq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ace'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abcde'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" is_subseq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aec'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abcde'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("如果你一眼就看穿代码背后的逻辑，那说明已经是资深的 Python 工程师了，如过是一头雾水，那么我们把代码复杂化，一步一步看：")]),s._v(" "),a("p",[s._v("首先，将原字符串变成一个迭代器：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'abcde'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("iter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("str_iterator "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),s._v(" at "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x7fa7f22c8a60")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("iter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" t\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("str_iterator "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),s._v(" at "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x7fa7f229d4c0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("然后遍历子字符串，依次判断每个字符是否在上述的迭代器中 t：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("一般的的思维定势：i 必然在 t 中，因为字串 aec 的每个字符都存在与原字符串 abcde 中。")]),s._v(" "),a("p",[s._v("问题就出在这个 in 操作，in 操作判断一个字符是否在迭代器中，一定是要遍历的，而遍历就是调用迭代器的 "),a("code",[s._v("__next__")]),s._v(" 方法，当存在是直接返回 True，下一次调用是直接 "),a("code",[s._v("__next__")]),s._v(" 而并不回到最初其实位置重新查找。这一点，我们一步一步执行 next 做实验：以 s= 'aec' 和 t = 'abcdef' 为例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(">>> t = 'abcdef'\n>>> s = 'aec'\n>>> t = iter(t)\n>>> 'a' in t\nTrue\n>>> next(t)\n'b'\n>>> 'e' in t\nTrue\n>>> #此时指针已经指向 e，再调用 next 回返回 f\n>>> next(t)\n'f' \n>>> 'c' in t #指针已经指向 f，f 后面不会出现字符 c，必然返回 false \nFalse\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("看到这里，相信你已经明白了，在循环里面用 in 来判断一个元素是否在一个迭代器中，迭代器会自动记忆上一次判断后的位置，这相当于一个隐形指针，对于解决这道问题，提供了莫大的便利。")]),s._v(" "),a("p",[s._v("最后的 all 函数，用来判断一个迭代器的元素是否全部为 True，如果是则返回 True，否则就返回 False。")]),s._v(" "),a("p",[s._v("Python 就是这么神奇而优雅。不过你一定注意，面试的时候尽量不要用这种技巧，因为你的面试官有可能并不知道生成器的用法，这个技术知识点上，在实际工作的应用上，你已经比很多人更加熟练了。")]),s._v(" "),a("p",[s._v("推荐阅读：")]),s._v(" "),a("p",[s._v("Python七号，做更满意的七号，每周学习一个 Python 技巧，欢迎关注。")]),s._v(" "),a("p",[s._v("（完）")])])}),[],!1,null,null,null);t.default=e.exports}}]);