[![NPM Version](https://img.shields.io/npm/v/healthcheck-ping.svg?style=flat)](https://www.npmjs.org/package/healthcheck-ping)
[![Build Status](https://img.shields.io/travis/holidaycheck/healthcheck-ping/master.svg?style=flat)](https://travis-ci.org/holidaycheck/healthcheck-ping)
[![Coverage Status](https://img.shields.io/coveralls/holidaycheck/healthcheck-ping.svg?style=flat)](https://coveralls.io/r/holidaycheck/healthcheck-ping)
[![Dependencies](http://img.shields.io/david/holidaycheck/healthcheck-ping.svg?style=flat)](https://david-dm.org/holidaycheck/healthcheck-ping)

healthcheck-ping
======================

> :ambulance: Express middleware that exposes the health state.

This middleware can be used in any express application to provide a simple health check endpoint.
The default endpoint is "`_health`" but you can provide a different endpoint name if you want.

The endpoint returns a static json response:

```json
{
    "status": "OK"
}
```
## Installation
```
$ npm install healthcheck-ping --save
```

## Usage

```js
var createHealthcheckMiddleware = require('healthcheck-middleware');

var server = express();

server.use(createHealthcheckMiddleware()); // mounted as /_health
```

If you want the healthcheck to be available on a custom endpoint you can do so:

```js
server.use(createHealthcheckMiddleware('foobar'));
```
