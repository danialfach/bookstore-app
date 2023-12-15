import express from 'express';
import { PORT, MongoURL } from './config/config.js';
import { router } from './router/route.js';
import mongoose from 'mongoose';
import { bookRouter } from './router/books/books-route.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/welcome', router);
app.use('/books', bookRouter);

mongoose
    .connect(MongoURL)
    .then(() => {
        console.info('App connected to Database');
        app.listen(PORT, () => {
            console.info(`App Listen to PORT: ${PORT}`);
        });
    })
    .catch((error) => {
        console.info(error);
    });