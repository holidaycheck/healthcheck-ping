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
