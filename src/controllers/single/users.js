const { client } = require('../../connect');
const { oneUser } = require('../../db');
const { welcome } = require('../../templates/users');

exports.welcome = async (req, res, next) => {
  const { userId } = req.body;
  const { subject, text } = welcome;

  try {
    const { email } = await oneUser({ userId });

    await client.sendEmail({
      From: process.env.SENDER,
      To: email,
      Subject: subject,
      TextBody: text,
      MessageStream: 'outbound',
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};
