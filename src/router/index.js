import { createWebHistory, createRouter } from "vue-router"
import Home from '../views/home';
import PageNotFound from '../views/pageNotFound';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
