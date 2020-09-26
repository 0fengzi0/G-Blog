# 基于github的个人博客 ([演示地址](https://blog.5ixf.cc))
- 源码以及功能请 [点击这里查看](https://github.com/0fengzi0/G-Blog)
- 编译完成的请 [点击这里查看](https://github.com/0fengzi0/Blog)

### 使用教程
- 直接Fork [编译完成的](https://github.com/0fengzi0/Blog) 并修改配置即可使用

### 如果自行编译
1. 克隆本仓库
```
git clone https://github.com/0fengzi0/G-Blog
```
2. 安装依赖
```
yarn
```
3. 修改配置文件```/public/Config.js```
```js
window.$Config = {
    "description": "哈喽,这是我这个人博客,里面有着我的一些学习经验,欢迎来玩呀",
    // 页面背景图
    "pageBackGroundImage": "https://s2.ax1x.com/2019/11/16/Mwyd0S.jpg",
    // 文章头图api
    // "pageCardImgServers": "https://api.9jojo.cn/acgpic",
    "pageCardImgServers": "https://api.toomey.top/fj/rand.php",
    // github用户名
    "username": "0fengzi0",
    // 自定义的昵称(显示用)
    "nickname": "i小风",
    // 用户头像
    "userHeadImg": "https://s2.ax1x.com/2019/11/16/Mwyrfs.jpg",
    // 自己的Email(首页显示用)
    "email": "5ixf@5ixf.vip",
    // 要抓取issues的仓库
    "repo": "blog",
    // 备案号
    "recordCode": "豫ICP备20000407号-1",
    // github的开发者token(可不填写,不填写每小时最高60次调用)
    // 注意!!!!github会自动删除泄露的token,此方法仅限部署至其他地方或加密传输!!!
    "token": "",
    // 外链列表
    "outerLinkList": [
        {
            "name": "其他项目",
            "icon": "mdi-file",
            "items": [
                {
                    "name": "VOCALTTS-V家语音合成",
                    "url": "https://tts.5ixf.vip"
                },
                {
                    "name": "PyOnline-在线Python学习",
                    "url": "https://py.5ixf.vip"
                },
                {
                    "name": "GBlog-个人博客",
                    "url": "https://github.com/0fengzi0/G-Blog"
                }
            ]
        },
        {
            "name": "个人主页",
            "icon": "mdi-airballoon",
            "items": [
                {
                    "name": "i小风的博客",
                    "url": "https://blog.5ixf.cc"
                },
                {
                    "name": "B站",
                    "url": "https://space.bilibili.com/13938564"
                }
            ]
        }
    ],
    // 显示到菜单中的issues文章列表
    "issuesNumberList": [{
        "name": "友链",
        "icon": "mdi-link-variant",
        "number": 2
    }]
}
```
4. 修改绑定的域名```/public/CNAME```
```text
blog.5ixf.cc
```
5. 编译并输出至```dist```目录
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
- [x] ~~自定义meta标签~~(请直接修改index.html文件)
- [x] 文章版权信息以及issues地址
- [ ] 长列表

### 考虑中
- [ ] 评论区
- [ ] 评论功能
- [ ] 后台直接发布博客功能
- [ ] 新的后台。目前项目无后端，由前端直接请求github api，当请求超过每小时60次后需要使用github token解除限制，因为github token泄露可能会有安全性问题，而且暂时我没有更好的解决方法

--------------
## 鸣谢

特别感谢 [JetBrains](https://www.jetbrains.com/?from=VOCALTTS) 为开源项目提供免费的 [WebStrom](https://www.jetbrains.com/?from=VOCALTTS) 等 IDE 的授权  
[<img src="https://s1.ax1x.com/2020/08/13/az4yMF.png" width="200"/>](https://www.jetbrains.com/?from=VOCALTTS)
