<template>
  <v-container>
    <v-row>
      <v-tabs>
        <v-tab>当前EPGP</v-tab>
        <v-tab>模拟拾取</v-tab>
        <v-tab></v-tab>
      </v-tabs>
    </v-row>

    <v-row>
      <v-content>
        <epgp-table></epgp-table>
      </v-content>
    </v-row>
  </v-container>
</template>
<script>
import { VContainer, VContent } from "vuetify/lib";
import EpgpTable from "@/views/EPGPTable";
export default {
  name: "EPGPSimulate",
  components: { VContainer, VContent, EpgpTable }
};
</script>
