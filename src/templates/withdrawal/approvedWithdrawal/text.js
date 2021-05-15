const { formatDollar } = require('../../../helpers');

const text = ({ email, withdrawalAmount }) => `
  We have received your withdrawal request for $${formatDollar(withdrawalAmount)} to be sent to ${email}.
  
  Your money is on its way, and you should receive a notification from Paypal soon.

  The Rysolv Team
  https://rysolv.com
`;

module.exports = text;
