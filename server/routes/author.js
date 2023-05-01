const express = require('express')
const AuthorController = require('../controllers/AuthorController')
const router = express.Router()

router.post('/add', AuthorController.create)

module.exports = router;
