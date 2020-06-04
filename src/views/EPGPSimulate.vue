<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <v-select
          v-model="record"
          label="日期"
          :items="records"
          item-text="timestamp"
          item-value="roster"
        >
        </v-select>
      </v-col>
      <v-col cols="12" sm="7">
        <v-select
          v-model="classFilter"
          multiple
          label="职业过滤"
          :items="classNames"
        >
        </v-select>
      </v-col>
      <v-col cols="12" sm="2">
        <v-checkbox v-model="showGPDiff" label="显示GP差值"></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-content>
        <epgp-table
          :members="record"
          :extra-week="extraWeek"
          :class-filter="classFilter"
          :show-g-p-diff="showGPDiff"
        ></epgp-table>
      </v-content>
    </v-row>
  </v-container>
</template>
<script>
import classes from "@/consts/Classes";
import { VContainer, VContent } from "vuetify/lib";
import EpgpTable from "@/views/EPGPTable";
import members from "@/database/members";

export default {
  name: "EPGPSimulate",
  components: { VContainer, VContent, EpgpTable },
  data() {
    const classNames = classes.map(c => c.display);
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
          .filter(
            r =>
              r.rank !== "二处" &&
              r.rank !== "黑骑" &&
              r.rank !== "天牢" &&
              r.ep > 250
          ),
        timestamp: new Date(m.timestamp * 1000).toLocaleDateString()
      }));
    return {
      dial: true,
      extraWeek: 0,
      records,
      record: records[0].roster,
      classNames,
      classFilter: [],
      showGPDiff: false
    };
  }
};
</script>
