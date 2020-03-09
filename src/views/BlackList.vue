<template>
  <v-row align="center" justify="center">
    <v-col class="col-sm-8 col-xs-11 col-md-5">
      <h1>维希度斯野团黑名单</h1>
      <v-list style="margin-top:50px;">
        <v-list-item v-for="(black, idx) in blacklist" :key="idx" two-line>
          <v-list-item-content>
            <v-list-item-title>{{ black.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ black.content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>
<script>
import {
  VList,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle
} from "vuetify/lib";
export default {
  name: "BlackList",
  components: {
    VList,
    VListItem,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle
  },
  data() {
    return {
      blacklist: [
        { title: "公会闲云野鹤", content: "抽成10%-20%补贴" },
        {
          title: "韵华",
          content: "3团4团为亲友黑心DKP团，4500血战士进金团就为补贴"
        },
        { title: "赌神号", content: "赌博G团，账目不清" }
      ]
    };
  }
};
</script>
