const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

// Batch emails
const batchAttempting = require('./src/routes/batch/attempting');
const batchIssues = require('./src/routes/batch/issues');
const batchPullRequests = require('./src/routes/batch/pullRequests');
const batchWatching = require('./src/routes/batch/watching');

// Single emails
const singleAttempting = require('./src/routes/single/attempting');
const singleIssues = require('./src/routes/single/issues');
const singlePullRequests = require('./src/routes/single/pullRequests');
const singleWatching = require('./src/routes/single/watching');

// Batch routes
app.use('/b/attempting', batchAttempting);
app.use('/b/issues', batchIssues);
app.use('/b/pullRequests', batchPullRequests);
app.use('/b/watching', batchWatching);

// Single routes
app.use('/s/attempting', singleAttempting);
app.use('/s/issues', singleIssues);
app.use('/s/pullRequests', singlePullRequests);
app.use('/s/watching', singleWatching);

// Default
app.use('/', (req, res, next) => {
	res.status(200).json({
		message: 'Rysolv email api',
	});
});

// Error handling: if you reach this line, it is because the request did not meet any of the prior routes
app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	// forward the error
	next(error);
});

// This allows us to throw errors from anywhere in the app
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

module.exports = app;
