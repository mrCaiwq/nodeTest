const Example_col = require('../model/example')

//get请求返回所有数据
const getExample = async (ctx, next) => {
    const req = ctx.request.body;
    
    const examples = await Example_col.find({}, { _id: 0});
    ctx.status = 200;
    ctx.body = {
        data:{
            data: examples,
        },
        meta:{
            msg: 'get request!!',
            code: 0,
        }
    }
}

// post 带一个msg参数，并插入数据库
const postExample = async (ctx, next) => {
    const req = ctx.request.body;

    ctx.status = 200;
    if (!req.msg || typeof req.msg != 'string') {
        ctx.status = 401;
        ctx.body = {
            data: req,
            meta: {
                msg: 'post request!!',
                desc: `parameter error!! msg: ${req.msg}`,
            }
        }
        return;
    }
    const result = await Example_col.create({msg: req.msg});

    ctx.body = {
        data: result,
        meta:{
            msg: 'post request!!',
            desc: 'insert success!',
            code: 0
        }
    }
}

// 暴露出这两个方法，在路由中使用
module.exports = { 
    getExample,
    postExample
}