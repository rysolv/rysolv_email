const { client } = require('../../connect');
const { oneUser, oneIssue } = require('../../db');
const { fundedAccount, fundedIssue } = require('../../templates/funding');

exports.fundedIssue = async (req, res, next) => {
  const { contribution, issueId, userId } = req.body;
  const { subject, text } = fundedIssue;

  try {
    const { email } = await oneUser({ userId });
    const { fundedAmount } = await oneIssue({ issueId });
    const issueUrl = `https://rysolv.com/issues/detail/${issueId}`;
    const textBody = text({ contribution, fundedAmount, issueUrl });

    await client.sendEmail({
      From: process.env.SENDER,
      To: email,
      Subject: subject,
      TextBody: textBody,
      MessageStream: 'outbound',
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.fundedAccount = async (req, res, next) => {
  const { fundedAmount, userId } = req.body;
  const { subject, text } = fundedAccount;

  try {
    const { balance, email } = await oneUser({ userId });
    const customSubject = subject({ fundedAmount });
    const textBody = text({ balance, fundedAmount });

    await client.sendEmail({
      From: process.env.SENDER,
      To: email,
      Subject: customSubject,
      TextBody: textBody,
      MessageStream: 'outbound',
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};