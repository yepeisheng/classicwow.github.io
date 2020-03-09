import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import App from "./App.vue";
import Home from "./views/Home";
import GearSetCompare from "./views/GearSetCompare";
import EPGPSimulate from "./views/EPGPSimulate";
import BlackList from "./views/BlackList";
import GuildBank from "./views/GuildBank";
import "vuetify/dist/vuetify.min.css";

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
      path: "/epgp",
      name: "epgp",
      component: EPGPSimulate,
      meta: {
        title: "EPGP",
        icon: "mdi-alpha-e-box-outline",
        description: "公会EPGP记录"
      }
    },
    {
      path: "/guild-bank",
      name: "guild-bank",
      component: GuildBank,
      meta: {
        title: "公会仓库",
        icon: "mdi-warehouse",
        description: "每周公会公示"
      }
    },
    {
      path: "/black-list",
      name: "black-list",
      component: BlackList,
      meta: {
        title: "野团黑名单",
        icon: "mdi-playlist-remove",
        description: "根据会员提供的黑白名单"
      }
    },
    {
      path: "/gear-set-compare",
      name: "gear",
      component: GearSetCompare,
      meta: {
        title: "配装比较",
        icon: "mdi-chart-bar",
        description: "比较不同配装之间的面板差距, coming soon..."
      }
    }
  ]
});

new Vue({
  router,
  vuetify: new Vuetify({
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#DA8903"
        }
      }
    }
  }),
  render: h => h(App)
}).$mount("#app");
