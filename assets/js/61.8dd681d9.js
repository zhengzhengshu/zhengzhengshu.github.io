(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{421:function(s,n,e){"use strict";e.r(n);var t=e(4),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("很多开发者用自己的电脑开发，然后将程序部署在内网。如果内网无法访问互联网，部署就相当麻烦，你需要将应用程序依赖的包也传输到内网。如果是 Python 应用，还需要使用 pip 安装一下依赖包，对于某些需要编译安装包，windows 环境下安装过程中还可能报错，linux 可能提示缺失必要的头文件等，安装这些依赖包会耗费较多的时间，对自己的技术提升其实没有帮助，是要尽可能避免的。")]),s._v(" "),e("p",[s._v("能不能一次部署，处处运行？其实这个问题已经有点过时了，别问，问就是 docker，如果你了解过 docker，你就知道，以容器的形式来发布你的应用程序，已经变得非常流行。")]),s._v(" "),e("p",[s._v("本文教你如何将一个 Python 应用容器化，容器化后，你的应用可以极其方便的迁移至其他具有 Docker 的服务器中，即使 Docker 服务器不联网，也只需将一个 Docker 镜像拷贝至内网即可完成部署。")]),s._v(" "),e("p",[s._v("假如有一个 Python 的 web 应用 index.py ，这里是 falsk 写的 Hello world：")]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask\napp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" debug"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("运行 "),e("code",[s._v("python index.py")]),s._v(" 后，在浏览器上访问 "),e("code",[s._v("http://127.0.0.1:5000")]),s._v("，会看到浏览器上显示了 'Hello World!' 说明程序没有问题。如果我们把这个文件发给别人，那么他需要做以下 3 步才能启动这个 web 应用。")]),s._v(" "),e("ol",[e("li",[s._v("安装 Python 解释器")]),s._v(" "),e("li",[s._v("安装 flask 库")]),s._v(" "),e("li",[s._v("执行 "),e("code",[s._v("python index.py")])])]),s._v(" "),e("p",[s._v("真实情况下，步骤 2 可能会有很多依赖，这里我们将所有的依赖库都放在 "),e("code",[s._v("requirements.txt")]),s._v(" 文件中：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Flask==1.1.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后在应用程序的根目录（这里是 index.py 所在的目录）中创建一个名为 Dockerfile 的文本文件，然后粘贴以下代码。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("FROM python:alpine3.8\nCOPY . /app\nWORKDIR /app\nRUN pip install -r requirements.txt\nEXPOSE 5000\nCMD python ./index.py\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("请注意，FROM 指令指向 python:alpine3.7。这是在告诉 Docker 容器要使用什么基本映像，并隐式选择要使用的 Python 版本，在本例中为 3.8。Docker Hub 具有几乎所有 Python 版本的基本映像。该示例使用的是安装在 Alpine Linux（极简Linux发行版）上的Python，该 Python 发行版有助于使 Docker 的映像较小。除非有充分的理由使用 Debian Jessie 这样的基本图像，否则最好选择Alpine。")]),s._v(" "),e("p",[s._v("还要注意的是 RUN 指令，该指令调用 pip 从 requirements.txt 文件安装依赖项。")]),s._v(" "),e("p",[s._v("Dockerfile 中的其余指令非常简单。在 CMD 指令告诉容器来执行启动该应用程序是什么。在这种情况下，它告诉 Python 运行 index.py。该 COPY 指令简单地移动应用到容器镜像，WORKDIR 设置工作目录，EXPOSE 绑定 Flask 使用的端口。")]),s._v(" "),e("p",[s._v("要构建映像，在 Dockerfile 目录下，终端运行 "),e("code",[s._v("docker build")]),s._v(" 命令。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker build --tag somenzz-app ./\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("等待其下载基本镜像并构建完成，会得到一个 somenzz-app 的镜像:")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ docker images "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" somenzz\nsomenzz-app                                         latest              b7e2359056bb        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" hours ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),s._v(".1MB\nsomenzz/my-kali                                     latest              975cbe3a4619        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" weeks ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".83GB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("可以看到此镜像只有 89.1MB 的大小。接下来就像其他镜像已有可以使用了：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('$ docker run --name python-app -p 5000:5000 somenzz-app\n * Serving Flask app "index" (lazy loading)\n * Environment: production\n   WARNING: This is a development server. Do not use it in a production deployment.\n   Use a production WSGI server instead.\n * Debug mode: on\n * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)\n * Restarting with stat\n * Debugger is active!\n * Debugger PIN: 201-219-912\n172.17.0.1 - - [14/Oct/2020 22:32:05] "GET / HTTP/1.1" 200 -\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("此时容器已经成功启动，本机的 5000 端口会映射至容器的 5000 端口，因此，访问 "),e("code",[s._v("127.0.0.0:5000")]),s._v(" 就相当于访问容器的 5000 端口。")]),s._v(" "),e("p",[s._v("如果要后台运行容器，可以加入 "),e("code",[s._v("-d")]),s._v(" 参数：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ docker run -d  --name python-app -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 somenzz-app\n259d09fbbf77a6fd680cd7527600d055cb76fe3d6792063846103b47360210f9\n$ docker container list "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" somenzz-app\n259d09fbbf77        somenzz-app                                         "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh -c \'python …"')]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" minutes ago      Up "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" minutes       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:5000-"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("/tcp                           python-app\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("结合前文"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/w4ZqMpGtxp-T1zS7DYbNvA",target:"_blank",rel:"noopener noreferrer"}},[s._v("手摸手，带你入门docker"),e("OutboundLink")],1),s._v("中的步骤 7 ：发布镜像，你可以将容器发布到网络上供他人使用。")]),s._v(" "),e("p",[s._v("如果你不熟悉 Dockerfile，制作并发布 docker 镜像还有一个更简单的方法，那就是下载一个镜像，启动，登陆到容器内部进行修改，安装依赖，然后保存为新镜像，最后发布，当然效率是比较低的，有时间最好还是学习下 Dockerfile， 官方教程如下：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.docker.com/engine/reference/builder/"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("自然，本文只是一个简单的 HelloWorld web 应用。更复杂的场景将需要更多地关注细节，但是大多数 Python 应用程序的容器化流程都是相同的，希望本文对你有所帮助。")]),s._v(" "),e("p",[s._v("Python七号，做更满意的七号，每周学习一个 Python 技巧，欢迎关注。")])])}),[],!1,null,null,null);n.default=a.exports}}]);