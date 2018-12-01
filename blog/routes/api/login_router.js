//引入路由模块并实例化

const Router = require('koa-router');
const router = new Router();

//导入对应的控制器
const login_router = require('./../../app/controller/login_controller');

//为控制器的方法定义请求路径和请求方式
router.post('/login', login_router.postLogin)

module.exports = router;