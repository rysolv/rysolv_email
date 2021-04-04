module.exports = ({ issueList, username }) => `
  Hello ${username},

  Check out some new issues you might like.

  ${issueList.map(({ title, description, fundedAmount }) => `
    ${title}
    ${fundedAmount}
    ${description}
  `)}
`;
