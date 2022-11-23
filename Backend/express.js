const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require("cors");

const apiRoutes = require("./routes/index");

module.exports = async function (app) {
    app.use(logger('dev'));
    app.use(cors()); // enabling CORS
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'uploads')));

    app.get('/', (_req, res) => res.send('the server is run!'))
    app.use("/api", apiRoutes);

    // catch 404 and forward to error handler
    app.use(require('./middleware/catch404'));

    // error handler
    app.use(require('./middleware/errorHandler'));
}