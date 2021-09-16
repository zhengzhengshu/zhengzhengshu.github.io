(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{619:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在收发快递填写地址的时候，我们会经常手动输入地址让程序智能识别，标准的地址比如，xx省xx市xx县/区xx路xx号，不过有时候也可以简单写：xx市xx县/区xx路xx号，或者xx省xx县/区xx路xx号，或者xx市xx路xx号。")]),s._v(" "),a("p",[s._v("但是有些就不是合法的地址了，比如 xx省xx街道xx号，或者 xx市xx省xx区xx号。")]),s._v(" "),a("p",[s._v("那么问题来了，如何识别一个地址是否有效，确切的讲，如何编程识别一个中国地址是否有效？")]),s._v(" "),a("p",[s._v("虽然我们大脑可以一眼识别，但是让计算器去识别，可以不是一件容易的事，根本原因在于地址的描述虽然看上去简单，但是它依然是比较复杂的上下文有关的文法。")]),s._v(" "),a("p",[s._v("比如 “上海市北京东路 xx 号，南京市北京东路 xx 号”，扫描到北京东路时，它后面的门牌号是否构成正确的地址要看上下文，即城市名。")]),s._v(" "),a("p",[s._v("所幸的是，地址的上下文比较简单，是有限的，虽然我们可以暴力穷举所有省、市、区、街道。但有效的方法还是有限状态机。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gu7otlo45ij60ry0dm75g02.jpg",alt:""}})]),s._v(" "),a("p",[s._v("每一个有限状态机都有一个开始状态和一个终止状态，以及若干中间状态，没一条弧上带着一个状态进入下一个状态的条件，比如在上图中当前的状态如果是省，如果遇到下一个词组和区有关就进入区，如果遇到下一个词组和城市有关那么就进入市。")]),s._v(" "),a("p",[s._v("如果一条地址能从状态机的开始状态，经过状态机的若干中间状态，最终走到终止状态，则这条地址有效，否则无效。")]),s._v(" "),a("p",[s._v("比如 xx市xx省xx区xx号 就是无效地址，无法从市走到省。")]),s._v(" "),a("p",[s._v("现在我们通过一个简单的优先状态机来实现，代码有注释，很容易看懂")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" enum "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Enum\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义状态")]),s._v("\n    State "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Enum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"State"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STATE_INITIAL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开始")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STATE_PROVINCE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 省")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STATE_CITY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 市")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STATE_AREA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 区 / 县")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STATE_STREET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 街道")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STATE_NUM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#号")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STATE_END"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#结束")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"STATE_ILLEGAL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#错误状态")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toAddressType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("addr_slice "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"省"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" addr_slice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_PROVINCE\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"市"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" addr_slice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_CITY\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"区"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" addr_slice "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"县"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" addr_slice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_AREA\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"路"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" addr_slice "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"街道"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" addr_slice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_STREET\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"号"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" addr_slice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_NUM\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_ILLEGAL\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义状态转移")]),s._v("\n    \n    transfer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开始可以转为 省或市")]),s._v("\n        State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_INITIAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_PROVINCE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_CITY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#省可以转 市或区县")]),s._v("\n        State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_PROVINCE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_CITY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_AREA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#市可以转区或街道")]),s._v("\n        State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_CITY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_AREA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_STREET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#区县可以转街道")]),s._v("\n        State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_AREA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_STREET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#街道可以转号或终止")]),s._v("\n        State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_STREET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_NUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_END"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#号只能转终止")]),s._v("\n        State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_NUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_END"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    st "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_INITIAL\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        current_state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" toAddressType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" current_state "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" transfer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("st"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n        st "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" current_state \n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" st "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_STREET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_NUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("State"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("STATE_END"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    address1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"江苏省"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"苏州市"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"吴中区"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"中山北路"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"208号"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    address2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"苏州市"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"吴中区"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"中山北路"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"208号"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    address3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"苏州市"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"吴江区"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"中山北路"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"208号"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    address4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"苏州市"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"吴江区"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"208号"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    address5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"苏州市"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"中山北路"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" isAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" isAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" isAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" isAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("assert")]),s._v(" isAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("address4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br")])]),a("p",[s._v("这里没有对整个地址字符串进行分词，而是直接将地址写成了列表的形式，主要为了说明状态机的实现和应用，上述代码仅能从格式上保证地址是有效的，并不能确保地址真实有效，如果要判断是真实有效的，那就需要将全国所有的省、市、区县、街道建立一个 hash 表，门牌号可以用范围表示，再进行状态转移判断。")]),s._v(" "),a("p",[s._v("上述代码的 transfer 就是一个 hash 表，相当于把所有正确转移的情况都穷举了一遍，它穷尽了在任何一种情况下，对应任何的输入，需要转义的状态。")]),s._v(" "),a("h2",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[s._v("#")]),s._v(" 最后的话")]),s._v(" "),a("p",[s._v("本文分享了如何实现一个简单的有限状态机，代码比较通用，前文"),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/2k2BYIDwI6knY5PdvNomrQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个编程题，让人欲罢不能"),a("OutboundLink")],1),s._v("也是套用这个代码实现的，如果对你有所帮助，还请点赞、关注支持，赠人在看，手留余香。")]),s._v(" "),a("p",[s._v("有限状态机的开源实现：")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/viewflow/django-fsm",target:"_blank",rel:"noopener noreferrer"}},[s._v("django-fsm"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/jtushman/state_machine",target:"_blank",rel:"noopener noreferrer"}},[s._v("python-state-machine"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("关注我，每天学习一个 Python 小技术。")])])}),[],!1,null,null,null);t.default=r.exports}}]);