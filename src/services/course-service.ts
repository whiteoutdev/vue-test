import {CourseDefinition} from '../models/CourseDefinition';
import {appConfig, Env} from './app-config';
import {StorageKeys, storageService} from './storage-service';
import RequireContext = __WebpackModuleApi.RequireContext;

export class CourseService {
    public loadCourseDefinitions(): void {
        const req                                         = this.requireCourseDefinitions(),
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

    private requireCourseDefinitions(): RequireContext {
        if (appConfig.env === Env.SFW) {
            return require.context('../data/course-definitions-sfw', false, /\.ts$/);
        }
        return require.context('../data/course-definitions', false, /\.ts$/);
    }
}

export const courseService = new CourseService();
