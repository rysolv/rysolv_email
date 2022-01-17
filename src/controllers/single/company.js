const { welcome, signedContract, paymentUpdated } = require('../../templates/company');
const { oneCompany } = require('../../db');
const { sendEmail } = require('../../sendEmail');

exports.contractAccepted = async (req, res, next) => {
  const { companyId } = req.body;
  const { subject: welcomeSubject, text: welcomeText } = welcome;
  const { subject: contractSubject, text: contractText } = signedContract;

  try {
    const { userEmails, companyName, contracts } = await oneCompany({
      companyId,
    });

    let subject;
    let textBody;

    // Most recent signed contract
    const { contractBody, contractTitle, signedDate } = contracts[0];

    if (contracts.length > 1) {
      // Signed new contract
      subject = contractSubject({ contractTitle });
      textBody = contractText({
        companyName,
        contractBody,
        contractTitle,
        signedDate: new Date(signedDate).toLocaleDateString('en-US'),
      });
    } else {
      // First contract: welcome email
      subject = welcomeSubject;
      textBody = welcomeText({ companyName });
    }

    // Send to all authorized users
    userEmails.forEach(async (email) => {
      await sendEmail({
        email,
        notifyAdmin: true,
        subject,
        textBody,
      });
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};

exports.updatePayment = async (req, res, next) => {
  const { companyId } = req.body;
  const { subject, text } = paymentUpdated;

  try {
    const { userEmails, paymentMethod } = await oneCompany({
      companyId,
    });

    const textBody = text({ paymentMethod });

    // Send to all authorized users
    userEmails.forEach(async (email) => {
      await sendEmail({
        email,
        notifyAdmin: true,
        subject,
        textBody,
      });
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};
