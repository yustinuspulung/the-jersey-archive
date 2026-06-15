import { Plus, BadgeCheck } from "lucide-react";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

const PRODUCTS = [
  { img: p1, club: "Arsenal FC", season: "Home 2024/25", price: "Rp 1.450.000" },
  { img: p2, club: "SS Lazio", season: "Vintage 1999/00", price: "Rp 2.800.000" },
  { img: p3, club: "Brazil National", season: "Home 2022", price: "Rp 1.250.000" },
  { img: p4, club: "Juventus", season: "Third Kit 2024/25", price: "Rp 1.650.000" },
];

export function BestSellers() {
  return (
    <section id="shop" className="border-b border-rule bg-background py-20 md:py-32">
      <div className="container-grid">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ink" />
              <span className="eyebrow text-ink">Best Sellers</span>
            </div>
            <h2 className="display-lg mt-6 text-ink">Paling Dicari.</h2>
          </div>
          <a href="#shop" className="self-start text-[11px] font-semibold uppercase tracking-[0.22em] text-ink underline-offset-4 hover:underline md:self-end">
            View All →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.club} className="group flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                <img
                  src={p.img}
                  alt={`${p.club} ${p.season}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
                />
                <button
                  aria-label={`Add ${p.club} to cart`}
                  className="absolute bottom-0 right-0 grid h-12 w-12 place-items-center bg-ink text-white transition-colors hover:bg-brand"
                >
                  <Plus className="h-5 w-5" strokeWidth={1.5} />
                </button>
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-brand">
                    <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Authentic</span>
                  </div>
                  <h3 className="mt-2 truncate font-display text-base font-bold uppercase tracking-tight text-ink">{p.club}</h3>
                  <p className="mt-0.5 text-xs text-ink-muted">{p.season}</p>
                </div>
                <p className="shrink-0 font-display text-sm font-bold text-ink">{p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
