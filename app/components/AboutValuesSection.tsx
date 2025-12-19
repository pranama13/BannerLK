"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ValueCard = {
  title: string;
  description: string;
};

export default function AboutValuesSection() {
  const cards: ValueCard[] = useMemo(
    () => [
      {
        title: "Integrity",
        description:
          "We do the right thing—always. Integrity guides how we communicate, price, and deliver every project.",
      },
      {
        title: "Quality",
        description:
          "From design to print output, we obsess over details so your banners look sharp, clean, and premium.",
      },
      {
        title: "Passion",
        description:
          "We love great design and flawless printing. That passion drives our creativity and consistency.",
      },
      {
        title: "Client Focus",
        description:
          "Your goal is our goal. We listen first, then recommend the best approach for your audience and budget.",
      },
      {
        title: "Reliability",
        description:
          "Timelines matter. We plan, proof, and produce with dependable turnaround for every order.",
      },
      {
        title: "Innovation",
        description:
          "We keep improving—tools, materials, and workflows—so you get better results with less friction.",
      },
      {
        title: "Collaboration",
        description:
          "We work as an extension of your team—sharing options, refining ideas, and getting it right together.",
      },
      {
        title: "Accountability",
        description:
          "We take ownership from first draft to final delivery, ensuring every piece meets expectations.",
      },
    ],
    []
  );

  // Arrange cards to match the staggered layout in the reference (right column starts higher).
  const leftColumn = [cards[2], cards[3], cards[4], cards[6]].filter(
    Boolean
  ) as ValueCard[];
  const rightColumn = [cards[0], cards[1], cards[5], cards[7]].filter(
    Boolean
  ) as ValueCard[];

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [shown, setShown] = useState<boolean[]>(() => cards.map(() => false));

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setShown(cards.map(() => true));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idxAttr = (entry.target as HTMLElement).dataset.idx;
          const idx = idxAttr ? Number(idxAttr) : NaN;
          if (!Number.isFinite(idx)) return;

          setShown((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    cardRefs.current.forEach((el) => {
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [cards]);

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left title */}
          <div className="lg:col-span-4">
            <h2 className="text-6xl md:text-7xl font-light text-slate-700 leading-tight">
              Our <br />
              <span className="text-cyan-500 font-normal">Values</span>
            </h2>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left column (starts lower, like the screenshot) */}
              <div className="flex flex-col gap-10 md:pt-24">
                {leftColumn.map((c) => {
                  const idx = cards.findIndex((x) => x.title === c.title);
                  const isShown = shown[idx] ?? false;
                  return (
                    <div
                      key={c.title}
                      ref={(el) => {
                        if (idx >= 0) cardRefs.current[idx] = el;
                      }}
                      data-idx={idx}
                      className={[
                        "border border-slate-200 bg-white",
                        "px-10 py-10 md:px-12 md:py-12",
                        "min-h-[240px]",
                        "transition-all duration-700 ease-out",
                        isShown
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6",
                      ].join(" ")}
                      style={{
                        transitionDelay: isShown ? `${idx * 120}ms` : "0ms",
                      }}
                    >
                      <h3 className="text-3xl md:text-4xl font-light text-slate-700">
                        {c.title}
                      </h3>
                      <p className="mt-6 text-slate-400 leading-relaxed text-lg">
                        {c.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-10">
                {rightColumn.map((c) => {
                  const idx = cards.findIndex((x) => x.title === c.title);
                  const isShown = shown[idx] ?? false;
                  return (
                    <div
                      key={c.title}
                      ref={(el) => {
                        if (idx >= 0) cardRefs.current[idx] = el;
                      }}
                      data-idx={idx}
                      className={[
                        "border border-slate-200 bg-white",
                        "px-10 py-10 md:px-12 md:py-12",
                        "min-h-[240px]",
                        "transition-all duration-700 ease-out",
                        isShown
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6",
                      ].join(" ")}
                      style={{
                        transitionDelay: isShown ? `${idx * 120}ms` : "0ms",
                      }}
                    >
                      <h3 className="text-3xl md:text-4xl font-light text-slate-700">
                        {c.title}
                      </h3>
                      <p className="mt-6 text-slate-400 leading-relaxed text-lg">
                        {c.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


