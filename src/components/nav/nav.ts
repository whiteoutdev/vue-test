import Vue from 'vue';
import {RouteConfig} from 'vue-router';
import {routes} from '../../services/routes';

export interface NavData {
    routes: RouteConfig[];
}

export default Vue.extend({
    data(): NavData {
        return {routes};
    }
});
