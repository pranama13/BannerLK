"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
    target: number;
    suffix?: string;
    label: string;
    valueClassName: string;
};

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const stats: Stat[] = useMemo(
        () => [
            { target: 15, suffix: "+", label: "Years", valueClassName: "text-6xl font-light text-cyan-500" },
            { target: 50, suffix: "+", label: "Awards", valueClassName: "text-6xl font-light text-slate-700" },
            { target: 2500, label: "Successful projects", valueClassName: "text-6xl font-light text-slate-700" },
            { target: 25, label: "Cities", valueClassName: "text-6xl font-light text-cyan-500" },
        ],
        []
    );

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
            { threshold: 0.25 }
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
                const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
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
            timeouts[idx] = window.setTimeout(() => animateOne(idx), idx * 140);
        });

        return () => {
            rafIds.forEach((id) => id && cancelAnimationFrame(id));
            timeouts.forEach((id) => clearTimeout(id));
        };
    }, [visible, stats]);

    return (
        <section ref={sectionRef} className="w-full bg-white py-20 pb-32">
            <div className="mx-auto w-full max-w-[1400px] px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side - Heading and Video */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-light text-slate-700 mb-12">
                            Sri Lanka's <span className="text-cyan-500 font-normal">Premier <br /> Banner Design & <br /> Printing</span> Company
                        </h2>

                        {/* Video with paintbrush stroke borders */}
                        <div className="relative w-4/5 h-[250px] ml-[-5vh]">
                            {/* Outer rough paintbrush border - dark */}
                            <div
                                className="absolute -inset-3 bg-white opacity-90"
                                style={{
                                    clipPath: `polygon(
                                        2% 5%, 8% 2%, 15% 3%, 25% 1%, 35% 2%, 45% 0%, 55% 1%, 65% 0%, 75% 2%, 85% 1%, 92% 3%, 98% 5%,
                                        99% 15%, 100% 25%, 99% 35%, 100% 45%, 99% 55%, 100% 65%, 98% 75%, 99% 85%, 97% 92%, 95% 98%,
                                        85% 99%, 75% 98%, 65% 99%, 55% 100%, 45% 99%, 35% 100%, 25% 98%, 15% 99%, 8% 97%, 2% 95%,
                                        1% 85%, 0% 75%, 1% 65%, 0% 55%, 1% 45%, 0% 35%, 2% 25%, 1% 15%, 3% 8%
                                    )`,
                                    filter: 'blur(1px)'
                                }}>
                            </div>

                            {/* Middle rough border layer */}
                            <div
                                className="absolute -inset-2 bg-white opacity-80"
                                style={{
                                    clipPath: `polygon(
                                        3% 6%, 9% 4%, 16% 5%, 26% 3%, 36% 4%, 46% 2%, 56% 3%, 66% 2%, 76% 4%, 86% 3%, 93% 5%, 97% 7%,
                                        98% 16%, 99% 26%, 98% 36%, 99% 46%, 98% 56%, 99% 66%, 97% 76%, 98% 86%, 96% 93%, 94% 97%,
                                        86% 98%, 76% 97%, 66% 98%, 56% 99%, 46% 98%, 36% 99%, 26% 97%, 16% 98%, 9% 96%, 4% 94%,
                                        2% 86%, 1% 76%, 2% 66%, 1% 56%, 2% 46%, 1% 36%, 3% 26%, 2% 16%, 4% 9%
                                    )`,
                                    filter: 'blur(0.5px)'
                                }}>
                            </div>

                            {/* Video container with rough paintbrush edge */}
                            <div
                                className="relative h-full bg-white overflow-hidden shadow-xl"
                                style={{
                                    clipPath: `polygon(
                                        4% 7%, 10% 6%, 17% 7%, 27% 5%, 37% 6%, 47% 4%, 57% 5%, 67% 4%, 77% 6%, 87% 5%, 94% 7%, 96% 9%,
                                        97% 17%, 98% 27%, 97% 37%, 98% 47%, 97% 57%, 98% 67%, 96% 77%, 97% 87%, 95% 94%, 93% 96%,
                                        87% 97%, 77% 96%, 67% 97%, 57% 98%, 47% 97%, 37% 98%, 27% 96%, 17% 97%, 10% 95%, 6% 93%,
                                        4% 87%, 3% 77%, 4% 67%, 3% 57%, 4% 47%, 3% 37%, 5% 27%, 4% 17%, 6% 10%
                                    )`
                                }}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/about.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Description and Stats */}
                    <div>
                        {/* Description */}
                        <p className="text-slate-600 text-2xl leading-relaxed mb-20 ">
                            Banner.lk is a leading banner design and printing company in Sri Lanka. With years of industry
                            experience and multiple design awards, we offer bespoke printing solutions to an exclusive clientele.
                        </p>

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            {/* Stat 1 */}
                            <div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className={stats[0].valueClassName}>
                                        {Math.round(display[0] ?? 0).toLocaleString()}
                                        {stats[0].suffix ?? ""}
                                    </span>
                                    <span className="text-sm text-slate-500">{stats[0].label}</span>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className={stats[1].valueClassName}>
                                        {Math.round(display[1] ?? 0).toLocaleString()}
                                        {stats[1].suffix ?? ""}
                                    </span>
                                    <span className="text-sm text-slate-500">{stats[1].label}</span>
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className={stats[2].valueClassName}>
                                        {Math.round(display[2] ?? 0).toLocaleString()}
                                        {stats[2].suffix ?? ""}
                                    </span>
                                    <span className="text-sm text-slate-500">{stats[2].label}</span>
                                </div>
                            </div>

                            {/* Stat 4 */}
                            <div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className={stats[3].valueClassName}>
                                        {Math.round(display[3] ?? 0).toLocaleString()}
                                        {stats[3].suffix ?? ""}
                                    </span>
                                    <span className="text-sm text-slate-500">{stats[3].label}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
