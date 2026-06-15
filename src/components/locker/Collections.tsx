import { ArrowUpRight } from "lucide-react";
import imgNew from "@/assets/collection-new.jpg";
import imgVintage from "@/assets/collection-vintage.jpg";
import imgNational from "@/assets/collection-national.jpg";
import imgLimited from "@/assets/collection-limited.jpg";

const ITEMS = [
  { n: "01", title: "New Arrivals", body: "Rilisan terbaru musim ini.", img: imgNew },
  { n: "02", title: "Vintage Collection", body: "Jersey retro dan koleksi bersejarah.", img: imgVintage },
  { n: "03", title: "National Teams", body: "Jersey tim nasional dari berbagai era.", img: imgNational },
  { n: "04", title: "Limited Edition", body: "Koleksi langka untuk kolektor serius.", img: imgLimited },
];

export function Collections() {
  return (
    <section id="collections" className="border-b border-rule bg-background py-20 md:py-32">
      <div className="container-grid">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ink" />
              <span className="eyebrow text-ink">Featured Collections</span>
            </div>
            <h2 className="display-lg mt-6 text-ink">Koleksi Pilihan.</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-muted">
            Empat kategori utama yang dikurasi untuk setiap penggemar dan kolektor.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ n, title, body, img }) => (
            <a key={n} href="#shop" className="group block">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 bg-background/95 px-2 py-1 font-display text-[10px] font-semibold tracking-tight text-ink">
                  {n}
                </span>
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center bg-background text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4 border-t border-rule pt-4">
                <div>
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-ink">{title}</h3>
                  <p className="mt-1 text-xs text-ink-muted">{body}</p>
                </div>
                <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-colors group-hover:text-brand">
                  Shop →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
