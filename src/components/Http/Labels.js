import HttpClient from "../Utils/HttpClient";

// 获取分类列表
function getPageLabels() {
    return HttpClient.doHttp('/repos/' + window.$config.username + '/' + window.$config.repo + '/labels', "get");
}

export default {
    getPageLabels
}