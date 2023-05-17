const express = require('express')
const AuthorController = require('../controllers/AuthorController')
const router = express.Router()

router.post('/', AuthorController.find)
router.post('/add', AuthorController.create)

module.exports = router;
