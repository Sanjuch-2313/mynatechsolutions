import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Mail,
  Menu,
  MessageCircle,
  Orbit,
  Smartphone,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mynatechsolutions | Web Development Studio" },
      { name: "description", content: "Mynatechsolutions builds ecommerce stores, company websites, web apps, landing pages, and ongoing growth plans." },
      { property: "og:title", content: "Mynatechsolutions | Web Development Studio" },
      { property: "og:description", content: "Websites and digital products built to work as hard as you do." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { name: "Ecommerce Stores" },
  { name: "Business & Company Websites" },
  { name: "Web Apps & Custom Platforms" },
  { name: "Landing Pages & Redesigns" },
  { name: "Care & Growth Plans" },
  { name: "App Development", detail: "Built using Android Studio", icon: "android" },
];
const marquee = ["Ecommerce", "Business Websites", "Web Apps", "Android Apps", "Landing Pages", "Redesigns", "SEO Setup", "Maintenance", "Branding Support"];
const process = ["Discovery call", "Proposal & price", "Design preview", "Build & launch", "Support & growth"];
const included = ["Responsive design", "SEO setup", "Performance optimization", "Secure deployment", "Analytics setup", "Post-launch support"];
const pricing = ["Free quote", "No lock-in", "Support plans"];
const projects = [
  { name: "Vip Food", category: "Ecommerce", code: "VF–01", highlight: "Live digital storefront" },
  { name: "Maveduka", category: "Web platform", code: "MD–02", highlight: "Built for modern commerce" },
];

function StarField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let width = 0;
    let height = 0;
    let mouseX = 0;
    let mouseY = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stars = Array.from({ length: window.innerWidth < 700 ? 42 : 90 }, (_, index) => ({
      x: (index * 83.7) % 100 / 100,
      y: (index * 47.3) % 100 / 100,
      size: 0.35 + (index % 4) * 0.25,
      depth: 0.15 + (index % 7) / 10,
    }));
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const pointer = (event: PointerEvent) => {
      mouseX = event.clientX / width - 0.5;
      mouseY = event.clientY / height - 0.5;
    };
    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--foreground");
      stars.forEach((star) => {
        const drift = reduced ? 0 : time * 0.000004 * star.depth;
        const x = ((star.x + drift) % 1) * width + mouseX * star.depth * 8;
        const y = star.y * height + mouseY * star.depth * 6;
        context.globalAlpha = 0.12 + star.depth * 0.25;
        context.beginPath();
        context.arc(x, y, star.size, 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
      if (!reduced) frame = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", pointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointer);
    };
  }, []);
  return <canvas ref={ref} className="star-field" aria-hidden="true" />;
}

function BlackHole({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "black-hole black-hole-compact" : "black-hole"} aria-hidden="true">
      <div className="gravity-haze" />
      <div className="orbit-ring orbit-ring-one"><i /></div>
      <div className="orbit-ring orbit-ring-two"><i /></div>
      <div className="orbit-ring orbit-ring-three"><i /></div>
      <div className="accretion-disk" />
      <div className="lensing lensing-top" />
      <div className="lensing lensing-bottom" />
      <div className="singularity" />
    </div>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        element.dataset["visible"] = "true";
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function SectionTitle({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return <div className="section-title"><span>{number} / {eyebrow}</span><h2>{title}</h2></div>;
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = [
    ["Services", "#services"], ["Process", "#process"], ["What's Included", "#included"], ["Pricing", "#pricing"],
  ];
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="brand" aria-label="Mynatechsolutions home"><span className="brand-orbit" aria-hidden="true"><i /></span><strong>Mynatechsolutions</strong><em>.</em></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <a href="#contact" className="button button-outline nav-cta">Start a Project</a>
      <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Start a Project</a></nav>}
    </header>
  );
}

