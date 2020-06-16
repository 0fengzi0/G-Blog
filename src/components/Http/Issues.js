import HttpClient from "../Utils/HttpClient";

function getIssuesList() {
    return HttpClient.doHttp("/issues", "get");
}

export default {
    getIssuesList
}