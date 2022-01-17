const express = require('express');

const CompanyController = require('../../controllers/single/company');

const router = express.Router();

router.post('/contractAccepted', CompanyController.contractAccepted);
router.post('/updatePayment', CompanyController.updatePayment);

module.exports = router;
