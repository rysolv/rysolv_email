const { emailClient } = require('../../connect');
const { issueResolved, repoFeeEarned } = require('../../templates/funding');
const { usersWhoFunded, repoPayout } = require('../../db');

// Notify users who funded an issue
exports.issueResolved = async (req, res, next) => {
  const { issueId } = req.body;
  const { subject, text } = issueResolved;

  try {
    const users = await usersWhoFunded({ issueId });
    const issueUrl = `https://rysolv.com/issues/detail/${issueId}`;

    const emails = users.map(({ email, name, totalFunded, userContribution }) => {
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
    });

    await emailClient.sendEmailBatch(emails);

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};

// Notify users who funded an issue
exports.repoPayout = async (req, res, next) => {
  const { fundingId } = req.body;
  const { subject, text } = repoFeeEarned;

  try {
    const repoData = await repoPayout({ fundingId });
    const today = new Date();
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const formattedDate = monthEnd.toISOString().slice(0, 10);

    const emails = repoData.map(
      ({
        email,
        issueId,
        issueName,
        payoutUrl,
        repoName,
        repoPayoutAmount,
        repoTotal,
        userId,
        username,
      }) => {
        const issueUrl = `https://rysolv.com/issues/detail/${issueId}`;
        const customSubject = subject({ repoName, repoPayoutAmount });

        const textBody = text({
          email,
          issueName,
          issueUrl,
          payoutUrl,
          repoData,
          repoName,
          repoPayoutAmount,
          repoTotal,
          userId,
          payoutDate: formattedDate,
          username,
        });
        return {
          From: process.env.SENDER,
          To: email,
          Subject: customSubject,
          TextBody: textBody,
          MessageStream: 'outbound',
        };
      },
    );

    await emailClient.sendEmailBatch(emails);

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};
