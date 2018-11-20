import Vue from 'vue';
import Nav from '../components/nav/nav.vue';

export default Vue.extend({
    data(): any {
        return {
            greeting: 'Hello'
        };
    },
    components: {
        Nav
    }
});
