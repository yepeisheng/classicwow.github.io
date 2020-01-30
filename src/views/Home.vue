<template>
  <v-container style="height: 100%;">
    <v-row align="center" justify="center" style="height: 100%;">
      <v-col>
        <v-card outlined @click="goto({name: 'gear'})" height="500">
          <v-card-title>
            <v-icon x-large>mdi-home</v-icon>
            配装比较
          </v-card-title>
          <v-card-text>
            比较不同配装之间的面板差距
          </v-card-text>
        </v-card>
      </v-col>

      <v-col>
        <v-card outlined @click="goto({name: 'epgp'})" height="500">
          <v-card-title>
            EPGP模拟
          </v-card-title>
          <v-card-text>
            模拟EPGP
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { VContainer, VCard, VCardTitle, VIcon} from "vuetify/lib";
  export default {
    name: "Home",
    components: {VContainer, VCard, VCardTitle, VIcon},
    methods: {
      goto(target) {
        this.$router.push(target)
      }
    }
  }
</script>
