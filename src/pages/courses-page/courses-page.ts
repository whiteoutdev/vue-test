import Vue from 'vue';
import {courseService} from '../../services/course-service';

export default Vue.extend({
    data(): any {
        return {
            courseDefinitions: courseService.getCourseDefinitions()
        };
    }
});
