"use strict";
var express = require('express');

var dbConfig = require('./config/db');

const app = express();

dbConfig();

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.error(err);
    }{
        console.log(`App listen to port: ${PORT}`);
    }
})  