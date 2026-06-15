import { ArrowRight } from "lucide-react";
import vintage from "@/assets/vintage-spotlight.jpg";

export function VintageSpotlight() {
  return (
    <section id="vintage" className="border-b border-rule bg-background">
      <div className="container-grid grid grid-cols-12 gap-y-10 py-20 md:gap-x-6 md:py-32">
        <div className="col-span-12 lg:col-span-7">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
            <img
              src={vintage}
              alt="A rare vintage football jersey hanging in dramatic light"
              loading="lazy"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 flex flex-col justify-between gap-10 lg:col-span-5 lg:pl-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink" />
            <span className="eyebrow text-ink">Vintage Spotlight</span>
          </div>

          <h2 className="display-lg text-ink">
            Ikon Dari
            <br />
            Masa Ke
            <br />
            <span className="text-brand">Masa.</span>
          </h2>

          <p className="text-base leading-relaxed text-ink-muted md:text-lg">
            Jersey vintage bukan hanya memorabilia. Ia adalah bagian dari
            sejarah sepak bola yang hidup kembali.
          </p>

          <a
            href="#shop"
            className="group inline-flex w-fit items-center gap-6 border-b border-ink pb-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink"
          >
            Lihat Koleksi Vintage
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
