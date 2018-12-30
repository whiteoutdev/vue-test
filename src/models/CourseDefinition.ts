import {Serialisable} from './Serialisable';

export interface CourseDefinitionData {
    id: string;
    name: string;
    description: string;
    image: string;
    prerequisites?: string[];
}

export const DEFAULT_COURSE_DEFINITION_DATA: Partial<CourseDefinitionData> = {
    prerequisites: []
};

export class CourseDefinition implements CourseDefinitionData, Serialisable {
    public id: string;
    public name: string;
    public description: string;
    public image: string;
    public prerequisites: string[];

    public static deserialise(serialised: string): CourseDefinition {
        const data: CourseDefinitionData = JSON.parse(serialised);
        return new CourseDefinition(data);
    }

    public constructor(data: CourseDefinitionData) {
        Object.assign(this, DEFAULT_COURSE_DEFINITION_DATA, data);
    }

    public serialise(): string {
        return JSON.stringify(this.toData());
    }

    protected toData(): CourseDefinitionData {
        return {
            id           : this.id,
            name         : this.name,
            description  : this.description,
            image        : this.image,
            prerequisites: this.prerequisites
        };
    }
}
