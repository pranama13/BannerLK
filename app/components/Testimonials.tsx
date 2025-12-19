"use client";

import { useMemo, useState } from "react";

type Testimonial = {
  id: string;
  name: string;
  role?: string;
  text: string;
};

function QuoteMark() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M28 14C18.611 16.03 13.5 23.24 13.5 33.5V50H29.5V34.5H21.2C21.8 27.1 25.7 23.3 31.6 21.8L28 14ZM54 14C44.611 16.03 39.5 23.24 39.5 33.5V50H55.5V34.5H47.2C47.8 27.1 51.7 23.3 57.6 21.8L54 14Z"
        fill="#06B6D4"
      />
    </svg>
  );
}

export default function Testimonials() {
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        id: "t-1",
        name: "Nimal Perera",
        role: "Retail Store Owner",
        text: "Banner.lk handled our seasonal promotion banners perfectly. The design was clean, colors were spot-on, and the final print looked premium. Turnaround time was faster than expected.",
      },
      {
        id: "t-2",
        name: "Tharushi Jayasinghe",
        role: "Event Coordinator",
        text: "We needed a large stage backdrop and standees within a tight deadline. They guided us on sizes and layout, shared proofs quickly, and delivered a professional finish that photographed beautifully.",
      },
      {
        id: "t-3",
        name: "Ruwan Fernando",
        role: "Restaurant Manager",
        text: "Our outdoor banners were designed for visibility and readability from the road. The team helped refine the messaging and typography — the final result brought in noticeable walk-in traffic.",
      },
      {
        id: "t-4",
        name: "Chamodi Silva",
        role: "Marketing Executive",
        text: "We love how consistent our branding looks now. They created a banner template set we can reuse for every campaign, which saves us time and keeps everything aligned with our brand.",
      },
      {
        id: "t-5",
        name: "Kasun Maduranga",
        role: "Construction Company Admin",
        text: "Great service from start to finish. They advised on materials for outdoor durability and prepared the files correctly. The print quality stayed sharp even at large sizes.",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex] ?? testimonials[0];

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <h2 className="text-5xl md:text-6xl font-light text-slate-700 leading-tight">
          Client <span className="text-cyan-500 font-normal">Testimonials</span>
        </h2>

        <div className="mt-16 flex flex-col items-center">
          <div className="w-full max-w-[860px] bg-slate-50 border border-slate-200 px-10 md:px-14 py-12 md:py-14">
            <div className="mb-6">
              <QuoteMark />
            </div>

            <h3 className="text-3xl md:text-4xl font-light text-slate-700">
              {active.name}
            </h3>
            {active.role ? (
              <p className="mt-2 text-slate-500">{active.role}</p>
            ) : null}

            <p className="mt-8 text-slate-500 leading-relaxed text-lg">
              {active.text}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {testimonials.map((t, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    isActive
                      ? "w-10 bg-slate-300"
                      : "w-2.5 bg-slate-200 hover:bg-slate-300",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
                  ].join(" ")}
                  aria-label={`Show testimonial ${idx + 1}`}
                  aria-current={isActive ? "true" : undefined}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


