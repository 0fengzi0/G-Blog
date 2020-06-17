import HttpClient from "../Utils/HttpClient";

// 获取分类列表
function getPageLabels() {
    return HttpClient.doHttp("/labels", "get");
}

export default {
    getPageLabels
}