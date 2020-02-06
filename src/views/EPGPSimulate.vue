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
        <epgp-table :members="record"></epgp-table>
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
    const records = members.map(m => ({
      roster: m.roster
        .filter(r => r.length === 6)
        .map(r => ({
          name: r[0],
          class: r[1],
          rank: r[2],
          ep: r[3],
          gp: r[4],
          pr: r[5]
        })),
      timestamp: new Date(m.timestamp).toLocaleDateString()
    }));
    return {
      records,
      record: records[0].roster
    };
  }
};
</script>
