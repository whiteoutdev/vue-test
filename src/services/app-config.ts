declare const process: any;

export enum Env {
    SFW = 'sfw'
}

export interface AppConfig {
    env: Env;
}

export const appConfig: AppConfig = {
    env: process.env.ENV
};