function ProjectArchive() {
  const [active, setActive] = useState(0);
  const project = projects[active] ?? projects[0];
  if (!project) return null;
  const move = (direction: number) => setActive((value) => (value + direction + projects.length) % projects.length);
  return (
    <div className="project-archive">
      <div className="project-viewport">
        <div className="project-track" style={{ transform: `translateX(calc(-${active} * (100% + 1rem)))` }}>
          {projects.map((item, index) => (
            <article className={`project-card ${index === active ? "is-active" : ""}`} key={item.code} aria-hidden={index !== active}>
              <span className="project-code">ARCHIVE {item.code}</span>
              <div className="project-card-orbit"><span>{item.name.split(" ").map((word) => word[0]).join("")}</span></div>
              <div className="project-card-copy">
                <span className="eyebrow">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.highlight}</p>
                <a href="#contact" className="text-link">Visit project <ExternalLink size={15} /></a>
              </div>
              <span className="project-status"><i /> LIVE</span>
            </article>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={() => move(-1)} aria-label="Previous project"><ArrowLeft /></button>
        <span>0{active + 1} / 0{projects.length}</span>
        <button onClick={() => move(1)} aria-label="Next project"><ArrowRight /></button>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="space-site">
      <StarField />
      <div className="page-noise" aria-hidden="true" />
      <Navigation />
      <main>
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Web development studio</p>
            <h1>We build websites that work as hard as you do.</h1>
            <p className="hero-description">Ecommerce stores, business websites, web apps, landing pages, redesigns, and long-term care—engineered for real growth.</p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Start a Project <ArrowDownRight /></a>
              <a href="#projects" className="button button-quiet">See Live Projects</a>
            </div>
            <div className="hero-index"><span>SCROLL TO ENTER</span><i /></div>
          </div>
          <div className="hero-visual"><BlackHole /><span className="visual-label label-one">EVENT HORIZON / 01</span><span className="visual-label label-two">STABLE ORBIT</span></div>
        </section>

        <div className="marquee" aria-label={marquee.join(", ")}><div>{[...marquee, ...marquee].map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}</div></div>

        <section id="services" className="content-section section-shell">
          <Reveal><SectionTitle number="01" eyebrow="Services" title="Six disciplines. One precise orbit." /></Reveal>
          <div className="service-stack">
            {services.map((service, index) => <Reveal key={service.name} className="service-reveal"><article className="service-card"><span>0{index + 1}</span><div><h3>{service.name}</h3>{service.detail && <p>{service.detail}</p>}</div>{service.icon === "android" ? <Smartphone /> : <Orbit />}<i className="card-orbit" /></article></Reveal>)}
          </div>
        </section>

        <section id="projects" className="content-section archive-section">
          <div className="section-shell"><Reveal><SectionTitle number="02" eyebrow="Live Projects" title="Work already in orbit." /></Reveal><Reveal><ProjectArchive /></Reveal></div>
        </section>

        <section id="process" className="content-section section-shell">
          <Reveal><SectionTitle number="03" eyebrow="Process" title="A clear path from signal to launch." /></Reveal>
          <Reveal className="process-orbit"><div className="process-line" />{process.map((step, index) => <article key={step}><div className="process-node"><i /></div><span>0{index + 1}</span><h3>{step}</h3></article>)}</Reveal>
        </section>

        <section id="included" className="content-section included-section">
          <div className="section-shell included-grid"><Reveal><SectionTitle number="04" eyebrow="What's Included" title="The essential systems, already accounted for." /></Reveal><div className="included-list">{included.map((item) => <Reveal key={item}><div className="included-item"><span><Check /></span><p>{item}</p><small>SYSTEM READY</small></div></Reveal>)}</div></div>
        </section>

        <section id="pricing" className="content-section section-shell">
          <Reveal><SectionTitle number="05" eyebrow="Pricing" title="No fixed packages. Fair, per-project pricing." /></Reveal>
          <Reveal><div className="pricing-deck"><div className="pricing-core"><span>PROJECT PRICING</span><strong>Built around your scope.</strong><p>Clear recommendations before the build begins.</p><a href="#contact" className="button button-primary">Request a quote <ArrowRight /></a></div><div className="pricing-grid">{pricing.map((item, index) => <article className="price-module" key={item}><span>0{index + 1}</span><div className="module-signal"><i /><i /><i /></div><h3>{item}</h3><Check /></article>)}</div></div></Reveal>
        </section>

        <section id="contact" className="contact-section section-shell">
          <BlackHole compact />
          <Reveal className="contact-content"><p className="eyebrow"><span /> Communication gateway</p><h2>Ready to start your project?</h2><p>Tell us what you’re building. We’ll help you find the clearest path forward.</p><div className="contact-actions"><a href="mailto:info@mynatechsolutions.com" className="button button-primary"><Mail /> Email us</a><a href="https://wa.me/97799229494?text=Hi%20Mynatechsolutions%2C%20I%20need%20a%20website" className="button button-outline"><MessageCircle /> WhatsApp</a></div><small>Your project details stay private.</small></Reveal>
        </section>
      </main>
      <footer><div className="section-shell footer-inner"><a href="#top" className="brand"><span className="brand-orbit" aria-hidden="true"><i /></span><strong>MYNATECH</strong><em>.</em></a><p>Web development studio</p><a href="#top" className="back-top">Back to top <ArrowRight /></a></div></footer>
    </div>
  );
}
