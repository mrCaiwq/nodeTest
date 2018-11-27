const mongoose = require('mongoose')

var Schema = mongoose.Schema;

//新建模式
const registeredSchema = new Schema({
    username: String,
    token: String,
    password: String,
    cellphone: String,
    create_time: Date,
},{
    collection: 'users',
    versionKey: false,
});

module.exports = mongoose.model('registered', registeredSchema)