const User = require('../models/user')
const request = require('request')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const register = (req, res) => {
    const { username, password } = req.body
    User.create({
        username: username,
        password: password
    })
    .then((data) => {
        console.log(data)
        res.status(201).json({
            message: `Account ${data.username} registered`,
            data
        })
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json({
            message: err.message
        })
    })
}

const login = (req, res) => {
    const { username, password } = req.body
    User.findOne ({
        username: username
    })
    .then((data_user) => {
        if (data_user) {
            let token = jwt.sign({ id: data_user._id, username: data_user.username}, process.env.jwt_secret)
            res.status(200).json({
                message: `Successfully login`,
                token
            })
        } else {
            res.status(400).json({
                message: `usernmae/password is invalid`
            })
        }
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports = {
    register,
    login
}