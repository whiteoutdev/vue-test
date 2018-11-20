import {RouteConfig} from 'vue-router';
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
        path    : '*',
        redirect: {
            name: RouteNames.HOME
        },
        meta    : {
            nav: false
        }
    }
];
