# Express在服务器安装遇到的问题

> 服务器：阿里云低端服务器 
>
> 操作系统：CentOS 6.9

## 问题一、安装完成以后，运行express，提示express命令不存在

答：安装完成以后需要建立软链才能全局访问。如下所示：

```
ln -s /usr/local/src/node-v6.9.5-linux-x64/bin/express /usr/local/bin/express
```

> 解释  ln -s \[你的安装地址/bin\] \[/usr/local/bin/你的命令名称\]

## 问题二、直接访问ip:3000端口找不到
直接访问ip:3000端口找不到，在服务器使用 curl http://127.0.0.1:3000 可以访问成功。

答：

1. 首先检查阿里云安全组，笔者尝试在在阿里云安全组加入3000端口访问规则（此操作为必须操作），但是依然不能访问；
2. 尝试各种姿势，除了修改nginx，因为目前还没弄明白nginx规则，均失败；
3. 开始尝试修改防火墙，由于试用的是CentOS6.9，与7有区别，所以使用命令语句`iptables -A INPUT -p tcp --dport 3000 -j ACCEPT`，访问3000依然失败；
4. 查证了相关资料，通过命令`vim /etc/sysconfig/iptables`，复制上面的已经添加的端口，然后改成自己要开放的端口，笔者这里是3000；
5. 更改完成后需要重启防火墙 `service iptables restart`；
6. 再次使用`service iptables status`，发现出现了3000端口监听，访问3000端口，成功！

## 参考资料

##### [http://blog.csdn.net/lvanboy/article/details/74531116](http://blog.csdn.net/lvanboy/article/details/74531116)

##### [https://jingyan.baidu.com/article/59a015e34e5d71f794886539.html](https://jingyan.baidu.com/article/59a015e34e5d71f794886539.html)

##### [http://www.jianshu.com/p/d1c9d92217d6](http://www.jianshu.com/p/d1c9d92217d6)

##### [https://www.cnblogs.com/alimac/p/5848372.html](https://www.cnblogs.com/alimac/p/5848372.html)

#### 【小Tips】

使用`forever`或者`pm2`使express在后台运行。详情待有空了补充吧~

## 附录

附上3000端口的Nginx配置吧，供对比参考~~

```js
server {
  listen 80;
  listen 443 ssl http2;
  ... 隐藏部分关键信息 ...
  
  include /usr/local/nginx/conf/rewrite/wordpress.conf;

  location ~ / {
         proxy_pass  http://localhost:3000;
         proxy_set_header   Host             $host:80;
         proxy_set_header   X-Real-IP        $remote_addr;
         proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
         proxy_set_header Via    "nginx";

        }
  location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico)$ {
    expires 30d;
    access_log off;
  }
  location ~ .*\.(js|css)?$ {
    expires 7d;
    access_log off;
  }
  location ~ /\.ht {
    deny all;
  }
}

```









