'use strict';

var express = require('express'),
    healthcheckRoute = require('./healthcheckRoute');

module.exports = function createHealthcheckMiddleware(endpoint) {
    var router = express.Router(),
        path = '/_health';

    if (endpoint) {
        path = '/' + endpoint;
    }

    return router.get(path, healthcheckRoute);
};
