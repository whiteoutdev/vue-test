import Vue from 'vue';
import CardContainer from '../../components/card-container/card-container.vue';
import CourseCard from '../../components/course-card/course-card.vue';
import {courseService} from '../../services/course-service';

export default Vue.extend({
    components: {
        CardContainer,
        CourseCard
    },
    data(): any {
        return {
            courseDefinitions: courseService.getCourseDefinitions()
        };
    }
});
