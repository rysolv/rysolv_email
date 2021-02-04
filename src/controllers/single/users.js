const { oneUser } = require('../../db');
const { sendEmail } = require('../../connect');
const { welcome } = require('../../templates/users');

exports.welcome = async (req, res, next) => {
  const { userId } = req.body;
  const { subject, text } = welcome;

  try {
    const { email } = await oneUser({ userId });

    await sendEmail({
      email,
      subject,
      textBody: text,
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};
