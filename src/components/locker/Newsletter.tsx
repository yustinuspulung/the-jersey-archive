import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="border-b border-rule bg-ink py-20 text-white md:py-32">
      <div className="container-grid grid grid-cols-12 gap-y-12 md:gap-x-6">
        <div className="col-span-12 md:col-span-7">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/60" />
            <span className="eyebrow text-white/70">Newsletter</span>
          </div>
          <h2 className="display-lg mt-8 text-white">
            Jangan Lewatkan
            <br />
            Koleksi Langka
            <br />
            <span className="text-brand">Berikutnya.</span>
          </h2>
        </div>

        <div className="col-span-12 flex flex-col justify-end gap-8 md:col-span-5">
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            Dapatkan informasi rilisan terbaru, restock, dan jersey vintage
            langka langsung ke inbox Anda.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
            className="flex items-center border-b border-white/30 focus-within:border-white"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 bg-transparent py-4 text-base text-white placeholder:text-white/40 focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-3 py-4 pl-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white"
            >
              Berlangganan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </button>
          </form>
          {done && (
            <p className="text-xs uppercase tracking-[0.2em] text-brand">Terima kasih — cek email Anda.</p>
          )}
        </div>
      </div>
    </section>
  );
}
