const AppTemplate =
    "<v-app>" +
        "<v-content>" +
        "<v-app-bar>" +
            "<v-toolbar-items>" +
                "<v-menu>" +
                    "<template v-slot:activator='{ on }'>" +
                        "<v-btn width='150' v-on='on' text>{{stageList[selectedStageIndex].display}}<v-spacer></v-spacer>" +
                            "<v-icon>mdi-chevron-down</v-icon>" +
                        "</v-btn>" +
                    "</template>" +
                    "<v-list><v-list-item :key='index' @click='selectedStageIndex=index' v-for='(item, index) in stageList'>{{ item.display }}</v-list-item></v-list>" +
                "</v-menu>" +
            "</v-toolbar-items>" +

            "<v-toolbar-items :key='index' v-for='(item, index) in classes'>" +
                "<v-btn " +
                    "dense width='100'" +
                    ":text='selectedClassIndex !== index' " +
                    ":disabled='selectedClassIndex === index' " +
                    "@click='selectedClassIndex = index' >" +
                        "<span :style='{color: item.color}'>{{item.display}}</span>" +
                "</v-btn>" +
            "</v-toolbar-items>" +
        "</v-app-bar>" +

        "<v-container>" +
        "<gear-select v-model='neck' :options='necks'></gear-select>" +

        "</v-container>" +
    "</v-content>" +
    "</v-app>";

new Vue({
    "el": "#app",
    "template": AppTemplate,
    "vuetify": new Vuetify({
        "theme": {
            "dark": true
        }
    }),
    "data": () => ({
        "neck": "18814",
        "necks": Necks,
        "selectedStageIndex": 1,
        "stageList": [
            {"display": "P2",
                "value": "P2"},
            {"display": "P2+战场",
                "value": "P2+Battleground"}
        ],
        "selectedClassIndex": 0,
        "classes": [
            {"display": "法师",
                "color": "#68ccef"},
            {"display": "术士",
                "color": "#9382c9"},
            {"display": "牧师",
                "color": "#fff"},
            {"display": "德鲁伊",
                "color": "#ff7c0a"},
            {"display": "猎人",
                "color": "#aad372"},
            {"display": "圣骑士",
                "color": "#f48cba"},
            {"display": "盗贼",
                "color": "#fff468"},
            {"display": "萨满",
                "color": "#2359ff"},
            {"display": "战士",
                "color": "#c69b6d"}
        ]
    })
});
