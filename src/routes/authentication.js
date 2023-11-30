const bcrypt = require('bcrypt');
const Router = require('koa-router');
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const router = new Router();

router.post('authentication.signup', '/signup', async (ctx) => {
  const authInfo = ctx.request.body;
  let user = await ctx.orm.User.findOne({ where: { email: authInfo.email } });
  
  if (user) {
    ctx.body = `The user with the email '${authInfo.email}' already exists`;
    ctx.status = 400;
    return;
  }
  console.log(authInfo);
  try {
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(authInfo.password, saltRounds);
    user = await ctx.orm.User.create({
      name: authInfo.name,
      career: authInfo.career,
      email: authInfo.email,
      password: hashPassword,
      photo: authInfo.photo,
      likes: authInfo.likes,
      phone: authInfo.phone
    });
  }   catch (error){
    ctx.body = error;
    ctx.status = 400;
    console.log(error);
    return;
  }
  const expirationSeconds = 1 * 60 * 60 * 24;
  const JWT_PRIVATE_KEY = process.env.JWT_SECRET;
       
  var token = jwt.sign(
    { scope: ['user'] },
    JWT_PRIVATE_KEY,
    { subject: user.id.toString() },
    { expiresIn: expirationSeconds }
  );
  ctx.body = {
    'access_token': token,
    'token_type': 'Bearer',
    'expires_in': expirationSeconds,
  };
  ctx.status = 200;

});
  
router.post('authentication.login', '/login', async (ctx) => {
  let user;
  const authInfo = ctx.request.body;
  try {
    user = await ctx.orm.User.findOne({ where: { email: authInfo.email } });
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
    return;
  }
   
  if (!user) {
    ctx.body = `The user by the email '${authInfo.email}' was not found`;
    ctx.status = 400;
    return;
  }
  const validPassword = bcrypt.compare(authInfo.password, user.password);
  if (validPassword){
    ctx.body = {
      name: user.name,
      email: user.email
    };
    ctx.status = 200;
  } else {
    ctx.body = 'Incorrect password';
    ctx.status = 400;
    console.log('hola');
    return;
  }


  // creamos jwt
   
  const expirationSeconds = 1 * 60 * 60 * 24;
  const JWT_PRIVATE_KEY = process.env.JWT_SECRET;
  
  if (authInfo.email !== "admin@uc.cl"){
  var token = jwt.sign(
    { scope: ['user'] },
    JWT_PRIVATE_KEY,
    { subject: user.id.toString() },
    { expiresIn: expirationSeconds }
  );
  ctx.body = {
    'access_token': token,
    'token_type': 'Bearer',
    'expires_in': expirationSeconds,
  };
  ctx.status = 200;} else{
    var token = jwt.sign(
      { scope: ['admin'] },
      JWT_PRIVATE_KEY,
      { subject: user.id.toString() },
      { expiresIn: expirationSeconds }
    );
    ctx.body = {
      'access_token': token,
      'token_type': 'Bearer',
      'expires_in': expirationSeconds,
    };
  }

});

module.exports = router;