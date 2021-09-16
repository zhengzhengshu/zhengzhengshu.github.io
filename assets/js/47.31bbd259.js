(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{628:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("这个工具非常有趣。")]),t._v(" "),a("p",[t._v("你在命令行窗口输入了一个命令，满怀期待的敲上了回车，结果提示你输入有误，你会不会不由自主的说一句 fuck？那就在命令行输入 fuck 吧，这个工具帮你自动纠正错误的命令。")]),t._v(" "),a("p",[t._v("看个动图:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtzk88g3abj60j20ajjr902.jpg",alt:""}})]),t._v(" "),a("p",[t._v("这个工具就是 "),a("a",{attrs:{href:"https://github.com/nvbn/thefuck",target:"_blank",rel:"noopener noreferrer"}},[t._v("thefuck"),a("OutboundLink")],1),t._v("，GitHub 上有 63.7k 的星，很受欢迎。")]),t._v(" "),a("h4",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("安装方法：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("pip install thefuck\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("第一次输入 fuck 会提示你改个别名，如果不想改的话，在输入一次 fuck 就可以：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtzkcox9akj611c0ks77n02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("执行的时候千万不要读出来，用习惯了容易成为口头禅。😄")]),t._v(" "),a("h4",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("这个工具尝试将上一个命令与规则匹配。 如果找到匹配项，则使用匹配的规则创建一个新命令并执行。")]),t._v(" "),a("p",[t._v("比如你 cat 一个文件夹，它会自动改成 ls 文件夹：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtzkjhj2paj60e605kt8z02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("你可以去"),a("a",{attrs:{href:"https://github.com/nvbn/thefuck",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方仓库"),a("OutboundLink")],1),t._v("查看默认启用的规则。")]),t._v(" "),a("h4",{attrs:{id:"添加自定义规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加自定义规则"}},[t._v("#")]),t._v(" 添加自定义规则")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("~/.config/thefuck/rules")]),t._v(" 目录下创建一个 Python 文件，比如叫 your_rules.py，文件必须包含两个函数：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("\nget_new_command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("其他都是可选的，比如一个 sudo 规则的代码如下：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'permission denied'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lower"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EACCES'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_new_command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sudo {}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional:")]),t._v("\nenabled_by_default "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("side_effect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fixed_command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    subprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chmod 777 .'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\npriority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Lower first, default is 1000")]),t._v("\n\nrequires_output "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h4",{attrs:{id:"设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),a("p",[t._v("修改 "),a("code",[t._v("~/.config/thefuck/settings.py")]),t._v(" 即可。")]),t._v(" "),a("h4",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[t._v("#")]),t._v(" 最后的话")]),t._v(" "),a("p",[t._v("这个工具解决了每个人都可能会遇到的问题：输错了命令。考虑到输错了命令后很多人都会不由自由叫一声 fuck，然后把这个 fuck 变成一个实用工具，节省了程序员的宝贵时间，不得不说这个工具的"),a("a",{attrs:{href:"https://github.com/nvbn",target:"_blank",rel:"noopener noreferrer"}},[t._v("作者 nvbn"),a("OutboundLink")],1),t._v("很细心，很幽默，很风骚，也是一个 Python 开发者，大家可以 follow 他。")]),t._v(" "),a("p",[t._v("如果本文有帮助，不妨随手关注、点赞、再看哦，每天学点 Python 技术。")]),t._v(" "),a("p",[t._v("也可以留言讨论。")])])}),[],!1,null,null,null);s.default=e.exports}}]);