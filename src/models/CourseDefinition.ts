import {Serialisable} from './Serialisable';

export interface CourseData {
    id: string;
    name: string;
}

export class CourseDefinition implements CourseData, Serialisable {
    public id: string;
    public name: string;

    public static deserialise(serialised: string): CourseDefinition {
        const data: CourseData = JSON.parse(serialised);
        return new CourseDefinition(data);
    }

    public constructor(data: CourseData) {
        Object.assign(this, data);
    }

    public serialise(): string {
        return JSON.stringify(this.toData());
    }

    protected toData(): CourseData {
        return {
            id  : this.id,
            name: this.name
        };
    }
}
