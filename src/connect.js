const client = new postmark.ServerClient(process.env.POSTMARK_KEY);

module.exports = { client };
