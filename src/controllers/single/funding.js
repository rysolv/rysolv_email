const { client } = require('../../connect');
const {
  earnedBounty,
  fundedAccount,
  fundedIssue,
} = require('../../templates/funding');
const { oneUser, oneIssue } = require('../../db');
const { postFundingComment } = require('../../../github');

exports.earnedBounty = async (req, res, next) => {
  const { fundedAmount, rep, userId } = req.body;
  const { subject, text } = earnedBounty;

  try {
    const { email, username } = await oneUser({ userId });
    const textBody = text({ fundedAmount, rep, username });

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
    next(error);
  }
};

exports.fundedIssue = async (req, res, next) => {
  const { amount, email, issueId, userId } = req.body;
  const { subject, text } = fundedIssue;

  try {
    const { username } = await oneUser({ userId }) || {};
    const { fundedAmount, githubUrl } = await oneIssue({ issueId });
    const formattedUsername = userId ? `**${username}**` : 'An anonymous user';
    const issueUrl = `https://rysolv.com/issues/detail/${issueId}`;
    const textBody = text({ amount, fundedAmount, issueUrl });

    await client.sendEmail({
      From: process.env.SENDER,
      To: email,
      Subject: subject,
      TextBody: textBody,
      MessageStream: 'outbound',
    });

    await postFundingComment({ amount, fundedAmount, githubUrl, issueId, username: formattedUsername });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};

exports.fundedAccount = async (req, res, next) => {
  const { amount, userId } = req.body;
  const { subject, text } = fundedAccount;

  try {
    const { balance, email } = await oneUser({ userId });
    const customSubject = subject({ amount });
    const textBody = text({ amount, balance });
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
    next(error);
  }
};
