import axios from "axios"
import qs from 'qs';
import Bus from "./Bus";

import config from '../../../public/config.json';
import router from "../../router";

// 统一异常处理部分
function errorHandle(res) {
    switch ( res.code ) {
        case 404:
            res.msg = "404文件不存在"
            // router.push("/");
            break;
    }
    res.msg == null ? res.msg = "网络请求错误" : '';
    // vant的toast显示错误提示
    // Bus.$toast.fail(res.msg);
}

// 创建axios实例
const instance = axios.create({
    // 超时 15秒
    timeout: 1000 * 15,
    // 请求头
    headers: {
        'Content-Type': "application/x-www-form-urlencoded"
    }
});

// 请求拦截器
instance.interceptors.request.use(res => {
    if ( res.method === "post" || res.method === "POST" ) {
        res.data.time = new Date().getTime();
        res.data = qs.stringify(res.data);
        return res;
    } else if ( res.method === "get" || res.method === "GET" ) {
        res.params.time = new Date().getTime();
        return res;
    }
});

// 响应拦截器
instance.interceptors.response.use(res => {
    return Promise.resolve(res.data);
}, error => {
    // vant清理toast
    // Bus.$toast.clear();
    let data = {
        code: error.response.status,
        msg: error.message,
        data: error
    };
    errorHandle(data);
    return Promise.reject(data);
});

// 设置服务器地址,开发环境用
let serviceHost = (process.env.NODE_ENV === 'production' || process.env.VUE_APP_HOST == null) ? 'https://api.github.com/repos/' + config.username + '/' + config.repo : process.env.VUE_APP_HOST;


function doHttp(url = "", type = "get", data = {}) {
    // vant显示加载toast
    // Bus.$toast.loading({
    //     message: '加载中...',
    //     forbidClick: true,
    //     duration: 0
    // });
    if ( type === "get" || type === "GET" ) {
        return instance.get(serviceHost + url, {
            params: data
        })
    } else if ( type === "post" || type === "POST" ) {
        return instance.post(serviceHost + url,
            data
        )
    }
}

export default {
    doHttp,
    serviceHost
}

