const generateSubject = ({ numOfIssues, username }) => `
  ${username}, ${numOfIssues} new ${numOfIssues === 1 ? 'issue' : 'issues'} for you!
`;

module.exports = generateSubject;
