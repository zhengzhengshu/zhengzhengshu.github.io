(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{433:function(t,s,n){"use strict";n.r(s);var a=n(4),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("前一阵，我在为朋友编写一个源代码监控程序的时候，发现了一个 Python 领域非常简单好用的图形界面库。")]),t._v(" "),n("p",[t._v("说起图形界面库，你可能会想到 TkInter、PyQt、PyGUI 等流行的图形界面库，我也曾经尝试使用，一个很直观的感受就是，这太难用了，网上有没有一些 demo，我拿来改改，结果很少有，结果当时我就放弃了这些图形库的学习，转而使用了 vue+flask 的形式以浏览器网页作为程序界面，因为我会这个，即使实现起来稍微麻烦，但是也快。")]),t._v(" "),n("p",[t._v("那有朋友可能问了：一定要学习图形界面吗？")]),t._v(" "),n("p",[t._v("其实不一定，如果你写的程序都是自己用，或者配合其他程序员使用，那么直接命令行调用即可，完全不用学习图形界面？ 那什么时候要学呢？ 如果你要做游戏，或者你要为他人（非技术人员）编写软件工具，那么你就需要学习图形界面了。我是后者，偶尔受邀帮别人写点小工具，因此有个图形界面体验会好很多。")]),t._v(" "),n("p",[t._v("今天要说的这个库就是 PySimpleGUI，在 "),n("a",{attrs:{href:"https://github.com/PySimpleGUI/PySimpleGUI",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 仓库"),n("OutboundLink")],1),t._v("有 5.1K 个 star，20 天前还有人提交代码，可以说非常火热了。")]),t._v(" "),n("p",[t._v("我看了官方文档，找了个 demo，花了 2 个小时的时间，写了 56 行代码，就搞定了一个具有图形界面的监控工具：")]),t._v(" "),n("p",[n("img",{attrs:{src:"gui.jpg",alt:""}})]),t._v(" "),n("p",[t._v("要说 PysimpleGUI 最吸引我的地方，在于它有 200 多个示例程序，几乎覆盖了日常的开发需求，拿来稍作修改就可以用，着实方便。")]),t._v(" "),n("p",[t._v("PysimpleGUI 内部封装了 tkinter，Qt（pyside2），wxPython和 Remi，Remi 用于浏览器支持，因此你很容易将你的界面搬到浏览器中而无需修改代码。比如：")]),t._v(" "),n("p",[n("img",{attrs:{src:"gui-demo.jpg",alt:""}})]),t._v(" "),n("p",[t._v("还有最吸引我的一点，就是足够简单，在几分钟内用几行代码就可以构建自定义 GUI 布局，对于初学者来说足够容易，对于高级用户来说足够强大。广泛的文档。有 100 多种内置颜色主题，"),n("a",{attrs:{href:"https://github.com/PySimpleGUI/PySimpleGUI/tree/master/DemoPrograms",target:"_blank",rel:"noopener noreferrer"}},[t._v("200 多个示例程序"),n("OutboundLink")],1),t._v("，还经常更新。如果你玩 Raspberry Pi，也可以用这个库写界面，你说好用不好用。")]),t._v(" "),n("p",[t._v("通常一个 PySimpleGUI 程序包含 5 个部分，见下面的注释：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PySimpleGUI "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" sg                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Part 1 - 导入库")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义窗口的内容")]),t._v("\nlayout "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What\'s your name?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Part 2 - 排版")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ok'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建窗口")]),t._v("\nwindow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Window Title'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" layout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Part 3 - 窗口定义")]),t._v("\n                                                \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Display and interact with the Window")]),t._v("\nevent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" values "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Part 4 - 开启主循环 window.read()")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Do something with the information gathered")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" values"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"! Thanks for trying PySimpleGUI"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Finish up by removing from the screen")]),t._v("\nwindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Part 5 - 关闭窗口")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])]),n("p",[t._v("执行上述代码，会得到一个如下图所示的程序：")]),t._v(" "),n("p",[n("img",{attrs:{src:"pysimplegui-1.jpg",alt:""}})]),t._v(" "),n("p",[t._v("这仅仅是一个类似 hello world 的程序，PySimpleGUI 还可以做出更加强大的图形界面和游戏界面，比如：")]),t._v(" "),n("p",[t._v("最后，再告诉大家一条小技巧，如果看到好的图形界面程序，包括网站，记得收藏相关的代码，下次可以直接拿来用，提升开发效率。本文涉及的开源软件监控工具源代码，如果感兴趣，可以回复「开源监控」获取下载连接。")]),t._v(" "),n("p",[t._v("最后，学习一个新技术要看重其迁移能力，学习一次，可以使用无数次，那么该技术就值得学。原创不易，如果觉得文章对你有帮助，还请关注、在看支持。")])])}),[],!1,null,null,null);s.default=e.exports}}]);