<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="col in cols" :key="col.propName" class="text-left">
            {{ col.text }}
            <v-btn
              :disabled="showGPDiff"
              small
              text
              icon
              :color="sortBy === col.propName ? 'primary' : ''"
              @click="
                changeSort(
                  col.propName,
                  sortBy === col.propName ? !ascend : false
                )
              "
              ><v-icon>{{
                sortBy === col.propName && ascend
                  ? "mdi-sort-ascending"
                  : "mdi-sort-descending"
              }}</v-icon>
            </v-btn>
          </th>
          <th v-if="showGPDiff">+GP</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in sortedMembers" :key="member.name">
          <td :style="{ color: classes[member.class] }">{{ member.name }}</td>
          <td :style="{ color: classes[member.class] }">{{ member.class }}</td>
          <td>{{ member.rank }}</td>
          <td>{{ member.ep }}</td>
          <td>{{ member.gp }}</td>
          <td>{{ member.pr }}</td>
          <td v-if="showGPDiff">{{ member.plusGP }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import classes from "@/consts/Classes";
import { VToolbar, VSimpleTable, VIcon } from "vuetify/lib";
export default {
  name: "EpgpTable",
  components: {
    VSimpleTable,
    VIcon
  },
  props: {
    members: {
      type: Array,
      required: true
    },
    classFilter: {
      type: Array,
      default: () => []
    },
    showGPDiff: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      classes: classes.reduce((dict, c) => {
        dict[c.display] = c.color;
        return dict;
      }, {}),
      sortBy: "pr",
      ascend: false,
      cols: [
        { propName: "name", text: "名字" },
        { propName: "class", text: "职业" },
        { propName: "rank", text: "会阶" },
        { propName: "ep", text: "EP" },
        { propName: "gp", text: "GP" },
        { propName: "pr", text: "PR" }
      ]
    };
  },
  computed: {
    sortedMembers() {
      const filterSet = new Set(this.classFilter);
      const sorted = this.members
        .concat()
        .filter(m => filterSet.size === 0 || filterSet.has(m.class))
        .sort((m1, m2) => {
          let compare = 0;
          if (m1[this.sortBy] === m2[this.sortBy]) {
            compare = m1["pr"] > m2["pr"] ? 1 : -1;
          } else {
            compare = m1[this.sortBy] > m2[this.sortBy] ? 1 : -1;
          }
          return this.ascend ? compare : -compare;
        });

      if (this.showGPDiff) {
        for (let i = 0; i < sorted.length - 1; i++) {
          sorted[i].plusGP = Math.round(
            (sorted[i].ep + 115) /
              ((sorted[i + 1].ep + 115) / sorted[i + 1].gp) -
              sorted[i].gp
          );
        }
      }
      return sorted;
    }
  },
  watch: {
    showGPDiff: function() {
      if (this.showGPDiff === true) {
        this.sortBy = "pr";
        this.ascend = false;
      }
    }
  },
  methods: {
    changeSort(sortBy, asc) {
      this.sortBy = sortBy;
      this.ascend = asc;
    }
  }
};
</script>
