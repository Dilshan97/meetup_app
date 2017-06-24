"use strict";
import express from 'express';
import dbConfig from './config/db';
import middleware from './config/middleware';

const app = express();

dbConfig();

middleware(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.error(err);
    }{
        console.log(`App listen to port: ${PORT}`);
    }
})  