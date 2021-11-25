import HttpClient from '../Utils/HttpClient';
import userConfig from "../config/userConfig";

// 获取分类列表
function getPageLabels() {
    return HttpClient.doHttp('/repos/' + userConfig.username + '/' + userConfig.repo + '/labels', 'get');
}

export default {
    getPageLabels
};
