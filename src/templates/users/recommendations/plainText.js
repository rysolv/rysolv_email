module.exports = ({ topIssues, username }) => `
  Hello ${username},

  Check out some new issues you might like.

  ${topIssues.map(({ fundedAmount, id, name }) => `
    ${name}
    $${fundedAmount}
    https://rysolv.com/issues/detail/${id}
  `).join('')}


  The Rysolv Team
  https://rysolv.com

  Unsubscribe: 
  {{{ pm:unsubscribe }}}
`;
