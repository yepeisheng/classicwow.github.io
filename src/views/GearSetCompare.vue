<template>
  <v-container fluid>
    <v-toolbar>
      <v-toolbar-items>
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              {{ stageList[selectedStageIndex].display }}
              <v-spacer></v-spacer>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in stageList"
              :key="index"
              @click="selectedStageIndex = index"
            >
              {{ item.display }}
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn class="d-flex d-sm-none" text v-on="on">
              <span :style="{ color: classes[selectedClassIndex].color }">
                {{ classes[selectedClassIndex].display }}
              </span>
              <v-spacer></v-spacer>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in classes"
              :key="index"
              @click="selectedClassIndex = index"
            >
              <span :style="{ color: item.color }">
                {{ item.display }}
              </span>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          v-for="(item, index) in classes"
          :key="index"
          class="d-none d-sm-flex"
          dense
          :text="selectedClassIndex !== index"
          :disabled="selectedClassIndex === index"
          @click="selectedClassIndex = index"
        >
          <span :style="{ color: item.color }">{{ item.display }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-row>
      <v-col>
        <gear-select v-model="neck" :options="necks"></gear-select>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {
  VContainer,
  VToolbar,
  VToolbarItems,
  VMenu,
  VBtn,
  VSpacer,
  VList,
  VListItem
} from "vuetify/lib";
import CLASSES from "@/consts/Classes";
import STAGES from "@/consts/Stages";
import Necks from "@/consts/gears/Neck";
import GearSelect from "@/components/GearSelect";
export default {
  name: "GearSetCompare",
  components: {
    VContainer,
    VToolbar,
    VToolbarItems,
    VMenu,
    VBtn,
    VSpacer,
    VList,
    VListItem,
    GearSelect
  },
  data: () => ({
    neck: "18814",
    necks: Necks,
    selectedStageIndex: 1,
    stageList: STAGES,
    selectedClassIndex: 0,
    classes: CLASSES
  })
};
</script>
