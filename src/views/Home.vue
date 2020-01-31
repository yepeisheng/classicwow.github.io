<template>
  <v-container fluid style="height: 100%;">
    <v-row align="center" justify="center" style="height: 100%;">
      <v-col v-for="view in views" :key="view.path" class="col-lg-3 col-md-5">
        <v-card outlined @click="$router.push({ name: view.name })">
          <v-card-title>
            <v-icon style="margin-right:10px;" x-large>{{
              view.meta.icon
            }}</v-icon>
            {{ view.meta.title }}
          </v-card-title>
          <v-card-text>
            {{ view.meta.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { VContainer, VCard, VCardTitle, VIcon } from "vuetify/lib";
export default {
  name: "Home",
  components: { VContainer, VCard, VCardTitle, VIcon },
  computed: {
    views() {
      return this.$router.options.routes.filter(r => !r.meta.isMain);
    }
  }
};
</script>
