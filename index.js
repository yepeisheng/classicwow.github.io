Vue.use(VueRouter);

new Vue({
  'el': '#app',
  'template': AppTemplate,
  'vuetify': new Vuetify({
    'theme': {
      'dark': true,
    },
  }),
  'data': () => ({
    'neck': '18814',
    'necks': Necks,
    'selectedStageIndex': 1,
    'stageList': [
      {'display': 'P2',
        'value': 'P2'},
      {'display': 'P2+战场',
        'value': 'P2+Battleground'},
    ],
    'selectedClassIndex': 0,
    'classes': [
      {'display': '法师',
        'color': '#68ccef'},
      {'display': '术士',
        'color': '#9382c9'},
      {'display': '牧师',
        'color': '#fff'},
      {'display': '德鲁伊',
        'color': '#ff7c0a'},
      {'display': '猎人',
        'color': '#aad372'},
      {'display': '圣骑士',
        'color': '#f48cba'},
      {'display': '盗贼',
        'color': '#fff468'},
      {'display': '萨满',
        'color': '#2359ff'},
      {'display': '战士',
        'color': '#c69b6d'},
    ],
  }),
});
