# 基于 react+webrtc+websocket 的仿 bilibili 直播系统

1. react 前端页面
2. webrtc 直播架构
3. socket.io 聊天室

# 本地启动

```bash
yarn start
```

# 环境搭建

```bash
npm -v
8.1.0
node -v
v16.13.0
yarn -v
1.22.17

yarn add antd

yarn add @craco/craco

yarn add craco-less
```

## 在云服务上进行拉取代码

本地仓库的代码还未被更新，此时：

1. 更新远程仓库的代码为最新的
   git fetch --all

2. 让本地代码与 origin / master 完全相同
   git reset --hard origin/master

3. git pull

git fetch --all && git reset --hard origin/master && git pull
