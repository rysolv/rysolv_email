const text = ({ fundedAmount, rep, username }) => {
  return `
      Congratulations ${username},

      Your pull request was accepted, and you earned the outstanding bounty. 
        
      Your account has been credited with $${fundedAmount} and ${rep} coins!
        
      Thanks for contributing,
      
      The Rysolv Team
      https://rysolv.com
    `;
};

module.exports = text;
