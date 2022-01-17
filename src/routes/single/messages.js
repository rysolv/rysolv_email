const express = require('express');

const MessageController = require('../../controllers/single/messages');

const router = express.Router();

router.post('/new', MessageController.newMessage);

module.exports = router;
