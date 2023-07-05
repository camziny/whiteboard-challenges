const onEdit = (e) => {
  var sheet = e.source.getActiveSheet();
  var col = e.range.getColumn();
  if (col == 1) {
    sheet.getRange(e.range.getRow(), col + 1).setValue(new Date());
  }
};

const sendEmail = () => {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var condition = row[0]; // Specify the condition here

    if (condition) {
      var emailAddress = row[1]; // Specify the email address here
      var subject = "Notification";
      var message = "The condition is met in row " + (i + 1);
      MailApp.sendEmail(emailAddress, subject, message);
    }
  }
};

const generatePDF = () => {
  var spreadsheetId = SpreadsheetApp.getActiveSpreadsheet().getId();
  var sheetId = SpreadsheetApp.getActiveSpreadsheet()
    .getActiveSheet()
    .getSheetId();
  var url =
    "https://docs.google.com/spreadsheets/d/" +
    spreadsheetId +
    "/export?exportFormat=pdf&gid=" +
    sheetId;
  var folder = DriveApp.getFolderById("Your Folder ID"); // Specify the folder ID here
  var pdf = UrlFetchApp.fetch(url, {
    headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
  }).getBlob();
  folder.createFile(pdf);
};

const sortData = () => {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange("A2:B10"); // Specify the range to sort here
  range.sort({ column: 1, ascending: true }); // Specify the sort column and order
};

const importData = () => {
  var sourceSheetId = "Source Sheet ID"; // Specify the source sheet ID here
  var sourceRange = "Sheet1!A1:B10"; // Specify the source range here
  var destinationSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = SpreadsheetApp.openById(sourceSheetId)
    .getRange(sourceRange)
    .getValues();
  destinationSheet.getRange(1, 1, data.length, data[0].length).setValues(data);
};
