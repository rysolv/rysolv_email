const { oneIssue } = require('./issues');
const { oneUser, usersWhoFunded } = require('./users');
const { recordNotification } = require('./notifications');

module.exports = {
  oneIssue,
  oneUser,
  recordNotification,
  usersWhoFunded,
};
