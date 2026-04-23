export default function Newsletter() {
  return (
    <section className="bg-text-primary py-16 md:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-eyebrow text-accent">STAY IN THE LOOP</p>
          <h2 className="mt-4 font-heading text-[34px] font-normal text-white md:text-[42px]">
            Get Cleaning Tips &amp; Exclusive Offers
          </h2>
          <p className="mt-4 text-[15px] text-white/70">
            Join our newsletter for helpful cleaning tips, discount codes, and subscriber-only deals.
          </p>
          <form className="mt-10 flex flex-col items-stretch gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border-b border-white/30 bg-transparent py-3 text-[14px] text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="bg-accent px-8 py-3 text-[13px] uppercase tracking-widest text-text-primary transition-all duration-300 hover:bg-accent-dark hover:text-white md:ml-4"
            >
              SUBSCRIBE &rarr;
            </button>
          </form>
          <p className="mt-5 text-[11px] text-white/40">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
