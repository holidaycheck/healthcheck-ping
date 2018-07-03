import { RequestHandler } from 'express';

declare function createHealthcheckMiddleware(endpoint?: string): RequestHandler;

export = createHealthcheckMiddleware;
