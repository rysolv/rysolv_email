const express = require('express');

const FundingController = require('../../controllers/batch/funding');

const router = express.Router();

router.post('/issueResolved', FundingController.issueResolved);
router.post('/repoPayout', FundingController.repoPayout);

module.exports = router;
