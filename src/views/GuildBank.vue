<template>
  <v-row align="center" justify="center">
    <v-col class="col-lg-6 col-sm-11">
      <div v-for="r in records" :key="r.date">
        <h1>{{ r.date }}</h1>
        <v-img :src="r.img"></v-img>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { VImg } from "vuetify/lib";
export default {
  name: "GuildBank",
  components: { VImg },
  data() {
    return {
      records: [
        { date: "2020/03/29", img: "guild-bank/2020-03-29.png" },
        { date: "2020/03/22", img: "guild-bank/2020-03-22.jpg" },
        { date: "2020/03/16", img: "guild-bank/2020-03-16.jpg" },
        { date: "2020/03/09", img: "guild-bank/2020-03-09.png" }
      ]
    };
  }
};
</script>
