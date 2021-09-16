(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{650:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("之前看过这个标题的文章，看完后，我觉得太花里胡哨，用起来麻烦，我就用 print 来 debug，没毛病。")]),s._v(" "),a("p",[s._v("print 确实好用，因为它足够简单，简单到不需要思考，简单到任何一个程序员都可以使用任意的编程语言来打印一个 hello world。")]),s._v(" "),a("p",[s._v("直到今天，我还是推荐 debug 时首选 print。")]),s._v(" "),a("p",[s._v("只不过，现在有了冰激凌，打印信息 debug 更甜了。")]),s._v(" "),a("p",[s._v("你说冰激凌不是吃的吗，怎么能 debug 了？")]),s._v(" "),a("p",[s._v("程序员 Ansgar Grunseid 看我们使用 print 即打印变量名称，又打印变量的值，太辛苦啦，就做了一个工具，取名叫 icecream，让打印信息 debug 这种方式更“甜”。")]),s._v(" "),a("p",[s._v("安装：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" icecream\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" icecream "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ic\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下面把 icecream 简称 ic。")]),s._v(" "),a("p",[s._v("打印变量时 "),a("code",[s._v("ic")]),s._v(" 的用法和 "),a("code",[s._v("print")]),s._v(" 的用法基本一样，但比 "),a("code",[s._v("print")]),s._v(" 更好用：")]),s._v(" "),a("p",[s._v("ic 可以自动打印变量或表达式的名称。")]),s._v(" "),a("p",[s._v("ic 打印的结果更漂亮的，包含语法高亮。")]),s._v(" "),a("p",[s._v("ic 可以输出程序的上下文：文件名，行号，父函数名等信息。")]),s._v(" "),a("p",[s._v("ic 可以一次导入处处使用。")]),s._v(" "),a("p",[s._v("ic 可以配置前缀。")]),s._v(" "),a("p",[s._v("重要的是，它让你编写 print 语句的时间减少了 40%。")]),s._v(" "),a("p",[s._v("只要 print 不输出到文件，不传入 end 参数，你可以在任何使用到 print 的地方替换为 ic，反之亦然。")]),s._v(" "),a("p",[s._v("你仍然可以不用 ic，但是如果经常用 print 来 debug，我就建议你用，为什么？")]),s._v(" "),a("p",[s._v("因为 print 是你的高频要素，改善“高频要素”会从根本上改善生命体的生活质量。")]),s._v(" "),a("p",[s._v("ic 使用举例：")]),s._v(" "),a("h3",{attrs:{id:"检查变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查变量"}},[s._v("#")]),s._v(" 检查变量")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ice_demo.py")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" icecream "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ic \n\nname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Python七号"')]),s._v("\nic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("333")]),s._v("\nic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'one'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'key'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("klass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    attr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yep'")]),s._v("\nic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("klass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("attr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("ic 的输出很漂亮，自动打印了变量或表达式的名称，真的香，如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gp4bd8awpbj30mo07sjrl.jpg",alt:"icecream"}})]),s._v(" "),a("h3",{attrs:{id:"检查执行位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查执行位置"}},[s._v("#")]),s._v(" 检查执行位置")]),s._v(" "),a("p",[s._v("不带任何参数也是可以的：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" icecream "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ic\n\nexpression "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    ic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#first()")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" expression"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        ic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#second()")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        ic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#third()")]),s._v("\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("ic 的输出如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("ic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.467")]),s._v("\nic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" at "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.469")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("可以看出，ic() 还自动输出了时间戳，因此看程序执行到哪里，直接调用 ic() 就完事。")]),s._v(" "),a("h3",{attrs:{id:"ic-有返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ic-有返回值"}},[s._v("#")]),s._v(" ic 有返回值")]),s._v(" "),a("p",[s._v("ic 的返回值就是它参数的值：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("In "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" icecream "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ic\n\nIn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n\nIn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n\nIn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\nOut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("如果你要"),a("strong",[s._v("返回 ic() 的输出")]),s._v("，可以这样：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("In "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" out "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nIn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" out\nOut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ic| a: 6'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"一次导入处处使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一次导入处处使用"}},[s._v("#")]),s._v(" 一次导入处处使用")]),s._v(" "),a("p",[s._v("一个工程，会有很多 py 文件，不想在每个文件内部都 import，可以这样：")]),s._v(" "),a("p",[s._v("main.py 只导入一次")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" icecream "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" install\ninstall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" xxx "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("其他被 main 引用的文件 xxx.py 不需要再 import：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n    ic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行 main.py 就会看到变量 x 的信息输出。")]),s._v(" "),a("p",[s._v("这是因为，install() 函数把 ic() 添加到了内建模块, 所有被编译器打开的文件都会共享这个 ic，当然，可以通过 uninstall() 来卸载 ic。")]),s._v(" "),a("h3",{attrs:{id:"灵活的前缀配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#灵活的前缀配置"}},[s._v("#")]),s._v(" 灵活的前缀配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("In [1]: from icecream import ic\n\nIn [2]: ic.configureOutput(prefix='hello -> ')\n\nIn [3]: ic('world')\nhello -> 'world'\nOut[3]: 'world'\n\nIn [4]: import time\n\nIn [5]: def Timestamp():\n   ...:     return '%s |> ' % time.strftime(\"%Y-%m-%d %T\")\n   ...:\n\nIn [6]: ic.configureOutput(prefix=Timestamp)\n\nIn [7]: ic('world')\n2021-04-01 11:02:20 |> 'world'\nOut[7]: 'world'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("configureOutput 还可以传入 outputFunction、argToStringFunction、includeContext 参数，这里你可以自己尝试。")]),s._v(" "),a("h3",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[s._v("#")]),s._v(" 最后的话")]),s._v(" "),a("p",[s._v("请注意 icecream 是个通用的工具，不只是 Python 能用，以下编程语言也可以用：")]),s._v(" "),a("ul",[a("li",[s._v("Dart: "),a("a",{attrs:{href:"https://github.com/HallerPatrick/icecream",target:"_blank",rel:"noopener noreferrer"}},[s._v("icecream"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("Rust: "),a("a",{attrs:{href:"https://github.com/ericchang00/icecream-rs",target:"_blank",rel:"noopener noreferrer"}},[s._v("icecream-rs"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("Node.js: "),a("a",{attrs:{href:"https://github.com/jmerle/node-icecream",target:"_blank",rel:"noopener noreferrer"}},[s._v("node-icecream"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("C++: "),a("a",{attrs:{href:"https://github.com/renatoGarcia/icecream-cpp",target:"_blank",rel:"noopener noreferrer"}},[s._v("IceCream-Cpp"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("PHP: "),a("a",{attrs:{href:"https://github.com/ntzm/icecream-php",target:"_blank",rel:"noopener noreferrer"}},[s._v("icecream-php"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("Go: "),a("a",{attrs:{href:"https://github.com/WAY29/icecream-go",target:"_blank",rel:"noopener noreferrer"}},[s._v("icecream-go"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("Ruby: "),a("a",{attrs:{href:"https://github.com/nodai2hITC/ricecream",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ricecream"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("Java: "),a("a",{attrs:{href:"https://github.com/Akshay-Thakare/icecream-java",target:"_blank",rel:"noopener noreferrer"}},[s._v("icecream-java"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("因此，很容易迁移到其他语言，如果你经常用 print 来 debug，现在是时候用 icecream 来提升下生活质量了。如果你觉得有用，请分享、点赞、在看支持。")])])}),[],!1,null,null,null);t.default=e.exports}}]);