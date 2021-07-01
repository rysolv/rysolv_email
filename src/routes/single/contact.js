const express = require('express');

const ContactController = require('../../controllers/single/contact');

const router = express.Router();

router.post('/contact', ContactController.contact);

module.exports = router;
