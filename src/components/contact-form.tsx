import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { submitInquiry } from "@/lib/contact.functions";

const COUNTRIES = ["Canada", "United Kingdom", "Australia", "USA", "Europe (Schengen)", "New Zealand", "Other"];
const VISA_TYPES = ["Student Visa", "Tourist Visa", "Work Permit", "Business Visa", "Family Visa", "Other"];

const ClientSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  phone: z.string().trim().min(7, "Enter a valid phone"),
  email: z.string().trim().email("Enter a valid email"),
  country: z.string().min(1, "Choose a country"),
  visaType: z.string().min(1, "Choose a visa type"),
  message: z.string().trim().min(1, "Tell us a little about your goals"),
});

export function ContactForm() {
  const submit = useServerFn(submitInquiry);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      country: String(fd.get("country") ?? ""),
      visaType: String(fd.get("visaType") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
    };
    const parsed = ClientSchema.safeParse(payload);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        if (issue.path[0]) errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }

    setStatus("loading");
    try {
      await submit({ data: payload });
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please call us directly or try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" placeholder="Your name" error={errors.name} />
        <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." error={errors.phone} />
      </div>
      <Field label="Email" name="email" type="email" placeholder="you@email.com" error={errors.email} />

      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField label="Country Interested In" name="country" options={COUNTRIES} error={errors.country} />
        <SelectField label="Visa Type" name="visaType" options={VISA_TYPES} error={errors.visaType} />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Tell us about your plans</label>
        <textarea
          name="message"
          rows={4}
          maxLength={1500}
          placeholder="Where do you want to go, by when, and what are your goals?"
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Sending your inquiry...</>
        ) : (
          <><Send className="h-4 w-4" /> Send Inquiry</>
        )}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3 rounded-xl bg-accent/60 border border-primary/20 p-4 text-sm"
          >
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-ink">Thank you — your inquiry was received.</p>
              <p className="text-muted-foreground">Our team will reach out within one business day.</p>
            </div>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="rounded-xl bg-destructive/10 border border-destructive/30 p-4 text-sm text-destructive"
          >
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, error }: {
  label: string; name: string; type?: string; placeholder?: string; error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, options, error }: {
  label: string; name: string; options: string[]; error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
      >
        <option value="" disabled>Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
