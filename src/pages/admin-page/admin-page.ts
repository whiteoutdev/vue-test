import Vue from 'vue';
import {courseService} from '../../services/course-service';

export default Vue.extend({
    methods: {
        deleteCourseDefinitions(): void {
            courseService.deleteCourseDefinitions();
        },

        reloadCourseDefinitions(): void {
            courseService.loadCourseDefinitions();
        }
    }
});
