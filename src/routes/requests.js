const Router = require('koa-router');
const router = new Router();

router.post('requests.create', '/', async(ctx)=>{
  try{
    const request = await ctx.orm.Request.create(ctx.request.body);
    ctx.body = request;
    ctx.status = 201;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('requests.list', '/', async(ctx)=>{
  try{
    const requests = await ctx.orm.Request.findAll();
    ctx.body = requests;
    ctx.status = 200;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('request.show', '/:id', async(ctx)=>{
  try{
    const request = await ctx.orm.Request.findByPk(ctx.params.id);
    ctx.body = request;
    ctx.status = 200;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.put('request.update', '/:id', async (ctx) => {
  try {
    const requestId = ctx.params.id;
    const updatedRequest = ctx.request.body;
    const request = await ctx.orm.Request.findByPk(requestId);

    if (!request) {
      ctx.status = 404;
      ctx.body = { error: 'Request no encontrado' };
    } else {
      await request.update(updatedRequest);

      ctx.body = request;
      ctx.status = 200;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.delete('request.delete', '/:id', async (ctx) => {
  try {
    const requestId = ctx.params.id;
    const request = await ctx.orm.Request.findByPk(requestId);

    if (!request) {
      ctx.status = 404;
      ctx.body = { error: 'Request no encontrado' };
    } else {
      await request.destroy();
      ctx.body = { message: 'Request eliminado exitosamente' };
      ctx.status = 200;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

module.exports = router;
