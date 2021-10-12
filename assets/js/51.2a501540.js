(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{629:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在我第一次在 DRF（Django REST Framework）中使用 JWT 时，感觉 JWT 非常神奇，它即没有使用 session、cookie，也不使用数据库，仅靠一段加密的字符串，就解决了用户身份验证的烦恼。")]),t._v(" "),a("p",[t._v("直到我遇到了一个当时百思不得解的问题，才揭开了它的神秘面纱。")]),t._v(" "),a("p",[t._v("当时遇到的问题就是，无论怎么设置 JWT TOKEN 的过期时间，都没有生效，即使设置为 1 秒后过期，过了 1 分钟，TOKEN 还是可以正常使用，重启 Django 服务也不行。")]),t._v(" "),a("p",[t._v("没有别的办法，我就硬着头皮去追着源码，看看 JWT 是怎么判断 TOKEN 是否过期的。")]),t._v(" "),a("p",[t._v("具体的方法就是，深度优先追溯 JWT 代码的源头。在 DRF 中，配置了 DEFAULT_AUTHENTICATION_CLASSES 就是 JWT：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1guvxa03hw0j61760nqdkc02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("直接定位至这个类，发现它继承了 BaseJSONWebTOKENAuthentication")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1guvxcpekcjj61080j8q5e02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("然后看 BaseJSONWebTOKENAuthentication，发现有一段判断过期的逻辑：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1guvxdu1cpej60v00u00wn02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("继续展开 jwt_decode_handler 这个函数，发现它调用了 jwt.decode 函数")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1guvk2u8hzdj610y0nuadi02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("展开 jwt.decode 函数，发现它调用了函数 "),a("code",[t._v("_validate_claims")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1guvk8xs4w3j60u0165afd02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("函数 "),a("code",[t._v("_validate_claims")]),t._v(" 又调用了 "),a("code",[t._v("_validate_exp")]),t._v("，")]),t._v(" "),a("p",[t._v("然后展开 "),a("code",[t._v("_validate_exp")]),t._v("，找到了这段：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1guvkb6i1ogj60x40e00ub02.jpg",alt:""}})]),t._v(" "),a("p",[t._v("发现过期时间 exp 来自 payload，payload 又来自 TOKEN：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNgy1guvkcpamfcj60p80imwgk02.jpg",alt:""}})]),t._v(" "),a("p",[t._v('至此谜底揭开，原来，TOKEN 的过期时间其实被编码在了 TOKEN 本身，服务器收到 TOKEN 时先进行解码，解码出过期时间，然后和当前时间进行对比，如果当前时间比较小，说明没有过期，TOKEN 就是有效的，否则返回客户端 "Signature has expired."')]),t._v(" "),a("p",[t._v("我 Debug 出了这个 TOKEN 的过期时间 exp，发现这个 exp 是修改 JWT_EXPIRATION_DELTA 之前的那个过期时间，原来修改 JWT_EXPIRATION_DELTA 之后需要重新生成 TOKEN，这样的过期时间才会按照新的来。")]),t._v(" "),a("h3",{attrs:{id:"至此-jwt-的原理已经非常清晰了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#至此-jwt-的原理已经非常清晰了"}},[t._v("#")]),t._v(" 至此，JWT 的原理已经非常清晰了：")]),t._v(" "),a("p",[t._v("用户第一次登录时，服务器（JWT）会获得用户名、用户 id，在加上设置的过期时间构建 payload：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" datetime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utcnow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" api_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JWT_EXPIRATION_DELTA\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("然后将 payload 用设置好的算法使用私钥加密成 token")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jwt_encode_handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JWT_PRIVATE_KEY "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" jwt_get_secret_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        api_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JWT_ALGORITHM\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("token 返回至客户端后，客户端缓存该 token，然后每一次请求时都带上该 token。")]),t._v(" "),a("p",[t._v("服务器在收到请求是先验证该 token，验证的过程就是对 token 进行逆向解码：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jwt_decode_handler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'verify_exp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" api_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JWT_VERIFY_EXPIRATION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# get user from token, BEFORE verification, to get user secret key")]),t._v("\n    unverified_payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    secret_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jwt_get_secret_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unverified_payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        api_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JWT_PUBLIC_KEY "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" secret_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        api_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JWT_VERIFY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        leeway"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("api_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JWT_LEEWAY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        audience"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("api_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JWT_AUDIENCE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        issuer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("api_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JWT_ISSUER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        algorithms"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("api_settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JWT_ALGORITHM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("解密使用同样的算法，使用公钥或私钥进行解密，解密成功且不过期，则认为用户有权限访问，正常返回。")]),t._v(" "),a("h2",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("这个问题至少花了我半个小时的时间，如果你遇到这种情况，能瞬间明白其中缘由，那本文的目的就达到了。")]),t._v(" "),a("p",[t._v("源码之下无秘密，遇到问题，去看源码可能不是解决问题最快的方法，却是提升自己最快的方法。很多开源软件设计模式的应用都非常值得我们学习，比如 DRF 的模块设计，通过 mixins 组合来实现灵活可扩展的 APIView，通过子类传入相关的 class 来实现用户自定义的功能。如何写出灵活可扩展、高内聚低耦合、符合开闭原则的程序，阅读开源代码，是一个非常高效的学习方式。")]),t._v(" "),a("p",[t._v("当然了，这需要先对设计模式有一个系统的学习，让自己有一双慧眼，不然就是守着金山不自知。")])])}),[],!1,null,null,null);s.default=e.exports}}]);