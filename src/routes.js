const Router = require('koa-router');
const jwtMiddleware = require('koa-jwt');

const users = require('./routes/users.js');
const groups = require('./routes/groups.js');
const chats = require('./routes/chats.js');
const requests = require('./routes/requests.js');
const reviews = require('./routes/reviews.js');
const authRoutes = require ('./routes/authentication.js');
const scopeProtectedRoutes = require('./routes/scopeExample');

const router = new Router();

router.use('/groups', groups.routes());
router.use('/chats', chats.routes());
router.use('/requests', requests.routes());
router.use('/reviews', reviews.routes());
router.use(authRoutes.routes());
router.use('/users', users.routes());
//DESDE ESTA LINEA TODAS LAS RUTAS NECESITAN JWT

router.use(jwtMiddleware({ secret: process.env.JWT_SECRET} ));
router.use('/scope-example', scopeProtectedRoutes.routes());

module.exports = router;