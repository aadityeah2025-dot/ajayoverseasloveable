# Ajay Overseas — Premium Visa Consultancy Website

Single-page premium website for **Ajay Overseas** (Hisar, Haryana) built with TanStack Start, React, Tailwind CSS v4 and Framer Motion.

## Telegram Inquiry Setup

The contact form delivers every submission to a Telegram chat via the Telegram Bot API.

1. **Create a bot**
   - Open Telegram and message [@BotFather](https://t.me/BotFather)
   - Send `/newbot` and follow the prompts
   - Copy the bot token (looks like `1234567890:AAH...`)

2. **Get your chat ID**
   - Add the bot to a group (or message it directly)
   - Send any message
   - Visit `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
   - Copy the `chat.id` value (negative for groups, positive for direct chats)

3. **Add the secrets to Lovable Cloud**
   - In your Lovable project, open *Settings → Secrets* and add:
     - `TELEGRAM_BOT_TOKEN` = your bot token
     - `TELEGRAM_CHAT_ID` = your chat ID

That's it — submissions arrive instantly in your Telegram chat.

If the secrets are missing the form still works (success message shown to user) but the inquiry is logged server-side instead of delivered.

## Brand & Contact Info (edit in code)

- Phone: `+91 8222822427`
- WhatsApp: https://wa.me/918222822427
- Email: `email@ajayoverseas.world`
- Address: 1st Floor, Red Square Market, SCO140, Mehta Nagar, Hisar, Haryana 125001
- Hours: Open Daily, 10:00 AM – 8:00 PM

These live in `src/routes/index.tsx` (Contact + Footer sections) and `src/routes/__root.tsx` (LocalBusiness JSON-LD).

## Local development

```bash
bun install
bun run dev
```

## Deployment

This project ships configured for Lovable's Cloudflare Worker runtime (TanStack Start + Vite). Click **Publish** in Lovable to deploy.

> Note: Hostinger shared hosting only serves static files. This project uses a server function for Telegram delivery, so it needs the bundled Lovable runtime (or any Node/edge host). To deploy a fully static export to Hostinger, you'd need to swap the server function for a third-party form endpoint (e.g. Formspree, Web3Forms) — let us know and we'll wire it in.

## Project structure

```
src/
  assets/                 # generated hero & section imagery
  components/
    contact-form.tsx      # validated form + Telegram submit
    site-nav.tsx          # sticky animated navbar
    counter.tsx           # animated stats counter
    whatsapp-fab.tsx      # floating WhatsApp button
  lib/
    contact.functions.ts  # server function (Telegram Bot API)
  routes/
    __root.tsx            # SEO meta, fonts, JSON-LD
    index.tsx             # all sections of the single-page site
  styles.css              # design system (red + white premium theme)
```
