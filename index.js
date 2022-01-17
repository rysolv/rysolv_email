require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

// Batch emails
const batchFunding = require('./src/routes/batch/funding');
// const batchAttempting = require('./src/routes/batch/attempting');
// const batchIssues = require('./src/routes/batch/issues');
// const batchPullRequests = require('./src/routes/batch/pullRequests');
// const batchWatching = require('./src/routes/batch/watching');

// Single emails
const singleCompany = require('./src/routes/single/company');
const singleContact = require('./src/routes/single/contact');
const singleFunding = require('./src/routes/single/funding');
const singleHiring = require('./src/routes/single/hiring');
const singleMessage = require('./src/routes/single/messages');
const singleUser = require('./src/routes/single/users');
const singleWithdrawal = require('./src/routes/single/withdrawal');
// const singleAttempting = require('./src/routes/single/attempting');
// const singleIssues = require('./src/routes/single/issues');
// const singlePullRequests = require('./src/routes/single/pullRequests');
// const singleWatching = require('./src/routes/single/watching');

// Ping
app.get('/', (req, res) => res.status(200).send('pong'));

// Batch routes
app.use('/b/funding', batchFunding);
// app.use('/b/attempting', batchAttempting);
// app.use('/b/issues', batchIssues);
// app.use('/b/pullRequests', batchPullRequests);
// app.use('/b/watching', batchWatching);

// Single routes
app.use('/s/company', singleCompany);
app.use('/s/contact', singleContact);
app.use('/s/funding', singleFunding);
app.use('/s/hiring', singleHiring);
app.use('/s/messages', singleMessage);
app.use('/s/users', singleUser);
app.use('/s/withdrawal', singleWithdrawal);
// app.use('/s/attempting', singleAttempting);
// app.use('/s/issues', singleIssues);
// app.use('/s/pullRequests', singlePullRequests);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Throw errors from anywhere in the app
app.use((error, req, res) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
