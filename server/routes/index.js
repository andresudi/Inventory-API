var express = require('express');
var router = express.Router();
const {register,login} = require('../controllers/userController')
const {createItem, searchItem} = require('../controllers/itemController')

router.post('/register', register)
router.post('/login', login)

router.post('/create', createItem)
router.get('/:q?', searchItem)

module.exports = router;
