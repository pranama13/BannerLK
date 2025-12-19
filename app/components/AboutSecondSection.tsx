import {
  BadgeCheck,
  Flag,
  History,
  ArrowRight,
  Users,
} from "lucide-react";

type AboutCard = {
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

export default function AboutSecondSection() {
  const cards: AboutCard[] = [
    { title: "Leadership", Icon: Users },
    { title: "Our Edge", Icon: BadgeCheck },
    { title: "Our Values", Icon: Flag },
    { title: "Our History", Icon: History },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        {/* Top cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ title, Icon }) => (
            <div
              key={title}
              className="bg-slate-50 border border-slate-200 h-[130px] flex items-center justify-between px-8"
            >
              <div className="flex items-center gap-6">
                <Icon size={54} className="text-slate-300" />
                <span className="text-2xl font-light text-slate-400">
                  {title}
                </span>
              </div>

              <div className="h-10 w-10 border border-slate-300 bg-white flex items-center justify-center">
                <ArrowRight size={18} className="text-slate-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Main intro */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <h2 className="text-5xl md:text-6xl font-light text-slate-700 leading-tight">
            Sri Lanka&apos;s{" "}
            <span className="text-cyan-500 font-normal">Leading</span> Banner{" "}
            <br />
            Design &amp; Printing Company
          </h2>

          <p className="text-slate-400 leading-relaxed text-lg md:text-xl">
            We are Sri Lanka&apos;s trusted banner design and printing partner.
            We focus on strong design fundamentals, print-ready production, and
            dependable turnaround times for businesses, events, and promotions.
            From artwork to large-format output and material guidance, we help
            you deliver clear messages that look professional everywhere they
            appear.
          </p>
        </div>
      </div>
    </section>
  );
}


