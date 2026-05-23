"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/home-cleaning", label: "Home Cleaning" },
  { href: "/services/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/services/post-construction", label: "Post-Construction" },
  { href: "/services/deep-cleaning", label: "Deep Cleaning" },
];

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  ...serviceLinks,
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === "/services") return pathname.startsWith("/services");
    return pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-9 z-50 w-full transition-all duration-300 ease-in-out" role="banner">
        <div className="hidden h-9 items-center justify-center bg-section-alt-bg px-4 lg:flex">
          <p className="text-center text-[11px] uppercase tracking-wide text-text-body">
            Serving Philadelphia, Montgomery County, Delaware County, Chester County &amp; Bucks County
          </p>
        </div>

        <div
          className={`h-20 transition-all duration-300 ease-in-out ${
            isScrolled
              ? "border-b border-border-light bg-nav-bg-solid shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              : "border-b border-transparent bg-nav-bg-transparent shadow-none"
          }`}
        >
          <div className="site-container grid h-full grid-cols-[1fr_auto_1fr] items-center">
            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b-2 pb-1 text-[13px] font-medium uppercase tracking-widest transition-colors duration-200 hover:text-accent ${
                    isActive(link.href)
                      ? "border-accent text-accent"
                      : "border-transparent text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="group relative">
                <Link
                  href="/services"
                  className={`border-b-2 pb-1 text-[13px] font-medium uppercase tracking-widest transition-colors duration-200 hover:text-accent ${
                    isActive("/services")
                      ? "border-accent text-accent"
                      : "border-transparent text-text-primary"
                  }`}
                >
                  Services
                </Link>
                <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 border border-border-light bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-6 py-3 text-[13px] text-text-primary transition-colors duration-200 hover:bg-section-alt-bg hover:text-accent"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <Link href="/" className="text-center">
              <p className="font-heading text-[28px] tracking-widest text-text-primary">XIRLANE</p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-accent">CLEANING</p>
            </Link>

            <div className="hidden justify-end lg:flex">
              <Link
                href="/contact"
                className="bg-button-primary-bg px-6 py-2.5 text-[12px] uppercase tracking-widest text-button-primary-text transition-all duration-300 hover:bg-accent"
              >
                BOOK NOW &rarr;
              </Link>
            </div>

            <button
              type="button"
              className="justify-self-end text-text-primary lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          aria-hidden={!mobileOpen}
          className={`overflow-hidden bg-white transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
            mobileOpen
              ? "max-h-[calc(100vh-80px)] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="flex max-h-[calc(100vh-80px)] flex-col">
            <div className="flex-1 overflow-y-auto border-t border-border-light">
              {mobileLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex h-12 items-center border-b border-border-light px-6 text-[13px] uppercase tracking-widest ${
                    isActive(link.href) ? "text-accent" : "text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-border-light p-6">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full bg-button-primary-bg py-3 text-center text-[12px] uppercase tracking-widest text-button-primary-text transition-all duration-300 hover:bg-accent"
              >
                BOOK NOW &rarr;
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="h-[116px] lg:h-[152px]" aria-hidden="true" />
    </>
  );
}
