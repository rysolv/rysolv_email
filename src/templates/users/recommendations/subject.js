const generateSubject = ({ firstName, numOfIssues }) => `
  ${firstName}, ${numOfIssues} new issues for you!
`;

module.exports = generateSubject;
