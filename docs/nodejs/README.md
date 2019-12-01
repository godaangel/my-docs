# Node框架介绍与选择

* ##### 刚开始试玩 Node.js，学习 Express、Koa

    如果只是想试试并学习 Node.js 开发后端服务，建议从 Express 开始，因为它够简单，而且是很多其他框架的基础，扩展也容易。如果你对 JavaScript 的 promise 和 async 熟悉，那也可以从 Koa 开始。

* ##### 开发内容管理站点、简单的后台管理用 Keystone，不介意使用 MongoDB 的用Meteor

    如果你要开发一个不太复杂的内容管理应用，比如一些经常更新内容、图片的站点，用户权限等后台管理等，那么 KeystoneJS 比较合适，因为它已经内置了很多这些功能。Meteor 当然也适合。

* ##### 企业应用首选 Egg

    Feathers 和 Egg 都适合开发企业应用。有日志、安全、多进程通信的解决方案，非常便利。Feathers 中文文档少，使用 Express 和 JWT，偏重实时交互；Egg 由阿里开发，使用 Koa，感觉更适合国内的企业应用开发。

* ##### 实时 web app 使用 Meteor

    如果你要开发一个涉及聊天、物联网功能的实时应用，那么 Meteor 和 Feathers 很适合。

* ##### 构建微服务 REST API 首选 hapi

    如果你要开发简单的几个微服务后端，那么 hapi 和 restify 合适。如果是大型的复杂应用，甚至是在现有微服务上构建，那么 LoopBack 可能是个好选择，它可以把很多服务 glue 到一起。还可以结合StrongLoop 的 API 网关一起使用。

* ##### 静态网站生成首选 Gatsby，不使用 React 的话用 Hexo。



