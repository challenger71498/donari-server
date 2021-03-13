import typeorm from './typeorm';

export type Loader = {
    load?: (app: Express.Application) => Promise<void>;
    initialize?: (app: Express.Application) => Promise<void>;
    unload?: (app: Express.Application) => Promise<void>;
};

const loaders: Loader[] = [typeorm];
export { loaders };

export const initializeAll = async (app: Express.Application) => {
    console.log('Initializing...');

    await Promise.all(loaders.map((loader) => loader.initialize?.(app)));

    console.log('Initialization done');
}
