const express = require('express');
const WatchingController = require('../controllers/watching');

const router = express.Router();

// POST Routes
router.post('/newFunding', WatchingController.newFunding);
router.post('/newPullRequest', WatchingController.newPullRequest);

module.exports = router;
