import dotenv from 'dotenv';

dotenv.config();

import app from './server';

import config from './configs';

const listen = () => {
    return new Promise<number>((resolve, reject) => {
        const server = app.listen(config.server.port, () => {
            const address = server.address();

            if(address === null || typeof address === 'string') {
                return reject(`Wrong address: address is '${address}'`);
            }

            resolve(address.port);
        });
    });
};

const start = async () => {
    const port = await listen();
    console.log(`Express server started at port ${port}`);
};

start().catch((err) => {
    console.error('Server started failed');
    console.error(err);

    process.exit(1);
})
