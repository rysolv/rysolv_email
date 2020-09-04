const express = require('express');
const PRController = require('../controllers/pullRequests');

const router = express.Router();

// POST ROUTES
router.post('/additionalPullRequest', PRController.additionalPullRequest);
router.post('/issueClosed', PRController.newComment);
router.post('/issueResolved', PRController.issueResolved);
router.post('/merged', PRController.merged);
router.post('/newComment', PRController.newComment);
router.post('/newFunding', PRController.newFunding);
router.post('/submittedPullRequest', PRController.submittedPullRequest);

module.exports = router;
