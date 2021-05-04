import express from 'express'
const router = express.Router();


export default (db) => {

    router.get('/', (req, res) => {
        res.send('Hello Express !');
    })

    return router;
};