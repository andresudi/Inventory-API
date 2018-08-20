const mongoose = require('mongoose')
var Schema = mongoose.Schema
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

var itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: SchemaTypes.Double,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    tags: {
        type: [String],
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true
})

var Item = mongoose.model('Item', itemSchema)

module.exports = Item