/**
 * LogoSlider — infinite "trusted by" marquee. Placeholder client marks
 * are original abstract wordmarks (fictional names, simple geometric
 * glyphs) rather than any real company's logo. Pure CSS animation
 * (transform: translateX, duplicated track) rather than Swiper — a
 * continuous marquee doesn't need slide-snapping or navigation, so the
 * lighter approach avoids pulling in a whole carousel library for this.
 */

const PLACEHOLDER_CLIENTS = [
  { name: "Northbridge", glyph: "N" },
  { name: "Aurellia", glyph: "A" },
  { name: "Ferro Capital", glyph: "F" },
  { name: "Solace", glyph: "S" },
  { name: "Meridian Grid", glyph: "M" },
  { name: "Halcyon Works", glyph: "H" },
  { name: "Cobalt & Row", glyph: "C" },
  { name: "Driftwood Labs", glyph: "D" },
];

const LogoMark = ({ name, glyph }) => (
  <div className="flex shrink-0 items-center gap-2.5 px-8 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[color:var(--color-border)] text-sm font-bold text-[color:var(--color-text-secondary)]">
      {glyph}
    </span>
    <span className="whitespace-nowrap text-base font-semibold tracking-tight text-[color:var(--color-text-secondary)]">
      {name}
    </span>
  </div>
);

const LogoSlider = () => {
  return (
    <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-bg-primary)] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
          Trusted by teams at
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--color-bg-primary)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--color-bg-primary)] to-transparent" />

        <div className="flex w-max animate-[marquee_32s_linear_infinite] motion-reduce:animate-none">
          {/* Track duplicated twice so the loop is seamless at -50% */}
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex" aria-hidden={setIndex === 1}>
              {PLACEHOLDER_CLIENTS.map((client) => (
                <LogoMark key={`${setIndex}-${client.name}`} {...client} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default LogoSlider;