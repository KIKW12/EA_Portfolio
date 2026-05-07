// components/layout/Footer.tsx
import Link from 'next/link';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
        {/* Big mark */}
        <div className="grid grid-cols-12 gap-6 items-end pb-12 border-b border-hairline">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-4">Colophon</p>
            <p className="font-display text-bone text-4xl md:text-6xl tracking-editorial leading-none">
              Enrique <span className="serif-italic text-sage">Ayala</span>
            </p>
            <p className="mt-4 text-ash text-sm max-w-md leading-relaxed">
              Set in Fraunces &amp; Inter Tight. Hand-built in Next.js.
              Quietly running on the edge of agriculture, AI, and security.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <p className="eyebrow mb-3">Index</p>
            <ul className="space-y-2 font-sans text-sm">
              <li><Link href="/#work" className="text-ash hover:text-bone transition-colors">Work</Link></li>
              <li><Link href="/#about" className="text-ash hover:text-bone transition-colors">About</Link></li>
              <li><Link href="/#practice" className="text-ash hover:text-bone transition-colors">Practice</Link></li>
              <li><Link href="/#contact" className="text-ash hover:text-bone transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow mb-3">Elsewhere</p>
            <ul className="space-y-2 font-sans text-sm">
              <li><a href="https://github.com/KIKW12" target="_blank" rel="noopener noreferrer" className="text-ash hover:text-bone transition-colors inline-flex items-center gap-2">GitHub <span className="text-slate">↗</span></a></li>
              <li><a href="https://linkedin.com/in/enayala" target="_blank" rel="noopener noreferrer" className="text-ash hover:text-bone transition-colors inline-flex items-center gap-2">LinkedIn <span className="text-slate">↗</span></a></li>
              <li><a href="mailto:enayala12@gmail.com" className="text-ash hover:text-bone transition-colors inline-flex items-center gap-2">Email <span className="text-slate">↗</span></a></li>
            </ul>
          </div>
        </div>

        {/* Baseline */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-3 pt-6">
          <p className="font-mono text-[11px] tracking-[0.18em] text-graphite uppercase">
            © {year} · Querétaro, MX
          </p>
          <p className="font-mono text-[11px] tracking-[0.18em] text-graphite uppercase">
            Available for select work · 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
