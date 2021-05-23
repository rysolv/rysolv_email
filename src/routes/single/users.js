const express = require('express');

const UserController = require('../../controllers/single/users');

const router = express.Router();

router.post('/claimBounty', UserController.claimBounty);
router.post('/recommendations', UserController.userRecommendations);
router.post('/welcome', UserController.welcome);

module.exports = router;
