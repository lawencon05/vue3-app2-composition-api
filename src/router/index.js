import { createRouter, createWebHistory } from "vue-router";

import { userRouter } from "../components/user/router";

import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import NotFound from "../views/NotFound";

const routes = [
    {
        path: '/home',
        name: "dashboard",
        component: Dashboard
    },
    {
        path: '/login',
        name: "login",
        component: Login
    },
    {
        path: '/:patchMatch(.*)*',
        component: NotFound
    },
    ...userRouter
];

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
});