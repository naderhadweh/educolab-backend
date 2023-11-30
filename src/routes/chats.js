const Router = require('koa-router');
const router = new Router();

router.post('chats.create', '/', async(ctx)=>{
  try{

    const chat = await ctx.orm.Chat.create(ctx.request.body);
    ctx.body = chat;
    ctx.status = 201;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('chats.list', '/', async(ctx)=>{
  try{
    const chats = await ctx.orm.Chat.findAll();
    ctx.body = chats;
    ctx.status = 200;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('chat.show', '/:id', async(ctx)=>{
  try{
    const chat = await ctx.orm.Chat.findByPk(ctx.params.id);
    ctx.body = chat;
    ctx.status = 200;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.put('chat.update', '/:id', async (ctx) => {
  try {
    const chatId = ctx.params.id;
    const updatedChat = ctx.request.body;
    const chat = await ctx.orm.Chat.findByPk(chatId);

    if (!chat) {
      ctx.status = 404;
      ctx.body = { error: 'Chat no encontrado' };
    } else {
      await chat.update(updatedChat);

      ctx.body = chat;
      ctx.status = 200;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.delete('chat.delete', '/:id', async (ctx) => {
  try {
    const chatId = ctx.params.id;
    const chat = await ctx.orm.Chat.findByPk(chatId);

    if (!chat) {
      ctx.status = 404;
      ctx.body = { error: 'Chat no encontrado' };
    } else {
      await chat.destroy();
      ctx.body = { message: 'Chat eliminado exitosamente' };
      ctx.status = 204;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});



module.exports = router;