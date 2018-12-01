const jwt = require('jsonwebtoken')

//创建token
const createToken = (data => {
    let salt = 'aaa'
    const token = jwt.sign({
        user: data,
    }, salt, {
        expiresIn: 60*60*1,
    })
    return token
})

module.exports = {
    createToken,
} 