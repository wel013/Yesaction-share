// // function doPost(e) {
// //   try {
// //     const data = JSON.parse(e.postData.contents);

// //     const sheet = SpreadsheetApp.openById('10OlXLygz4Z4RzmwP9JrgDDtg9O7slThud33Yp2xqMSg').getSheetByName('sheet1');

// //     sheet.appendRow([
// //       data.FirstName,
// //       data.LastName,
// //       data.Email,
// //       data.Subject,
// //       data.Message,
// //     ]);

// //     return ContentService
// //       .createTextOutput(JSON.stringify({ status: "success", data: "my-data" }))
// //       .setMimeType(ContentService.MimeType.JSON);

// //   } catch (error) {
// //     return ContentService
// //       .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
// //       .setMimeType(ContentService.MimeType.JSON);
// //   }
// // }

// // function doOptions(e) {
// //   // Options requests typically used for CORS preflight
// //   // Apps Script does not support setting headers here, so just return an empty text response
// //   return ContentService
// //     .createTextOutput('')
// //     .setMimeType(ContentService.MimeType.TEXT);
// // }


// function doPost(e) {
//   try {
//     const data = JSON.parse(e.postData.contents);

//     const sheet = SpreadsheetApp.openById('10OlXLygz4Z4RzmwP9JrgDDtg9O7slThud33Yp2xqMSg').getSheetByName('Sheet1');

//     sheet.appendRow([
//       data.FirstName,
//       data.LastName,
//       data.Email,
//       data.Subject,
//       data.Message,
//       new Date()
//     ]);

//     return ContentService
//       .createTextOutput(JSON.stringify({ status: 'success', message: 'Data written to sheet' }))
//       .setMimeType(ContentService.MimeType.JSON)
//       .setHeader("Access-Control-Allow-Origin", "*");
//   } catch (error) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
//       .setMimeType(ContentService.MimeType.JSON)
//       .setHeader("Access-Control-Allow-Origin", "*");
//   }
// }

// function doOptions(e) {
//   return ContentService.createTextOutput("")
//     .setMimeType(ContentService.MimeType.TEXT)
//     .setHeader("Access-Control-Allow-Origin", "*")
//     .setHeader("Access-Control-Allow-Methods", "POST")
//     .setHeader("Access-Control-Allow-Headers", "Content-Type");}
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const sheet = SpreadsheetApp.openById('10OlXLygz4Z4RzmwP9JrgDDtg9O7slThud33Yp2xqMSg').getSheetByName('Sheet1');
    sheet.appendRow([
      data.FirstName,
      data.LastName,
      data.Email,
      data.Subject,
      data.Message,
      new Date()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Data written to sheet' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
}

function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
