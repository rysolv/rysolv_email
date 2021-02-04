const express = require('express');
const PRController = require('../../controllers/single/pullRequests');

const router = express.Router();

router.post('/submittedPullRequest', PRController.submittedPullRequest);

// router.post('/additionalPullRequest', PRController.additionalPullRequest);
// router.post('/issueClosed', PRController.newComment);
// router.post('/issueResolved', PRController.issueResolved);
// router.post('/merged', PRController.merged);
// router.post('/newComment', PRController.newComment);
// router.post('/newFunding', PRController.newFunding);

module.exports = router;
