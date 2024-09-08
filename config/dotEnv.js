import dotenv from 'dotenv';

dotenv.config();

export const getEnv = (pathName) => process.env[pathName]


