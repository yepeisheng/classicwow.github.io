<template>
  <v-app>
    <v-content>
      <v-app-bar>
        <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <template v-for="route in routes">
          <v-list-item
            v-if="route.meta.isMain"
            :key="route.path"
            link
            @click="$router.push({ name: route.name })"
          >
            <v-list-item-icon>
              <v-icon color="primary">{{ route.meta.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <span class="primary--text">
                  {{ route.meta.title }}
                </span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-divider></v-divider>
        <v-list>
          <template v-for="route in routes">
            <v-list-item
              v-if="!route.meta.isMain"
              :key="route.path"
              link
              @click="$router.push({ name: route.name })"
            >
              <v-list-item-icon>
                <v-icon dark>{{ route.meta.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ route.meta.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import {
  VContent,
  VAppBar,
  VToolbarTitle,
  VNavigationDrawer,
  VList,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VListItemIcon
} from "vuetify/lib";
export default {
  name: "App",
  components: {
    VContent,
    VAppBar,
    VToolbarTitle,
    VNavigationDrawer,
    VListItem
  },
  data: () => {
    return {
      title: "To God Be The Glory",
      drawer: false,
      views: [
        { title: "配装比较", routerTarget: { name: "gear" } },
        { title: "配装比较", routerTarget: { name: "gear" } }
      ]
    };
  },
  computed: {
    routes() {
      console.log(this.$router);
      return this.$router.options.routes;
    }
  }
};
</script>

<style lang="scss"></style>
