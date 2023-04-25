const express = require('express');
const StoryController = require('../controllers/StoryController');
const router = express.Router();

router.get('/', StoryController.list);
router.post('/add', StoryController.create)

module.exports = router;
