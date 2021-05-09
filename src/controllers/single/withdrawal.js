const { approvedWithdrawal } = require('../../templates/withdrawal');
const { sendEmail } = require('../../sendEmail');

exports.approvedWithdrawal = async (req, res, next) => {
  const { email, userId, withdrawalAmount } = req.body;
  const { subject, text } = approvedWithdrawal;

  try {
    const textBody = text({ email, withdrawalAmount });

    await sendEmail({
      email,
      notifyAdmin: true,
      subject,
      textBody,
      userId,
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};
