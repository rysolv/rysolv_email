const text = ({ name, issueUrl, totalFunded, userContribution }) => `    
    You contributed $${userContribution} to this issue.
    
    ${name} (${issueUrl})

    The total bounty on this issue was $${totalFunded}.

    Thanks for contributing,

    The Rysolv Team
    https://rysolv.com
  `;

module.exports = text;
