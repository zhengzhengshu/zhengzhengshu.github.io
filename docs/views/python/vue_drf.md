---
title: 我的web开发小结（vue遇上drf ）
date: 2020-02-07
tags:
 - vue
 - django-rest-framework
 - nginx
categories: 
 - Python
---


一句话，多看官方英文文档，多学习基础知识，尽量使用英文关键词搜索，多使用 stackoverflow，多使用轮子。

下面是自问自答环节。

<!-- more -->

## 我是怎么入门 web 开发的？

因为运维，我入门了 Python，因为运维涉及网站上的操作，我学会了爬虫，同时也接触了开源的调度工具 Airflow，由于它的前端是 Flask 写的，进而了解到 Python 的 web 框架 Flask，Django，对比了众多 web 框架，我喜欢 Django 的 MVC 设计风格，于是跟着追梦人物的博客（链接见文末），学习了 Django，并通过简单的 web 页面实现自己工作中需要的功能。这些功能确实提高了工作效率。小成就感建立。

后面接触到 cmdb，于是从开源项目寻找到了到 open-cmdb（链接见文末），我被这个简洁又实用的前端界面给吸引了，于是看他是怎么实现的，它前端使用 vue，element-ui，后端使用 django，django-rest-framework，于是我又学习了 vue 和 django-rest-framework，当然，我还接触到 redis，elstatic-search，还有大名鼎鼎的 nginx。 每一个技术工具，都有值得深入研究的东西，我这里只是学习如何使用这些轮子，仅仅是使用，就已经让我大开眼界。当然学习不是一下子就学会的，而是通过很多 demo，代码，和实践练习中不断理解由浅入深。通过不断地遇到问题，解决问题，就是这样，我现在可以说我入门了 web 开发。

## web 开发有哪些需要加强学习的？

1、web 开发者需要先了解 http 协议，或者说要深入学习也不为过，这些知识无论从事技术的哪个方向，都用得着，是属于万变不离其宗的宗。

2、学习基础知识 html，javascript，css。如果觉得这些太简单，无需要学习，我建议你看看 winter 老师在极客时间的专栏《重学前端》，大多数人的知识不成体系，没有从点到线到面，等到用时发现脑子一片空白，查资料，上网搜代码，遇到坑时，从大量的问答网站上找答案，浪费了太多的时间，假如时间能重来，我会系统地学习一遍 html，javascript，css，尤其是 css，为了弄好网页的布局，花费的时间比甚至比实现一个完整的页面还多，这都是因为基础知识太弱导致。

3、有了基础知识后，再熟悉框架，如 Vue.js 。只所以要用框架，是为了提高开发效率。同样的，无论写哪一种代码，我们要有轮子意识，自己写代码也好，使用别人的轮子也好，尽量做到复用，软件的价值就在于复用，减少重复劳动。

4、学习一些设计架构方面的知识，小的方便比如为什么需要请求和响应拦截器，为什么需要路由，大的方便比如为什么要前后端分离？ 为什么要微服务？为什么要做负载均衡？

5、安全方面，前端的参数检查，权限控制仅仅是为了防止用户错误的输入或访问，稍微会使用浏览器的开发者工具的，都可以绕过，更别说爬虫，因此后端的权限管理，安全控制是必不可少的，缺少权限意识和安全控制，做出来的网站都是极不安全的。



## web 开发都踩过哪些坑？

这里主要说下 vue，django，django-rest-framework。

1、前后端分离后在生产环境部署时静态资源无法访问。

在开发环境中，前端使用 vue，后端使用 DRF(django rest framework)，前端端口 8080，后端端口 8000，在接口调试中我们需要将 8080/api/ 的请求转发到 8000/api/ 上，使用 vue 配置文件中设置代理服务器就可以轻松转发，访问 django 的静态资源也转发一下，配置信息大致是这样的：
```python
    devServer: {
        compress: true,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api',//重写,                     
                }
            },

            '/media': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                pathRewrite: {
                    '^/media': '/media',//重写,
                }
            }
        }
    },
 
```

部署在生产环境时，我们在 nginx 中设置同样的代理就行了，这并没毛病，但当你把 django 配置文件中的 DEBUG 设置为 FALSE 后，原来有 django 来驱动的静态不再由 django 来驱动了，需要 nginx 来接管。

遇到此问题的朋友，可以参考我的做法：

第一、先把所有的 static 文件，主要是 css 文件，js 文件，字体文件等收集到一起，vue 的静态文件就在 dist 目录，而 django 的静态文件需要执行以下命令先收集静态文件，主要是 django admin 后台用到的静态文件。
```python
python manage.py collectstatic
```
这一步会把 django 用到的静态文件全部放在`STATIC_ROOT` 的路径，因此这个路径你可以设置成 vue 的 static 路径，这样收集后不用再手动复制到一起了。

第二、通过 django 上传 media 文件也由 nginx 来驱动。

以上两步在 nginx 的配置如下：
```python
        location /media {
            autoindex on;
            alias E:/gitee/xxxxx/rearEnd/media/; 
        }       

        location /static {
            autoindex on;
            alias E:\gitee\xxxxx\frontEnd\dist\static;
        }

```
现在我们把静态文件都由 nginx 来返回给前端了，但这其实还不够，如果用到了 DRF 的 ModelViewSet ，那么返回的文件信息是一个绝对 url，比如 `http://127.0.0.1:8000/media/xx/xx.file`, 这在本机访问是没问题的，一旦通过 web 远程访问服务器，那么 `http://127.0.0.1:8000/media/xx/xx.file` 肯定是无法访问的，我们需要浏览器在发请求时替换为我们的域名，这一步通过在 nginx 配置文件中代理那块加上 `proxy_set_header Host $host;` 注意这里没有 port，因为是有域名访问。

搞到半夜，最终效果比较满意的 nginx 的配置文件长这样（供参考）：

```python
listen       8081;
        server_name  localhost;
        location /{
            root E:\gitee\xxxxx\frontEnd\dist;
            index index.html;
            try_files $uri $uri/ /index.html;
        }

        location /media {
            autoindex on;
            alias E:/gitee/xxxxx/rearEnd/media/; 
        }       

        location /static {
            autoindex on;
            alias E:\gitee\xxxxx\frontEnd\dist\static;
        }

        location /admin/ {
            proxy_pass http://127.0.0.1:8000/admin/;
        }
        
        location /api/{
            proxy_pass http://127.0.0.1:8000/api/;
            proxy_set_header Host $host;
            # proxy_set_header Host $host:$server_port;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
        }
        
```

2、chrome 浏览器一切正常，safari 浏览器对接口报 401 错误。

这个问题坑了我很久，最终在 stackoverflow 上找到答案。

因为你的接口的 url 中少了最后一个斜杠，"/"，这里鄙视一下 safari 浏览器的弱智。

3、其他的都是小坑了，在 stackoverflow 基本上都可以找到答案，最好使用英文关键字检索。


【相关链接】：
[追梦人物]([https://www.zmrenwu.com/](https://www.zmrenwu.com/)
[open-cmdb](https://github.com/open-cmdb/cmdb)
(完)

关注微信公众号：Python七号，像玩游戏一样学习 Python。

![](../images/PythonSevenW.jpg)
