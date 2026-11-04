import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Split comma / semicolon lists into unique, validated addresses. */
function parseEmailList(
  value: string | undefined,
  fallback: string[] = []
): string[] {
  const raw = value?.trim();
  const source = raw
    ? raw.split(/[,;]+/)
    : fallback;
  const seen = new Set<string>();
  const emails: string[] = [];

  for (const part of source) {
    const email = part.trim().toLowerCase();
    if (!email || !EMAIL_RE.test(email) || seen.has(email)) continue;
    seen.add(email);
    emails.push(email);
  }

  return emails;
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim() ?? "";
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER?.trim() ?? "";
  const pass = process.env.SMTP_PASS?.trim() ?? "";
  const from = process.env.SMTP_FROM?.trim() || user;
  const to = parseEmailList(process.env.SMTP_TO, [
    "support@relicompelevators.in",
  ]);
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  return { host, port, user, pass, from, to, secure };
}

function sanitize(value: unknown, max = 200): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function validateBody(
  body: unknown
):
  | { ok: true; data: Record<string, string> }
  | { ok: false; status: number; error: string } {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, status: 400, error: "Invalid request body." };
  }

  const o = body as Record<string, unknown>;
  const name = sanitize(o.name, 120);
  const phone = sanitize(o.phone, 30).replace(/[^\d+]/g, "");

  if (!name || name.length < 2) {
    return {
      ok: false,
      status: 400,
      error: "Name is required and must be at least 2 characters.",
    };
  }
  if (!phone || phone.replace(/\D/g, "").length < 10) {
    return {
      ok: false,
      status: 400,
      error: "Phone is required and must be at least 10 digits.",
    };
  }

  let city = sanitize(o.city, 120);
  let pincode = sanitize(o.pincode, 12).replace(/[^\d]/g, "").slice(0, 6);
  const floors = sanitize(o.floors, 40);
  const rawMessage = sanitize(o.message, 2000);
  const formType = sanitize(o.formType, 80) || "Contact Form";
  const source = sanitize(o.source, 80) || "unknown";
  const page = sanitize(o.page, 160) || "unknown";
  const pageUrl = sanitize(o.pageUrl, 500);

  // If older clients still send "Bangalore 500036", split city + pincode.
  if (!pincode && city) {
    const pinMatch = city.match(/\b(\d{6})\b/);
    if (pinMatch) {
      pincode = pinMatch[1];
      city = city.replace(pinMatch[1], "").replace(/\s{2,}/g, " ").trim();
    }
  }

  const channel = resolveLeadChannel(page, pageUrl);

  return {
    ok: true,
    data: {
      name,
      phone,
      city,
      pincode,
      floors,
      message: rawMessage,
      formType,
      source,
      page,
      pageUrl,
      channel,
    },
  };
}

/** /lp paths are paid/landing traffic; everything else is organic site traffic. */
function resolveLeadChannel(page: string, pageUrl: string): string {
  const haystack = `${page} ${pageUrl}`.toLowerCase();
  if (haystack.includes("/lp/") || haystack.includes("/lp?") || haystack.endsWith("/lp")) {
    return "Landing page";
  }
  return "Organic";
}

/** Brand palette aligned with site primary (hsl 0 72% 51% ≈ #DC2828). */
const BRAND = {
  primary: "#DC2828",
  primaryDark: "#B91C1C",
  charcoal: "#1A1A1A",
  text: "#1F1F1F",
  muted: "#6B7280",
  border: "#E5E7EB",
  bg: "#F7F7F8",
  white: "#FFFFFF",
} as const;

function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return phone;
}

function rowHtml(label: string, valueHtml: string, isLast = false): string {
  const border = isLast ? "none" : `1px solid ${BRAND.border}`;
  return `
    <tr>
      <td style="padding: 12px 16px; border-bottom: ${border}; width: 34%; vertical-align: top; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: ${BRAND.muted};">
        ${escapeHtml(label)}
      </td>
      <td style="padding: 12px 16px; border-bottom: ${border}; vertical-align: top; font-size: 15px; color: ${BRAND.text}; font-weight: 600;">
        ${valueHtml}
      </td>
    </tr>`;
}

