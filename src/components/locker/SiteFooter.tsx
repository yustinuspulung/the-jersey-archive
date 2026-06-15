import { Instagram, Twitter, Youtube } from "lucide-react";

const COLS = [
  { title: "Shop", links: ["New Arrivals", "Vintage", "National Teams", "Limited Edition"] },
  { title: "Collections", links: ["Premier League", "La Liga", "Serie A", "International"] },
  { title: "Customer Service", links: ["Shipping", "Returns", "Authenticity", "Size Guide"] },
  { title: "Company", links: ["About", "Journal", "Contact", "Careers"] },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-background">
      <div className="container-grid grid grid-cols-2 gap-y-12 py-16 md:grid-cols-6 md:gap-x-6 md:py-24">
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 bg-brand" />
            <span className="font-display text-sm font-extrabold uppercase tracking-tight text-ink">
              The Locker Room
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-muted">
            Original football jerseys. Curated for collectors, made for fans.
          </p>
          <div className="mt-8 flex items-center gap-2">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-10 w-10 place-items-center border border-rule text-ink transition-colors hover:border-ink hover:text-brand"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {COLS.map((c) => (
          <div key={c.title} className="col-span-1">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink">{c.title}</h3>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-ink-muted transition-colors hover:text-brand">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-rule">
        <div className="container-grid flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            © {new Date().getFullYear()} The Locker Room — Original Football Jerseys.
          </p>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Jakarta, ID</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
