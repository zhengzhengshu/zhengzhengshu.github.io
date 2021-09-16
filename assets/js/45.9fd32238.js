(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{626:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("如果你想保护自己的原创图片，那最好的方式就是为图片添加盲水印，盲水印就是图片有水印但人眼看不出来，需要通过程序才能提取水印，相当于隐形“盖章”，可以用在数据泄露溯源、版权保护等场景。今天分享如何用 Python 为图片添加盲水印。")]),t._v(" "),a("p",[t._v("为图片添加盲水印，自然是搜索相关的工具，通常情况下，我会去 GitHub 输入英文关键字进行搜索，搜索结果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gui2dyexqpj61dp0u0act02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("选择 star 数量最多的通常错不了，"),a("a",{attrs:{href:"https://github.com/guofei9987/blind_watermark",target:"_blank",rel:"noopener noreferrer"}},[t._v("guofei9987/blind_watermark\n"),a("OutboundLink")],1),t._v(" 试了一下，果然是最好用的，特点：")]),t._v(" "),a("ul",[a("li",[t._v("简单。解析水印图时无需原图")]),t._v(" "),a("li",[t._v("抗攻击。水印图剪裁、旋转都不会破坏图中的盲水印")]),t._v(" "),a("li",[t._v("支持密码加密")])]),t._v(" "),a("p",[t._v("以下是其使用方法，主要内容:")]),t._v(" "),a("ul",[a("li",[t._v("1、安装")]),t._v(" "),a("li",[t._v("2、添加文本水印与提取")]),t._v(" "),a("li",[t._v("3、添加图片水印与提取")]),t._v(" "),a("li",[t._v("4、抗攻击能力")]),t._v(" "),a("li",[t._v("5、原理")])]),t._v(" "),a("h3",{attrs:{id:"_1、安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装"}},[t._v("#")]),t._v(" 1、安装")]),t._v(" "),a("p",[t._v("安装正式版：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" blind-watermark\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("我安装后使用的时候报错：ModuleNotFoundError: No module named 'pywt'，此时，可以通过 "),a("code",[t._v("pip install pywavelets")]),t._v(" 来解决。")]),t._v(" "),a("p",[t._v("安装开发版本：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:guofei9987/blind_watermark.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" blind_watermark\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("该工具用到的其他库：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("numpy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.17")]),t._v(".0\nopencv-python\nsetuptools\nPyWavelets\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_2、添加文本水印与提取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、添加文本水印与提取"}},[t._v("#")]),t._v(" 2、添加文本水印与提取")]),t._v(" "),a("p",[t._v("添加文本水印：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" blind_watermark "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WaterMark\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置密码，默认是 1")]),t._v("\nbwm1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WaterMark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password_img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password_wm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 读取原始图片")]),t._v("\nbwm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pic/ori_img.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 定义水印文本")]),t._v("\nwm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@guofei9987 开源万岁！'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 合并文本并输出新的图片")]),t._v("\nbwm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_wm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'str'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbwm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("embed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'output/embedded.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 输出结果")]),t._v("\nlen_wm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bwm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wm_bit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Put down the length of wm_bit {len_wm}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len_wm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("len_wm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("提取文本水印")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("bwm1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WaterMark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password_img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password_wm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwm_extract "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bwm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'output/embedded.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wm_shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("len_wm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'str'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wm_extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"_3、添加图片水印与提取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、添加图片水印与提取"}},[t._v("#")]),t._v(" 3、添加图片水印与提取")]),t._v(" "),a("p",[t._v("添加图片水印")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" blind_watermark "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WaterMark\n\nbwm1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WaterMark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password_wm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password_img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 读取原始图片")]),t._v("\nbwm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pic/ori_img.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 读取水印图片")]),t._v("\nbwm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_wm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pic/watermark.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 合并")]),t._v("\nbwm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("embed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'output/embedded.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("提取图片水印")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("bwm1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WaterMark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password_wm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password_img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# notice that wm_shape is necessary")]),t._v("\nbwm1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'output/embedded.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wm_shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" out_wm_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'output/extracted.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"_4、抗攻击能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、抗攻击能力"}},[t._v("#")]),t._v(" 4、抗攻击能力")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gui3d3kixmj60u02ha7a902.jpg",alt:""}})]),t._v(" "),a("p",[t._v("附各攻击的方法：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/guofei9987/blind_watermark/blob/master/examples/%E6%97%8B%E8%BD%AC%E6%94%BB%E5%87%BB.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("旋转攻击.py"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/guofei9987/blind_watermark/blob/master/examples/%E5%A4%9A%E9%81%AE%E6%8C%A1%E6%94%BB%E5%87%BB.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("多遮挡攻击.py"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/guofei9987/blind_watermark/blob/master/examples/%E6%A8%AA%E5%90%91%E8%A3%81%E5%89%AA%E6%94%BB%E5%87%BB.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("横向裁剪攻击.py"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/guofei9987/blind_watermark/blob/master/examples/%E7%BA%B5%E5%90%91%E8%A3%81%E5%89%AA%E6%94%BB%E5%87%BB.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("纵向裁剪攻击.py"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/guofei9987/blind_watermark/blob/master/examples/%E7%BC%A9%E6%94%BE%E6%94%BB%E5%87%BB.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("缩放攻击.py"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/guofei9987/blind_watermark/blob/master/examples/%E6%A4%92%E7%9B%90%E6%94%BB%E5%87%BB.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("椒盐击.py"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/guofei9987/blind_watermark/blob/master/examples/%E4%BA%AE%E5%BA%A6%E8%B0%83%E9%AB%98%E6%94%BB%E5%87%BB.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("亮度调高攻击.py"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/guofei9987/blind_watermark/blob/master/examples/%E4%BA%AE%E5%BA%A6%E8%B0%83%E4%BD%8E%E6%94%BB%E5%87%BB.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("亮度调暗攻击.py"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_5、原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、原理"}},[t._v("#")]),t._v(" 5、原理")]),t._v(" "),a("p",[t._v("(小波转换技术)[https://en.wikipedia.org/wiki/Wavelet_transform]")]),t._v(" "),a("h3",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[t._v("#")]),t._v(" 最后的话")]),t._v(" "),a("p",[t._v("本文分享了 Python 为图片添加盲水印的方法，如果觉得有帮助，请点赞、在看、转发，关注公众号「Python七号」，每天学习一个小技术。")])])}),[],!1,null,null,null);s.default=e.exports}}]);