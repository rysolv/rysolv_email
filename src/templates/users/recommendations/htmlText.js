module.exports = ({ issueList, username }) => `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css">
  </head>
  <body style="background-color: rgb(246, 248, 250);color: rgba(0,0,0,0.7);font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;margin: 0px;">
    <div id="main-container" style="background: white;margin: 5% 10% 10%;padding: 0 50px 50px;">
      <table id="main-table" style="width: 100%;">
        <tr>
          <td>
            <img id="rysolv-logo" src="./rysolv.png" style="display: flex;height: auto;margin: -20px auto;width: 150px;">
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
        ${issueList.map(({ description, fundedAmount, id, title }) => `
          <table class="divider-table" style="margin: auto;width: 100%;">
              <tr>
              <td class="divider" style="background-color: rgb(246, 248, 250);height: 1.5px;padding: 0;"></td>
              </tr>
          </table>
          <table class="issue-table" style="width: 100%;">
              <tbody class="issue-body" style="display: flex;justify-content: space-between;">
              <tr>
                  <td>
                  <p class="title-wrapper" style="color: #08b26e;font-weight: bold;">${title}</p>
                  </td>
              </tr>
              <tr class="amount-container" style="align-self: center;">
                  <td class="amount-wrapper" style="background: rgb(229, 251, 242);display: inline;padding: 3px 10px;">
                  <span class="amount" style="color: #08b26e;font-weight: bold;">${fundedAmount}</span>
                  </td>
              </tr>
              </tbody>
          </table>
          <table>
              <tr>
              <td>
                  <span class="description-wrapper" style="font-size: 12px;">${description}</span>
              </td>
              </tr>
              <tr>
              <td>
                  <a class="view-button" href="https://rysolv.com/issues/detail/${id}" target="_blank" style="border: 1px solid rgba(0,0,0,0.2);color: #08b26e;display: flex;font-weight: bold;margin: 14px auto;padding: 3px 30px;text-decoration: none;width: fit-content;">View Job</a>
              </td>
              </tr>
          </table>
        `)}
      </table>
    </div>
  </body>
  </html>
`;
