const register_col = require('../model/registered')
const jwt = require('jsonwebtoken')
const createToken = require('../../utils/createToken.js')
const crypto = require('crypto')
const moment = require('moment')

//注册post请求
const postRegister = async (ctx, next) => {
    const req = ctx.request.body;
    ctx.status = 200;
    var check = new checkError()
    if(!check.checkMsg(req).isTrue){
        ctx.status = 200;
        let errMsg = check.checkMsg(req)
        ctx.body = {
            data: req,
            meta: {
                msg: errMsg,
                code: '-1'
            }
        }
        return;
    }
    const hashPassword = crypto.createHash('sha1')
    // const hashToken = crypto.createHash('sha1')
    let user = {
        username: req.username,
        password: hashPassword.update(req.password).digest('hex'),
        cellphone: req.cellphone,
        token: createToken.createToken(req.username+req.password),
    }
    user.create_time = moment().format();
    let doc = await check.checkName(req.username)
    if(doc){
        console.log('用户名已存在');
        ctx.status = 200;
        ctx.body = {
            data:[],
            meta:{
                msg:'用户名已存在',
                code: '-1'
            }
        }
    }else{
        await register_col.create({
            username: user.username,
            password: user.password,
            token: user.token,
            create_time: user.create_time,
            cellphone: user.cellphone
        });
        delete user["password"]
        ctx.status = 200;
        ctx.body = {
            data: user,
            meta:{
                msg:'注册成功',
                code: '0'
            }
        }
    }

}
//验证哪种错误
const checkError = function() {
    var obj = new Object()
    obj.checkMsg = (data => {
        let isOk = false
        if(!data){
            return {isTrue: isOk, msg: '请完善信息后提交'}
        }else if(!data.username){
            return {isTrue: isOk, msg: '用户名不能为空'}
        }else if(!data.cellphone){
            return {isTrue: isOk, msg: '用户手机不能为空'}
        }else if(!data.password){
            return {isTrue: isOk, msg: '用户密码不能为空'}
        }
        return {isTrue: true}
    })
    obj.checkName = (username => {
        return new Promise((resolve, reject) => {
            register_col.findOne({ username }, (err, doc) => {
                if(err){
                    reject(err)
                }
                resolve(doc)
            })
        })
    })
    return obj
}


// 暴露出这两个方法，在路由中使用
module.exports = { 
    postRegister,
}