(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{675:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("OCR 的全称是 Optical Character Recognition，即光学字符识别，通俗点讲就是文字识别。在办公领域，最常用的就是指识别图片上的文字，比如说你对着喜欢的几页书拍了照，想把里面的文字抠出来怎么办？")]),t._v(" "),a("p",[t._v("我知道现在的手机可能都有这个功能，如果有一堆图片需要处理呢？还是自己动手，丰衣足食，今天来分享一下如何 Python 写一个 OCR 识别程序。授人以渔，本文的思路适用于编写任意一个日常小工具。")]),t._v(" "),a("h2",{attrs:{id:"第一步-看看已有的轮子。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步-看看已有的轮子。"}},[t._v("#")]),t._v(" 第一步，看看已有的轮子。")]),t._v(" "),a("p",[t._v("软件开发忌重复造轮子，以我普通程序员来讲，也很难造一个好用的轮子，拿来主义是真的香，万千牛逼的库，虽不是我所有，却为我所用。")]),t._v(" "),a("p",[t._v("浏览器打开 "),a("code",[t._v("https://github.com")]),t._v("，搜索"),a("code",[t._v("OCR")]),t._v("，选择编程语言 Python，可以看到如下结果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvzuco5j7wj31dk0u0419.jpg",alt:""}})]),t._v(" "),a("p",[t._v("通常情况下，我会选择 star 数量最多的，因为我相信程序员都是在真诚的点赞。")]),t._v(" "),a("p",[t._v("看完轮子的基本介绍，你选择适合自己的就好。")]),t._v(" "),a("h2",{attrs:{id:"第二步-简单学习下选定的轮子。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步-简单学习下选定的轮子。"}},[t._v("#")]),t._v(" 第二步，简单学习下选定的轮子。")]),t._v(" "),a("p",[t._v("一般情况下，仓库的 README 上都有改工具的安装方法，简单的使用教程，大部分都是英文，所以平时多记些英文单词，对于学习技术是很有帮助的。")]),t._v(" "),a("p",[t._v("比如说这个"),a("code",[t._v("https://github.com/PaddlePaddle/PaddleOCR")]),t._v("，它是有中文的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvzumjkwupj31az0u0q6s.jpg",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvzunk0ueqj30x00t40w3.jpg",alt:""}})]),t._v(" "),a("p",[t._v("按照这个教程，自己实践一下：")]),t._v(" "),a("h4",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paddleocr>=2.0.1"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("等待 pip 安装完成。")]),t._v(" "),a("p",[t._v("我在 Python 3.8.5 上 使用 pip 顺利通过，而使用 pyenv 的 Python 安装时经常报编译失败的错误，因此不推荐 pyenv 来管理你的 Python 版本。你可以在本机上安装多个 Python 版本，然后使用 virtualenv 来管理 Python 的虚拟环境。")]),t._v(" "),a("p",[t._v("如果安装过程报错了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvzv6on6iej314k0rok1i.jpg",alt:""}})]),t._v(" "),a("p",[t._v("遇到这种情况，不要慌，只要思想不滑坡，办法总比困难多。")]),t._v(" "),a("p",[t._v("报错信息提示 pip 遇到了编译错误，这也是 Python 为人诟病的地方，第三方库源代码安装时经常遇到编译错误，你看人家 Java，一个 jar 包处处都能用。")]),t._v(" "),a("p",[t._v("毕竟没有完美的语言，理解一下，理解一下。")]),t._v(" "),a("p",[t._v("观察报错前的打印信息，pip 正在安装的是 scikit-image 0.17.2，只要我们找到 scikit-image 的二进制包（别人已经按照对应的平台编译好了），也就是 whl 文件，直接安装一下完事，这个 whl 文件，要去 pypi 上找。 浏览器打开 pypi.org，搜索 scikit-image，找到 0.17.2 版本，点开看看，结果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvzwrrxie3j31a50u0ahj.jpg",alt:""}})]),t._v(" "),a("p",[t._v("发现 0.17.2 版本最高支持 Python3.8，如果你的 Python 版权是 3.9，劝你降低版本后安装。")]),t._v(" "),a("p",[t._v("选择对应 Python 版本、操作系统进行下载（要是下载慢，请用迅雷下载），然后，pip install 即可：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvzwc6kfydj30u00wbk0a.jpg",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("找个图片试用一下：")]),t._v(" "),a("p",[t._v("1.jpg")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvzy5e34nzj30k00vy40w.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("paddleocr --image_dir "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".jpg --use_angle_cls "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" --use_gpu "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("结果报了错，提示\"ModuleNotFoundError: No module named 'paddle'\"，在 Issues 里面搜索一下找到了解决方案：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" paddlepaddle\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后再次执行识别出结果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gvzy64bdhcj30u00yxqc1.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"第三部-设计自己的程序。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三部-设计自己的程序。"}},[t._v("#")]),t._v(" 第三部，设计自己的程序。")]),t._v(" "),a("p",[t._v("工具虽然可以直接命令行使用，但结果不是很直观，我们可以写一个脚本，调用下它的接口，将图片路径作为参数输入，将识别出的文本内容作为输出，保存在相同路径下的文本文件中，文件名就是图片名+.txt。")]),t._v(" "),a("p",[t._v("参考官方的示例，可以很轻松写出如下代码：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" paddleocr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PaddleOCR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("draw_ocr\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_text_to_txt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    ocr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PaddleOCR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use_angle_cls"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use_gpu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" show_log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ch'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# need to run only once to download and load model into memory")]),t._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ocr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ocr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cls"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            writer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    get_text_to_txt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("至此脚本搞定。")]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("本文通过使用开源工具 paddleocr，分享了 Python OCR 程序的制作过程，paddleocr 支持 80 多种语言，支持用户自定义训练，还提供丰富的预测推理部署方案，更多技术细节还请参考官方仓库：https://github.com/PaddlePaddle/PaddleOCR")]),t._v(" "),a("p",[t._v("程序报错不可怕，可怕的是你看到错误就放弃了。")]),t._v(" "),a("p",[t._v("如果有帮助，请点赞、在看、关注支持，感谢路上有你。")])])}),[],!1,null,null,null);s.default=e.exports}}]);