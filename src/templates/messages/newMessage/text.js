const text = ({ body, companyName, createdDate, fromUser, positionTitle, threadId }) => `
You have a new message from ${fromUser} on Rysolv.

${positionTitle} at ${companyName}:

${body}

Sent ${createdDate}

View messages: https://rysolv.com/messages/${threadId}
`;

module.exports = text;
