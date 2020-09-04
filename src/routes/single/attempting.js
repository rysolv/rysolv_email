const express = require('express');
const AttemptingController = require('../controllers/attempting');

const router = express.Router();

// POST ROUTES
router.post('/issueClosed', AttemptingController.issueClosed);
router.post('/issueResolved', AttemptingController.issueClosed);
router.post('/newFunding', AttemptingController.newFunding);
router.post('/newPullRequest', AttemptingController.newPullRequest);

module.exports = router;
