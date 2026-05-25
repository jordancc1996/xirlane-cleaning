"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { LOCATION_NAV_LINKS } from "@/lib/location-landing-pages";
import { LANDING_NAV_LINKS } from "@/lib/seo-landing-pages";

const centerLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

const serviceLinks = LANDING_NAV_LINKS;
const areaLinks = LOCATION_NAV_LINKS;

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Areas" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/contact", label: "Contact" },
];

const navLinkClass = (active: boolean) =>
  `whitespace-nowrap px-2 text-[13px] font-medium uppercase tracking-widest underline decoration-2 underline-offset-8 transition-colors duration-200 hover:text-accent lg:px-4 ${
    active ? "decoration-accent text-accent" : "decoration-transparent text-text-primary"
  }`;

const bookNowLinkClass =
  "book-now-shimmer bg-button-primary-bg text-button-primary-text transition-all duration-300 hover:bg-accent";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === "/services") return pathname.startsWith("/services");
    if (href === "/locations") return pathname.startsWith("/locations");
    if (href === "/blog") return pathname.startsWith("/blog");
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
      <header
        className="fixed top-9 z-50 w-full transition-all duration-300 ease-in-out"
        role="banner"
      >
        <div
          className={`transition-all duration-300 ease-in-out ${
            isScrolled
              ? "border-b border-border-light bg-nav-bg-solid shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              : "border-b border-transparent bg-nav-bg-transparent shadow-none"
          }`}
        >
          <div className="site-container flex items-center justify-between py-4 lg:py-5">
            <div className="flex flex-1 items-center justify-start">
              <Link
                href="/"
                className="shrink-0 transition-opacity hover:opacity-80"
                aria-label="Xirlane Cleaning — Home"
              >
                <p className="font-heading text-[22px] leading-none tracking-widest text-text-primary lg:text-[26px]">
                  XIRLANE
                </p>
                <p className="mt-0.5 text-[8px] uppercase tracking-[0.3em] text-accent lg:text-[9px]">
                  CLEANING
                </p>
              </Link>
            </div>

            <nav className="hidden flex-[2] items-center justify-center lg:flex" aria-label="Primary">
              <ul className="flex items-center justify-center gap-8 xl:gap-12">
                {centerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={navLinkClass(isActive(link.href))}>
                      {link.label}
                    </Link>
                  </li>
                ))}

                <li className="group relative">
                  <Link href="/services" className={navLinkClass(isActive("/services"))}>
                    Services
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 border border-border-light bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
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
                </li>

                <li className="group relative">
                  <Link href="/locations" className={navLinkClass(isActive("/locations"))}>
                    Areas
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 mt-2 max-h-[70vh] w-64 -translate-x-1/2 overflow-y-auto border border-border-light bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {areaLinks.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="block px-6 py-3 text-[13px] text-text-primary transition-colors duration-200 hover:bg-section-alt-bg hover:text-accent"
                      >
                        {area.label}
                      </Link>
                    ))}
                    <Link
                      href="/locations"
                      className="block border-t border-border-light px-6 py-3 text-[13px] font-medium text-accent hover:bg-section-alt-bg"
                    >
                      All neighborhoods &rarr;
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Right — BOOK NOW + mobile toggle */}
            <div className="flex flex-1 items-center justify-end gap-4">
              <Link
                href="/contact"
                className={`${bookNowLinkClass} hidden min-h-11 items-center px-6 py-2.5 text-[12px] uppercase tracking-widest lg:inline-flex`}
              >
                <span className="relative z-10">BOOK NOW &rarr;</span>
              </Link>

              <button
                type="button"
                className="text-text-primary lg:hidden"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
              </button>
            </div>
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
                className={`${bookNowLinkClass} block w-full py-3 text-center text-[12px] uppercase tracking-widest`}
              >
                <span className="relative z-10">BOOK NOW &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Spacer: announcement bar (36px) + nav row */}
      <div className="h-[104px] lg:h-[108px]" aria-hidden="true" />
    </>
  );
}
