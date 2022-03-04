import { createWebHistory, createRouter } from "vue-router";
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'
import HomePage from '../components/HomePage'

function guardMyroute(to, from, next) {
    if (localStorage.getItem('token') == "" || localStorage.getItem('token') == undefined) {
        next('/login');
    } else {
        next();
    }
}

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
        beforeEnter : guardMyroute
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/register",
        name: "RegisterPage",
        component: RegisterPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;