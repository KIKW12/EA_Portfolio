// components/sections/Projects.tsx
import { useState } from 'react';
import { Project } from '../../types';

interface FeaturedProject extends Project {
  year: string;
  role?: string;
  brief?: string;
}

const projects: FeaturedProject[] = [
  {
    title: 'OrbitGrow',
    year: '2026',
    role: 'AI agent network',
    brief: 'Autonomous Martian greenhouse',
    description:
      'Five Claude-powered specialist agents (Nutrition, Environment, Crisis, Planner, Vision) orchestrating crop allocation to feed four astronauts for 450 sols. Real-time digital twin, MCP-grounded reasoning, serverless on AWS.',
    technologies: ['Python', 'React', 'FastAPI', 'AWS Bedrock', 'Claude', 'DynamoDB', 'OpenCV'],
    github: 'https://github.com/KIKW12/OrbitGrow_StartHack',
  },
  {
    title: 'Prometheus',
    year: '2025',
    role: 'Recruitment agent',
    brief: 'Conversational AI for hiring',
    description:
      'LangGraph agent on Gemini 2.5 Flash with progressive multi-turn filtering, semantic skill matching, bidirectional culture-fit scoring, and WhatsApp-first outreach via Twilio.',
    technologies: ['Python', 'Next.js', 'TypeScript', 'Flask', 'Gemini', 'LangGraph', 'Supabase', 'Twilio'],
    github: 'https://github.com/KIKW12/Prometheus',
    link: 'https://prometheus.enayala.dev',
  },
  {
    title: 'Sentinel',
    year: '2026',
    role: 'AI security scanner',
    brief: 'Built at TreeHacks · Stanford',
    description:
      'A coordinated swarm of 10 specialist AI agents scanning web applications for vulnerabilities — Spider, SQLi/XSS fuzzers, Red Team agent on Playwright, and a Gemini analysis engine.',
    technologies: ['Python', 'Next.js', 'Flask', 'Gemini', 'Playwright', 'Supabase', 'asyncio'],
    github: 'https://github.com/KIKW12/sentinelTH2026',
  },
  {
    title: 'Via Alta',
    year: '2025',
    role: 'Enrollment platform',
    brief: 'Genetic-algorithm scheduling',
    description:
      'Enterprise academic enrollment system with prerequisite validation, GA-driven schedule generation, multi-role auth and a coordinator dashboard. Reduced manual processing by 80%.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'Genetic Algorithm', 'OAuth2'],
    github: 'https://github.com/KIKW12/via_alta',
  },
  {
    title: 'Bloombly',
    year: '2024',
    role: 'NASA Space Apps',
    brief: 'Wildflower bloom prediction',
    description:
      'Predicts bloom timing using satellite data and ecological feature engineering — NDVI, GDD, soil moisture. GeoJSON pipelines and globe visualization.',
    technologies: ['Python', 'Flask', 'scikit-learn', 'Google Earth Engine', 'pandas'],
    github: 'https://github.com/KIKW12/bloombly',
    link: 'https://bloomly.earth',
  },
  {
    title: 'Marsquakes Detection',
    year: '2024',
    role: 'NASA · 2nd place',
    brief: 'Unsupervised ML',
    description:
      'Identifies seismic events from InSight Lander data through cleansing, non-seismic signal elimination, and energy optimization. 2nd place at the NASA Space Apps Challenge.',
    technologies: ['Python', 'Machine Learning', 'Signal Processing'],
    github: 'https://github.com/KIKW12/Seismic-Detection-in-Space',
  },
  {
    title: 'COVID-19 Variant Analysis',
    year: '2023',
    role: 'Bioinformatics',
    brief: 'Phylogenetic study',
    description:
      'Phylogenetic tree construction, statistical modeling with bootstrap validation, and evolutionary distance calculations across 10+ viral variants at >95% confidence.',
    technologies: ['R', 'Bioconductor', 'Biostrings', 'ggplot2'],
    github: 'https://github.com/KIKW12/covid-variants-analysis',
  },
  {
    title: 'Password Generator',
    year: '2023',
    role: 'C++ library',
    brief: 'Cryptographically secure',
    description:
      'Object-oriented C++ password generator. Strategy + Template Method patterns, polymorphism, and memory-safe RAII throughout.',
    technologies: ['C++', 'OOP', 'Cryptography', 'RAII'],
    github: 'https://github.com/KIKW12/Password-Generator-CPP',
  },
];

export const Projects = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="work" className="relative py-32 md:py-40 bg-obsidian">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-4">
            <p className="index-marker reveal-fade">01 / Selected Work</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-bone text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-editorial font-light reveal-up">
              A small archive of <span className="serif-italic text-sage">things built</span>
              <br />
              with care.
            </h2>
            <p className="mt-6 text-ash text-base md:text-lg leading-relaxed max-w-2xl reveal-up">
              Hackathons, startup work, research. Each one taught me something
              about systems, people, or both. Click any row to read more.
            </p>
          </div>
        </div>

        {/* Hairline */}
        <div className="rule-reveal" />

        {/* Project rows */}
        <ul>
          {projects.map((p, i) => {
            const isOpen = open === i;
            return (
              <li key={p.title} className="reveal-up">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="work-row w-full text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-xs tracking-wider text-graphite tabular-nums pt-2">
                    {p.year}
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="work-title">{p.title}</span>
                    <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-graphite">
                      {p.role} · {p.brief}
                    </span>
                  </span>
                  <span className="work-arrow font-mono text-sm self-center">
                    {isOpen ? '— close' : 'view →'}
                  </span>
                </button>

                {/* Expanded panel */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-12 gap-6 lg:gap-10 py-8 md:py-10 px-1 md:pl-[5rem] border-b border-hairline">
                    <div className="col-span-12 md:col-span-7">
                      <p className="text-bone/85 text-base md:text-[1.05rem] leading-[1.7] max-w-2xl">
                        {p.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.technologies.map((t) => (
                          <span key={t} className="tag-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 flex flex-col items-start md:items-end justify-end gap-3">
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-editorial font-mono text-[11px] tracking-[0.18em] uppercase"
                        >
                          Live site ↗
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-editorial font-mono text-[11px] tracking-[0.18em] uppercase"
                        >
                          Source ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
