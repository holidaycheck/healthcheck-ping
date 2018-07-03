import { RequestHandler } from 'express';

declare function createHealthcheckMiddleware(endpoint?: string): RequestHandler;

// Declaring empty namespace here because of
// "Module 'healthcheck-ping' resolves to a non-module entity and cannot be imported using this construct"
// tslint:disable-next-line
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/6d977d0f7a1e3361acde112f77d88eb786ab854c/README.md#should-i-add-an-empty-namespace-to-a-package-that-doesnt-export-a-module-to-use-es6-style-imports
declare namespace createHealthcheckMiddleware {}

export = createHealthcheckMiddleware;
