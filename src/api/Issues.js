import HttpClient from '../Utils/HttpClient';
import userConfig from "../config/userConfig";

// 获取所有issues(文章)列表
function getIssuesList(whereData) {
    whereData.creator = userConfig.username;
    whereData.state = 'open';
    return HttpClient.doHttp('/repos/' + userConfig.username + '/' + userConfig.repo + '/issues', 'get', whereData);
}

// 获取文章详细内容
function getIssues(id = 0) {
    return HttpClient.doHttp('/repos/' + userConfig.username + '/' + userConfig.repo + '/issues/' + id, 'get');
}

// 获取文章评论
function getIssuesComments(id = 0) {
    return HttpClient.doHttp('/repos/' + userConfig.username + '/' + userConfig.repo + '/issues/' + id +
        '/comments', 'get');
}

// 根据标签获取列表
function fromLabelGetIssues(label) {
    return HttpClient.doHttp('/repos/' + userConfig.username + '/' + userConfig.repo + '/issues', 'get', {
        q: 'is:issue author:@me label:' + label
    });
}

// 搜索文章
function searchIssues(whereData) {
    return HttpClient.doHttp('/search/issues', 'get', {
        q: 'user:' + userConfig.username + ' repo:' + userConfig.repo + ' in:title in:body state:open ' + whereData
    });
}

export default {
    getIssuesList,
    getIssues,
    getIssuesComments,
    fromLabelGetIssues,
    searchIssues
};
