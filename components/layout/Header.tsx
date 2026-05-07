// components/layout/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/#work', label: 'Work', idx: '01' },
  { href: '/#about', label: 'About', idx: '02' },
  { href: '/#practice', label: 'Practice', idx: '03' },
  { href: '/#contact', label: 'Contact', idx: '04' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const handleScroll = () => setScrolled(window.scrollY > 24);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/80 backdrop-blur-md border-b border-hairline'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 py-5">
        <div className="flex justify-between items-center">
          {/* Mark */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-display text-bone text-lg tracking-editorial leading-none">
              Enrique <span className="serif-italic text-sage">Ayala</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('/#', '');
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-baseline gap-2 text-sm transition-colors duration-300 ${
                    isActive ? 'text-bone' : 'text-graphite hover:text-bone'
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-widest text-slate group-hover:text-graphite transition-colors">
                    {link.idx}
                  </span>
                  <span className="font-sans">{link.label}</span>
                </Link>
              );
            })}
            <a
              href="/resume.pdf"
              download
              className="ml-4 font-mono text-[11px] tracking-[0.18em] uppercase text-bone border-b border-hairline-strong pb-0.5 hover:border-sage hover:text-sage transition-colors duration-300"
            >
              CV ↓
            </a>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-bone transition-transform ${isMenuOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`block w-5 h-px bg-bone transition-transform ${isMenuOpen ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-4 space-y-4 border-t border-hairline mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-baseline gap-3 text-bone"
              >
                <span className="font-mono text-[10px] tracking-widest text-slate">{link.idx}</span>
                <span className="font-display text-2xl tracking-editorial">{link.label}</span>
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="block pt-3 font-mono text-[11px] tracking-[0.18em] uppercase text-sage"
            >
              Download CV ↓
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
