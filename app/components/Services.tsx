"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function Services() {
  const services: Service[] = useMemo(
    () => [
      {
        id: "custom-banner-design",
        title: "Custom Banner Design",
        description:
          "We create high-impact banner designs tailored to your brand and campaign goals—perfect for shops, events, promotions, and announcements. Expect clean layouts, strong hierarchy, and print-ready artwork.",
        image: "/service.png",
      },
      {
        id: "large-format-print",
        title: "Large Format Printing",
        description:
          "From small signage to extra-large banners, we prepare files for sharp output with correct bleed, safe areas, and color handling—so your banner looks crisp and professional at any size.",
        image: "/service.png",
      },
      {
        id: "vinyl-flex-materials",
        title: "Vinyl, Flex & Material Guidance",
        description:
          "Not sure which material fits your use case? We help choose between vinyl, flex, mesh, and more—based on placement (indoor/outdoor), lighting, durability, and budget.",
        image: "/service.png",
      },
      {
        id: "event-backdrops",
        title: "Event Backdrops & Standee Design",
        description:
          "Stage backdrops, roll-ups, standees, and photo walls designed for visibility and great photos. We build layouts that read well from a distance and look premium up close.",
        image: "/service.png",
      },
      {
        id: "brand-consistent-templates",
        title: "Brand Kits & Banner Templates",
        description:
          "Need many banners with consistent branding? We create reusable templates and a mini brand kit (fonts, colors, layout rules) so future banners stay consistent and fast to produce.",
        image: "/service.png",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex] ?? services[0];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: List */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light text-slate-700 mb-10">
              Services
            </h2>

            <ul className="border-t border-slate-200">
              {services.map((s, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <li
                    key={s.id}
                    className="border-b border-slate-200"
                    onMouseEnter={() => setActiveIndex(idx)}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={[
                        "w-full text-left py-6 flex items-center justify-between gap-6",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500",
                      ].join(" ")}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span
                        className={[
                          "text-2xl md:text-3xl font-light transition-colors",
                          isActive ? "text-slate-700" : "text-slate-300",
                        ].join(" ")}
                      >
                        {s.title}
                      </span>

                      <span
                        className={[
                          "text-2xl transition-opacity",
                          isActive ? "opacity-100 text-slate-700" : "opacity-0",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: Details */}
          <div>
            <h3 className="text-4xl md:text-5xl font-light text-slate-700">
              <span className="text-slate-700">Banner </span>
              <span className="text-cyan-500 font-normal">{active.title}</span>
            </h3>

            <p className="mt-8 text-slate-500 leading-relaxed text-lg">
              {active.description}
            </p>

            <div className="mt-10 relative w-full h-[320px] bg-slate-100 overflow-hidden border border-slate-200">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


