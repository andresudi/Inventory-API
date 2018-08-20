const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unqiue: true
    },
    password: {
        type: String,
        required: true,
        min: [6, 'Password harus memiliki jumlah karakter minimal 6']
    }
}, {
    timestamps: true
})

var User = mongoose.model('User', userSchema)

module.exports = User