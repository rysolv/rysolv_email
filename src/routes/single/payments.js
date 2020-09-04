const express = require('express');
const PaymentsController = require('../controllers/attempting');

const router = express.Router();

// POST ROUTES
router.post('/fundedAccount', PaymentsController.fundedAccount);
router.post('/fundedIssue', PaymentsController.fundedIssue);
router.post('/fundingReturned', PaymentsController.fundingReturned);
router.post('/issueResolved', PaymentsController.issueResolved);

module.exports = router;
