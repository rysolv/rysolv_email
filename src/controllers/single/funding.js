const {
  approvedBounty,
  earnedBounty,
  fundedAccount,
  fundedIssue,
} = require('../../templates/funding');
const { oneUser, oneIssue, getEarnedBounty } = require('../../db');
const { postFundingComment } = require('../../../github');
const { sendEmail } = require('../../sendEmail');

exports.approvedBounty = async (req, res, next) => {
  const { fundingId } = req.body;
  const { subject, text } = approvedBounty;

  try {
    const { email, fundedAmount, username, userId } = await getEarnedBounty({
      fundingId,
    });
    const textBody = text({ fundedAmount, username });

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

exports.earnedBounty = async (req, res, next) => {
  const { fundingId } = req.body;
  const { subject, text } = earnedBounty;

  try {
    const { email, rep, userId, username, userPayout } = await getEarnedBounty({
      fundingId,
    });
    const customSubject = subject({ userPayout });
    const textBody = text({ rep, username, userPayout });

    await sendEmail({
      email,
      notifyAdmin: true,
      subject: customSubject,
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

exports.fundedIssue = async (req, res, next) => {
  const { amount, email, issueId, userId } = req.body;
  const { subject, text } = fundedIssue;

  try {
    const { username } = await oneUser({ userId }) || {};
    const { fundedAmount, githubUrl } = await oneIssue({ issueId });
    const formattedUsername = userId ? `**${username}**` : 'An anonymous user';
    const issueUrl = `https://rysolv.com/issues/detail/${issueId}`;
    const textBody = text({ amount, fundedAmount, issueUrl });

    await sendEmail({
      email,
      notifyAdmin: true,
      subject,
      textBody,
      userId,
    });

    await postFundingComment({
      amount,
      fundedAmount,
      githubUrl,
      issueId,
      username: formattedUsername,
    });

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

    await sendEmail({
      email,
      notifyAdmin: true,
      subject: customSubject,
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
