<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="col-lg-3 col-sm-10">
        <v-img src="guild_badge.png"></v-img>
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="col-lg-6 col-sm-11">
        <v-row align="center" justify="center">
          <v-col v-for="view in views" :key="view.path" class="col-6">
            <v-card outlined @click="$router.push({ name: view.name })">
              <v-card-title>
                <v-icon color="primary" style="margin-right:10px;" x-large>
                  {{ view.meta.icon }}
                </v-icon>
                <span class="primary--text">{{ view.meta.title }}</span>
              </v-card-title>
              <v-card-text>
                {{ view.meta.description }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { VContainer, VCard, VCardTitle, VIcon, VImg } from "vuetify/lib";
export default {
  name: "Home",
  components: { VContainer, VCard, VCardTitle, VIcon, VImg },
  computed: {
    views() {
      return this.$router.options.routes.filter(r => !r.meta.isMain);
    }
  }
};
</script>
