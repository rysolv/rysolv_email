const text = ({ paymentMethod }) => `
You've updated your default payment method.

All future invoices will be charged to: ${paymentMethod}

If you did not authorize this change, please contact us at support@rysolv.com.
`;

module.exports = text;
