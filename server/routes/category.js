const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const router = express.Router()

router.post('/', CategoryController.find)
router.post('/add', CategoryController.create)

module.exports = router;
