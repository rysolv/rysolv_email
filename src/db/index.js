const funding = require('./funding');
const issues = require('./issues');
const notifications = require('./notifications');
const users = require('./users');

module.exports = {
  ...funding,
  ...issues,
  ...notifications,
  ...users,
};
