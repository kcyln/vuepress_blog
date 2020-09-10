---
title: Git
date: 2020-09-10
---

### ubuntu下安装

```bash
sudo apt-get install git 
```

### 配置

> 基本命令

* `ssh-keygen -t rsa`

* 将id_rsa.pub的内容复制到GitHub
* 验证是否成功     `ssh -T git@github.com`

> 全局设置

```bash
git config --global user.name "yourusername"
git config --global user.email "youremail"
```

> 一台电脑同时连接github和gitee

```bash
cd ~/.ssh
ssh-keygen -t rsa -C "xxxx@email.com" -f "github_id_rsa"
ssh-keygen -t rsa -C "xxxx@email.com" -f "gitee_id_rsa"
# 将生成的公钥文件对应复制到github和gitee中，为了解决冲突，需要创建config文件
touch ~/.ssh/config
# 文件内输入下列内容，完成后保存即可。

# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa

# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
```

PS： 多台电脑使用同一的ssh文件，可以直接将.ssh文件夹复制到其他电脑，然后覆盖对应的目录。