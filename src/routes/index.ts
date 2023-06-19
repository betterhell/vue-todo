import {createRouter, createWebHashHistory} from "vue-router";
import LandingView from "../views/LandingView.vue";
import TodosView from "../views/TodosView.vue";
import AboutView from "../views/AboutView.vue";
import NotFoundView from "../views/NotFoundView.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: LandingView },
        { path: '/todos', component: TodosView },
        { path: '/about', component: AboutView },
        { path: '/:pathMatch(.*)*', component: NotFoundView },
    ]
})