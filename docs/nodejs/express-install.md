# Express的安装和使用

## 一、安装

所有安装开始前，要先安装`express-generator`，否则创建项目时，会提示express命令没找到。

```
$ npm install -g express-generator #需先安装express-generator npm 
$ install -g express
$ express -V  #验证是否安装成功
```

## 二、创建项目

```
$ express myfirstexpress # express的默认模版采用jade，若需要ejs模版支持，加上-e选项，即 express -e myfirstexpress
$ cd myfirstexpress
$ ls
```

项目目录结构如下：

> * app.js               \#配置文件
> * bin                    \#运行
> * package.json   \#描述文件
> * public               \#公共资源
> * routes               \#路由
> * views                \#页面

## 三、运行项目

```
$ npm install #需要等待安装完成
$ npm start #该命令可以在package.json里面修改
```

## 四、访问项目

* 在浏览器中输入`localhost:3000`访问。



