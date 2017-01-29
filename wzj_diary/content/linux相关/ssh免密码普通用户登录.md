## 用ssh免密码登录服务器

#### Root用户
> 1.客户机生成私钥公钥

<br>
> 2.用scp命令将**客户机公钥**拷贝至服务器 或者 直接复制到.ssh/authorized_keys文件下（没有则新建）

```
scp ~/.ssh/id_rsa.pub root@yourhost:.ssh/copy_key

cat copy_key >> authorized_keys
```
<br>
>3.拷贝完成后把authorized_keys的权限修改为600则可。

#### 普通用户
普通用户在完成上述步骤后，（即对应root下的/home/username/目录）
需要一些权限的配置。

>1.修改用户主目录的权限, /home/username目录权限为755

<br>
>2..ssh的权限设置为700， authorized_keys的权限设置为600就够了，属主要是登陆用户自己（root是不行的），组无所谓

完成以上操作后，就能免密码登录了。
