import {RouteConfig} from 'vue-router';
import AdminPage from '../pages/admin-page/admin-page.vue';
import CoursesPage from '../pages/courses-page/courses-page.vue';
import HomePage from '../pages/home-page/home-page.vue';

export enum RouteNames {
    HOME = 'home'
}

export const routes: RouteConfig[] = [
    {
        name     : RouteNames.HOME,
        path     : '/home',
        component: HomePage,
        meta     : {
            title: 'Home',
            nav  : true
        }
    },
    {
        path     : '/courses',
        component: CoursesPage,
        meta     : {
            title: 'Courses',
            nav  : true
        }
    },
    {
        path     : '/admin',
        component: AdminPage,
        meta     : {
            title: 'Admin',
            nav  : true
        }
    },
    {
        path    : '*',
        redirect: {
            name: RouteNames.HOME
        },
        meta    : {
            nav: false
        }
    }
];
