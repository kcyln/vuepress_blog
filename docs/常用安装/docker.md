---
title: docker
date: 2020-08-14
---

### ubuntu 18.04下安装

     ```bash
sudo wget -qO- https://get.docker.com | sh  # 自动下载安装docker命令
sudo usermod -aG docker kcyln  # 给与docker权限，如果输入命令后不生效，可以重启系统后再试
     ```

### 基本命令

```bash
docker info  # 查看docker信息
docker pull # 拉取镜像
docker build # 创建镜像
docker run # 运行容器
docker images   # 查看镜像
docker ps  # 查看运行中的容器
docker ps -a  # 查看所有容器
docker stop sdai3nf  # 停止容器
docker rm ef87fse8  cf045930cd83 # 删除停止的容器，可以同时删除多个容器
docker rmi fd8efke  # 删除镜像
docker cp  # 在宿主机和容器之间拷贝文件
docker commit # 保存改动为新的镜像

docker run ubuntu echo hello docker
docker run -p -d 8080:80 nginx
docker cp index.html cf045930cd83://usr/share/nginx/html
docker commit -m "hello" cf045930cd83 hello   # 提交命令，保存容器的更改，会返回一个新的镜像;最后的hello是镜像名
docker exec -it nginx /bin/bash  # 进入容器内部
```

### Dockerfile

```dockerfile
FROM           # 基础镜像
RUN            # 执行命令
ADD            # 添加文件,比COPY更强，可以复制远程文件
COPY           # 拷贝文件
CMD            # 执行命令,程序入口
EXPOSE         # 暴露端口
WORKDIR        # 指定路径 
MAINTAINER     # 维护者
ENV            # 设置环境变量
ENTRYPOINT     # 容器入口,如果没有CMD,从这里启动，如果有,那CMD的内容就是这个的参数
USER           # 指定用户
VOLUME         # 挂载卷


FROM alpine:latest
MAINTAINER xxxx  // 容器作者
CMD echo 'hello docker'

// 运行命令创建镜像
docker build -t hello .
docker run hello  // 运行容器,输出内容

FROM ubuntu
MAINTAINER xxxx
RUN sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y nginx
COPY index.html /var/www/html
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]
EXPOSE 80

// 运行命令创建镜像
docker build -t hello .
docker run -d -p 8080:80 hello 
curl http://localhost:8080 
```

### VOLUME

```bash
docker run -v /usr/share/nginx/html nginx  // 挂载卷
docker inspect nginx // 查看信息， 可以看到挂载卷宿主机的路径

docker run -v $PWD/code:/usr/share/nginx/html nginx  // 挂载卷

docker create -v $PWD/data:/var/mydata --name data_container ubuntu  // 创建一个用来提供数据的容器
docker run --volumes-from data_container ubuntu  // 新的容器从data_container里加载数据
docker run -it --volumes-from data_container ubuntu /bin.bash // 创建后可以直接进入容器内
```

### Registry

```bash
docker search ubuntu
docker pull ubuntu
docker push myname/ubuntu
```

### docker-compose

```bash
安装
curl -L https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m) > /usr/local/bin/docker-compose

chmod a+x /usr/local/bin/docker-compose // 给所有用户授权执行

使用
docker-compose --version  // 查看版本
docker-compose build  // 构建镜像
docker-compose up -d  // 启动容器
docker-compose stop  // 停止容器
docker-compose rm  // 删除容器
docker-compose ps
```

官方文档： https://docs.docker.com/compose/
下载地址： https://github.com/docker/compose/releases