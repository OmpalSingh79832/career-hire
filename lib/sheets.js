import { google } from "googleapis";

// Required env vars:
// GOOGLE_SERVICE_ACCOUNT_EMAIL
// GOOGLE_PRIVATE_KEY          -> paste key with \n escaped, e.g. "-----BEGIN...-----\n...\n-----END...-----\n"
// GOOGLE_SHEET_ID             -> the spreadsheet ID from its URL
//
// Setup once: create a Google Cloud service account, enable the Sheets API,
// then share the target spreadsheet with the service account's email (Editor access).

function getAuth() {
  return new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    null,
    (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
}

export async function appendContactRow(formData) {
  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    howCanWeHelp,
    country,
    practiceGroup,
    zipCode,
    message,
  } = formData;

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:K",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          firstName,
          lastName,
          email,
          phone || "",
          companyName || "",
          howCanWeHelp || "",
          country || "",
          practiceGroup || "",
          zipCode || "",
          message || "",
        ],
      ],
    },
  });
}
