import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { ServiceStack, type Service } from "@/components/site/ServiceStack";
import heroArt from "@/assets/hero-abstract.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mynatechsolutions — Websites & Ecommerce That Grow Your Business" },
      {
        name: "description",
        content:
          "Mynatechsolutions is a web development studio building ecommerce stores, business websites, web apps and landing pages — with ongoing support after launch.",
      },
      {
        property: "og:title",
        content: "Mynatechsolutions — Websites & Ecommerce That Grow Your Business",
      },
      {
        property: "og:description",
        content:
          "Ecommerce stores, business websites and web apps, designed and built for your brand. Custom pricing, clear timelines, support included.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES: Service[] = [
  {
    index: "01",
    title: "Ecommerce Stores",
    summary:
      "Complete online stores with product catalogues, secure checkout, payments, shipping and order management — built to sell from day one.",
    deliverables: ["Product catalogue", "Secure checkout", "Payment gateway", "Order dashboard"],
    timeline: "3–6 weeks",
  },
  {
    index: "02",
    title: "Business & Company Websites",
    summary:
      "A fast, polished website that tells your story, builds trust and turns visitors into enquiries — on every device.",
    deliverables: ["Custom design", "Mobile-first", "SEO basics", "Contact & enquiry forms"],
    timeline: "2–4 weeks",
  },
  {
    index: "03",
    title: "Web Apps & Custom Platforms",
    summary:
      "Booking systems, dashboards, portals and tools built around how your business actually works — not the other way around.",
    deliverables: ["User logins", "Admin dashboard", "Database", "Integrations"],
    timeline: "4–10 weeks",
  },
  {
    index: "04",
    title: "Landing Pages & Redesigns",
    summary:
      "High-converting pages for campaigns and launches — or a full refresh that brings your current site up to modern standards.",
    deliverables: ["Conversion copy layout", "Animations", "Speed optimisation", "A/B ready"],
    timeline: "1–2 weeks",
  },
  {
    index: "05",
    title: "Care & Growth Plans",
    summary:
      "After launch we stay on: updates, security, backups, small changes and performance checks — so your site never goes stale.",
    deliverables: ["Monthly updates", "Security & backups", "Priority support", "Analytics report"],
    timeline: "Ongoing",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Discovery call",
    text: "We learn your business, your customers and what the site must achieve. Free, no obligation.",
  },
  {
    n: "2",
    title: "Proposal & price",
    text: "You get a fixed quote and timeline for your project — every project is priced individually.",
  },
  {
    n: "3",
    title: "Design preview",
    text: "You see and approve the design before we write production code. Revisions included.",
  },
  {
    n: "4",
    title: "Build & launch",
    text: "We develop, test on real devices, connect your domain and take the site live.",
  },
  {
    n: "5",
    title: "Support & growth",
    text: "Training, documentation and a care plan keep your website fast, safe and up to date.",
  },
];

const INCLUDED = [
  "Custom design — never an off-the-shelf template",
  "Mobile-first, responsive on every screen size",
  "On-page SEO and analytics set up from day one",
  "Fast loading and performance tuned",
  "Content managed by you — no developer needed for edits",
  "Domain, hosting and email guidance",
  "Launch checklist and post-launch support",
  "Clear communication and weekly progress updates",
];

const MARQUEE_ITEMS = [
  "Ecommerce",
  "Business Websites",
  "Web Apps",
  "Landing Pages",
  "Redesigns",
  "SEO Setup",
  "Maintenance",
  "Branding Support",
];

