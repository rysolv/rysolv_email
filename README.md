# rysolv_email api

This API handles all outgoing emails from rysolv.com. It is primarily broken into two categories:

-   <b>Single</b>: real time response to a user's actions (ex: "You submitted a pull request")
-   <b>Batch</b>: Sent to groups of users (ex: "Issue #42 has been resolved")

<br>
<br>

# Single Email

Endpoints which only address a single user

## `/s/attempting`

<hr>

### Start Attempting

```
POST: localhost:3000/s/attempting/started
Body: {name, email, issue}
```

-   User has started attempting an issue

### Reminder

```
POST: localhost:3000/s/attempting/reminder
Body: {name, email, issue}
```

-   Reminder to check in on issue after 30 days

## `/s/issues`

<hr>

### New Comments

```
POST: localhost:3000/s/issues/newComment
Body: {name, email, issue}
```

-   Notify the user of new comments on an issue they posted

### New Pull Request

```
POST: localhost:3000/s/issues/newPullRequest
Body: {name, email, issue}
```

-   A new pull request has been submitted for your issue

### Attempting

```
POST: localhost:3000/s/issues/attempting
Body: {name, email, issue}
```

-   A user has marked your issue as Attempting

### Resolved

```
POST: localhost:3000/s/issues/resolved
Body: {name, email, issue}
```

-   Your issue has been resolved

### Closed

```
POST: localhost:3000/s/issues/closed
Body: {name, email, issue}
```

-   Your issue has been closed

## `/s/payments`

<hr>

### Account Funded

```
POST: localhost:3000/s/payments/accountFunded
Body: {name, email, issue}
```

-   Funding has been added to your account

### Issue Funded

```
POST: localhost:3000/s/payments/issueFunded
Body: {name, email, issue}
```

-   You funded an issue

## `/s/pullRequests`

<hr>

### Pull request submitted

```
POST: localhost:3000/s/pullRequests/submitted
Body: {name, email, issue}
```

-   You have submitted a pull request

### Pull request merged

```
POST: localhost:3000/s/pullRequests/merged
Body: {name, email, issue}
```

-   Your pull request has been merged in

<br>
<br>

# Batch Endpoints

## `/b/attempting`

<hr>

### New Pull Request

```
POST: localhost:3000/b/attempting/pullRequest
Body: {issueId}
```

-   A new pull request has been submitted

### Issue Closed

```
POST: localhost:3000/b/attempting/closed
Body: {issueId}
```

-   Issue has been closed

### Issue Resolved

```
POST: localhost:3000/b/attempting/resolved
Body: {issueId}
```

-   The issue you were attempting has been resolved (name winner)

## `/b/payments`

<hr>

### Issue Resolved

```
POST: localhost:3000/b/payments/resolved
Body: {issueId}
```

-   And issue you funded has been resolved

## `/b/pullRequests`

<hr>

### New pull request

```
POST: localhost:3000/b/pullRequests/newPullRequest
Body: {issueId}
```

-   A new pull request has been submitted

### Pull request merged

```
POST: localhost:3000/b/pullRequests/merged
Body: {issueId}
```

-   A pull request has been merged in

### Increased Bounty

```
POST: localhost:3000/b/pullRequests/funded
Body: {issueId}
```

-   Increased bounty on issue

### Issue Closed

```
POST: localhost:3000/b/pullRequests/closed
Body: {issueId}
```

-   An issue you submitted a PR on has been closed

### Issue Resolved

```
POST: localhost:3000/b/pullRequests/resolved
Body: {issueId}
```

-   An issue you submitted a PR on has been resolved

## `/b/watching`

<hr>

### New Pull Request

```
POST: localhost:3000/b/watching/newPullRequest
Body: {issueId}
```

-   A new pull request has been submitted

### Increased funding

```
POST: localhost:3000/b/watching/funded
Body: {issueId}
```

-   New funding

### Issue Resolved

```
POST: localhost:3000/b/watching/resolved
Body: {issueId}
```

-   Issue has been resolved
