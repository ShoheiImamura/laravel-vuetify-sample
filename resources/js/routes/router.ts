import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "*" // laravel 側で制御
    },
    {
        path: "*",
        redirect: { name: "top" }
    }
];
const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
