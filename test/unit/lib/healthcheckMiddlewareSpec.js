'use strict';

var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect,
    express = require('express'),
    healthcheckRoute = require('../../../lib/healthcheckRoute'),
    createHealthcheckMiddleware = require('../../../lib/healthcheckMiddleware');

chai.use(require('sinon-chai'));

describe('healthcheck middleware', function () {
    var router;

    beforeEach(function () {
        router = {
            get: sinon.stub().returnsThis()
        };

        sinon.stub(express, 'Router').returns(router);
    });

    afterEach(function () {
        express.Router.restore();
    });

    it('should create a new router', function () {
        var healthcheckRouter = createHealthcheckMiddleware();

        expect(healthcheckRouter).to.equal(router);
        expect(express.Router).to.have.been.calledOnce;
    });

    it('should mount the healthcheck route on the default endpoint', function () {
        createHealthcheckMiddleware();

        expect(router.get).to.have.been.calledOnce;
        expect(router.get).to.have.been.calledWithExactly('/_health', healthcheckRoute);
    });

    it('should mount the healthcheck route on the given endpoint', function () {
        createHealthcheckMiddleware('foobar');

        expect(router.get).to.have.been.calledOnce;
        expect(router.get).to.have.been.calledWithExactly('/foobar', healthcheckRoute);
    });
});
