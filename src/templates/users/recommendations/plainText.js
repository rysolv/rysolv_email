module.exports = ({ topIssues, username }) => `
  Hello ${username},

  Check out some new issues you might like.

  ${topIssues.map(({ fundedAmount, name }) => `
    ${name}
    ${fundedAmount}
  `).join('')}
`;
