const { oneUser } = require('../../db');
const { sendEmail } = require('../../sendEmail');
const { signUp } = require('../../templates/hiring');
exports.signUp = async (req, res, next) => {
  const { userId } = req.body;
  const { subject, text } = signUp;

  try {
    const { email, username } = await oneUser({ userId });
    const textBody = text({ username });

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
