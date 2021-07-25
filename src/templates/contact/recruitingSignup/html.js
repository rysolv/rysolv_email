const html = `
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

        #main-table {
          padding: 0 10px 50px !important;
        }
      }
    </style>
  </head>

  <body
    style="color: rgba(0,0,0,0.7);font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;height: 100%; margin: 0px;">
    <div id="main-container" style="text-align: center;">

      <img id="rysolv-logo" src="https://rysolv.s3.us-east-2.amazonaws.com/rysolv.png"
        style="height: auto;margin: -20px auto;width: 150px;">

      <h1 style="color: #163486;">You're in!</h1>

      <p>Right now we're interviewing candidates, and finding the best match for your team.</p>
      <p>We'll be reaching out in the coming weeks when we launch our beta.</p>

      <br>
      <br>

      <h3 style="color: #163486;">Want to learn more about Rysolv?</h3>
      <p><a href='https://calendly.com/tylermaran/30min'>Meet with a team member</a> </p>

      <br>
      <br>

      <h3 style="color: #163486;">Not hiring right now?</h3>
      <p>No problem!</p>
      <p>Since you've joined the beta you're locked in to the 5% placement rate.</p>

    </div>
    <br>
    <br>
    {{{ pm:unsubscribe }}}
  </body>

  </html>
`;

module.exports = html;
