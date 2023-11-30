const koa = require('koa');
const KoaLogger = require('koa-logger');
const {koaBody} = require('koa-body');
const cors = require('@koa/cors');

const router = require('./routes.js');
const orm = require('./models');

const app = new koa();

app.context.orm = orm;

app.use(cors());
app.use(KoaLogger());
app.use(koaBody());

app.use(router.routes());

app.use((ctx, next) => {
  ctx.body = 'Hola mundo';
});

module.exports = app;
