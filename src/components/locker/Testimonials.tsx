const REVIEWS = [
  {
    quote:
      "Pengalaman belanja jersey paling meyakinkan. Detail packaging, tag, dan kondisi sesuai deskripsi — bahkan lebih baik.",
    name: "Raka Pradipta",
    meta: "Collector · Jakarta",
  },
  {
    quote:
      "Akhirnya ada toko yang serius soal keaslian. Jersey vintage yang saya beli punya cerita dan kondisi yang luar biasa.",
    name: "Naufal Hadi",
    meta: "Football Fan · Bandung",
  },
  {
    quote:
      "Kurasi produknya berkelas. Setiap rilisan terasa dipilih dengan hati, bukan sekadar stok yang banyak.",
    name: "Dinda Larasati",
    meta: "Verified Buyer · Surabaya",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-rule bg-background py-20 md:py-32">
      <div className="container-grid">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ink" />
              <span className="eyebrow text-ink">Customer Testimonials</span>
            </div>
            <h2 className="display-lg mt-6 text-ink">Apa Kata Mereka.</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-muted">
            Cerita dari para kolektor dan penggemar yang telah mempercayakan
            koleksinya kepada kami.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="flex flex-col gap-10 bg-background p-8 md:p-10">
              <span className="font-display text-5xl font-extrabold leading-none text-brand">“</span>
              <blockquote className="text-base leading-relaxed text-ink md:text-lg">{r.quote}</blockquote>
              <figcaption className="mt-auto border-t border-rule pt-5">
                <p className="font-display text-sm font-bold uppercase tracking-tight text-ink">{r.name}</p>
                <p className="mt-1 text-xs text-ink-muted">{r.meta}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
