const Koa = require('koa');

const app = new Koa();

const Router = require('koa-router');
const router = new Router();

router.get('/_health', (ctx) => {
    ctx.status = 200;
    ctx.body = {
        msg: true
    }
});

app.use(router.routes());

app.listen(process.env.PORT || 8080);