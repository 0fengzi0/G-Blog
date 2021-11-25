# 基于github的个人博客 ([演示地址](https://blog.5ixf.cc))

- 源码以及功能请 [点击这里查看](https://github.com/0fengzi0/G-Blog)
- 编译完成的请 [点击这里查看](https://github.com/0fengzi0/Blog)

### 使用教程

**1.克隆本仓库**

``` bash
git clone https://github.com/0fengzi0/G-Blog
```

**2.安装依赖**

``` bash
yarn
```

**3.修改配置文件**(主要配置文件)

```src/config/userConfig.js```

**4.修改GitHub Action自动发布的相关配置并添加GITHUB TOKEN**(可选)

```.github/workflows/node.js.yml```

**5.修改绑定的域名**(可选,GitHub Pages自定义域名解析用)

```/public/CNAME```

**6.修改PWA应用相关配置**(可选)

```/public/manifest.json```

**7.获取你的pwa应用ico,并替换/public/img/\*.png**

[点击打开](https://www.pwabuilder.com/imageGenerator)

**9.编译并输出至```dist```目录**

```
yarn run build
```

### 计划功能

- [x] 移动端适配
- [x] 文章拉取
- [x] 文章查看
- [x] 标签分类拉取
- [x] 标签分类筛选文章
- [x] 搜索文章
- [x] 19:00-7:00自动夜间模式
- [x] api token提高每小时调用次数
- [x] makedown支持
- [x] 页面细节优化(日期,makedown样式)
- [x] git自动化部署(auto_git.sh文件)
- [x] 请求失败相关提示
- [x] 自定义菜单
- [x] 文章版权信息以及issues地址
- [ ] 无限列表加载
- [x] pwa应用

### 考虑中

- [ ] 评论区
- [ ] 评论功能
- [ ] 后台直接发布博客功能(目前使用GitHub issues发布)
- [ ] 新的后台。目前项目无后端，由前端直接请求github api，当请求超过每小时60次后需要使用github token解除限制，因为github token泄露可能会有安全性问题，而且暂时我没有更好的解决方法

--------------

## 鸣谢

特别感谢 [JetBrains](https://www.jetbrains.com/?from=VOCALTTS)
为开源项目提供免费的 [WebStrom](https://www.jetbrains.com/?from=VOCALTTS) 等 IDE 的授权  
[<img src="https://s1.ax1x.com/2020/08/13/az4yMF.png" width="200"/>](https://www.jetbrains.com/?from=VOCALTTS)
