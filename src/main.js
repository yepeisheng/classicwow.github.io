import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import App from "./App.vue";
import Home from "./views/Home";
import GearSetCompare from "./views/GearSetCompare";
import EPGPSimulate from "./views/EPGPSimulate";
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        isMain: true,
        title: "Glory",
        icon: "mdi-home"
      }
    },
    {
      path: "/gear-set-compare",
      name: "gear",
      component: GearSetCompare,
      meta: {
        title: "配装比较",
        icon: "mdi-chart-bar",
        description: "比较不同配装之间的面板差距"
      }
    },
    {
      path: "/epgp-simulate",
      name: "epgp",
      component: EPGPSimulate,
      meta: {
        title: "EPGP模拟",
        icon: "mdi-alpha-e-box-outline",
        description: "模拟在不同的拾取策略下的EPGP的变化"
      }
    }
  ]
});

new Vue({
  router,
  vuetify: new Vuetify({
    theme: {
      dark: true
    }
  }),
  render: h => h(App)
}).$mount("#app");
