import {CourseDefinition} from '../models/CourseDefinition';
import {StorageKeys, storageService} from './storage-service';

export class CourseService {
    public loadCourseDefinitions(): void {
        const req                                         = require.context('../data/course-definitions', false, /\.ts$/),
              storedCourseDefinitions: CourseDefinition[] = this.getCourseDefinitions();
        req.keys().forEach(key => {
            const courseDefinition: CourseDefinition = req(key).default,
                  storedDefinition                   = storedCourseDefinitions.find(
                      storedDef => storedDef.id === courseDefinition.id);
            if (!storedDefinition) {
                console.info(`Storing new course definition: "${courseDefinition.id}"`);
                storedCourseDefinitions.push(courseDefinition);
            } else {
                console.info(`Course definition "${courseDefinition.id}" already exists`);
            }
        });
        storageService.storeSerialisables(StorageKeys.COURSE_DEFINITIONS, storedCourseDefinitions);
    }

    public getCourseDefinitions(): CourseDefinition[] {
        return storageService.getSerialisables(StorageKeys.COURSE_DEFINITIONS, CourseDefinition.deserialise);
    }

    public deleteCourseDefinitions(): void {
        storageService.remove(StorageKeys.COURSE_DEFINITIONS);
    }
}

export const courseService = new CourseService();
