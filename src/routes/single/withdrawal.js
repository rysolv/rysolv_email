const express = require('express');

const WithdrawalController = require('../../controllers/single/withdrawal');

const router = express.Router();

router.post('/approvedWithdrawal', WithdrawalController.approvedWithdrawal);

module.exports = router;
