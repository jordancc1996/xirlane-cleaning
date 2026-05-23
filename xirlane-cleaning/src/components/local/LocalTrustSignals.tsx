import { BUSINESS } from "@/lib/site";

export default function LocalTrustSignals() {
  return (
    <section
      className="border-y border-border-light bg-background py-10"
      aria-label="Trust and credentials"
    >
      <div className="site-container">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-center text-[12px] uppercase tracking-wide text-text-body">
          {BUSINESS.trustSignals.map((signal) => (
            <li key={signal} className="flex items-center gap-2">
              <span className="text-accent" aria-hidden="true">
                ✓
              </span>
              {signal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
