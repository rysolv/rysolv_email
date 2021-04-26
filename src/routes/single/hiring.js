const express = require('express');
const HiringController = require('../../controllers/single/hiring');

const router = express.Router();

router.post('/signup', HiringController.signUp);

module.exports = router;