function Index() {
  useReveal();

  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      {/* ---------------- Nav ---------------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
              M
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Myna<span className="text-primary">tech</span>solutions
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#process" className="transition-colors hover:text-foreground">Process</a>
            <a href="#included" className="transition-colors hover:text-foreground">What's included</a>
            <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* ---------------- Hero ---------------- */}
      <section id="top" className="bg-grid relative pt-16">
        <div className="glow-orb pointer-events-none absolute -top-24 right-[-10%] h-[34rem] w-[34rem] rounded-full" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.15fr_1fr] md:pt-24">
          <div>
            <p className="reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Web development studio
            </p>
            <h1
              className="reveal mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl"
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              We build websites that{" "}
              <span className="text-primary">work as hard</span> as you do.
            </h1>
            <p
              className="reveal mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              style={{ ["--reveal-delay" as string]: "240ms" }}
            >
              Mynatechsolutions designs and develops ecommerce stores, business
              websites and custom web apps for clients who want a site that
              looks premium and actually brings in business.
            </p>
            <div
              className="reveal mt-8 flex flex-wrap items-center gap-4"
              style={{ ["--reveal-delay" as string]: "360ms" }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[var(--glow)] transition-transform hover:scale-105"
              >
                Get a free quote
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                See what we build
              </a>
            </div>
            <dl
              className="reveal mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8"
              style={{ ["--reveal-delay" as string]: "480ms" }}
            >
              {[
                ["100%", "Custom built"],
                ["5+", "Services offered"],
                ["24h", "Reply time"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-bold text-primary">{v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="reveal relative"
            style={{ ["--reveal-delay" as string]: "300ms" }}
          >
            <div className="glow-orb pointer-events-none absolute inset-8 rounded-full" />
            <img
              src={heroArt}
              alt="Abstract 3D shapes representing modern web technology"
              width={1216}
              height={832}
              className="animate-pulse-soft relative rounded-3xl border border-border object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ---------------- Marquee ---------------- */}
      <div className="border-y border-border bg-secondary/60 py-4">
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- Services: peel-off stack ---------------- */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            What we provide
          </p>
          <h2 className="reveal mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Everything your business needs online —{" "}
            <span className="text-stroke">peel through our services.</span>
          </h2>
          <p className="reveal mt-4 text-lg text-muted-foreground">
            Scroll on — each service slides over the last. Every engagement is
            custom-scoped, so you only pay for what you need.
          </p>
        </div>

        <ServiceStack services={SERVICES} />
      </section>

      {/* ---------------- Process ---------------- */}
      <section id="process" className="border-y border-border bg-card/50 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our stack flow
            </p>
            <h2 className="reveal mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              From first call to launch — in five clear steps.
            </h2>
          </div>

          <ol className="mt-16 grid gap-6 md:grid-cols-5">
            {STEPS.map((step, i) => (
              <li
                key={step.n}
                className="reveal group relative rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[var(--glow)]"
                style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">
                  {step.n}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
                {i < STEPS.length - 1 && (
                  <ArrowUpRight className="absolute right-5 top-6 h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- What's included ---------------- */}
      <section id="included" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="md:sticky md:top-28">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              What every company needs
            </p>
            <h2 className="reveal mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Every project ships with the essentials —{" "}
              <span className="text-primary">no hidden extras.</span>
            </h2>
            <p className="reveal mt-4 text-lg text-muted-foreground">
              A website is more than pages. It's speed, search visibility,
              security and the ability to update it yourself. That's all
              included, always.
            </p>
            <a
              href="#contact"
              className="reveal mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Ask about your project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="grid gap-3">
            {INCLUDED.map((item, i) => (
              <li
                key={item}
                className="reveal flex items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4"
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </span>
                <span className="text-sm font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Pricing ---------------- */}
      <section id="pricing" className="border-y border-border bg-card/50 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Pricing
          </p>
          <h2 className="reveal mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            No fixed packages.{" "}
            <span className="text-primary">Fair, per-project pricing.</span>
          </h2>
          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our prices aren't fixed on a menu — every business is different.
            Tell us what you need and we'll send a clear, itemised quote with
            a timeline. The discovery call and quote are always free.
          </p>
          <div className="reveal mx-auto mt-10 grid max-w-2xl gap-4 text-left sm:grid-cols-3">
            {[
              ["Free quote", "Priced to your exact scope"],
              ["No lock-in", "You own your site & content"],
              ["Support plans", "Optional monthly care"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-background p-5">
                <p className="font-display font-bold text-primary">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact / CTA ---------------- */}
      <section id="contact" className="relative py-24 md:py-32">
        <div className="glow-orb pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="reveal relative mx-auto max-w-4xl rounded-3xl border border-primary/25 bg-card px-6 py-16 text-center shadow-[var(--glow)] md:px-16 md:py-20">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Let's build your website.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Tell us about your business and what you want your website to do.
            We'll reply within 24 hours with ideas and a free quote.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@mynatechsolutions.com?subject=New%20website%20project"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              info@mynatechsolutions.com
            </a>
            <a
              href="https://wa.me/7799229494?text=Hi%20Mynatechsolutions%2C%20I%20need%20a%20website"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-semibold transition-colors hover:bg-secondary"
            >
              <MessageSquare className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
          
          </p>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <p className="font-display font-bold text-foreground">
            Myna<span className="text-primary">tech</span>solutions
          </p>
          <p>Websites · Ecommerce · Web apps · Support</p>
          <p>© {new Date().getFullYear()} Mynatechsolutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
