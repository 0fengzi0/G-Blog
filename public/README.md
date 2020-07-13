# 基于github的个人博客  ([演示地址](https://blog.5ixf.cc))
本项目由服务器自动构建，源码以及功能请 [点击这里查看](https://github.com/0fengzi0/G-Blog)
### 使用教程
直接Fork [编译完成的](https://github.com/0fengzi0/Blog) 并修改以下配置即可使用

修改配置文件```/config.js```
```js
window.$config = {
	// 百度统计
	"baidu_hm": "",
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
	// 注意!!!!github会自动删除泄露的token,此方法仅限部署至其他地方或加密传输!!!
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
修改绑定的域名```/CNAME```
```text
blog.5ixf.cc
```