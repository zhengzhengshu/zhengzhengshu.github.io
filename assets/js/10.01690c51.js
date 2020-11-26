(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{245:function(t,s,a){t.exports=a.p+"assets/img/PythonSeven.97c2521e.jpg"},359:function(t,s,a){t.exports=a.p+"assets/img/pep-0602-example-release-calendar_Nqf5bvd.83b2d83b.png"},360:function(t,s,a){t.exports=a.p+"assets/img/zip_strict.50ab885f.png"},361:function(t,s,a){t.exports=a.p+"assets/img/bit_count.5c17b22c.png"},362:function(t,s,a){t.exports=a.p+"assets/img/dict_keys.f062aec4.png"},431:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("看看最新 Python 版本中包含的最佳功能")]),t._v(" "),n("p",[t._v("Python 3.10.0a2 版本已经于 2020-11-04 发布，因此我们可以窥见 Python 3.10 的一些新特性。这些新特性很可能会改变未来的 Python 生态系统，使其朝着更明确，更易读的方向发展，同时保持我们熟知和喜欢的易用性。")]),t._v(" "),n("p",[t._v("由于采用了新的发行计划： PEP 602 -- Annual Release Cycle for Python，我们可以看到更短的开发窗口，我们有望在 2021 年 10 月使用今天分享的这些新特性。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(359),alt:"PEP 602"}})]),t._v(" "),n("h2",{attrs:{id:"_1、类型注释的进一步扩展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、类型注释的进一步扩展"}},[t._v("#")]),t._v(" 1、类型注释的进一步扩展")]),t._v(" "),n("p",[t._v("3.9 版对 Python 中的类型提示和注释进行了大幅度修改和清理，类型提示这似乎是一种持续的趋势，在 3.10 中得到进一步扩展，目的很明显，是为了更好的可读性，无需看代码即可得知变量和函数返回值的类型。")]),t._v(" "),n("h3",{attrs:{id:"延迟类型注释的执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#延迟类型注释的执行"}},[t._v("#")]),t._v(" 延迟类型注释的执行")]),t._v(" "),n("p",[t._v("类型注释的运行通常被认为是在函数定义时执行，这意味着类型注释以自上而下的方式逐行进行检查。")]),t._v(" "),n("p",[t._v("尽管看起来合乎逻辑，但是这样做有两个问题：")]),t._v(" "),n("p",[t._v('1、引用尚未定义的类型的类型提示（前向引用）将不起作用，必须以字符串形式表示。也就是说：假如 int 是自定义类型，我们需要编写 "int" 而不是编写 int 。')]),t._v(" "),n("p",[t._v("2、这会减慢模块导入的速度，因为此时会执行类型提示。")]),t._v(" "),n("p",[t._v("因此，取而代之的是延迟类型注释，将类型注释将以字符串形式存储在"),n("code",[t._v("__annotations__")]),t._v("中，如果需要这些类型注释可以在运行时通过 "),n("code",[t._v("typing.get_type_hints()")]),t._v(" 来解析，也可以通过"),n("code",[t._v("inspect.signature()")]),t._v(" 来立即进行解析，这样的好处是可以先执行模块导入，允许前向引用，从而减少初始化时间。")]),t._v(" "),n("h3",{attrs:{id:"新增类型注释联合操作符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新增类型注释联合操作符"}},[t._v("#")]),t._v(" 新增类型注释联合操作符")]),t._v(" "),n("p",[t._v('3.10 通过 "|" 作为逻辑或操作符。在注释数据类型时，我们可以使用 | 作为或。例如，我们有一个预期为 int 或 float 的变量，可以写为 int | float ，如下所示：')]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.142")]),t._v("\nf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pass")]),t._v("\nf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pass")]),t._v("\nf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'str'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# linter will show annotation error")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("也可以使用 typing 模块提供的关键字 Union，比如 Union[int, float]")]),t._v(" "),n("h3",{attrs:{id:"typealias-注释"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typealias-注释"}},[t._v("#")]),t._v(" TypeAlias 注释")]),t._v(" "),n("p",[t._v("回到前向引用问题，避免前向引用的常见解决方案是将它们编写为字符串。")]),t._v(" "),n("p",[t._v("但是，将类型写为字符串会在将这些类型分配给变量时引起问题，因为 Python 会假定我们的字符串文字类型注释只是一个字符串。")]),t._v(" "),n("p",[t._v("在通常使用类型注释的地方使用该类型注释变量将返回错误。例如：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("MyType "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ClassName"')]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ClassName is our type annotation")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" MyType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("在这里，我们试图将其 MyType 用作类型的别名 ，但是， MyType 它将被读取为字符串值，而不是类型别名。只要 ClassName 在代码的后面定义，这就是有效的。当前情况下，这将引发注释错误。")]),t._v(" "),n("p",[t._v("为了解决这个问题，添加了一种显式标识 MyType 为类型别名的方法 ：")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" typing_extensions "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TypeAlias\nMyType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypeAlias "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ClassName"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" MyType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nOR\nMyType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TypeAlias "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ClassName "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if we have defined ClassName already")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" MyType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("这里说下，为什么类型很重要，尽管这当然不是一个巨大的变动，但是看到 Python 开发人员加倍努力以增强类型功能，这真是太酷了。Python 的优势在于其易用性和缺乏陡峭的学习曲线。原因之一是不需要在我们的代码中显式定义类型。")]),t._v(" "),n("p",[t._v("增强类型注释看起来似乎违反直觉，但是为开发人员 提供定义类型的选项 可以极大地提高代码库的可读性和可维护性。例如，从 Python transformers 库的源代码中可以看到以下说明：")]),t._v(" "),n("blockquote",[n("p",[t._v("Even without context, we can read this code and immediately grasp what data we should expect to be fed into these functions, classes, and methods — and exactly which datatypes we should be expecting to return.")]),t._v(" "),n("p",[t._v("In complex code bases (and even simple ones), type annotation can massively improve readability. Simultaneously, not everyone will want (or need) to use them — so an optional, exception-free functionality strikes a perfect balance.")])]),t._v(" "),n("p",[t._v("意思是即使没有上下文，我们也可以阅读此代码，并立即掌握应将哪些数据期望输入到这些函数，类和方法中，以及确切地期望返回哪些数据类型。")]),t._v(" "),n("p",[t._v("但在复杂的代码库（甚至简单的代码库）中，类型注释可以大大提高可读性。同时，并不是每个人都希望（或需要）使用它们，因此，这是可选的。这种无异常的功能可以达到完美的平衡。")]),t._v(" "),n("p",[t._v("这些改进表明 Python 对类型注释功能的承诺，基于此，我们最喜欢的库和我们自己写的代码可以大大提示可阅读性，这会对 Python 生态系统产生长期的正面影响。")]),t._v(" "),n("h2",{attrs:{id:"_2、新增的函数及函数参数的变化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、新增的函数及函数参数的变化"}},[t._v("#")]),t._v(" 2、新增的函数及函数参数的变化")]),t._v(" "),n("p",[t._v("除了类型提示功能的扩展外，核心 Python 功能进行了一些更新，如下。")]),t._v(" "),n("h3",{attrs:{id:"函数-zip-增加-strict-参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#函数-zip-增加-strict-参数"}},[t._v("#")]),t._v(" 函数 zip() 增加 strict 参数")]),t._v(" "),n("p",[t._v("函数 zip() 增加 strict 参数，如果设置 strict = True，而传输的参数的长度不相等将会抛出异常，如下图所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(360),alt:""}})]),t._v(" "),n("p",[t._v("新的 strict 参数不是盲目地截断不匹配的数据，而是使我们能够控制它的行为，这将使很多开发人员免于遭受麻烦。")]),t._v(" "),n("h3",{attrs:{id:"新增整数的位计数器-int-bit-count"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新增整数的位计数器-int-bit-count"}},[t._v("#")]),t._v(" 新增整数的位计数器 int.bit_count()")]),t._v(" "),n("p",[t._v("此新方法使我们能够计算整数的二进制表示形式中 1 的个数，在某些场景下这个函数非常实用且高效。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(361),alt:""}})]),t._v(" "),n("p",[t._v("上图中的结果即为整数以二进制位为 1 的个数：")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 00000000\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 00000001\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 00000010\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 00000011\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 00001010\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 00001011\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 00001100\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 01100100\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 01100101\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("102")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 01100110\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("h3",{attrs:{id:"字典的视图增加一个属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字典的视图增加一个属性"}},[t._v("#")]),t._v(" 字典的视图增加一个属性")]),t._v(" "),n("p",[t._v("字典类型的 3 个方法： dict.items()、dict.keys()、dict.values() 分别返回字典的 3 个视图，现在每个视图都增加来一个属性，叫 mapping，具体用法如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(362),alt:""}})]),t._v(" "),n("p",[t._v("新的属性 mapping 的类型属于 types.MappingProxyType，是围绕原字典的一个属性，在任何视图上访问 mapping 属性，都将返回原字典。")]),t._v(" "),n("p",[t._v("现在就这些了，尽管我们距离 3.10 的开发时间表只有几个月的时间，但已经有很多有趣的更改，Python 的发展仍在继续，似乎还会为语言添加更多有趣的功能。")]),t._v(" "),n("p",[t._v("希望您喜欢这篇文章，请点赞、转发、关注，谢谢支持。")]),t._v(" "),n("p",[n("em",[t._v("首发于公众号「Python七号」，欢迎关注。")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(245),alt:"「Python七号」，一个值得关注的学习号"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);