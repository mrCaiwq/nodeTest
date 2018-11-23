const mongoose = require('mongoose')

var Schema = mongoose.Schema;

const exampleSchema = new Schema({
    msg:{
        type: String,
        required:true
    }
}, {
    collection: 'example',
    versionKey: false,
});

module.exports = mongoose.model('example', exampleSchema)