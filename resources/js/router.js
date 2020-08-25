import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import AboutUs from "./components/pages/AboutUs";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/Contact",
            component: Contact
        },
        {
            path: "/AboutAs",
            component: AboutUs
        }
    ]
})
