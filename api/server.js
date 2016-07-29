import config from '../src/shared/configs';

import jsonServer from 'json-server';
import db from './db';

const port = config.apiPort;

const server = jsonServer.create();
const router = jsonServer.router(db());

// default middlewares
server.use(jsonServer.defaults());

// router middleware
server.use(router);

server.listen(port);
console.log(`Api server listening on port: ${port}`);