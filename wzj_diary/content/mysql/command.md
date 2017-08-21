## 数据库常用命令

```mysql
show databases;
# 创建数据库
create database findme; 

# 创建用户
create user 'findme'@'%' identified by 'password';

# 把findme用户的权限设置到findme数据库
grant all privileges on find_me.* to findme; 

# 刷新
flush privileges;
```

