import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app/app.vue';
import './index.scss';
import {courseService} from './services/course-service';
import {routes} from './services/routes';
import 'roboto-fontface';

courseService.deleteCourseDefinitions();
courseService.loadCourseDefinitions();

Vue.use(VueRouter);

new Vue({
    components: {
        App
    },
    router    : new VueRouter({routes}),
    template  : '<App/>'
}).$mount('#app');
