import HttpClient from "../Utils/HttpClient";

function getPageLabels() {
    HttpClient.doHttp("/labels", "get").then(res => {
        console.log(res)
    })
}

export default {
    getPageLabels
}