<template>
  <v-container>
    <v-row>
      <v-content>
        <v-select
          v-model="record"
          label="日期"
          :items="records"
          item-text="timestamp"
          item-value="roster"
        >
        </v-select>
        <epgp-table :members="record" :extra-week="extraWeek"></epgp-table>
      </v-content>
    </v-row>
  </v-container>
</template>
<script>
import { VContainer, VContent } from "vuetify/lib";
import EpgpTable from "@/views/EPGPTable";
import members from "@/database/members";

export default {
  name: "EPGPSimulate",
  components: { VContainer, VContent, EpgpTable },
  data() {
    const records = members
      .sort((m1, m2) => m2.timestamp - m1.timestamp)
      .map(m => ({
        roster: m.roster
          .filter(r => r.length === 6)
          .map(r => ({
            name: r[0],
            class: r[1],
            rank: r[2],
            ep: r[3],
            gp: r[4],
            pr: r[5]
          }))
          .filter(r => r.rank !== "二处" && r.rank !== "黑骑" && r.rank !== "天牢" && r.ep > 100),
        timestamp: new Date(m.timestamp * 1000).toLocaleDateString()
      }));
    return {
      dial: true,
      extraWeek: 0,
      records,
      record: records[0].roster
    };
  }
};
</script>
