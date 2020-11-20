const { client } = require('../../connect');
const { issueResolved } = require('../../templates/funding');
const { usersWhoFunded } = require('../../db');

// Notify users who funded an issue
exports.issueResolved = async (req, res, next) => {
  const { issueId } = req.body;
  const { subject, text } = issueResolved;

  try {
    const users = await usersWhoFunded({ issueId });
    const issueUrl = `https://rysolv.com/issues/detail/${issueId}`;

    const emails = users.map(
      ({ email, name, totalFunded, userContribution }) => {
        const textBody = text({
          issueUrl,
          name,
          totalFunded,
          userContribution,
        });
        return {
          From: process.env.SENDER,
          To: email,
          Subject: subject,
          TextBody: textBody,
          MessageStream: 'outbound',
        };
      },
    );

    await client.sendEmailBatch(emails);

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};
