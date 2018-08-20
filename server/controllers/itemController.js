const Item = require('../models/item')
const axios = require('axios')

const createItem = (req, res) => {
    const { name, price, stock, tags } = req.body
    Item.create({
        name: name,
        price: price,
        stock: stock,
        tags: tags
    })
    .then((data) => {
        res.status(201).json({
            data
        })
    })
    .catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

const searchItem = (req, res) => {
    let q = req.params.q
    let options = {
        method: 'GET',
        url: `http://localhost:3000/?q=${q}`
    }

    axios(options)
    .then( (response) => {
        res.status(200).json({
            "message": response.message,
            "data": response.data
        })
    })
    .catch( err => {
        res.status(500).json({
            "message": err.message
        })
    })
}

module.exports = {
    createItem,
    searchItem
}