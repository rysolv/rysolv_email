const { oneUser } = require('../../db');
const { claimBounty, recommendations, welcome } = require('../../templates/users');
const { sendEmail } = require('../../sendEmail');

// Notify user to sign into account to claim bounty
exports.claimBounty = async (req, res, next) => {
  const { fundedAmount, userId } = req.body;
  const { subject, text } = claimBounty;

  try {
    const { email } = await oneUser({ userId });
    const textBody = text({ fundedAmount });

    await sendEmail({
      email,
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

// Notify users of recommendations
exports.userRecommendations = async (req, res, next) => {
  const { topIssues, userId } = req.body;
  const { generateHtmlText, generatePlainText, generateSubject } = recommendations;

  try {
    const { email, username } = await oneUser({ userId });
    const numOfIssues = topIssues.length;

    await sendEmail({
      email,
      htmlBody: generateHtmlText({ topIssues, username }),
      subject: generateSubject({ numOfIssues, username }),
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
