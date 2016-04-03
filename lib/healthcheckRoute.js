'use strict';

module.exports = function healthcheck(req, res) {
    res.status(200).json({ status: 'OK' }).end();
};
