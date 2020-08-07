---
title: MongoDB
date: 2020-08-07
---

:::tip

建议查看官方文档： https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/index.html

:::

### ubuntu 18.04下安装

1. 导入MongoDB的包公钥

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
```

2. 创建源列表文件

```bash
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
```

```bash
sudo apt-get update
sudo apt-get install -y mongodb-org
```

