import HttpClient from "../Utils/HttpClient";

// 获取所有issues(文章)列表
function getIssuesList() {
    return HttpClient.doHttp("/issues", "get");
}

// 获取文章详细内容
function getIssues(id = 0) {
    return HttpClient.doHttp("/issues/" + id, "get");
}

// 获取文章评论
function getIssuesComments(id = 0) {
    return HttpClient.doHttp("/issues/" + id + "/comments", "get");
}

export default {
    getIssuesList,
    getIssues,
    getIssuesComments
}