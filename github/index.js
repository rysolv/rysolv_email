const { authenticate } = require('./auth');
const { formatGithubComment, formatIssueUrl } = require('./helpers');
const { generateFundingComment } = require('./constants');

const postFundingComment = async ({ amount, fundedAmount, githubUrl, issueId, username }) => {
  const { GITHUB } = await authenticate();

  const { issueNumber, owner, repo } = formatIssueUrl(githubUrl);
  const body = formatGithubComment(generateFundingComment({ amount, fundedAmount, issueId, username }));

  await GITHUB.issues.createComment({
    body,
    issue_number: issueNumber,
    owner,
    repo,
  });
};

module.exports = { postFundingComment };
