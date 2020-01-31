<template>
  <v-menu>
    <template v-slot:activator="{ on }">
      <v-btn outlined width="200" text v-on="on">
        <img
          v-if="!!selected.icon"
          style="width:17px; height:17px; margin-right: 6px;"
          :src="selected.icon"
        />
        <span :style="{ color: selected.quality.color }">
          {{ selected.name }}
        </span>
        <v-spacer></v-spacer>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(option, index) in options"
        :key="index"
        @click="select(option)"
      >
        <img
          v-if="!!option.icon"
          style="width: 17px; height:17px; margin-right: 6px;"
          :src="option.icon"
        />
        <v-list-item-content>
          <v-list-item-title>
            <span :style="{ color: option.quality.color }">{{
              option.name
            }}</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { VMenu, VBtn, VList, VListItem, VListItemTitle } from "vuetify/lib";
export default {
  name: "GearSelect",
  components: { VMenu, VBtn, VList, VListItem, VListItemTitle },
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  computed: {
    selected() {
      return this.options[this.value];
    }
  },
  methods: {
    select(option) {
      this.$emit("input", option.itemId);
    }
  }
};
</script>
