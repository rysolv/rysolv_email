const express = require('express');
const UserController = require('../../controllers/single/users');

const router = express.Router();

router.post('/welcome', UserController.welcome);

module.exports = router;
