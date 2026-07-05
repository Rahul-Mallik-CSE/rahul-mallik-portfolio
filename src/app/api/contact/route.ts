import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const defaultRecipients = [
  "rmallik191242@bscse.uiu.ac.bd",
  "mallikrahul3507mr@gmail.com",
];

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim() || "Not provided";
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactFrom = process.env.CONTACT_FROM_EMAIL || smtpUser;
  const recipients = (process.env.CONTACT_TO_EMAILS || defaultRecipients.join(","))
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactFrom) {
    return NextResponse.json(
      {
        error:
          "Mail delivery is not configured yet. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_FROM_EMAIL in .env.local.",
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `Portfolio Contact <${contactFrom}>`,
    to: recipients,
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2>Portfolio contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });

  return NextResponse.json({
    message: "Thank you for reaching out!  I'll get back to you as soon as possible.",
  });
}