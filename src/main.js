import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import notification from '@/components/notification'
import scrollTable from '@/components/scrollTable'
import numChart from '@/components/numChart'
import BmapFence from '@/components/bmapFence'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false;
Vue.use(notification)
Vue.use(scrollTable)
Vue.use(numChart)
Vue.use(BmapFence)
Vue.use(BaiduMap, {
    ak: '4CDam0ZzadenEkVMdgUxiVnZqs0fPL0w'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
