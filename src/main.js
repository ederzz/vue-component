import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import notification from '@/components/notification'

Vue.config.productionTip = false;
Vue.use(notification)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
