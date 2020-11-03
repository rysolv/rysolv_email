const text = ({ contribution, fundedAmount, issueUrl }) => {
  return `
    You contributed $${contribution} to an issue on Rysolv.

    The total bounty on this issue is now $${fundedAmount}

    Issue: ${issueUrl}

    You will be notified via email when this issue is resolved.

    Thanks for contributing,

    The Rysolv Team
    https://rysolv.com
  `;
};

module.exports = text;
