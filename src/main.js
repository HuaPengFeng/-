import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入axios
import axios from "axios";
Vue.prototype.$axios = axios;
//引入jsonp
import jsonp from "vue-jsonp";
Vue.use(jsonp)
    //引入mint-ui组件
import Mint from 'mint-ui';
Vue.use(Mint);

import { Header, Search, Navbar, Tabbar, TabItem } from 'mint-ui';

Vue.use(Header).use(Tabbar).use(TabItem).use(Search).use(Navbar);
//引入样式
import "./assets/css/style.css";
import "./assets/icon/iconfont.css";
import "./assets/mui/css/mui.css";
//引入swiper样式
import "swiper/dist/css/swiper.css";

//vant 样式
import 'vant/lib/index.css';
// import { TreeSelect, GoodsAction, GoodsActionIcon, GoodsActionButton, Icon, Stepper, SubmitBar, Toast, Swipe, SwipeItem, Card, AddressEdit, ContactCard, ContactList, ContactEdit } from 'vant';
// Vue.use(TreeSelect).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Icon).use(Stepper).use(SubmitBar).use(Toast).use(Swipe).use(SwipeItem).use(Card).use(AddressEdit).use(ContactCard).use(ContactList).use(ContactEdit);
import Vant from 'vant';
Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");