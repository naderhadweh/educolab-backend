const Router = require('koa-router');
const router = new Router();

router.post('groups.create', '/', async(ctx)=>{
  try{

    const group = await ctx.orm.Group.create(ctx.request.body);
    ctx.body = group;
    ctx.status = 201;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('groups.list', '/', async(ctx)=>{
  try{
    const groups = await ctx.orm.Group.findAll();
    ctx.body = groups;
    ctx.status = 200;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('group.show', '/:id', async(ctx)=>{
  try{
    const group = await ctx.orm.Group.findByPk(ctx.params.id);
    ctx.body = group;
    ctx.status = 200;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.put('group.update', '/:id', async (ctx) => {
  try {
    const groupId = ctx.params.id;
    const updatedGroup = ctx.request.body;
    const group = await ctx.orm.Group.findByPk(groupId);

    if (!group) {
      ctx.status = 404;
      ctx.body = { error: 'Grupo no encontrado' };
    } else {
      await group.update(updatedGroup);

      ctx.body = group;
      ctx.status = 200;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.delete('group.delete', '/:id', async (ctx) => {
  try {
    const groupId = ctx.params.id;
    const group = await ctx.orm.Group.findByPk(groupId);

    if (!group) {
      ctx.status = 404;
      ctx.body = { error: 'Grupo no encontrado' };
    } else {
      await group.destroy();
      ctx.body = { message: 'Grupo eliminado exitosamente' };
      ctx.status = 204;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});



module.exports = router;