const { formatDollar } = require('../../../helpers');

const subject = ({ amount }) => `$${formatDollar(amount)} added to your Rysolv account!`;

module.exports = subject;
