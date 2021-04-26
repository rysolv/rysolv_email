const text = ({ rep, username, userPayout }) => `
  Congratulations ${username},

  Your pull request was accepted, and you earned the outstanding bounty.

  Your account has been credited with $${userPayout} and ${rep} coins!

  Thanks for contributing,

  The Rysolv Team
  https://rysolv.com
`;

module.exports = text;
