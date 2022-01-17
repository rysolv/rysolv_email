const text = ({ contractBody, companyName, contractTitle, signedDate }) => `
You've updated you subscription.

${companyName} is now enrolled in the ${contractTitle}.


This agreement is effective as of ${signedDate}.

----------------------------------------------------------
${contractTitle}:

${contractBody}

----------------------------------------------------------
`;
module.exports = text;
