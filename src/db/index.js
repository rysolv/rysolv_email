const companies = require('./companies');
const funding = require('./funding');
const issues = require('./issues');
const messages = require('./messages');
const notifications = require('./notifications');
const users = require('./users');

module.exports = {
  ...companies,
  ...funding,
  ...issues,
  ...messages,
  ...notifications,
  ...users,
};
