require("./bootstrap");

import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

import router from "./routes/router";
import vuetify from "./plugins/vuetify";
import store from "./store/index";
import components from "./componentsRegister";

const app = new Vue({
    el: "#app",
    router: router,
    vuetify: vuetify,
    store: store,
    components: components
});
