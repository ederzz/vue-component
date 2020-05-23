import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import notification from '@/components/notification'
import scrollTable from '@/components/scrollTable'
import numChart from '@/components/numChart'

Vue.config.productionTip = false;
Vue.use(notification)
Vue.use(scrollTable)
Vue.use(numChart)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
