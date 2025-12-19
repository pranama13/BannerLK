"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  target: number;
  suffix?: string;
  label: string;
  sub?: string;
};

function formatNumber(n: number) {
  return Math.round(n).toLocaleString();
}

export default function AboutStatsSection() {
  const stats: Stat[] = useMemo(
    () => [
      {
        target: 10,
        suffix: "+",
        label: "Years Experience",
        sub: "In banner design & printing",
      },
      { target: 1200, suffix: "+", label: "Projects Delivered", sub: "Across Sri Lanka" },
      { target: 450, suffix: "+", label: "Happy Clients", sub: "SMEs to large brands" },
      { target: 98, suffix: "%", label: "On‑Time Delivery", sub: "Reliable turnaround" },
    ],
    []
  );

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState<number[]>(() => stats.map(() => 0));
  const startedRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (startedRef.current) return;
    startedRef.current = true;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplay(stats.map((s) => s.target));
      return;
    }

    const rafIds: number[] = [];
    const timeouts: number[] = [];

    const animateOne = (index: number, duration = 1200) => {
      const start = 0;
      const end = stats[index]?.target ?? 0;
      const startTime = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        const value = start + (end - start) * eased;

        setDisplay((prev) => {
          const next = [...prev];
          next[index] = value;
          return next;
        });

        if (t < 1) {
          rafIds[index] = requestAnimationFrame(tick);
        } else {
          setDisplay((prev) => {
            const next = [...prev];
            next[index] = end;
            return next;
          });
        }
      };

      rafIds[index] = requestAnimationFrame(tick);
    };

    stats.forEach((_, idx) => {
      // stagger each card
      timeouts[idx] = window.setTimeout(() => animateOne(idx), idx * 140);
    });

    return () => {
      rafIds.forEach((id) => {
        if (id) cancelAnimationFrame(id);
      });
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, [visible, stats]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="text-4xl md:text-5xl font-light text-slate-700 leading-tight">
            Our{" "}
            <span className="text-cyan-500 font-normal">Impact</span> in Numbers
          </h2>
          <p className="text-slate-400 max-w-[520px] leading-relaxed">
            A quick snapshot of the scale, consistency, and reliability we bring
            to every banner project.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className={[
                "border border-slate-200 bg-white",
                "px-10 py-10",
                "transition-all duration-700 ease-out",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              ].join(" ")}
              style={{ transitionDelay: visible ? `${idx * 120}ms` : "0ms" }}
            >
              <div className="text-5xl md:text-6xl font-light text-slate-700">
                <span className="text-cyan-500 font-normal">
                  {formatNumber(display[idx] ?? 0)}
                  {s.suffix ?? ""}
                </span>
              </div>
              <div className="mt-4 text-sm tracking-widest text-slate-500 uppercase">
                {s.label}
              </div>
              {s.sub ? (
                <div className="mt-3 text-slate-400 text-sm leading-relaxed">
                  {s.sub}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


