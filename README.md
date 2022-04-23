# node_mysql
使用nodejs与mysql搭建的简单后端接口api项目,供sandTea微信小程序及后台管理系统使用

# 开始
## 安装依赖
```bash
yarn
```

## 启动项目
```bash
yarn start
```

## 注意
### 接口报错

* host指向有错误
```js
{
    errno: -3008,
    code: 'ENOTFOUND',
    syscall: 'getaddrinfo',
    hostname: 'localhost',
    fatal: true
}
// 解决办法
// 将127.0.0.1 localhost更新到host里，可选择使用switchhost软件实现
```

