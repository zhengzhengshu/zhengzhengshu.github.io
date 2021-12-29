(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{688:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("FastAPI 是 Python Web 领域非常受欢迎的框架，目前 GitHub 上有 39.1k 的 star，已经远超过了 Django rest framework（22.3k star）。 而 Celey 又是异步任务最流行的框架，常用于数据挖掘和机器学习等计算密集型任务的场景中。如果需要通过 API 来异步调用任务，那这两个框架可以放在一起工作。本文来分享一下如何让 FastAPI 和 Celery 更好的相互配合，开发环境下如何通过一个命令就可以让两者一起工作。")]),s._v(" "),a("h3",{attrs:{id:"_0、安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0、安装依赖"}},[s._v("#")]),s._v(" 0、安装依赖")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fastapi celery uvicorn\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1、写个纯-celery-任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、写个纯-celery-任务"}},[s._v("#")]),s._v(" 1、写个纯 celery 任务")]),s._v(" "),a("p",[s._v("首先，让我们来写一个纯属 celery 的任务，让它正常运行，然后在通过 fastapi 来调用它。")]),s._v(" "),a("p",[s._v("假设你的机器已经安装了 Python3 和 celery，并且本机已经开启了 redis，运行在 6379 端口上。")]),s._v(" "),a("p",[s._v("现在让我们写一个简单的任务：计算两数之和，文件名为：celery_app.py 代码如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/Users/aaron/py38env/bin/python")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# filename: celery_app.py")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" celery "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Celery\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Celery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tasks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" broker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis://127.0.0.1:6379/0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" backend"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis://127.0.0.1:6379/0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("task")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("然后启动一个 worker 接收远程调用。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("celery -A celery_app worker -l info\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gx60vq9re5j30z00u0mze.jpg",alt:""}})]),s._v(" "),a("p",[s._v("如果要远程异步调用这个 add 函数，我们需要再编写一个文件 start_celery_app.py，内容如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" celery_app "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" add "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入我们的任务函数add")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\nresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#异步调用，这一步不会阻塞，程序会立即往下运行")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ready"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 循环检查任务是否执行完毕")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("strftime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%H:%M:%S"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取任务的返回结果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("successful"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断任务是否成功执行")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("任务返回了结果 24，命令成功完成，")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gx60yjs6dwj30ja06o0so.jpg",alt:""}})]),s._v(" "),a("p",[s._v("此时 worker 界面增加的信息如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gx612bl8ejj30xs07qmya.jpg",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_2、通过-fastapi-来执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、通过-fastapi-来执行"}},[s._v("#")]),s._v(" 2、通过 fastapi 来执行")]),s._v(" "),a("p",[s._v("编写一个 api.py 通过接口来调用上述的 add 函数：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" fastapi "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" FastAPI\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" celery_app\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" FastAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("read_root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" celery_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"12+12"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("启动服务：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("uvicorn api:app --host "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 --port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v(" --reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后访问：http://127.0.0.1:8000，会发现任务成功执行：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gx61bqjfftj308g03cjr7.jpg",alt:""}})]),s._v(" "),a("p",[s._v("这样我们启动了两个独立的进程，一个是 celery 的 worker，一个是 fastapi 的 app，这样做没问题，且生产环境下是严格要求分开运行的，不过，开发环境下如果这样做就太低效了。")]),s._v(" "),a("h3",{attrs:{id:"_3、开发环境下如何一条命令启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、开发环境下如何一条命令启动"}},[s._v("#")]),s._v(" 3、开发环境下如何一条命令启动")]),s._v(" "),a("p",[s._v("如果不使用两个终端来启动两个命令，我们可以使用 Celery 提供的测试实用程序在后台线程中启动 celery worker，比如写一个这样的文件run.py，内容如下：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" uvicorn\n\noriginal_callback "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" uvicorn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callback\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" celery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("testing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("worker "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" start_worker\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" celery_app "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" app\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" start_worker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" perform_ping_check"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" loglevel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        original_callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nuvicorn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("callback "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" callback\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    uvicorn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("这样，只需要执行一条命令就可以同时启动 celery worker 和 fastapi 接口服务，调试的时候是不是非常方便：\n"),a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gx61njl5x0j31b00i0wh2.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"最后的话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后的话"}},[s._v("#")]),s._v(" 最后的话")]),s._v(" "),a("p",[s._v("本文分享了 fastapi 和 celery 是如何配合工作的，并分享了一个用于开发环境的脚本，可以通过一个命令来启动 celery worker 和 fastapi，可能不是完美的解决方案，但确实提升了开发效率，我觉得这是值得的，如果有帮助还请点赞、在看、关注，感谢阅读。")])])}),[],!1,null,null,null);t.default=e.exports}}]);