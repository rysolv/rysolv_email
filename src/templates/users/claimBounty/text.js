const text = ({ fundedAmount, githubUrl, issueId }) => `
  Welcome to Rysolv!

  Your pull request (${githubUrl}) resolved an issue with an outstanding bounty (https://rysolv.com/issues/detail/${issueId}).

  Sign in with your Github account (https://rysolv.com/signin) to claim your ${fundedAmount} bounty.

  Questions? Head over to our How To page (https://rysolv.com/how-to) or reach out to support@rysolv.com.
  
  The Rysolv Team
  https://rysolv.com
`;
module.exports = text;
