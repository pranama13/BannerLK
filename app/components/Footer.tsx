import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Logo */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Banner.lk Logo"
                width={44}
                height={44}
                className="object-contain"
              />
              <div className="flex flex-col items-start leading-none">
                <span
                  className="text-3xl font-bold tracking-tighter"
                  style={{ color: "#00a9a5" }}
                >
                  banner.lk
                </span>
                <span className="text-xs text-slate-400 tracking-widest lowercase">
                  printing solutions
                </span>
              </div>
            </Link>

            <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-[280px]">
              Premium banner design & printing solutions for businesses, events,
              and promotions across Sri Lanka.
            </p>
          </div>

          {/* Right: Link Columns */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div>
                <h4 className="text-xs tracking-widest text-slate-400 mb-5">
                  COMPANY
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs tracking-widest text-slate-400 mb-5">
                  SERVICES
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Banner Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Large Format Printing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Backdrops & Standees
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Templates & Branding
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs tracking-widest text-slate-400 mb-5">
                  SUPPORT
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quote"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Get a Quote
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Submit a Request
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs tracking-widest text-slate-400 mb-5">
                  LEGAL
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link
                      href="/privacy"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refunds"
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Refunds
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="h-9 w-9 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="h-9 w-9 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="h-9 w-9 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  <Youtube size={16} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="h-9 w-9 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              </div>

              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} Banner.lk. All rights reserved.
              </p>
              <p className="text-xs text-slate-500">
                Made by <span style={{ color: "#00a9a5" }}>Clovesis</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


