const Router = require('koa-router');
const router = new Router();

router.get('users.list', '/', async(ctx)=>{
  try{
    const users = await ctx.orm.User.findAll();
    ctx.body = users;
    ctx.status = 200;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('user.show', '/:id', async(ctx)=>{
  try{
    const user = await ctx.orm.User.findByPk(ctx.params.id);
    ctx.body = user;
    ctx.status = 200;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.put('user.update', '/:id', async (ctx) => {
  try {
    const userId = ctx.params.id;
    const updatedUser = ctx.request.body;
    const user = await ctx.orm.User.findByPk(userId);

    if (!user) {
      ctx.status = 404;
      ctx.body = { error: 'Usuario no encontrado' };
    } else {
      await user.update(updatedUser);
      ctx.body = user;
      ctx.status = 200;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.delete('user.delete', '/:id', async (ctx) => {
  try {
    const userId = ctx.params.id;
    const user = await ctx.orm.User.findByPk(userId);
    if (!user) {
      ctx.status = 404;
      ctx.body = { error: 'Usuario no encontrado' };
    } else {
      
      await user.destroy();
      ctx.body = { message: 'Usuario eliminado exitosamente' };
      ctx.status = 200;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

module.exports = router;