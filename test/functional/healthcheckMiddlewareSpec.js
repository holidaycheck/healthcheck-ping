'use strict';

var supertest = require('supertest-as-promised'),
    express = require('express'),
    server = express(),
    healthcheckMiddleware = require('../../lib/healthcheckMiddleware')();

server.use(healthcheckMiddleware);

describe('healthcheck middleware', function () {
    var request = supertest(server);

    it('should return ok', function () {
        return request.get('/_health')
            .expect(200, { status: 'OK' });
    });
});
