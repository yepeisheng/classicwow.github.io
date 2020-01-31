<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="member in members" :key="member.name">
      <v-expansion-panel-header>
        <v-row>
          <v-col>
            {{ member.name }}
          </v-col>
          <v-col>
            {{ `EP: ${member.ep}, GP: ${member.gp}` }}
          </v-col>
          <v-col>
            {{ `PR: ${(member.ep / member.gp).toFixed(2)}` }}
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        本周拾取记录： working in progress...
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import members from "@/database/members";
import {
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelHeader,
  VExpansionPanelContent
} from "vuetify/lib";
export default {
  name: "EpgpTable",
  components: {
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent
  },
  data: () => ({
    members
  })
};
</script>
