import Vue from "vue";
import Router from "vue-router";
import loader from "./views/Loader";
import Gg from "./views/Gg"
Vue.use(Router);

export default new Router({
    linkActiveClass: "is-selected",
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        { path: "/", redirect: "/Loader" },
        {
            path: "/Loader",
            component: loader

        },
        {
            path: "/Gg",
            component: Gg

        },
        {
            path: "/Home",
            component: () =>
                import ("./views/Home.vue")
        },
        {
            path: "/Category",
            component: () =>
                import ("./views/Category.vue")
        },
        {
            path: "/Car",
            component: () =>
                import ("./views/Car.vue")
        },
        {
            path: "/My",
            component: () =>
                import ("./views/My.vue")
        },
        {
            path: "/Detail",
            component: () =>
                import ("./views/Detail.vue")
        },
        {
            path: "/Cite",
            component: () =>
                import ("./views/Cite.vue")
        },
        {
            path: "/Address",
            component: () =>
                import ("./views/Address.vue")
        },
        {
            path: "/Login",
            component: () =>
                import ("./views/Login.vue")
        }
    ]
});