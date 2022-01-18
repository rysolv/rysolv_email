const html = ({ body, companyName, createdDate, fromUser, positionTitle, threadId }) => `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css">
    <style type="text/css">
      @media screen and (max-width: 500px) {
        #main-container {
          padding: 0 !important;
        }

        #message-container {
          width: 80% !important;
        }
      }
    </style>
  </head>

  <body
    style="color: rgba(0,0,0,0.7);font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;height: 100%; margin: 0px;">
    <div id="main-container" style="text-align: center;">

      <img id="rysolv-logo" src="https://rysolv.s3.us-east-2.amazonaws.com/rysolv.png"
        style="height: auto;margin: -20px auto;width: 100px;">

      <h1 style="color: #163486;">New message from ${fromUser}!</h1>
      <p><a href='https://calendly.com/tylermaran/30min'>${positionTitle}</a> at ${companyName}</p>

      <div id='message-container' style="width: 40%; margin: 0 auto; text-align: left;">
        <div style="border-radius: 10px; padding: 10px 20px; background-color: #f1f1f1;">
          ${body}
        </div>
        <div style="text-align: right;">Sent ${createdDate}}</div>
      </div>

      <br>
      <br>

      <a style="background-color: #163486; border-radius: 20px; color: white; padding: 10px 15px; text-decoration: none;"
        href="https://rysolv.com/messages/${threadId}">
        View Message
      </a>
      <br>
      <br>

    </div>
    <br>
    <br>
    {{{ pm:unsubscribe }}}
  </body>

  </html>
`;

module.exports = html;
