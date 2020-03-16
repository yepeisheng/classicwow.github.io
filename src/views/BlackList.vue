<template>
  <v-row align="center" justify="center">
    <v-col class="col-sm-8 col-xs-11 col-md-5">
      <h1>维希度斯黑名单 - 避雷</h1>
      <v-list style="margin-top:50px; margin-bottom: 100px;">
        <v-list-item v-for="(black, idx) in blacklist" :key="idx" two-line>
          <v-list-item-content>
            <v-list-item-title>{{ black.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ black.content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <h1>维希度斯白名单 - 强力团</h1>
      <v-list style="margin-top:50px;">
        <v-list-item v-for="(white, idx) in whitelist" :key="idx" two-line>
          <v-list-item-content>
            <v-list-item-title>{{ white.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ white.content }}</v-list-item-subtitle>
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
          title: "太阳牌G团（公会Floating Cloud)",
          content: "毛团"
        },
        {
          title: "教父公会",
          content: "BWL打不完"
        },
        { title: "渣男团", content: "MC指挥双倍，极其墨迹" }
      ],
      whitelist: [{ title: "乱劈材", content: "坦克强素质高" }]
    };
  }
};
</script>