function channelBadgeStyle(channel: string): string {
  if (channel === "Landing page") {
    return `background:${BRAND.primary}; color:${BRAND.white};`;
  }
  return `background:#ECFDF5; color:#047857; border:1px solid #A7F3D0;`;
}

function buildEmailBodies(data: Record<string, string>) {
  const receivedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const phoneDisplay = formatPhoneDisplay(data.phone);
  const phoneTel = data.phone.startsWith("+")
    ? data.phone
    : `+${data.phone.replace(/\D/g, "")}`;

  const channel = data.channel || "Organic";
  const subject = `New ${channel.toLowerCase()} lead · ${data.formType} · ${data.name}`;

  const text = [
    "RELICOMP ELEVATORS: New website lead",
    "────────────────────────────────────",
    `Channel: ${channel}`,
    `Form: ${data.formType}`,
    `Received: ${receivedAt} IST`,
    "",
    "CONTACT",
    `Name: ${data.name}`,
    `Phone: ${phoneDisplay}`,
    data.city ? `City: ${data.city}` : null,
    data.pincode ? `Pincode: ${data.pincode}` : null,
    "",
    "ENQUIRY",
    data.floors ? `Floors: ${data.floors}` : null,
    data.message ? `Message: ${data.message}` : "Message: (none provided)",
    "",
    "ATTRIBUTION",
    `Source: ${data.source}`,
    `Page: ${data.page}`,
    data.pageUrl ? `URL: ${data.pageUrl}` : null,
    "",
    "Please respond promptly. Relicomp Elevators Pvt. Ltd.",
  ]
    .filter((line) => line !== null)
    .join("\n");

  const contactRows = [
    rowHtml("Name", escapeHtml(data.name)),
    rowHtml(
      "Phone",
      `<a href="tel:${escapeHtml(phoneTel)}" style="color:${BRAND.primary}; text-decoration:none; font-weight:700;">${escapeHtml(phoneDisplay)}</a>`
    ),
    data.city ? rowHtml("City", escapeHtml(data.city)) : null,
    data.pincode
      ? rowHtml("Pincode", escapeHtml(data.pincode), true)
      : null,
  ].filter(Boolean);

  // Ensure last visible contact row has no bottom border
  const contactHtml = contactRows
    .map((row, i, arr) => {
      if (i === arr.length - 1 && row && !data.pincode) {
        // city may be last without pincode  -  strip its border via rebuild not needed
      }
      return row;
    })
    .join("");

  const enquiryParts: string[] = [];
  if (data.floors) {
    enquiryParts.push(rowHtml("Floors", escapeHtml(data.floors), !data.message));
  }
  if (data.message) {
    enquiryParts.push(
      rowHtml(
        "Message",
        `<span style="font-weight:500; white-space:pre-wrap;">${escapeHtml(data.message)}</span>`,
        true
      )
    );
  }
  if (enquiryParts.length === 0) {
    enquiryParts.push(
      rowHtml("Message", `<span style="font-weight:500; color:${BRAND.muted};">No message provided</span>`, true)
    );
  }

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0; padding:0; background:${BRAND.bg}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:${BRAND.text};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg}; padding: 28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background:${BRAND.white}; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, ${BRAND.charcoal} 0%, #2A2A2A 100%); padding: 28px 28px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:${BRAND.primary};">
                      Relicomp Elevators
                    </p>
                    <h1 style="margin:0; font-size:22px; line-height:1.25; font-weight:800; color:${BRAND.white};">
                      New website lead
                    </h1>
                    <p style="margin:8px 0 0; font-size:14px; color:rgba(255,255,255,0.72);">
                      ${escapeHtml(data.formType)}
                    </p>
                  </td>
                  <td align="right" valign="top" style="padding-left:12px;">
                    <span style="display:inline-block; ${channelBadgeStyle(channel)} font-size:11px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; padding:6px 12px; border-radius:999px;">
                      ${escapeHtml(channel)}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Accent bar -->
          <tr>
            <td style="height:4px; background: linear-gradient(90deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%); font-size:0; line-height:0;">&nbsp;</td>
          </tr>
          <!-- Intro -->
          <tr>
            <td style="padding: 24px 28px 8px;">
              <p style="margin:0; font-size:15px; line-height:1.55; color:${BRAND.text};">
                A prospective customer submitted an enquiry on the Relicomp website. Details are below for prompt follow-up.
              </p>
              <p style="margin:10px 0 0; font-size:12px; color:${BRAND.muted};">
                Received ${escapeHtml(receivedAt)} IST · Channel: <strong style="color:${BRAND.text};">${escapeHtml(channel)}</strong>
              </p>
            </td>
          </tr>
          <!-- Contact card -->
          <tr>
            <td style="padding: 16px 28px 8px;">
              <p style="margin:0 0 10px; font-size:12px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:${BRAND.primary};">
                Contact details
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border}; border-radius:12px; overflow:hidden; background:${BRAND.white};">
                ${contactHtml}
              </table>
            </td>
          </tr>
          <!-- Enquiry card -->
          <tr>
            <td style="padding: 16px 28px 8px;">
              <p style="margin:0 0 10px; font-size:12px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:${BRAND.primary};">
                Enquiry
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border}; border-radius:12px; overflow:hidden; background:${BRAND.white};">
                ${enquiryParts.join("")}
              </table>
            </td>
          </tr>
          <!-- Attribution -->
          <tr>
            <td style="padding: 16px 28px 8px;">
              <p style="margin:0 0 10px; font-size:12px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:${BRAND.primary};">
                Lead source
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border}; border-radius:12px; overflow:hidden; background:${BRAND.white};">
                ${rowHtml("Channel", escapeHtml(channel))}
                ${rowHtml("Source", escapeHtml(humanizeSource(data.source)))}
                ${rowHtml("Page", escapeHtml(data.page), !data.pageUrl)}
                ${
                  data.pageUrl
                    ? rowHtml(
                        "URL",
                        `<a href="${escapeHtml(data.pageUrl)}" style="color:${BRAND.primary}; word-break:break-all; text-decoration:none;">${escapeHtml(data.pageUrl)}</a>`,
                        true
                      )
                    : ""
                }
              </table>
            </td>
          </tr>
          <!-- CTA -->
          <tr>
            <td style="padding: 20px 28px 28px;" align="center">
              <a href="tel:${escapeHtml(phoneTel)}"
                 style="display:inline-block; background:${BRAND.primary}; color:${BRAND.white}; font-size:14px; font-weight:700; text-decoration:none; padding:14px 28px; border-radius:999px; box-shadow: 0 8px 20px rgba(220,40,40,0.28);">
                Call ${escapeHtml(phoneDisplay)}
              </a>
              <p style="margin:16px 0 0; font-size:12px; line-height:1.5; color:${BRAND.muted};">
                Relicomp Elevators Pvt. Ltd. · Bengaluru · Karnataka &amp; Tamil Nadu
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:${BRAND.charcoal}; padding: 18px 28px; text-align:center;">
              <p style="margin:0; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.55);">
                Internal lead notification · Do not forward to customers
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  return { subject, text, html };
}

function humanizeSource(source: string): string {
 if (!source || source === "unknown") return ", ";
  return source
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const smtp = getSmtpConfig();
    if (
      !smtp.host ||
      !smtp.user ||
      !smtp.pass ||
      !smtp.from ||
      smtp.to.length === 0
    ) {
      console.error("send-email: SMTP env vars missing");
      return NextResponse.json(
        {
          error: "Email service is not configured.",
          hint: "Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, and SMTP_TO (comma-separated for multiple recipients) in .env.local (or Vercel env), then restart the server.",
        },
        { status: 503 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body." },
        { status: 400 }
      );
    }

    const validated = validateBody(body);
    if (validated.ok === false) {
      return NextResponse.json(
        { error: validated.error },
        { status: validated.status }
      );
    }

    const { subject, text, html } = buildEmailBodies(validated.data);

    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });

    await transporter.sendMail({
      from: smtp.from,
      to: smtp.to,
      subject,
      text,
      html,
      headers: {
        "X-Lead-Source": validated.data.source,
        "X-Lead-Page": validated.data.page,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("send-email API error:", err);
    const detail =
      err instanceof Error ? err.message.slice(0, 200) : "Unknown SMTP error";
    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        detail,
      },
      { status: 502 }
    );
  }
}
