import Vue from 'vue';
import {CourseDefinition} from '../../models/CourseDefinition';

export default Vue.extend({
    props: {
        courseDefinition: CourseDefinition
    }
});
