import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(160),
  country: z.string().trim().min(1).max(60),
  visaType: z.string().trim().min(1).max(60),
  message: z.string().trim().min(1).max(1500),
  // honeypot — must be empty
  website: z.string().max(0).optional().default(""),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      // Silently succeed for bots
      return { ok: true };
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const text =
      `🚀 *New Visa Inquiry — Ajay Overseas*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Email:* ${data.email}\n` +
      `*Country:* ${data.country}\n` +
      `*Visa Type:* ${data.visaType}\n` +
      `*Message:* ${data.message}`;

    if (!token || !chatId) {
      console.warn("Telegram credentials not configured. Inquiry:", text);
      return { ok: true, delivered: false };
    }

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Telegram delivery failed", res.status, body);
      throw new Error("Failed to deliver inquiry");
    }

    return { ok: true, delivered: true };
  });
