<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { VContent } from "vuetify/lib";
export default {
  name: "App",
  components: {VContent}
};
</script>

<style lang="scss">
</style>
