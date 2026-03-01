// components/sections/About.tsx
import Image from 'next/image';

const stats = [
  { value: '96.35', label: 'GPA / 100' },
  { value: '3+', label: 'Years Coding' },
  { value: '7+', label: 'Projects Built' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <p className="font-mono text-xs tracking-[0.3em] text-dim uppercase mb-4 reveal-up">
          01 — About
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 reveal-up">
          About Me
        </h2>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-muted text-lg leading-relaxed reveal-up">
              I&apos;m a Computer Science student at Monterrey&apos;s Institute of Technology,
              passionate about back-end development and cybersecurity. With a strong foundation
              in various programming languages and frameworks, I enjoy creating efficient and
              secure solutions to complex problems.
            </p>
            <p className="text-muted leading-relaxed reveal-up">
              Currently maintaining a GPA of 96.35/100, I&apos;ve been recognized with an
              Academic Talent Scholarship and have completed specialized programs in
              Cybersecurity and Mathematics for Machine Learning.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-2 reveal-up">
              {['Back-End Development', 'Cybersecurity', 'Machine Learning', 'AI Systems'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-sm font-mono text-accent border border-accent/20 rounded-full hover:bg-accent-muted transition-colors duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border reveal-up">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-mono font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs font-mono text-dim mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image — 2 cols */}
          <div className="lg:col-span-2 reveal-right">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:ml-auto">
              {/* Yellow border frame offset */}
              <div className="absolute -inset-3 border border-accent/20 rounded-2xl" />
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Enrique Ayala"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};