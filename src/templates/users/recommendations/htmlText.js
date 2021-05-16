const { formatDollar } = require('../../../helpers');

module.exports = ({ topIssues, username }) => `
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
  <body style="color: rgba(0,0,0,0.7);font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;height: 100vh; margin: 0px;">
    <div id="main-container" style="background-color: rgb(246, 248, 250);padding: 5% 10% 10%;">
      <table id="main-table" style="background-color: white;margin: auto;padding: 0 50px 50px;">
        <tr>
          <td>
            <table id="header-table" style="width: 100%;">
              <tr id="logo-container" style="display: table;margin: auto;table-layout: fixed;">
                <td>
                  <img id="rysolv-logo" src="https://rysolv.s3.us-east-2.amazonaws.com/rysolv.png" style="height: auto;margin: -20px auto;width: 150px;">
                </td>
              </tr>
              <tr>
                <td>
                  <p>Hey ${username},</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Check out some new issues on Rysolv you might like.</p>
                </td>
              </tr>
              ${topIssues.map(({ fundedAmount, id, name }) => `
                <table class="divider-table" style="background-color: rgb(246, 248, 250);height: 1px;margin: auto;width: 100%;">
                  <tr>
                    <td class="divider" style="padding: 0;"></td>
                  </tr>
                </table>
                <table class="issue-table" style="width: 100%;">
                  <tbody class="issue-body" style="display: flex;justify-content: space-between;">
                    <tr class="title-container" style="width: 90%;">
                      <td>
                        <p class="title" style="color: #08b26e;font-weight: bold;">${name}</p>
                      </td>
                    </tr>
                    <tr class="amount-container" style="margin: auto;margin-left: 20px;">
                      <td class="amount-wrapper" style="background: rgb(229, 251, 242);display: inline;padding: 3px 10px; white-space: nowrap !important;">
                        <span class="amount" style="color: #08b26e;font-weight: bold;">$${formatDollar(fundedAmount)}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="view-button-table" style="margin: auto;">
                  <tr>
                    <td>
                      <a class="view-button" href="https://rysolv.com/issues/detail/${id}" target="_blank" style="border: 1px solid rgba(0,0,0,0.2);color: #08b26e;display: flex;font-weight: bold;margin: 14px auto;padding: 3px 30px;text-decoration: none;width: 70px;white-space: nowrap !important;">View Issue</a>
                    </td>
                  </tr>
                </table>
              `).join('')}
            </table>
          </td>
        </tr>
      </table>
    </div>
    {{{ pm:unsubscribe }}}
  </body>
</html>
`;
