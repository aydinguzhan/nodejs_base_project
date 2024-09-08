import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv';
import { corsConfig } from './config/cors.js'
import { userRouter, autlogsRouter, categoriesRouter } from './routes/index.js'
import { getEnv } from './config/dotEnv.js';

if (getEnv("NODE_ENV") !== 'product') {
    dotenv.config();
}


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
const PORT = process.env.SERVER_PORT || 3000

app.use(cors(corsConfig));

app.use((req, res, next) => {
    console.log("global middelware")
    next()
});

app.use('/user', userRouter);
app.use('/autlog', autlogsRouter);
app.use('/categories', categoriesRouter);
app.listen(process.env.SERVER_PORT, () => {
    console.log(`${PORT} listening`)
})