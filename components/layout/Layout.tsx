// components/layout/Layout.tsx
import { useEffect, useRef } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scroll progress hairline
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    }

    if (reduced) {
      document.querySelectorAll('.reveal-up, .reveal-fade').forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
      return;
    }

    // Reveal-up
    gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      });
    });

    // Reveal-fade (for very subtle elements)
    gsap.utils.toArray<HTMLElement>('.reveal-fade').forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none none' },
      });
    });

    // Animated hairline rules
    gsap.utils.toArray<HTMLElement>('.rule-reveal').forEach((el) => {
      gsap.to(el, {
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
      });
    });

    // Magnetic primary CTA
    const magnets = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-ghost');
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];
    magnets.forEach((el) => {
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        gsap.to(el, { x: x * 0.18, y: y * 0.25, duration: 0.6, ease: 'power3.out' });
      };
      const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' });
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', leave);
      handlers.push({ el, move, leave });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <div className="grain min-h-screen flex flex-col bg-obsidian">
      <div ref={progressRef} className="scroll-progress" style={{ transform: 'scaleX(0)' }} />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
