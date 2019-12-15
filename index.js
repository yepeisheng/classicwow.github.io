const AppTemplate =
    "<v-app>" +
        "<v-content>" +
            "<v-container>" +
                "<Message></Message>" +
            "</v-container>" +
        "</v-content>" +
    "</v-app>";

new Vue({
    el: '#app',
    template: AppTemplate,
    vuetify: new Vuetify()
})