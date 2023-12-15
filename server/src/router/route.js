import express from 'express';

export const router = express.Router();

router.get('/', (request, response) => {
    console.info(request);
    return response.status(234).send('Welcome');
});