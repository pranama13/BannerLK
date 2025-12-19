"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Clients() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const startRef = useRef<number>(0);
    const distanceRef = useRef<number>(0);
    const [spacerHeight, setSpacerHeight] = useState<number>(0);

    const clients = Array.from({ length: 10 }, (_, i) => ({
        number: String(i + 1).padStart(2, '0'),
        image: `/D (${i + 1}).jpeg`,
        title: `Client Project ${i + 1}`
    }));

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const section = sectionRef.current;

        if (!scrollContainer || !section) return;

        const measure = () => {
            const distance = Math.max(0, scrollContainer.scrollWidth - scrollContainer.clientWidth);
            distanceRef.current = distance;
            // Give enough vertical space to "play" the horizontal scroll while sticky is active.
            setSpacerHeight(window.innerHeight + distance);
        };

        const onScroll = () => {
            // Map the page scroll position to horizontal scrollLeft while we are inside this section.
            const start = section.getBoundingClientRect().top + window.scrollY;
            startRef.current = start;

            const y = window.scrollY - start;
            const clamped = Math.max(0, Math.min(distanceRef.current, y));
            scrollContainer.scrollLeft = clamped;
        };

        measure();
        onScroll();

        window.addEventListener("resize", measure);
        window.addEventListener("scroll", onScroll, { passive: true });

        const ro = new ResizeObserver(() => {
            measure();
            onScroll();
        });
        ro.observe(scrollContainer);
        if (scrollContainer.firstElementChild) ro.observe(scrollContainer.firstElementChild);

        return () => {
            window.removeEventListener("resize", measure);
            window.removeEventListener("scroll", onScroll);
            ro.disconnect();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-white"
            tabIndex={0}
            onKeyDown={(e) => {
                const section = sectionRef.current;
                const distance = distanceRef.current;
                if (!section || distance <= 0) return;

                const rect = section.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom > 0;
                if (!isInView) return;

                const start = startRef.current;
                const current = Math.max(0, Math.min(distance, window.scrollY - start));

                let delta = 0;
                if (e.key === "ArrowRight") delta = 350;
                else if (e.key === "ArrowLeft") delta = -350;
                else if (e.key === "ArrowDown") delta = 120;
                else if (e.key === "ArrowUp") delta = -120;
                else if (e.key === "Home") delta = -current;
                else if (e.key === "End") delta = distance - current;
                else return;

                e.preventDefault();
                const next = Math.max(0, Math.min(distance, current + delta));
                window.scrollTo({ top: start + next, behavior: "auto" });
            }}
        >
            {/* Spacer creates vertical scroll range; sticky keeps the content in view */}
            <div style={{ height: spacerHeight || "auto" }} className="relative">
                <div className="sticky top-0 bg-white py-20">
                    {/* Horizontal Scrolling Content (no visible scrollbar) */}
                    <div ref={scrollContainerRef} className="w-full overflow-x-hidden overflow-y-hidden">
                        <div className="inline-flex gap-8 pl-12 pr-12">
                            {/* Heading (scrolls horizontally with the row) */}
                            <div className="flex-shrink-0 w-[400px]">
                                <h2 className="text-5xl md:text-6xl font-light text-slate-700 leading-tight">
                                    Latest <br />
                                    <span className="text-cyan-500 font-normal">Clients</span>
                                </h2>
                            </div>

                            {/* Client Cards */}
                            {clients.map((client, index) => (
                                <div key={index} className="flex-shrink-0 w-[350px]">
                                    {/* Number Badge */}
                                    <div className="mb-4">
                                        <div className="inline-block border-2 border-cyan-500 px-4 py-2">
                                            <span className="text-2xl font-light text-slate-700">{client.number}</span>
                                        </div>
                                    </div>

                                    {/* Client Title */}
                                    <h3 className="text-base font-normal text-slate-600 mb-4">
                                        {client.title}
                                    </h3>

                                    {/* Client Image */}
                                    <div className="relative w-full h-[280px] overflow-hidden bg-slate-100 border-2 border-slate-300">
                                        <Image
                                            src={client.image}
                                            alt={client.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
