import express = require('express');
import createHealthcheckMiddleware = require('healthcheck-ping');

const server = express();

server.use(createHealthcheckMiddleware());
server.use(createHealthcheckMiddleware('foobar'));
