---
title: redis
date: 2020-08-07
---

### ubuntu 18.04下安装

> 安装

```bash
sudo wget http://download.redis.io/releases/redis-5.0.5.tar.gz
tar -zxvf redis-5.0.5.tar.gz
sudo mv ./redis-5.0.5 /usr/local/redis
cd /usr/local/redis/
sudo make  # 生成
sudo make test  # 测试
sudo make install  # 安装，将redis命令安装到/usr/local/bin目录
sudo cp /usr/local/redis/redis.conf /etc/redis/
```

> 配置

```bash
cd /etc/redis/
vi redis.conf
daemonize yes  # 设置守护进程
# 设置日志目录，目录和文件需要先手动创建好
dir /var/lib/redis 
logfile "/var/log/redis/redis-server.log"
```

> 启动服务

```bash
sudo redis-server /etc/redis/redis.conf
```

> 设置开机启动

1. 将redis服务脚本(/usr/local/redis/utils/redis_init_script)复制到 /etc/init.d目录下

   ```bash
   sudo cp /usr/local/redis/utils/redis_init_script /etc/init.d
   ```

2. 将服务脚本改名为redis并修改配置信息，本次只修改了一个  CONF="/etc/redis/redis.conf"

​                                      ![](https://cdn.jsdelivr.net/gh/kcyln/ImageHosting@latest/2020/08/07/3be4ae2bf5dbbe030d2cf2ba83ca6426.png)

3. 给文件执行权限 

   ```bash
   sudo chmod +x /etc/init.d/redis
   ```

4. 加入服务，开机自启

   * 第一次 `chkconfig --add redis` 提示未找到命令

   * 使用第二种方法 `sudo update-rc.d redis defaults` 成功
   * 之后使用命令 `sudo service redis start | stop | restart` 即可

5. 参考链接： https://blog.csdn.net/qq_42403743/article/details/81358676

   ​                    https://jingyan.baidu.com/article/ca41422f3fa2421eae99edd2.html

> 踩坑

* 输入 sudo make test 时报错

  ![](https://cdn.jsdelivr.net/gh/kcyln/ImageHosting@latest/2020/08/07/746bfd9ac6400194a152a83e9d5b87d2.png)
​
  
  **解决方法**： 安装tcl，按照下面安装后问题解决
  
  ```bash
  sudo wget http://downloads.sourceforge.net/tcl/tcl8.6.1-src.tar.gz
  sudo tar xzvf tcl8.6.1-src.tar.gz -C /usr/local/
  cd /usr/local/tcl8.6.1/unix/
  sudo ./configure
  sudo make
  sudo make install
  ```
  PS： 如果之后make test 还报错，可以重新运行几次make test 命令试试

