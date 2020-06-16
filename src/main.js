import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import vuetify from './plugins/vuetify'
import HttpClient from "./components/Utils/HttpClient"
import Config from "../static/Config.json"

Vue.prototype.$HttpClient = HttpClient;
Vue.prototype.$Config = Config
Vue.use(VueCookies)
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
    vuetify
}).$mount('#app');
