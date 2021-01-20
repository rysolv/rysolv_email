const express = require('express');
const FundingController = require('../../controllers/single/funding');

const router = express.Router();

router.post('/earnedBounty', FundingController.earnedBounty);
router.post('/fundedAccount', FundingController.fundedAccount);
router.post('/fundedIssue', FundingController.fundedIssue);

module.exports = router;
