/**
 * Client-side only: submits the contact form to the server API.
 * No SMTP credentials are used or exposed in the browser.
 */

export interface ContactFormData {
  name: string;
  phone: string;
  city?: string;
  pincode?: string;
  floors?: string;
  message?: string;
  formType?: string;
  /** Where the lead came from, e.g. hero_form, header_get_price, promo_modal */
  source?: string;
  /** Landing / site page path, e.g. /lp/home-elevators-bangalore */
  page?: string;
}

export interface SendEmailResult {
  success: true;
}

export interface SendEmailError {
  success: false;
  error: string;
}

/**
 * Sends the form data to the server API route. The server handles
 * SMTP delivery with server-only credentials and returns proper HTTP status.
 */
export async function sendEmail(formData: ContactFormData): Promise<void> {
  const pageUrl =
    typeof window !== "undefined" ? window.location.href : undefined;

  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.name,
      phone: formData.phone,
      city: formData.city ?? "",
      pincode: formData.pincode ?? "",
      floors: formData.floors ?? "",
      message: formData.message ?? "",
      formType: formData.formType ?? "Contact Form",
      source: formData.source ?? "",
      page: formData.page ?? "",
      pageUrl: pageUrl ?? "",
    }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMsg =
      typeof data?.error === "string"
        ? data.error
        : "Failed to send your message. Please try again later.";
    const hint = typeof data?.hint === "string" ? ` ${data.hint}` : "";
    const detail = typeof data?.detail === "string" ? ` (${data.detail})` : "";
    throw new Error(`${errorMsg}${hint}${detail}`);
  }
}
