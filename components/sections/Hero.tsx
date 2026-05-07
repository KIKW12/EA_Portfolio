// components/sections/Hero.tsx
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const featured = [
  { year: '2026', label: 'Neural Harvest', note: 'CTO · agriculture × AI' },
  { year: '2026', label: 'OrbitGrow', note: 'STARTHack · agent network' },
  { year: '2026', label: 'Sentinel', note: 'TreeHacks Stanford · AI sec' },
  { year: '2025', label: 'Prometheus', note: 'recruitment agent' },
];

export const Hero = () => {
  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tick = () => {
      if (!timeRef.current) return;
      const now = new Date();
      const fmt = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Mexico_City',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
      timeRef.current.textContent = `${fmt} CDMX`;
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="atmosphere" />
      <div className="editorial-grid" />

      {/* Top meta strip */}
      <div className="absolute top-28 left-0 right-0 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <p className="eyebrow reveal-fade">Portfolio · MMXXVI</p>
          <p className="eyebrow reveal-fade">
            <span ref={timeRef}>—</span>
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-10 pb-20 pt-40">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          {/* Display name + intro */}
          <div className="col-span-12 lg:col-span-8">
            <p className="eyebrow mb-8 reveal-fade">
              <span className="inline-block w-8 h-px bg-hairline-strong align-middle mr-3" />
              Computer Scientist · Engineer · Builder
            </p>

            <h1 className="font-display text-bone leading-[0.88] tracking-editorial reveal-up">
              <span className="block text-[clamp(3.5rem,11vw,11rem)] font-light">Enrique</span>
              <span className="block text-[clamp(3.5rem,11vw,11rem)] font-light">
                <span className="serif-italic font-normal text-bone">Ayala</span>
                <span className="text-sage">.</span>
              </span>
            </h1>

            <div className="mt-10 grid grid-cols-12 gap-6 reveal-up">
              <div className="col-span-12 md:col-span-7">
                <p className="text-bone/85 text-lg md:text-xl leading-[1.55] font-light max-w-xl">
                  Building intelligent systems at the intersection of
                  <span className="serif-italic text-sage"> agriculture</span>,
                  <span className="serif-italic text-sage"> security</span>, and
                  <span className="serif-italic text-sage"> machine learning</span>.
                  Currently CTO &amp; co-founder at Neural Harvest, finishing CS at Tec de Monterrey.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-hairline">
                <p className="eyebrow mb-3">Pursuits</p>
                <ul className="space-y-1.5 text-ash text-sm font-sans">
                  <li>— Distributed back-end systems</li>
                  <li>— Applied ML &amp; agentic systems</li>
                  <li>— Cybersecurity research</li>
                  <li>— Mathematics for ML</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4 reveal-up">
              <Link href="#work" className="btn-primary">
                Selected work <span aria-hidden>→</span>
              </Link>
              <Link href="#contact" className="btn-ghost">
                Get in touch
              </Link>
            </div>
          </div>

          {/* Side index of selected work */}
          <aside className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l lg:border-hairline">
            <div className="reveal-fade">
              <p className="eyebrow mb-6">Selected · 2025–2026</p>
              <ul className="space-y-4">
                {featured.map((item) => (
                  <li key={item.label} className="group flex items-baseline gap-4">
                    <span className="font-mono text-[11px] text-graphite tabular-nums w-10 shrink-0">
                      {item.year}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-bone text-base leading-tight tracking-editorial group-hover:text-sage transition-colors">
                        {item.label}
                      </p>
                      <p className="font-mono text-[10.5px] text-graphite tracking-wide mt-0.5 truncate">
                        {item.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.32em] text-graphite uppercase">
          Index ↓
        </span>
        <div className="pulse-line" />
      </div>
    </section>
  );
};
