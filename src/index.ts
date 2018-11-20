import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app/app.vue';
import './index.scss';
import {routes} from './services/routes';

Vue.use(VueRouter);

new Vue({
    components: {
        App
    },
    router    : new VueRouter({routes}),
    template  : '<App/>'
}).$mount('#app');
