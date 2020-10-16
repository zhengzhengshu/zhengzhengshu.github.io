(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{392:function(t,p,e){"use strict";e.r(p);var s=e(4),n=Object(s.a)({},(function(){var t=this,p=t.$createElement,e=t._self._c||p;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("昨天晚上在服务器上为 nginx 部署 https 服务器，和之前不同的是，这次使用的 http 端口是 8080，之前使用默认的 80，因此使用 Let's Encrypt 生成证书时并没有以前那么顺利，如果网站已经开启在了 http 的 80 端口，Let's Encrypt 生成证书太简单了，简单到你不会去思考它的原理。")]),t._v(" "),e("p",[t._v("网上搜索“非80端口 certbot”，看完了换个词搜，回答看了个遍，大多只说操作步骤，不说为什么要这么做，按照这些操作步骤操作了很多次仍没有成功。此时已经是晚上11点了，想起吴军老师的话，今天做不完的事情，一定要留到明天做，我合上电脑，决定立即休息（之前也遇到技术问题搞到深夜 2-3 点，仍然搞不定，影响到第二天的状态，得不偿失，熬夜非常不值）。有些问题晚上11点还没解决，熬夜也大概率解决不了。")]),t._v(" "),e("p",[t._v("早上 6 点爬起来，大脑非常清晰，我还是想解决非80端口如何使用Let's Encrypt 申请 https 证书的问题，我突然想起考研数学界的永乐大帝，李永乐老师，他讲过：数学，只有深刻理解的东西，才能更好的感觉它，语文，只有深刻感觉到的东西，才能更好的理解它。这句话我印象特别深刻，他还对此进行发散，数学可以泛指一切理性的事物，比如男人、科学技术，语文也泛指一切感性的事物，比如女人、艺术等。就计算机技术来说，如果不深刻理解背后的原理，是无法轻松驾驭的。")]),t._v(" "),e("p",[t._v("于是我看了官网的这篇文章：https://letsencrypt.org/zh-cn/how-it-works/，明白了它的工作原理。简单来说，就两步，一是要证明你对你的域名有控制权，防止你为别人申请证书，二是证书的颁发和吊销。第二点基本不需要我们干预，自动完成，咱们说下第一点。")]),t._v(" "),e("p",[t._v("有两种方式可以证明你对域名具有控制权：")]),t._v(" "),e("p",[t._v("一是你在你的域名提供商，就是可以绑定 ip 的地方，新绑定一个 TXT 映射，然后 letsencrypt 验证成功了，就说明你对该域名有控制权。截个图如下")]),t._v(" "),e("p",[t._v("到这一步就是要你新增一条域名映射记录，类型为TXT，把上图中的那个字符串7rBRoMUcyphsdfdsfsfdfsaa3332rsdfsaOeMv1Tfpk-6phU放在你本应填写 IP 地址的地方，等待个 3 分钟左右，执行以下命令验证：")]),t._v(" "),e("p",[t._v("dig _acme-challenge.xxxlab.cn txt\n返回信息中，如果你看到了你填写的字符串，那就说明新添加的域名映射生效了，可以按回车继续生成证书了。")]),t._v(" "),e("p",[t._v("二是，在 https://example.com/ 的已知 URI 下放置一个 HTTP 资源，这个就是最初提到的网站在 80 端口正常运行，我们就可以在服务器端执行证书申请，这些操作都会自动完成，示意图如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://letsencrypt.org/images/howitworks_challenge.png",alt:""}})]),t._v(" "),e("p",[t._v("假设它能够完成上面的任务：它在 https://example.com 站点的指定路径上创建了一个文件。证书管理软件还使用其私钥对提供的 nonce（一次性数字）进行签名。完成这些步骤后，证书管理软件会通知 CA 它已准备好完成验证。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://letsencrypt.org/images/howitworks_authorization.png",alt:""}})]),t._v(" "),e("p",[t._v("然后，CA 的工作就是检查验证是否已经完成。CA 会验证 nonce 上的签名，并尝试从 Web 服务器下载该文件，并确保其具有 CA 需要的内容。")]),t._v(" "),e("p",[t._v("最后，如果你还想知道更加具体的生成证书的命令，请访问官网https://letsencrypt.org/zh-cn/，无论是 apache 还是 nginx 都有相应的命令说明。")]),t._v(" "),e("p",[t._v("执行命令不是我们要重点记忆的，那些原理才是。正如李永乐老师教导，只有深刻理解了的东西，你才能更好的使用它。最近在看禅与摩托车维修艺术，作者对摩托车维修进行了禅的论述，很有禅意，有段话是这么说的：")]),t._v(" "),e("blockquote",[e("p",[t._v("老手根本不会照着指示去做，他边做边取舍，因此必须全神贯注于手上的工作，即使他没有刻意这样做，他的动作和机器之间也自然地有一种和谐的感觉。他不需要遵照任何书面的指示，因为手中的机器给他的感觉决定他的思路和动作，同时也会影响他手中的工作。所以机器和他的思想同时不断地改变，一直到把事情做好了，他的内心才真正地安宁下来。")])]),t._v(" "),e("p",[t._v("机器会反应出你真正的个性、感受、推理和行动，而不是反应你自吹自擂、膨胀的那一部分。")])])}),[],!1,null,null,null);p.default=n.exports}}]);