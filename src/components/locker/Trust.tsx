import { ShieldCheck, ScanLine, Award } from "lucide-react";

const FEATURES = [
  {
    n: "01",
    icon: ShieldCheck,
    title: "100% Original Guarantee",
    body: "Seluruh jersey telah melalui proses verifikasi sebelum dijual.",
  },
  {
    n: "02",
    icon: ScanLine,
    title: "Authenticity Verification",
    body: "Detail tag, patch, dan serial number tersedia untuk membantu proses verifikasi.",
  },
  {
    n: "03",
    icon: Award,
    title: "Collector Grade Selection",
    body: "Setiap produk dikurasi berdasarkan kualitas dan kondisi terbaik.",
  },
];

export function Trust() {
  return (
    <section id="about" className="border-b border-rule bg-background py-20 md:py-32">
      <div className="container-grid grid grid-cols-12 gap-y-12 md:gap-x-6">
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink" />
            <span className="eyebrow text-ink">Trust & Authenticity</span>
          </div>
          <h2 className="display-lg mt-8 text-ink">
            Kepercayaan
            <br />
            Adalah
            <br />
            <span className="text-brand">Segalanya.</span>
          </h2>
        </div>

        <div className="col-span-12 grid grid-cols-1 gap-px bg-rule md:col-span-7 md:grid-cols-3">
          {FEATURES.map(({ n, icon: Icon, title, body }) => (
            <article key={n} className="flex flex-col justify-between gap-10 bg-background p-6 md:p-8">
              <div className="flex items-start justify-between">
                <span className="font-display text-sm font-semibold tracking-tight text-ink-muted">{n}</span>
                <Icon className="h-5 w-5 text-brand" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold uppercase leading-tight text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
