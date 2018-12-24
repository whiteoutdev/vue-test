import {Serialisable} from '../models/Serialisable';

export enum StorageKeys {
    COURSE_DEFINITIONS = 'courseDefinitions'
}

export class StorageService {
    private storage = window.localStorage;

    public store(key: string, value: string): void {
        this.storage.setItem(key, value);
    }

    public storeObject<T>(key: string, value: T): void {
        this.store(key, JSON.stringify(value));
    }

    public storeSerialisable<T extends Serialisable>(key: string, value: T): void {
        this.store(key, value.serialise());
    }

    public storeSerialisables<T extends Serialisable>(key: string, values: T[]): void {
        this.storeObject(key, values.map(value => value.serialise()));
    }

    public get(key: string): string {
        return this.storage.getItem(key);
    }

    public getObject<T>(key: string): T {
        return JSON.parse(this.get(key));
    }

    public getSerialisable<T>(key: string, deserialiser: (serialised: string) => T): T {
        return deserialiser(this.get(key));
    }

    public getSerialisables<T>(key: string, deserialiser: (serialised: string) => T): T[] {
        return (this.getObject<string[]>(key) || [])
            .map(deserialiser);
    }

    public remove(key: string): void {
        this.storage.removeItem(key);
    }
}

export const storageService = new StorageService();
