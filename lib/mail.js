import nodemailer from "nodemailer";

// Required env vars (set these in .env.local / your VPS environment):
// SMTP_HOST, SMTP_PORT, SMTP_SECURE ("true" | "false"), SMTP_USER, SMTP_PASS
// NOTIFY_EMAILS  -> comma-separated list, e.g. "info@careerhire.ca,sales@careerhire.ca"

let transporter;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

export async function sendContactNotification(formData) {
  const recipients = (process.env.NOTIFY_EMAILS || process.env.SMTP_USER)
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);

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

  const html = `
    <h2>New Service Request — Career Hire</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${phone || "-"}</td></tr>
      <tr><td><strong>Company</strong></td><td>${companyName || "-"}</td></tr>
      <tr><td><strong>How can we help</strong></td><td>${howCanWeHelp || "-"}</td></tr>
      <tr><td><strong>Country</strong></td><td>${country || "-"}</td></tr>
      <tr><td><strong>Practice group</strong></td><td>${practiceGroup || "-"}</td></tr>
      <tr><td><strong>Zip / postal code</strong></td><td>${zipCode || "-"}</td></tr>
    </table>
    <p><strong>Message:</strong></p>
    <p>${(message || "").replace(/\n/g, "<br/>")}</p>
  `;

  await getTransporter().sendMail({
    from: `"Career Hire Website" <${process.env.SMTP_USER}>`,
    to: recipients.join(","),
    replyTo: email,
    subject: `New Service Request from ${firstName} ${lastName}`,
    html,
  });
}
