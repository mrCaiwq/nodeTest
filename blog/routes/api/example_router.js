// 引入路由模块并实例化
const Router = require('koa-router');
const router = new Router();
// 导入对应的控制器
const example_controller = require('./../../app/controller/example_controller');

// 为控制器的方法定义请求路径和请求方式
router.get('/example/get', example_controller.getExample);
router.post('/example/post', example_controller.postExample);

module.exports = router;