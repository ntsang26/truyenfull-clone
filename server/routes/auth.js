const express = require('express')
const AuthController = require('../controllers/AuthController')
const router = express.Router()

router.post('/login', AuthController.login)
// router.post('/create-user', AuthController.create)

module.exports = router;
