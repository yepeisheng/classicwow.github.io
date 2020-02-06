<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th v-for="col in cols" :key="col.propName" class="text-left">
            {{ col.text }}
            <v-btn
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in sortedMembers" :key="member.name">
          <td>{{ member.name }}</td>
          <td :style="{ color: classes[member.class] }">{{ member.class }}</td>
          <td>{{ member.rank }}</td>
          <td>{{ member.ep }}</td>
          <td>{{ member.gp }}</td>
          <td>{{ member.pr }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import classes from "@/consts/Classes";
import { VSimpleTable, VIcon } from "vuetify/lib";
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
      return this.members.concat().sort((m1, m2) => {
        const compare = m1[this.sortBy] > m2[this.sortBy] ? 1 : -1;
        return this.ascend ? compare : -compare;
      });
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
