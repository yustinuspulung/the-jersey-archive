import { ArrowRight, Check } from "lucide-react";
import heroJersey from "@/assets/hero-jersey.jpg";

const TRUST = ["100% Original", "Authentic Guarantee", "Collector Approved"];

export function Hero() {
  return (
    <section id="top" className="relative border-b border-rule pt-24 md:pt-28">
      <div className="container-grid grid grid-cols-12 gap-6 pb-16 md:pb-24 lg:min-h-[88vh]">
        {/* Left */}
        <div className="col-span-12 flex flex-col justify-between gap-12 lg:col-span-7 xl:col-span-6">
          <div className="flex items-center gap-3 fade-up">
            <span className="h-px w-10 bg-ink" />
            <span className="eyebrow text-ink">Original Football Jerseys</span>
          </div>

          <div className="space-y-8 fade-up" style={{ animationDelay: "80ms" }}>
            <h1 className="display-xl text-ink">
              Jersey Original.
              <br />
              Dari Musim
              <br />
              Terbaru Hingga{" "}
              <span className="text-brand">Koleksi Vintage.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              Temukan koleksi jersey sepak bola original yang telah dikurasi
              dengan standar kolektor. Dari rilisan terbaru hingga jersey vintage
              langka yang memiliki cerita di setiap detailnya.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#shop"
                className="group inline-flex items-center justify-between gap-6 bg-ink px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-brand"
              >
                Belanja Sekarang
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </a>
              <a
                href="#vintage"
                className="group inline-flex items-center justify-between gap-6 border border-ink/20 px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:border-ink"
              >
                Jelajahi Koleksi Vintage
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </a>
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-6 fade-up" style={{ animationDelay: "160ms" }}>
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-ink">
                <Check className="h-3.5 w-3.5 text-brand" strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="relative col-span-12 lg:col-span-5 xl:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface fade-up" style={{ animationDelay: "100ms" }}>
            <img
              src={heroJersey}
              alt="Premium original football jersey, folded on a neutral studio surface"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4 flex items-center gap-2 bg-background/95 px-3 py-2 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink">In Stock</span>
            </div>
          </div>

          {/* Floating product card */}
          <div className="absolute -bottom-8 left-4 right-4 hidden border border-rule bg-background p-5 sm:block md:left-auto md:right-6 md:w-72">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-ink-muted">Featured</p>
                <p className="mt-2 font-display text-lg font-bold uppercase leading-tight text-ink">
                  Home Kit 24/25
                </p>
                <p className="mt-1 text-xs text-ink-muted">Season Release · Match Fit</p>
              </div>
              <span className="bg-brand px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                New
              </span>
            </div>
            <div className="mt-5 flex items-end justify-between border-t border-rule pt-4">
              <div>
                <p className="eyebrow text-ink-muted">Price</p>
                <p className="mt-1 font-display text-xl font-bold text-ink">Rp 1.250.000</p>
              </div>
              <a href="#shop" className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink underline-offset-4 hover:underline">
                View →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee-style spec bar */}
      <div className="border-t border-rule bg-background">
        <div className="container-grid grid grid-cols-2 gap-y-3 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted md:grid-cols-4">
          <div>Est. 2024</div>
          <div>500+ Jerseys</div>
          <div>Worldwide Shipping</div>
          <div className="text-brand">Authenticity Verified</div>
        </div>
      </div>
    </section>
  );
}
