import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import HttpClient from "./components/Utils/HttpClient"
import vuescroll from 'vuescroll';

Vue.prototype.$Config = window.$config;
Vue.prototype.$HttpClient = HttpClient;
Vue.use(Vuetify)
Vue.use(VueCookies)
Vue.use(vuescroll, {
    name: "MScroll",
    ops: {
        scrollPanel: {
            scrollingX: false
        },
        bar: {
            hoverStyle: true,
            onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
            background: new Date().getHours() >= 19 || new Date().getHours() < 7 ? 'white' : 'black',   //颜色
        }
    }
})
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
    vuetify: new Vuetify({
        theme: {
            dark: new Date().getHours() >= 19 || new Date().getHours() < 7
        }
    })
}).$mount('#app');
