import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-section-alt-bg pt-14">
      <div className="site-container grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-3xl text-text-primary">XIRLANE</p>
          <p className="mt-2 text-[13px] text-text-body/80">Philadelphia&apos;s Premium Cleaning Service</p>
          <div className="mt-5 space-y-2 text-[13px] text-text-body/80">
            <p>📧 hello@xirlanecleaning.com</p>
            <p>📞 (215) 000-0000</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-widest text-accent">SERVICES</p>
          <div className="space-y-2 text-[13px] text-text-body/80">
            <Link href="/services/home-cleaning" className="block transition-colors hover:text-accent">Home Cleaning</Link>
            <Link href="/services/commercial-cleaning" className="block transition-colors hover:text-accent">Commercial Cleaning</Link>
            <Link href="/services/post-construction" className="block transition-colors hover:text-accent">Post-Construction</Link>
            <Link href="/services/deep-cleaning" className="block transition-colors hover:text-accent">Deep Cleaning</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-widest text-accent">COMPANY</p>
          <div className="space-y-2 text-[13px] text-text-body/80">
            <Link href="/" className="block transition-colors hover:text-accent">About</Link>
            <Link href="/faq" className="block transition-colors hover:text-accent">FAQ</Link>
            <Link href="/contact" className="block transition-colors hover:text-accent">Contact</Link>
            <Link href="/contact" className="block transition-colors hover:text-accent">Careers</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-widest text-accent">SERVICE AREA</p>
          <ul className="space-y-2 text-[13px] text-text-body/80">
            <li>Philadelphia</li>
            <li>Montgomery County</li>
            <li>Delaware County</li>
            <li>Chester County</li>
            <li>Bucks County</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-light py-6">
        <div className="site-container flex flex-col gap-3 text-[13px] text-text-body/80 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2025 Xirlane Cleaning. All rights reserved.</p>
          <p>Privacy Policy · Terms &amp; Conditions</p>
        </div>
      </div>
    </footer>
  );
}
