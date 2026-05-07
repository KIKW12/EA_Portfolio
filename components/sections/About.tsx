// components/sections/About.tsx
import Image from 'next/image';

const figures = [
  { value: '96.35', unit: '/100', label: 'GPA' },
  { value: '3+', unit: 'yrs', label: 'Coding' },
  { value: '8+', unit: '', label: 'Projects shipped' },
  { value: '2', unit: 'nd', label: 'NASA Space Apps' },
];

export const About = () => {
  return (
    <section id="about" className="relative py-32 md:py-40 bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-4">
            <p className="index-marker reveal-fade">02 / About</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-bone text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-editorial font-light reveal-up">
              I write software the way <br />
              <span className="serif-italic text-sage">someone else might</span> write a letter.
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* Portrait */}
          <div className="col-span-12 lg:col-span-5 reveal-up">
            <figure className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Enrique Ayala"
                  fill
                  className="object-cover grayscale-[15%] contrast-[1.05]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-graphite">
                  Pl. ɪ — Enrique Ayala, 2026
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-graphite">
                  Querétaro · MX
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Essay */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8">
            <p className="eyebrow mb-6 reveal-fade">Profile</p>

            <p className="dropcap text-bone/90 text-lg md:text-xl leading-[1.65] font-light reveal-up">
              I&apos;m a Computer Science student at Tecnológico de Monterrey. Most days that
              means writing back-end systems, training models, and trying to keep
              the messy parts of the world &mdash; agriculture, security, education &mdash;
              a little more legible to the people who depend on them.
            </p>

            <p className="mt-6 text-ash text-base md:text-lg leading-[1.7] reveal-up">
              I co-founded Neural Harvest in early 2025. We build AI for growers.
              I lead the engineering — from the data pipelines under the hood to
              the agentic systems that turn satellite, sensor, and human input into
              decisions a farmer can actually use.
            </p>

            <p className="mt-6 text-ash text-base md:text-lg leading-[1.7] reveal-up">
              On the side I research applied cybersecurity and the math underneath
              modern ML. I hold an Academic Talent Scholarship and have completed
              specialized programs in both areas. I prefer rigorous code, plain
              prose, and ideas that survive contact with reality.
            </p>

            {/* Pull quote */}
            <blockquote className="mt-12 pl-8 border-l border-sage/40 reveal-up">
              <p className="font-display text-bone text-2xl md:text-3xl leading-[1.25] tracking-editorial italic font-light">
                &ldquo;Build small things that matter,
                <br className="hidden md:block" /> and bigger things will follow.&rdquo;
              </p>
            </blockquote>

            {/* Figures */}
            <div className="rule-reveal mt-14" />
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 reveal-up">
              {figures.map((f) => (
                <div key={f.label}>
                  <dd className="font-display text-bone text-3xl md:text-4xl tracking-editorial leading-none">
                    {f.value}
                    <span className="text-graphite text-base font-mono ml-1">{f.unit}</span>
                  </dd>
                  <dt className="mt-2 font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite">
                    {f.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
