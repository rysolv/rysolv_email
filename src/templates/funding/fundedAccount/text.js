const text = ({ balance, fundedAmount }) => {
  return `
    Your account has been funded with $${fundedAmount}.

    Your total account balance is ${balance}.

    These funds can be contributed to any issue on Rysolv. 

    Check out new issues at https://rysolv.com/issues

    Thanks for contributing,

    The Rysolv Team
    https://rysolv.com
  `;
};

module.exports = text;