const ENDPOINT_URL = process.env.NODE_ENV === 'production'
  ? process.env.ENDPOINT_URL : process.env.ENDPOINT_URL_LOCAL;

const generateFundingComment = ({ amount, fundedAmount, issueId, username }) => `**${username}** has contributed **$${amount.toFixed(2)}** to [this issue](${ENDPOINT_URL}/${issueId}) on Rysolv.

    The total bounty is now **$${fundedAmount.toFixed(2)}**. Solve [this issue](${ENDPOINT_URL}/${issueId}) on Rysolv to earn this bounty.
  `;

module.exports = { generateFundingComment };
