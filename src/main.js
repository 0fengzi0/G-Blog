import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import HttpClient from "./components/Utils/HttpClient"
import Config from "../static/Config.json"
import vuescroll from 'vuescroll';

Vue.prototype.$HttpClient = HttpClient;
Vue.prototype.$Config = Config
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
            background: 'white',   //颜色
        }
    }
})
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
    vuetify: new Vuetify({
        theme: {
            // dark: true
        }
    })
}).$mount('#app');
