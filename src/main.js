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
    { path: "/", name: "home", component: Home },
    { path: "/gear-set-compare", name: "gear", component: GearSetCompare },
    { path: "/epgp-simulate", name: "epgp", component: EPGPSimulate }
  ]
});

new Vue({
  router,
  vuetify: new Vuetify({
    "theme": {
      "dark": true
    }
  }),
  render: h => h(App)
}).$mount("#app");
