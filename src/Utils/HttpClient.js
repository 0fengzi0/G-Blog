import axios from 'axios';
import qs from 'qs';
import Bus from './Bus';

import router from '../router';

// 统一异常处理部分
function errorHandle (res) {
    switch (res.code) {
        case 404:
            res.msg = '404文件不存在';
            router.push('/');
            break;
    }
    res.msg == null ? res.msg = '网络请求错误' : '';
    // 显示错误提示
    Bus.$emit('showSnackBar', {
        color: 'error',
        msg: res.msg
    });
}

// 创建axios实例
const instance = axios.create({
    // 超时 15秒
    timeout: 1000 * 15,
    // 请求头
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 添加github token
        'Authorization': process.env.NODE_ENV === 'production' ? (window.$Config.token == '' ? '' : 'token ' +
                window.$Config.token) : (process.env.VUE_APP_GITTOKEN == null ? '' : 'token ' + process.env.VUE_APP_GITTOKEN)
    }
});

// 请求拦截器
instance.interceptors.request.use(res => {
    if (res.method === 'post' || res.method === 'POST') {
        res.data.time = new Date().getTime();
        res.data = qs.stringify(res.data);
        return res;
    } else if (res.method === 'get' || res.method === 'GET') {
        res.params.time = new Date().getTime();
        return res;
    }
});

// 响应拦截器
instance.interceptors.response.use(res => {
    return Promise.resolve(res.data);
}, error => {
    let data = {
        code: error.response.status,
        msg: error.message,
        data: error
    };
    errorHandle(data);
    return Promise.reject(data);
});

// 设置服务器地址,开发环境用
let serviceHost = (process.env.NODE_ENV === 'production' || process.env.VUE_APP_HOST == null) ?
        'https://api.github.com' : process.env.VUE_APP_HOST;

function doHttp (url = '', type = 'get', data = {}) {
    if (type === 'get' || type === 'GET') {
        return instance.get(serviceHost + url, {
            params: data
        });
    } else if (type === 'post' || type === 'POST') {
        return instance.post(serviceHost + url,
                data
        );
    }
}

export default {
    doHttp,
    serviceHost
};
