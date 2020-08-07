---
title: mysql
date: 2020-08-07
---

### ubuntu 18.04 下安装

> 查看系统是否安装mysql

```bash
sudo netstat -tap | grep mysql
```

> 安装

```bash
sudo apt-get install mysql-server mysql-client
```

> 配置

* 登录mysql

  * 开始安装的不知道mysql的登录密码，可以使用下列命令查看，然后登录

    ```bash
    sudo cat /etc/mysql/debian.cnf  # 使用client下的user和password登录
    ```

    ![](https://cdn.jsdelivr.net/gh/kcyln/ImageHosting@latest/2020/08/07/9e27653a820905113db76b4d68733f41.png)

  * 或者也可以直接输入 `sudo mysql` 登录

* 修改密码

  ```mysql
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new-password';
  ```

* 添加新用户

  ```mysql
  GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'mypassword' ;
  FLUSH PRIVILEGES;
  ```

> 踩坑

* 关于远程连接时遇到的问题，设置了远程连接账号，开放了3306端口， 本地Navicat无法连接
  * 检查发现需要修改配置文件 将 bind-address 127.0.0.1 注释掉



