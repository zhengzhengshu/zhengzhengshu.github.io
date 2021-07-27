(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{642:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("提起图表，你一定会想到 Excel 和 PPT 中的条形图、饼状图、柱状图，除此之外，还有很多其他种类的图表，比如折线图、热力图等等。但是，不管你通过哪一种图表，它们都是为了让你能够更直观、更简洁地表达自己的想法，也能让我们更好地从一堆杂乱无章的数字中找出规律。")]),s._v(" "),a("p",[s._v("虽然图表比直接展示数据多了这么多优势，但是也存在一个问题，那就是使用 Excel 制作一张精美的图表，需要消耗大量的时间。而且这些精美的图表，如果因为临时需要再加载新的数据，又要重复花费时间来制作。")]),s._v(" "),a("p",[s._v("别担心，这些问题都可以通过 Python 中的 seaborn 或者 echarts 库来解决。")]),s._v(" "),a("h3",{attrs:{id:"使用-seaborn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-seaborn"}},[s._v("#")]),s._v(" 使用 seaborn")]),s._v(" "),a("p",[s._v("今天，我们用 seaborn 来实现这样一种图表,抛砖引玉，带你认识 seaborn 的强大：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gsmnetm08hj30p20nk75k.jpg",alt:""}})]),s._v(" "),a("p",[s._v("先看一组数据：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\n   sepal_length  sepal_width  petal_length  petal_width    species\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.5")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.4")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v("     setosa\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.9")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.4")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v("     setosa\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.7")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v("     setosa\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.6")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v("     setosa\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.6")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.4")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v("     setosa\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("145")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.7")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.2")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v("  virginica\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("146")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.3")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.5")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.9")]),s._v("  virginica\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("147")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.5")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.2")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v("  virginica\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("148")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.2")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.4")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),s._v("  virginica\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("149")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.9")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.8")]),s._v("  virginica\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("为你解释一下示例数据。它是由五列组成的，分别表示鸢尾花的花萼长度、宽度，鸢尾花的花瓣长度、宽度（你可以通过百度来搜索鸢尾花的图片，来了解什么是花萼的长宽，什么是花瓣的长宽），以及三种鸢尾花品种（setosa 山鸢尾，versicolor 杂色鸢尾，virginica 维吉尼亚鸢尾）。")]),s._v(" "),a("p",[s._v("通过散点图的方式采用不同维度展示花的特性，让你能根据颜色把三种花区分出来，我们来看一下代码：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" seaborn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" sns\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ssl\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" matplotlib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pyplot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" plt\n\nssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_create_default_https_context "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_create_unverified_context  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不校验ssl")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置背景")]),s._v("\nsns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"darkgrid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" color_codes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用示例数据")]),s._v("\niris "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("load_dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'iris'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("data_home"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'seaborn-data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载数据，使用散点图，设置点的颜色和样式")]),s._v("\nsns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pairplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("iris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nkind "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'scatter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#散点图")]),s._v("\ndiag_kind "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#直方图")]),s._v("\nhue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'species'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#按照某一字段进行分类")]),s._v("\npalette "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'husl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置调色板")]),s._v("\nmarkers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'o'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'D'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置不同系列的点样式")]),s._v("\nheight "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#图标大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nplt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("代码的逻辑：")]),s._v(" "),a("p",[s._v("第一部分，sns.load_dataset 加载数据源，数据源可以由二维元组组成类似 Excel 一样的多行多列的数据，数据中的第一行和第一列会作为标题，被 seaborn 自动处理。我在代码中使用了示例数据“鸢尾花分类”来为你展示数据的加载。")]),s._v(" "),a("p",[s._v("第二部分，sns.pairplot 是指定图表类型，它是由“kind = 'scatter'”参数指定的。因为 pairplot() 函数支持散点图和回归图 (kind='reg')，我们需要关注分布情况，所以使用了散点图的方式来展示数据。")]),s._v(" "),a("p",[s._v("第三部分是点的样式。绘制的散点图中的每个点，也可以单独设置它们的样式。例如我指定了每个点的大小“height=2”，以及指定了色彩样式“palette='husl'”，并为每个列指定不同的颜色“hue = 'species'”。")]),s._v(" "),a("p",[s._v("最后一步是绘制图形，由于 seaborn 基于 matplotlib 实现图形，因此需要使用 plt.show() 函数进行图形的绘制，那么鸢尾花数据的散点图绘制结果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gsmoct91lej31bj0u0n4h.jpg",alt:""}})]),s._v(" "),a("p",[s._v("在截图中，基于花的四个属性，我采用了不同的维度进行绘图。同时你会发现，在某一维度下，其中一种颜色和其他颜色有明显的分界，非常容易把其中一种和另外两种花区分开。通过观察散点图，你会得到这样一个结论，使用合理的图形，能够帮你更好地解释某个晦涩难懂的概念，也能更容易从数据中发现规律。")]),s._v(" "),a("h3",{attrs:{id:"如何选择合适的图表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何选择合适的图表"}},[s._v("#")]),s._v(" 如何选择合适的图表")]),s._v(" "),a("p",[s._v("由于 seaborn 支持的图表非常丰富，我们也不可能会逐个尝试。学会根据图表的应用场景来选择适合的种类，再通过适合的种类再细化到图表的具体样式就可以了。")]),s._v(" "),a("p",[s._v("具体来说有可以通过参考图例和参考分类来选择合适的图表。")]),s._v(" "),a("p",[s._v("第一种解决办法是参考图例，在 seaborn 的官方文档中，列举了各种图例，它的"),a("a",{attrs:{href:"https://seaborn.pydata.org/examples/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("地址"),a("OutboundLink")],1),s._v("和截图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gsmoh7j34kj30l90kqt9l.jpg",alt:""}})]),s._v(" "),a("p",[s._v("第二种解决办法是参考分类，这时候，你就要根据你的业务场景，分析出它都对应了以下四个分类中的哪一类，再按照分类通过官方文档 API 页面找到具体的图表函数。四个分类如下:")]),s._v(" "),a("ul",[a("li",[s._v("关系类，用于展示数据集中多个变量之间的关系，relplot()、scatterplot()、lineplot() 都属于关系类。")]),s._v(" "),a("li",[s._v("分布类，用于展示数据集中多个变量的分布情况，displot()、kdeplot() 是这一类经常使用的图表类型。")]),s._v(" "),a("li",[s._v("线性关系类，是把多个变量联系起来，观察每个采样的线性变化趋势。regplot() 和 lmplot() 经常用于表示线性关系。")]),s._v(" "),a("li",[s._v("结构化多图，用于把多种方式的分析数据放在一起进行展示。例如我们分析鸢尾花就使用了散点图 + 柱状图的方式，但是散点图更能体现出它的各种属性之间的关系。")])]),s._v(" "),a("h3",{attrs:{id:"使用-echarts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-echarts"}},[s._v("#")]),s._v(" 使用 echarts")]),s._v(" "),a("p",[s._v("pyecharts 是 Python 和 Echarts 的结合体，Echarts 是由百度开源的交互式可视化图表工具，基于 JavaScript 脚本实现。")]),s._v(" "),a("p",[s._v("pyecharts 的数据格式，要基于不同的图形类型，使用不同的格式。但是一般情况下，是多行多列组成的类似 Excel 表格的格式，这种格式在 Python 中一般使用嵌套元组的形式进行保存。")]),s._v(" "),a("p",[s._v("和我们学习 seaborn 类似，你可以参考图例，也可以参考分类来学习 pyecharts 支持的动态图表。与 seaborn 不同的是，pyecharts 的官方文档没有图例，不过不要忘了，pyecharts 是基于 Echarts 编写的，因此图例可以参考 Echarts 的 "),a("a",{attrs:{href:"https://echarts.apache.org/examples/en/index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方网站"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("p",[s._v("那针对老手的图表分类和 API 可以参考 "),a("a",{attrs:{href:"https://gallery.pyecharts.org/#/README",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个地址"),a("OutboundLink")],1),s._v("。以最常用的图表，折线图为例，你可以打开地址，其中会包括图表的完整调用代码、测试数据和图例，通过参考示例可以让你掌握更多类型的图表。")]),s._v(" "),a("p",[s._v("现在，我们来制作一个疫情地图。")]),s._v(" "),a("p",[s._v("由于我们需要绘制中国地图，因此直接使用 pyecharts 库的 Map() 类，它是绘制动态地图的类。它的官方网站链接："),a("a",{attrs:{href:"https://gallery.pyecharts.org/#/Map/map_base",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gallery.pyecharts.org/#/Map/map_base"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("charts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Map\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyecharts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" opts\n\nurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5'")]),s._v("\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nalldata "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nchinadata "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" province "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" alldata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'areaTree'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'children'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    provincedata "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        province"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        province"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'total'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nowConfirm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    chinadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("provincedata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmap_chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmap_chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"全国确诊病例分布图"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("tuple")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("chinadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"china"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        is_map_symbol_show"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmap_chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_global_opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    title_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TitleOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"全国疫情地图( ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("alldata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lastUpdateTime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v(' )"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        visualmap_opts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("opts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("VisualMapOpts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            is_piecewise"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            pieces"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"min"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"label"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1-9人"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#FFE6BE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"min"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"label"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10-99人"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#FFB769"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"min"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("499")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"label"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100-499人"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#FF8F66"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"min"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"label"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"500-999人"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#ED514E"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"min"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"label"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1000-9999人"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#CA0D11"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"min"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"label"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10000人以上"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#A52A2A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmap_chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'covid19_map.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("p",[s._v("执行代码后，会在同一路径下生成一个 "),a("code",[s._v("covid19_map.html")]),s._v(" 的文件，用浏览器打开后，如下所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1gsql1axrgkj31530u0n1p.jpg",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[s._v("#")]),s._v(" 最后的话")]),s._v(" "),a("p",[s._v("学习一个工具，最重要的不是死记代码细节，而是学会使用官方文档，复制其样例代码，修改后为我所用，实现目标即可。自动化办公领域其实并不需要深入学习编程的细节，会调用各工具 API 就够了。")]),s._v(" "),a("p",[s._v("关注我，每周学习一个 Python 小技巧。")])])}),[],!1,null,null,null);t.default=r.exports}}]);