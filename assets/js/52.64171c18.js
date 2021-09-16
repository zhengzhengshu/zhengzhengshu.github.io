(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{633:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("听说这个五一将出现爆发式的出行，原因是很多人过年没回家，赶在五一回。我很能理解，因为我就是其中的一员，自然的，我也没有买到票，可以这样说，自从毕业之后，只要是长点的节假日，我在 12306 上就没有买到过回老家的票。")]),s._v(" "),a("p",[s._v("不过没买到票，也别灰心，我们不是有 Python 吗，今天再次分享下 12306 的 Python 抢票工具，改下代码，还能用。")]),s._v(" "),a("p",[s._v("都知道 12306 的登录验证码比较奇葩，选择了图片验证码还没完，还要拖动滑块，这个工具就在登录环节，里面还搭建了验证码的识别服务，需要自己搭建，虽然按照它的方法搭建了，依然失败了，猜测可能与滑块验证码有关，作者已经快两年没有更新了。")]),s._v(" "),a("p",[s._v("其实只要发送请求时携带的 cookie 没有过期，请求就是有效的，想到这，改了改代码，将原来的用户名密码那里添加了 cookie 相关的信息，在请求的时候携带 cookie ，然后运行了下，是可以用的：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gpqn7em2zoj31l60u0n5x.jpg",alt:""}}),s._v(" "),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gpqn7shb4hj31e50u0jv7.jpg",alt:""}})]),s._v(" "),a("p",[s._v("下面是使用教程:")]),s._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[s._v("下载源代码")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/somenzz/get_12306_tickets.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果你没有安装 git，可以在公众号「Python七号」回复「12306」获取压缩包，下载后解压即可。")]),s._v(" "),a("ol",[a("li",[s._v("修改配置文件")])]),s._v(" "),a("p",[s._v("进入 "),a("code",[s._v("get_12306_tickets")]),s._v(" 目录，可以找到配置文件 TickerConfig.py ，里面有详细的注释，修改好自己要抢票的信息就可以，不再赘述。这里只说下如何获取 cookie 信息，也就是配置文件的下述信息：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("tk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hJS61DZ91CYfiz4O3pV_NfKGZ*****9U4UL9hZWg09s1s0"')]),s._v("\nRAIL_EXPIRATION "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"161918280****"')]),s._v("\nRAIL_DEVICEID "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YUhVlabf8dlgF8sL*****_wcL5manb6X1-Ok4MRChkKhQqtgv80Ba1JVTVqqSHwBtfxZhl_aBaz20NMVRe2RingNB93-qDv0wEwhwqyEro8y2WUueNfqfeWL3YEc1q61AEdvVmnNQxXlmt1FdAgvSM1HNoJaJH"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("方法就是使用 Chrome 浏览器打开 12306 并登录，然后打开谷歌浏览器的开发者工具，找到 network，点击 XHR，然后随意找到一个接口请求，直到看到对应的 cookie 信息，如下图所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEgy1gpqo0mq0ljj30yz0u00x9.jpg",alt:""}})]),s._v(" "),a("p",[s._v("然后将上图中的 cookie 字符串分解填入配置文件 TickerConfig.py 中即可。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("制作虚拟环境，激活，安装依赖包")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" get_12306_tickets\npython3 -m venv "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" env/bin/activate\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -r requirements.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[s._v("加入cdn: "),a("code",[s._v("python3 run.py c")])])]),s._v(" "),a("li",[a("p",[s._v("启动脚本: "),a("code",[s._v("python3 run.py r")])])])]),s._v(" "),a("h3",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[s._v("#")]),s._v(" 最后的话")]),s._v(" "),a("p",[s._v("如果使用微信、邮箱通知，请填写对应的配置信息。如果遇到问题，可以直接公众号对话框内发消息给我，也可以添加微信「somenzz」，祝你抢到回家的车票。")])])}),[],!1,null,null,null);t.default=n.exports}}]);