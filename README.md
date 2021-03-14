# rysolv_email api

This API handles all outgoing emails from rysolv.com. It is primarily broken into two categories:

- <b>Single</b>: real time response to a user's actions (ex: "You submitted a pull request")
- <b>Batch</b>: Sent to groups of users (ex: "Issue #42 has been resolved")

<br>

# Running

### Configuring the DB

Create a `.env` with the following inputs (matching your local db). Will be used in `~/connect.js`

- `DB_USER=user`
- `DB_PASSWORD=password`
- `DB_PORT=5432`
- `DB_HOST=localhost`
- `DB_NAME=rysolv`

### Configuring PostMark

Add to your `.env`:

- `POSTMARK_KEY={SECTET_KEY}`
- `POSTMARK_TEST_KEY=POSTMARK_API_TEST`
- `SENDER=support@rysolv.com`
- `TEST_ADDRESS=test@blackhole.postmarkapp.com`

### Scripts

- `npm start` - run client in dev mode (test API key, no live emails)
- `npm run start:prod` - run client in production mode

# Dependencies

- `body-parser` - Extract JSON body from requests
- `cross-env` - Allow setting env variables in npm scripts
- `dotenv` - Allow use of .env variables
- `express` - Server routing / listening
- `pg` - Manages node postgres connection
- `postmark` - Postmark node client (https://wildbit.github.io/postmark.js/)

# API Routes

## Single Email Endpoints

Endpoints which only address a single user

## `/s/attempting`

### Start Attempting

```
POST: localhost:3000/s/attempting/started
Body: {name, email, issue}
```

- User has started attempting an issue

### Reminder

```
POST: localhost:3000/s/attempting/reminder
Body: {name, email, issue}
```

- Reminder to check in on issue after 30 days

## `/s/issues`

### New Comments

```
POST: localhost:3000/s/issues/newComment
Body: {name, email, issue}
```

- Notify the user of new comments on an issue they posted

### New Pull Request

```
POST: localhost:3000/s/issues/newPullRequest
Body: {name, email, issue}
```

- A new pull request has been submitted for your issue

### Attempting

```
POST: localhost:3000/s/issues/attempting
Body: {name, email, issue}
```

- A user has marked your issue as Attempting

### Resolved

```
POST: localhost:3000/s/issues/resolved
Body: {name, email, issue}
```

- Your issue has been resolved

### Closed

```
POST: localhost:3000/s/issues/closed
Body: {name, email, issue}
```

- Your issue has been closed

## `/s/funding`

### Account Funded

```
POST: localhost:3000/s/funding/fundedAccount
Body: { amount, userId }
```

- Funding has been added to your account

### Issue Funded

```
POST: localhost:3000/s/funding/fundedIssue
Body: {name, email, issue}
```

- You funded an issue

### Earned Bounty

```
POST: localhost:3000/s/funding/earnedBounty
Body: {userId, fundedAmount, rep}
```

- You have earned the bounty on an issue

## `/s/hiring`

### Hiring form submitted

```
POST: localhost:3000/s/hiring/signup
Body: { userId }
```

- You have signed up for the hiring platform

## `/s/pullRequests`

### Pull request submitted

```
POST: localhost:3000/s/pullRequests/submitted
Body: { userId, pullrequestId }
```

- You have submitted a pull request

### Pull request merged

```
POST: localhost:3000/s/pullRequests/merged
Body: {name, email, issue}
```

- Your pull request has been merged in

## `/s/auth`

### Welcome email

```
POST: localhost:3000/s/users/welcome
Body: {userId}
```

- Welcome to Rysolv

<br>
<br>

# Batch Email Endpoints

## `/b/attempting`

### New Pull Request

```
POST: localhost:3000/b/attempting/pullRequest
Body: {issueId}
```

- A new pull request has been submitted

### Issue Closed

```
POST: localhost:3000/b/attempting/closed
Body: {issueId}
```

- Issue has been closed

### Issue Resolved

```
POST: localhost:3000/b/attempting/resolved
Body: {issueId}
```

- The issue you were attempting has been resolved (name winner)

## `/b/funding`

<!----------------------------------------------------------------->

### Issue Resolved

```
POST: localhost:3000/b/funding/issueResolved
Body: {issueId}
```

- And issue you funded has been resolved

### Funding Returned

```
POST: localhost:3000/b/funding/refunded
Body: {issueId}
```

- A contribution has been refunded to your account

## `/b/pullRequests`

### New pull request

```
POST: localhost:3000/b/pullRequests/newPullRequest
Body: {issueId}
```

- A new pull request has been submitted

### Pull request merged

```
POST: localhost:3000/b/pullRequests/merged
Body: {issueId}
```

- A pull request has been merged in

### Increased Bounty

```
POST: localhost:3000/b/pullRequests/funded
Body: {issueId}
```

- Increased bounty on issue

### Issue Closed

```
POST: localhost:3000/b/pullRequests/closed
Body: {issueId}
```

- An issue you submitted a PR on has been closed

### Issue Resolved

```
POST: localhost:3000/b/pullRequests/resolved
Body: {issueId}
```

- An issue you submitted a PR on has been resolved

## `/b/watching`

### New Pull Request

```
POST: localhost:3000/b/watching/newPullRequest
Body: {issueId}
```

- A new pull request has been submitted

### Increased funding

```
POST: localhost:3000/b/watching/funded
Body: {issueId}
```

- New funding

### Issue Resolved

```
POST: localhost:3000/b/watching/resolved
Body: {issueId}
```

- Issue has been resolved
