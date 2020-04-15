<template>
  <v-row align="center" justify="center">
    <v-col class="col-sm-8 col-xs-11 col-md-5">
      <h1>维希度斯黑名单 - 避雷</h1>
      <v-list three-line style="margin-top:50px; margin-bottom: 100px;">
        <v-list-item v-for="(black, idx) in blacklist" :key="idx" two-line>
          <v-list-item-content>
            <v-list-item-title>{{ black.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ black.content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <h1>维希度斯白名单 - 强力团</h1>
      <v-list three-line style="margin-top:50px;">
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
        { title: "渣男团", content: "MC指挥双倍，极其墨迹" },
        {
          title: "不负韶华公会",
          content:
            "MC团，菜的一批，只奶自己公会DPS还不承认，自己人ADD了灭了几波不提扣钱"
        },
        {
          title: "逆行者公会",
          content:
            "BWL指挥垃圾，小红龙灭了3，4次在外人小团队的指挥下才过，最后打了5个小时还有脸收指挥补贴"
        },
        {
          title: "公会鲜血荣耀",
          content:
            "BWL G团，每次罚款都是说说混过去最后都不罚,进本说得好听，第一次100，第二次200，第三次400，LR宁神，坦克拉不好，奶倒T，各种重复犯错最后都没罚"
        },
        {
          title: "公会梦境之地",
          content:
            "BWL G团，自己带的公会班底坦克和治疗都抠脚的不行，一直犯错，一直不提罚款，但是外人犯错就开始提罚款"
        },
        {
          title: "漫步云端",
          content: "菜的抠脚，MC开荒3天打不过老9，至今MC团还是磕磕碰碰"
        },
        {
          title: "玩家ID: 闷头一刀",
          content: "MC老1前故意ADD带boss团灭退队一气呵成"
        }
      ],
      whitelist: [
        { title: "乱劈材", content: "坦克强素质高" },
        {
          title: "公会杀戮",
          content:
            "良心MC团，边打边拍，前面法术能量拍了2050，后面又出了，拍低了的话就给买了第一个的人补差价"
        }
      ]
    };
  }
};
</script>
