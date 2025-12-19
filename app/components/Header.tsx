"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, Search, Home } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="w-full bg-white z-50">
      {/* Top Bar / Main Header Area */}
      <div className="mx-auto w-full max-w-[1400px] px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Banner.lk Logo" width={50} height={50} className="object-contain" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-4xl font-bold tracking-tighter" style={{ color: '#00a9a5' }}>banner.lk</span>
              <span className="text-xs text-slate-400 tracking-widest lowercase">printing solutions</span>
            </div>
          </Link>

          {/* Navigation - Centered with Grey Background */}
          <div className="flex-1 flex justify-center w-full md:w-auto">
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 bg-slate-100 px-8 py-3">
              <Link
                href="/"
                className={[
                  "px-4 transition-colors flex items-center gap-2",
                  isActive("/") ? "text-cyan-600" : "hover:text-cyan-600",
                ].join(" ")}
                aria-current={isActive("/") ? "page" : undefined}
              >
                <Home size={16} />
              </Link>
              <Link
                href="/services"
                className={[
                  "px-4 transition-colors",
                  isActive("/services") ? "text-cyan-600" : "hover:text-cyan-600",
                ].join(" ")}
                aria-current={isActive("/services") ? "page" : undefined}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={[
                  "px-4 transition-colors",
                  isActive("/about") ? "text-cyan-600" : "hover:text-cyan-600",
                ].join(" ")}
                aria-current={isActive("/about") ? "page" : undefined}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={[
                  "px-4 transition-colors",
                  isActive("/contact") ? "text-cyan-600" : "hover:text-cyan-600",
                ].join(" ")}
                aria-current={isActive("/contact") ? "page" : undefined}
              >
                Contact Us
              </Link>
              <button className="px-4 hover:text-cyan-600 transition-colors">
                <Search size={16} />
              </button>
            </nav>
          </div>

          {/* Contact Info - Right aligned */}
          <div className="hidden lg:flex flex-col items-end text-xs text-slate-500 gap-1">
            <a href="mailto:info@banner.lk" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <Mail size={12} />
              <span>info@banner.lk</span>
            </a>
            <a href="tel:+94759100662" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <Phone size={12} />
              <span>+94 759 100 662</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
