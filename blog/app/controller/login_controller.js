const user_col = require('../model/registered')
const jwt = require('jsonwebtoken')
const createToken = require('../../utils/createToken.js')
const crypto = require('crypto')

//登陆post请求
const postLogin = async (ctx, next) => {
    const req = ctx.request.body;
    ctx.status = 200;
    var check = new checkError()
    let checkMsg = await check.checkPassword(req)
    // console.log(check,'=====')
    if(checkMsg.isOk){
        ctx.body = {
            data: checkMsg.data,
            meta: {
                code: 0,
                msg: checkMsg.msg
            }
        }
    }else{
        ctx.body = {
            data:[],
            meta: {
                code: '-1',
                msg: checkMsg.msg,
            }
        }
    }
}


const checkError = function (){
    var obj = new Object()
    //检查是否已注册
    obj.checkIsRegister = async (cellphone) => {
            // console.log(cellphone)
            let doc = {}
            await user_col.findOne({cellphone}, (err, doc1) => {
                // console.log(doc1)
                if(err){
                    console.log(err,'===')
                    return;
                }
                doc = doc1
            })   
            return doc;
    }
    //验证密码
    obj.checkPassword = async (data) => {
        let isTrue = false;
        var doc = await obj.checkIsRegister(data.cellphone)

        const hashPassword = crypto.createHash('sha1');
        let userPassword = hashPassword.update(data.password).digest('hex');
        if(!doc){
            // console.log('该手机尚未注册')
            return {isOk: isTrue, msg:'该手机尚未注册!'};
        }else if(userPassword == doc.password){
            isTrue = true;
            let token = createToken.createToken(doc.userName + doc.password)
            doc.token = token
            await user_col.update({_id: doc.id}, doc ,(err,result) => {
                if(err){
                    console.log('有一个错误:' + err);
                    return;
                }
            })           
            delete doc['password'] 
            return {isOk: isTrue, msg: '登陆成功',data:doc}
        }else{
            return {isOk: isTrue, msg: '账号或密码错误'}
        }
    }
    return obj;
}

module.exports = {
    postLogin
}