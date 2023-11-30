const Router = require('koa-router');
const router = new Router();

router.post('reviews.create', '/', async(ctx)=>{
  try{

    const review = await ctx.orm.Review.create(ctx.request.body);
    ctx.body = review;
    ctx.status = 201;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('reviews.list', '/', async(ctx)=>{
  try{
    const reviews = await ctx.orm.Review.findAll();
    ctx.body = reviews;
    ctx.status = 200;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.get('review.show', '/:id', async(ctx)=>{
  try{
    const review = await ctx.orm.Review.findByPk(ctx.params.id);
    ctx.body = review;
    ctx.status = 200;
  } catch(error){
    ctx.body = error;
    ctx.status = 400;
  }
});

router.put('review.update', '/:id', async (ctx) => {
  try {
    const reviewId = ctx.params.id;
    const updatedreview = ctx.request.body;
    const review = await ctx.orm.Review.findByPk(reviewId);

    if (!review) {
      ctx.status = 404;
      ctx.body = { error: 'Review no encontrada' };
    } else {
      await review.update(updatedreview);

      ctx.body = review;
      ctx.status = 200;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});

router.delete('review.delete', '/:id', async (ctx) => {
  try {
    const reviewId = ctx.params.id;
    const review = await ctx.orm.Review.findByPk(reviewId);

    if (!review) {
      ctx.status = 404;
      ctx.body = { error: 'Review no encontrada' };
    } else {
      await review.destroy();
      ctx.body = { message: 'Review eliminada exitosamente' };
      ctx.status = 204;
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 400;
  }
});



module.exports = router;