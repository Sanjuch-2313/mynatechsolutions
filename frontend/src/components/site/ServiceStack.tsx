import { useEffect, useRef, useState } from "react";

export type Service = {
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
  timeline: string;
};

/**
 * Sticky "peel off" stack: each card pins to the top, and the next card
 * slides over it while the covered card shrinks, tilts back and dims.
 * Modern browsers use pure CSS scroll-driven animation (see styles.css);
 * a scroll-listener fallback drives the same transform elsewhere.
 */
export function ServiceStack({ services }: { services: Service[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [supportsTimeline, setSupportsTimeline] = useState(true);

  useEffect(() => {
    const supported =
      typeof CSS !== "undefined" &&
      CSS.supports?.("animation-timeline", "view()");
    setSupportsTimeline(Boolean(supported));
    if (supported) return;

    const container = containerRef.current;
    if (!container) return;
    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(".stack-card"),
    );

    let frame = 0;
    const update = () => {
      frame = 0;
      cards.forEach((card) => {
        const inner = card.querySelector<HTMLElement>(".stack-card-inner");
        if (!inner) return;
        const rect = card.getBoundingClientRect();
        const stickyTop = window.innerWidth < 768 ? 80 : 112;
        // How far this card has been "covered" by the following card.
        const covered = Math.min(
          1,
          Math.max(0, (stickyTop - rect.top + 1) / Math.max(rect.height, 1)),
        );
        const p = Math.min(1, covered * 2.4);
        inner.style.transform = `scale(${1 - p * 0.1}) translateY(${-p * 32}px)`;
        inner.style.filter = `brightness(${1 - p * 0.55}) blur(${p * 2}px)`;
        inner.style.opacity = `${1 - p * 0.25}`;
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-16"
      style={{ perspective: "1400px" }}
      data-timeline={supportsTimeline ? "css" : "js"}
    >
      {services.map((service, i) => (
        <div
          key={service.title}
          className="stack-card pb-8"
          style={{ ["--stack-top" as string]: `${5 + i * 0.75}rem` }}
        >
          <article className="stack-card-inner overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-2xl md:p-12">
            <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-start">
              <span className="font-display text-5xl font-800 text-stroke md:text-7xl">
                {service.index}
              </span>

              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-center">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Typical timeline
                </p>
                <p className="mt-1 font-display text-lg font-bold text-primary">
                  {service.timeline}
                </p>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
