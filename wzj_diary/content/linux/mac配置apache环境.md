#### mac配置apache和php环境 填坑指南

> 众所周知,mac自带了apache的开发环境，但是今天在搭建apache + php + mysql
> 开发环境的时候遇到了一些问题，现把问题简单地记录下。

#### 1. 更改开发路径为用户路径。
mac下默认的apache文件路径是/Library/WebServer/Documents/.

但是在这个文件夹里面我们操作是需要超级用户的权限的，十分不方便。

将其指定为用户文件路径的方法如下:

1. 在username的home文件夹下新建Sites文件夹
2. 在Sites文件夹中放入代码文件
3. 在/etc/apache2/的http.conf文件中，开启完php支持后, 将下列内容修改为
```
DocumentRoot "/Users/{{username}}/Sites"
<Directory "/Users/{{username}}/Sites">
```
这时候访问http://localhost/file/index.php 应该就可以了



#### 2. 开发过程问题

1. 给项目文件夹赋给权限777

   执行以下命令

   ```sudo chmod 777 /Users/returnGirl/Sites```

   ​


2. PDO exception SQLSTATE[HY000][2002] No such file or directory

   把数据库连接的localhost改为127.0.0.1
