"use client";

const items = [
  "Happy Birthday",
  "You Are Amazing",
  "Today Is Yours",
  "Make A Wish",
  "Shine Bright",
  "Celebrate You",
];

export default function Ticker() {
  return (
    <section className="relative w-full bg-rose-gold py-6 overflow-hidden z-20 flex shadow-[0_4px_25px_rgba(26,10,20,0.35)] select-none">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {/* Track 1 */}
        <div className="flex items-center gap-12 px-6">
          {Array.from({ length: 3 })
            .flatMap(() => items)
            .map((item, idx) => (
              <div
                key={`t1-${idx}`}
                className="flex items-center gap-12 text-xs md:text-sm font-sans tracking-[0.3em] text-midnight-dark font-bold uppercase"
              >
                <span>{item}</span>
                <span className="text-plum/50 text-base">✦</span>
              </div>
            ))}
        </div>

        {/* Track 2 - Identical clone for seamless looping */}
        <div className="flex items-center gap-12 px-6">
          {Array.from({ length: 3 })
            .flatMap(() => items)
            .map((item, idx) => (
              <div
                key={`t2-${idx}`}
                className="flex items-center gap-12 text-xs md:text-sm font-sans tracking-[0.3em] text-midnight-dark font-bold uppercase"
              >
                <span>{item}</span>
                <span className="text-plum/50 text-base">✦</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
