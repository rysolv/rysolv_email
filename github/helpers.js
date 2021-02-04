const formatGithubComment = (text) => {
  const formattedText = JSON.stringify(text).replace(/\\n/g, '<br/>');
  return formattedText.replace(/"/g, '');
};

const formatIssueUrl = (value) => {
  const { hostname, pathname } = new URL(value);
  const url = pathname.split('/');
  url.shift();

  const issueNumber = url[3];
  const owner = url[0];
  const repo = url[1];

  const containsGithub = hostname === 'github.com';
  const validIssueNumber = !Number.isNaN(parseInt(issueNumber, 10) + 1);
  const validIssues = url[2] === 'issues';
  const validLength = url.length === 4;

  if (containsGithub && validIssueNumber && validIssues && validLength) {
    return {
      issueNumber,
      owner,
      repo,
    };
  }
  return null;
};

module.exports = { formatGithubComment, formatIssueUrl };
