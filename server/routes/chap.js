const express = require('express')
const ChapController = require('../controllers/ChapController')
const router = express.Router()

router.post('/', ChapController.list)
router.post('/add', ChapController.create)

module.exports = router;
