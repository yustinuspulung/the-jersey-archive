import { useEffect, useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";

const NAV = ["Shop", "Vintage", "Collections", "About", "Contact"];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur transition-[border-color,background-color] ${
        scrolled ? "border-b border-rule" : "border-b border-transparent"
      }`}
    >
      <div className="container-grid flex h-16 items-center justify-between gap-6 md:h-20">
        <a href="#top" className="flex items-center gap-2 font-display font-extrabold uppercase tracking-tight text-ink">
          <span className="inline-block h-2.5 w-2.5 bg-brand" aria-hidden />
          <span className="text-sm md:text-base">The Locker Room</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-brand"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 md:gap-3">
          <button aria-label="Search" className="grid h-10 w-10 place-items-center text-ink transition-colors hover:text-brand">
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button aria-label="Account" className="hidden h-10 w-10 place-items-center text-ink transition-colors hover:text-brand md:grid">
            <User className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button aria-label="Cart" className="relative grid h-10 w-10 place-items-center text-ink transition-colors hover:text-brand">
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            <span className="absolute right-1.5 top-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-rule bg-background lg:hidden">
          <nav className="container-grid flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="border-b border-rule/60 py-4 text-sm font-medium uppercase tracking-[0.18em] text-ink last:border-b-0"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
