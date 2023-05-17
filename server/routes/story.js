const express = require('express')
const StoryController = require('../controllers/StoryController')
const router = express.Router()

router.post('/', StoryController.find)
router.post('/add', StoryController.create)

module.exports = router;
