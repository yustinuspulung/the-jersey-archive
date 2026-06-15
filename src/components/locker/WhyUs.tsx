const STATS = [
  { v: "500+", l: "Original Jerseys" },
  { v: "100%", l: "Authentic" },
  { v: "50+", l: "Football Clubs" },
  { v: "4.8/5", l: "Customer Rating" },
];

export function WhyUs() {
  return (
    <section className="border-b border-rule bg-surface py-20 md:py-32">
      <div className="container-grid grid grid-cols-12 gap-y-14 md:gap-x-6">
        <div className="col-span-12 md:col-span-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink" />
            <span className="eyebrow text-ink">Why The Locker Room</span>
          </div>
          <h2 className="display-lg mt-8 text-ink">
            Lebih Dari
            <br />
            Sekadar Toko
            <br />
            <span className="text-brand">Jersey.</span>
          </h2>
        </div>

        <div className="col-span-12 flex flex-col justify-end gap-6 md:col-span-5">
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            The Locker Room dibangun untuk para penggemar sepak bola yang
            menghargai sejarah, detail, dan keaslian.
          </p>
          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            Kami percaya bahwa setiap jersey memiliki cerita yang layak untuk
            diwariskan.
          </p>
        </div>

        <div className="col-span-12 grid grid-cols-2 gap-px border border-rule bg-rule md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l} className="flex flex-col gap-3 bg-background p-6 md:p-8">
              <span className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">{s.v}</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
