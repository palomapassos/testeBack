const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./src/routes');
const Cors = require('@koa/cors');

require('dotenv').config();

const PORT = process.env.PORT;

const server = new Koa();

server.use(Cors());
server.use(bodyparser());
server.use(router.routes());

console.log(PORT);

server.listen(PORT, `0.0.0.0`, null, () => console.log('Servidor rodando!'));
