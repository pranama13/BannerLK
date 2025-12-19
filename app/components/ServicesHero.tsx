"use client";

import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="w-full bg-white">
      {/* Hero Container - Full width with video background */}
      <div className="relative h-[550px] w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 flex flex-col justify-end pb-12">
          {/* Bottom Row: Title Left, Button Right */}
          <div className="flex items-end justify-between w-full">
            {/* Title - Left Side */}
            <div>
              <h1 className="text-7xl md:text-8xl font-light text-white tracking-wide">
                Our <span className="text-cyan-400">Services</span>
              </h1>
            </div>

            {/* Action Button - Right Side */}
            <div className="flex items-center gap-0">
              {/* Arrow Button */}
              <button className="h-12 w-12 bg-white flex items-center justify-center hover:bg-cyan-50 transition-colors border-r border-gray-200">
                <ArrowRight className="text-cyan-700" size={20} />
              </button>
              {/* Enquire Button */}
              <button className="h-12 px-8 bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


