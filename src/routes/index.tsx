import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  GraduationCap, Plane, Briefcase, FileText, MessageSquareQuote,
  ShieldCheck, Globe2, BookOpenCheck, AlertTriangle, MapPin, Phone,
  Mail, Clock, Star, ArrowRight, ChevronDown, Sparkles, Award, Users,
  CheckCircle2, Facebook, Instagram, Linkedin, Youtube,
} from "lucide-react";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { Counter } from "@/components/counter";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { ContactForm } from "@/components/contact-form";
import heroImg from "@/assets/hero.jpg";
import officeImg from "@/assets/office.jpg";
import studentsImg from "@/assets/students.jpg";
import visasImg from "@/assets/visas.jpg";
import counselingImg from "@/assets/counseling.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ajay Overseas — Trusted Visa & Immigration Experts in Hisar" },
      { name: "description", content: "Premium visa & immigration consultancy in Hisar since 2014. Canada, UK, Australia, USA, Europe student & tourist visas. Free consultation." },
      { property: "og:title", content: "Ajay Overseas — Your Gateway to the World" },
      { property: "og:description", content: "Trusted visa & immigration experts since 2014." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function HomePage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Services />
        <Countries />
        <StudyVisa />
        <TouristVisa />
        <Stories />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const flags = ["🇨🇦", "🇬🇧", "🇦🇺", "🇺🇸", "🇩🇪", "🇳🇿", "🇫🇷", "🇸🇬"];
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <img
        src={heroImg}
        alt="International airport at golden hour with passport"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

      {/* Floating flags */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {flags.map((f, i) => (
          <span
            key={i}
            className="absolute text-3xl animate-floaty drop-shadow-lg"
            style={{
              top: `${15 + (i * 9) % 70}%`,
              left: `${(i * 13 + 8) % 92}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${6 + (i % 4)}s`,
              opacity: 0.85,
            }}
          >{f}</span>
        ))}
      </div>

      <div className="container-page relative z-10 grid lg:grid-cols-12 gap-10 items-center text-white">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="lg:col-span-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="h-3.5 w-3.5" /> Since 2014 · Hisar, Haryana
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
            Trusted Visa & Immigration{" "}
            <span className="bg-gradient-to-r from-white to-[oklch(0.95_0.06_25)] bg-clip-text text-transparent">
              Experts
            </span>{" "}
            Since 2014
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            Helping students, tourists, and professionals achieve their global dreams with
            expert visa guidance, end-to-end documentation, and personal counseling.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold">
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/918222822427" target="_blank" rel="noopener noreferrer"
              className="btn-ghost-light inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold">
              <Phone className="h-4 w-4" /> WhatsApp Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {[
              { icon: ShieldCheck, label: "Certified Consultants" },
              { icon: Award, label: "98% Success Rate" },
              { icon: Users, label: "5,000+ Clients Guided" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-white/85">
                <b.icon className="h-4 w-4 text-[oklch(0.85_0.12_25)]" /> {b.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="glass-card rounded-3xl p-6 text-foreground">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Live updates</p>
                <p className="font-semibold">Visa rounds open this week</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Canada", "Open intake"],
                ["United Kingdom", "Sept '26 batch"],
                ["Australia", "PR draws live"],
                ["Schengen Europe", "Tourist 30 days"],
              ].map(([c, s]) => (
                <li key={c} className="flex items-center justify-between">
                  <span className="font-medium text-ink">{c}</span>
                  <span className="text-xs text-primary font-semibold">{s}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Get a tailored plan <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hidden md:flex flex-col items-center gap-1 text-xs">
        Scroll <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const stats = [
    { end: 10, suffix: "+", label: "Years of experience" },
    { end: 5000, suffix: "+", label: "Applications guided" },
    { end: 98, suffix: "%", label: "Client satisfaction" },
    { end: 15, suffix: "+", label: "Countries covered" },
  ];
  return (
    <section id="about" className="py-24 sm:py-32 bg-surface">
      <div className="container-page grid lg:grid-cols-12 gap-14 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="lg:col-span-6 relative">
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
          <img
            src={officeImg}
            alt="Ajay Overseas team consulting clients"
            loading="lazy"
            width={1280}
            height={960}
            className="relative rounded-3xl shadow-[var(--shadow-lg)] w-full"
          />
          <div className="absolute -bottom-8 -right-4 lg:-right-8 glass-card rounded-2xl p-5 max-w-[240px]">
            <div className="flex -space-x-2 mb-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="h-9 w-9 rounded-full ring-2 ring-white bg-[image:var(--gradient-primary)]" />
              ))}
            </div>
            <p className="text-sm font-semibold text-ink">5,000+ happy clients</p>
            <p className="text-xs text-muted-foreground mt-1">trusted us since 2014</p>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="lg:col-span-6">
          <span className="section-eyebrow">About Ajay Overseas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">
            A decade of guiding Indian dreams across <span className="text-gradient">borders.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Founded in 2014 in the heart of Hisar, Ajay Overseas has grown into one of Haryana's most
            trusted visa and immigration consultancies. We pair deep procedural expertise with truly
            personalized counseling — from your first university shortlist to the moment your visa is stamped.
          </p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {[
              "Personalized one-on-one guidance",
              "End-to-end documentation support",
              "Visa interview preparation",
              "SOP & university selection",
              "Honest, customer-first approach",
              "Refusal case re-application help",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <div className="text-3xl font-bold text-gradient">
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const items = [
    { icon: GraduationCap, title: "Canada Student Visa", desc: "From SDS to PGWP — complete guidance for every Canadian study pathway." },
    { icon: BookOpenCheck, title: "UK Study Visa", desc: "CAS, financials, and interviews handled for top UK universities." },
    { icon: Plane, title: "Australia Visitor Visa", desc: "Tourist & family visit visas with strong, well-prepared documentation." },
    { icon: Globe2, title: "Europe Tourist Visa", desc: "Schengen visas with itineraries, cover letters and embassy support." },
    { icon: ShieldCheck, title: "USA Visa Assistance", desc: "B1/B2 and F-1 visas with mock interviews and DS-160 support." },
    { icon: Briefcase, title: "Work Permit Services", desc: "Skilled, sponsored and post-study work permits — done right." },
    { icon: MessageSquareQuote, title: "IELTS Counseling", desc: "Personalized prep plans and band-score targeting for every visa." },
    { icon: FileText, title: "SOP & Documentation", desc: "Tailored Statements of Purpose that actually win admissions." },
    { icon: AlertTriangle, title: "Visa Refusal Guidance", desc: "Refusal review, root-cause analysis and a winning re-application." },
  ];
  return (
    <section id="services" className="py-24 sm:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="section-eyebrow">What we do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">
            Services crafted around <span className="text-gradient">your journey.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're preparing for a master's abroad or planning a family holiday, we run a tight,
            transparent process that keeps you informed at every step.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] hover:border-primary/40 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[image:var(--gradient-primary)] opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-700" />
              <div className="relative">
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-accent text-primary group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground transition-colors duration-500">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COUNTRIES ---------------- */
function Countries() {
  const list = [
    { name: "Canada", flag: "🇨🇦", tags: ["Study", "PR", "Work"], blurb: "World-class universities & post-study work options." },
    { name: "United Kingdom", flag: "🇬🇧", tags: ["Study", "Work"], blurb: "Russell Group access, Graduate Route visas." },
    { name: "Australia", flag: "🇦🇺", tags: ["Study", "Visit", "PR"], blurb: "High-quality life, strong skilled migration." },
    { name: "United States", flag: "🇺🇸", tags: ["Study", "Visit"], blurb: "F-1, B1/B2 — Ivy League and beyond." },
    { name: "Europe (Schengen)", flag: "🇪🇺", tags: ["Visit", "Study"], blurb: "26 countries, one visa, endless culture." },
    { name: "New Zealand", flag: "🇳🇿", tags: ["Study", "Work"], blurb: "Friendly migration policy & natural beauty." },
  ];
  return (
    <section id="countries" className="py-24 sm:py-32 bg-surface">
      <div className="container-page">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Destinations</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">
              Choose your <span className="text-gradient">next chapter.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            We hold visa expertise across 15+ countries — here are the destinations our clients choose most.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-[var(--shadow-card)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={i % 2 === 0 ? studentsImg : visasImg}
                  alt={c.name}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 grid place-items-center h-12 w-12 rounded-2xl bg-white/90 backdrop-blur text-2xl shadow">
                  {c.flag}
                </div>
                <h3 className="absolute bottom-4 left-5 right-5 text-xl font-semibold text-white">{c.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground">{c.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-[11px] font-semibold uppercase tracking-wider rounded-full bg-accent text-accent-foreground px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STUDY VISA ---------------- */
function StudyVisa() {
  const steps = ["Consultation", "Documentation", "Application", "Interview", "Visa Approval"];
  return (
    <section id="study" className="py-24 sm:py-32 bg-background">
      <div className="container-page grid lg:grid-cols-12 gap-14 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="lg:col-span-6 order-2 lg:order-1">
          <span className="section-eyebrow">Study Abroad</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">
            Built for <span className="text-gradient">future global graduates.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From shortlisting universities to landing at the airport — we walk every step with you.
            Honest counseling, sharp documentation, and proven interview prep.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {[
              "Student counseling & university shortlisting",
              "SOP, LOR & resume support",
              "IELTS / PTE counseling",
              "Visa filing & financial planning",
              "Mock interview preparation",
              "Pre-departure briefing",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {p}
              </li>
            ))}
          </ul>

          {/* Timeline */}
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Your journey</p>
            <ol className="relative grid grid-cols-2 sm:grid-cols-5 gap-4">
              {steps.map((s, i) => (
                <li key={s} className="relative">
                  <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                    <div className="grid place-items-center h-10 w-10 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground text-sm font-bold shadow-[var(--shadow-glow)]">
                      {i + 1}
                    </div>
                    <p className="text-sm font-semibold text-ink">{s}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="hidden sm:block absolute top-5 left-12 right-0 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-6 order-1 lg:order-2 relative">
          <img
            src={counselingImg}
            alt="Student counseling at Ajay Overseas"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-3xl shadow-[var(--shadow-lg)] w-full"
          />
          <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 max-w-[240px]">
            <div className="flex items-center gap-2 text-primary">
              <Award className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Top counselors</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-ink">Personalized university shortlist within 48 hours.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- TOURIST VISA ---------------- */
function TouristVisa() {
  const items = [
    { icon: Plane, title: "Family Visit Visas", desc: "Reunite with loved ones with airtight invitation & sponsor documentation." },
    { icon: Globe2, title: "Holiday & Leisure", desc: "Customized itineraries and cover letters that win embassy approvals." },
    { icon: Briefcase, title: "Business Travel", desc: "B1, conferences, expos — invitation handling and quick turnaround." },
    { icon: FileText, title: "Documentation Support", desc: "Bank statements, ITRs, NOCs — we prepare a clean, complete file." },
    { icon: ShieldCheck, title: "Fast Processing", desc: "Priority appointments and VFS guidance to minimize wait times." },
    { icon: MessageSquareQuote, title: "Interview Coaching", desc: "Confidence training for visas requiring in-person interviews." },
  ];
  return (
    <section id="tourist" className="py-24 sm:py-32 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Tourist & Visit Visas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">
            Travel the world, <span className="text-gradient">without the paperwork stress.</span>
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="rounded-3xl bg-card border border-border p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
            >
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-semibold text-ink">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STORIES ---------------- */
function Stories() {
  const reviews = [
    { name: "Priya S.", role: "Master's, University of Toronto", quote: "From SOP to visa stamping, every step felt handled. They turned a confusing process into a calm, clear plan.", country: "🇨🇦" },
    { name: "Rohan M.", role: "UK Study Visa, Manchester", quote: "Their interview prep was the difference. I walked in confident and got my visa on the first attempt.", country: "🇬🇧" },
    { name: "Anjali & family", role: "Schengen Tourist", quote: "Got our family Schengen visa in record time. Honest advice, premium service, fair pricing.", country: "🇪🇺" },
    { name: "Karan V.", role: "Australia Visitor", quote: "After one refusal elsewhere, Ajay Overseas re-built my application. Approved cleanly.", country: "🇦🇺" },
  ];
  return (
    <section id="stories" className="py-24 sm:py-32 bg-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Success Stories</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">
            Real people. Real <span className="text-gradient">approvals.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="relative rounded-3xl bg-card border border-border p-8 shadow-[var(--shadow-card)] overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-4xl">{r.country}</div>
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-lg font-medium text-ink leading-relaxed">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const items = [
    { q: "How do I book an appointment?", a: "Use the contact form below, WhatsApp us at +91 82228 22427, or simply walk in to our Hisar office between 10 AM and 8 PM, any day of the week." },
    { q: "Do you help with visa interview preparation?", a: "Yes — every applicable case includes a structured mock interview with our senior counselor and personalized feedback." },
    { q: "How long does visa processing take?", a: "It depends on the country and visa type. Tourist visas can range from 7–15 working days, while student visas may take 4–8 weeks. We'll give you a realistic timeline up front." },
    { q: "Do you guide on immigration & PR pathways?", a: "Absolutely. We advise on Express Entry (Canada), Skilled Migration (Australia), Graduate Route (UK), and other long-term pathways." },
    { q: "What documents will I need?", a: "We share a clean, country-specific checklist after your free consultation and help you build every document in the right format." },
    { q: "Do you handle previously refused cases?", a: "Yes — refusal cases are one of our specialties. We diagnose the cause and rebuild a much stronger application." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32 bg-surface">
      <div className="container-page max-w-4xl">
        <div className="text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">
            Answers, before you even <span className="text-gradient">ask.</span>
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <div key={it.q} className="rounded-2xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={active}
                >
                  <span className="font-semibold text-ink">{it.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-300 ${active ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5">
          <span className="section-eyebrow">Let's talk</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink">
            Your global journey starts with a <span className="text-gradient">free consultation.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Tell us where you want to go. We'll come back with a clear, honest plan within one business day.
          </p>

          <div className="mt-10 space-y-5">
            <ContactCard icon={Phone} title="Call us" lines={["+91 82228 22427"]} href="tel:+918222822427" />
            <ContactCard icon={Mail} title="Email" lines={["email@ajayoverseas.world"]} href="mailto:email@ajayoverseas.world" />
            <ContactCard icon={MapPin} title="Visit our office" lines={["1st Floor, Red Square Market, SCO140,", "Mehta Nagar, Hisar, Haryana 125001"]} />
            <ContactCard icon={Clock} title="Open daily" lines={["10:00 AM – 8:00 PM"]} />
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-7">
          <div className="rounded-3xl bg-card border border-border p-7 sm:p-10 shadow-[var(--shadow-lg)]">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, lines, href }: { icon: typeof Phone; title: string; lines: string[]; href?: string }) {
  const Inner = (
    <div className="flex items-start gap-4 group">
      <div className="grid place-items-center h-12 w-12 rounded-2xl bg-accent text-primary group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</p>
        {lines.map((l) => <p key={l} className="text-sm font-medium text-ink leading-relaxed">{l}</p>)}
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{Inner}</a> : <div>{Inner}</div>;
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-page py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
              <Plane className="h-5 w-5 -rotate-45" />
            </span>
            <div className="leading-tight">
              <div className="font-bold text-white">Ajay Overseas</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">Your Gateway to the World</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Trusted visa & immigration consultancy in Hisar since 2014. Premium guidance for students, tourists and professionals.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid place-items-center h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {[["Home","#home"],["About","#about"],["Countries","#countries"],["Success Stories","#stories"],["FAQ","#faq"],["Contact","#contact"]].map(([l,h]) => (
              <li key={l}><a href={h} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-4">Services</p>
          <ul className="space-y-2 text-sm">
            {["Canada Student Visa","UK Study Visa","Australia Visitor Visa","Europe Tourist Visa","USA Visa Assistance","IELTS Counseling"].map((s) => (
              <li key={s}><a href="#services" className="hover:text-primary transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-4">Reach Us</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span>1st Floor, Red Square Market, SCO140, Mehta Nagar, Hisar, Haryana 125001</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> <a href="tel:+918222822427" className="hover:text-primary transition">+91 82228 22427</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> <a href="mailto:email@ajayoverseas.world" className="hover:text-primary transition">email@ajayoverseas.world</a></li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Open daily · 10 AM – 8 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Ajay Overseas. All rights reserved.</p>
          <p>Hisar · Haryana · India</p>
        </div>
      </div>
    </footer>
  );
}
