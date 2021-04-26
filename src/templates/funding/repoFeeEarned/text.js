const text = ({
  issueName,
  issueUrl,
  payoutDate,
  payoutUrl,
  repoName,
  repoPayoutAmount,
  repoTotal,
  username,
}) => `
    Congratulations ${username},

    $${repoPayoutAmount} has been contributed to ${repoName} from ${issueName} (${issueUrl})

    The total balance of $${repoTotal} will be paid out to ${payoutUrl} on ${payoutDate}.

    The Rysolv Team
    https://rysolv.com
  `;

module.exports = text;
