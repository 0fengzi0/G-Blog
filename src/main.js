import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './plugins/vuescroll.js';
import './plugins/vuecookies.js';
import vuetify from './plugins/vuetify';
import HttpClient from './Utils/HttpClient';
import 'github-markdown-css';
import userConfig from "./config/userConfig";

Vue.prototype.$Config = userConfig;
Vue.prototype.$HttpClient = HttpClient;
Vue.config.productionTip = false;

document.title = userConfig.nickname + '的博客';

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app');
