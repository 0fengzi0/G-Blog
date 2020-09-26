import Vue from 'vue';
import vuescroll from 'vuescroll';

const opts = {
    name: 'm-scroll',
    ops: {
        scrollPanel: {
            scrollingX: false
        },
        bar: {
            hoverStyle: true,
            //是否只有滚动的时候才显示滚动条
            onlyShowBarOnScroll: false,
            //颜色
            background: new Date().getHours() >= 19 || new Date().getHours() < 7 ? 'white' : 'black',
        }
    }
}

Vue.use(vuescroll, opts);
