//引入路由模块并实例化
const Router = require('koa-router');
const router = new Router();
//导入对应的控制器
const registered_router = require('./../../app/controller/registered_controller');

//微控制器的方法定义请求路径和请求方式
router.post('/register', registered_router.postRegister)

module.exports = router;