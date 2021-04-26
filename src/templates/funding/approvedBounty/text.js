const text = ({ fundedAmount, username }) => `
  Congratulations ${username},

  Your pull request was accepted, and you earned the outstanding bounty of $${fundedAmount}.

  Visit rysolv.com to accept your bounty!

  Thanks for contributing,

  The Rysolv Team
  https://rysolv.com
`;

module.exports = text;
