import HttpClient from "../Utils/HttpClient";
import config from "../../../public/config.json";

// 获取分类列表
function getPageLabels() {
    return HttpClient.doHttp('/repos/' + config.username + '/' + config.repo + '/labels', "get");
}

export default {
    getPageLabels
}