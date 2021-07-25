const text = ({ companyName, companyUrl, contactName, email }) => `
  A new user has joined the beta!

  Contact: ${contactName}

  Email: ${email}

  Company: ${companyName}

  URL: ${companyUrl}
`;

module.exports = text;
