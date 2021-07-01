const text = ({ body, email, source }) => `
  New message from: ${email}

  ${body}

  Sent from ${source} page.
`;

module.exports = text;
