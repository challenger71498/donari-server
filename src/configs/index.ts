import dotenv from 'dotenv';
import EnvironmentException from "../exceptions/EnvironmentException";

dotenv.config();

const {
    MODE,
    SERVER_PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_NAME,
    JWT_SECRET_TOKEN,
    BCRYPT_ROUNDS,
    AES_256_KEY,
    AES_256_IV_VECTOR,
} = process.env;

if (MODE === undefined) throw new EnvironmentException('MODE');

if (SERVER_PORT === undefined) throw new EnvironmentException('SERVER_PORT');

if (DB_HOST === undefined) throw new EnvironmentException('DB_HOST');
if (DB_USER === undefined) throw new EnvironmentException('DB_USER');
if (DB_PASSWORD === undefined) throw new EnvironmentException('DB_PASSWORD');
if (DB_NAME === undefined) throw new EnvironmentException('DB_NAME');
if (DB_PORT === undefined) throw new EnvironmentException('DB_PORT');
if (JWT_SECRET_TOKEN === undefined) throw new EnvironmentException('JWT_SECRET_TOKEN');
if (BCRYPT_ROUNDS === undefined) throw new EnvironmentException('BCRYPT_ROUNDS');
if (AES_256_KEY === undefined) throw new EnvironmentException('AES_256_KEY');
if (AES_256_IV_VECTOR === undefined) throw new EnvironmentException('AES_256_IV_VECTOR');

const config = {
    mode: MODE,

    isDevelopment: MODE === 'development',
    isProduction: MODE === 'production',
    isTest: MODE === 'test',

    server: {
        port: parseInt(SERVER_PORT),
    },

    database: {
        host: DB_HOST,
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        port: parseInt(DB_PORT),
    }
}

export default config;
