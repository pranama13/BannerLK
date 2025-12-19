"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type ClientImage = {
  src: string;
  alt: string;
};

export default function AboutClientsSection() {
  const images: ClientImage[] = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => {
        const n = i + 1;
        return {
          src: `/D (${n}).jpeg`,
          alt: `Client work ${n}`,
        };
      }),
    []
  );

  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [shown, setShown] = useState<boolean[]>(() => images.map(() => false));

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setShown(images.map(() => true));
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

    itemRefs.current.forEach((el) => {
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [images]);

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="text-4xl md:text-5xl font-light text-slate-700 leading-tight">
            Our <span className="text-cyan-500 font-normal">Clients</span>
          </h2>
          <p className="text-slate-400 max-w-[520px] leading-relaxed">
            A glimpse of recent banner work and print outcomes. (Mock gallery —
            will be updated with real client projects.)
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((img, idx) => {
            const isShown = shown[idx] ?? false;
            const fromTop = idx % 2 === 0; // 1st top, 2nd bottom, 3rd top...
            return (
              <div
                key={img.src}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                data-idx={idx}
                className={[
                  "border border-slate-200 bg-white overflow-hidden",
                  "transition-all duration-700 ease-out",
                  isShown
                    ? "opacity-100 translate-y-0"
                    : fromTop
                      ? "opacity-0 -translate-y-8"
                      : "opacity-0 translate-y-8",
                ].join(" ")}
                style={{
                  transitionDelay: isShown ? `${idx * 80}ms` : "0ms",
                }}
              >
                <div className="relative w-full aspect-[4/3] bg-white p-3">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


