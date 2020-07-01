# 基于github的个人博客 ([演示地址](https://blog.5ixf.cc))
### 使用教程
直接Fork [编译完成的](https://github.com/0fengzi0/0fengzi0.github.io) 并修改配置即可使用

修改配置文件```/public/Config.js```
```js
window.$config = {
    // 页面背景图
    "pageBackGroundImage": "",
    // 文章头图api
    "pageCardImgServers": "https://api.9jojo.cn/acgpic",
    // github用户名
    "username": "0fengzi0",
    // 自定义的昵称(显示用)
    "nickname": "",
    // 自己的Email(首页显示用)
    "email": "1209711408@QQ.COM",
    // 要抓取issues的仓库
    "repo": "",
    // 备案号
    "recordCode": "",
    // github的开发者token(可不填写,不填写每小时最高60次调用)
    "token": "",
    // 自定义菜单
    "outerLinkList": [
        {
            "name": "其他项目",
            "icon": "mdi-file",
            "items": [
                {
                    "name": "百度",
                    "url": "https://baidu.com"
                }
            ]
        },
    ],
    // 显示到菜单中的issues文章number列表(可用作友联)
    "issuesNumberList": [
        {
            "name": "友链",
            "icon": "mdi-link-variant",
            "number": 2
        }
    ]
}
```
修改绑定的域名```/public/CNAME```
```text
blog.5ixf.cc
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
- [ ] 页面细节优化(日期,makedown样式) 
- [x] git自动化部署(auto_git.sh文件)
- [ ] 请求失败相关提示
- [x] 自定义菜单
- [ ] ~~自定义meta标签~~(直接修改index.html文件)

### 考虑中
- [ ] 评论区
- [ ] 评论功能
- [ ] 后台直接发布博客功能