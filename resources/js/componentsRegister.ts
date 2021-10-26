

import Vue from "vue";

// vue component 登録
import Dashboard from "./pages/Index.vue";
import Login from "./pages/Login.vue";

Vue.component("dashboard-component", require("./pages/Index.vue").default);
Vue.component(
    "login-component",
    require("./pages/Login.vue").default
);
const components = {
    Dashboard,
    Login,
}

export default components;