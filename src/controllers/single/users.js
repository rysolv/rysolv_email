const { oneUser } = require('../../db');
const { recommendations, welcome } = require('../../templates/users');
const { sendEmail } = require('../../sendEmail');

// Notify users of recommendations
exports.userRecommendations = async (req, res, next) => {
  const { topIssues, userId } = req.body;
  const { generateHtmlText, generatePlainText, generateSubject } = recommendations;

  try {
    const { email, firstName, username } = await oneUser({ userId });
    const numOfIssues = topIssues.length;

    await sendEmail({
      email,
      htmlBody: generateHtmlText({ topIssues, username }),
      subject: generateSubject({ firstName, numOfIssues }),
      textBody: generatePlainText({ topIssues, username }),
      userId,
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};

exports.welcome = async (req, res, next) => {
  const { userId } = req.body;
  const { subject, text } = welcome;

  try {
    const { email } = await oneUser({ userId });

    await sendEmail({
      email,
      subject,
      textBody: text,
      userId,
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};
