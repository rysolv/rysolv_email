const template = require('./template');
const { client } = require('../connect');

// Testing
exports.newPayment = async (req, res, next) => {
	try {
		await client.sendEmail({
			From: 'support@rysolv.com',
			To: 'support@rysolv.com',
			Subject: 'Hello from Rysolv',
			HtmlBody: template,
			TextBody: 'Hello from rysolv!',
			MessageStream: 'outbound',
		});

		res.status(200).json({
			email: 'Boom! Sent an email',
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
