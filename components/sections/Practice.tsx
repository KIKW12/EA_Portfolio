// components/sections/Practice.tsx
// Editorial merge of Experience + Skills — "Practice"
import { ExperienceType } from '../../types';

interface ExperienceWithStack extends ExperienceType {
  stack?: string[];
}

const experiences: ExperienceWithStack[] = [
  {
    title: 'Jr. Software Developer (AI)',
    company: 'Globalli',
    location: 'Remote',
    date: 'May 2026 — Present',
    description: [
      'Building AI-powered features and integrations as part of the core engineering team',
      'Currently shipping Agentic Payroll, an agent-driven layer that automates payroll review, anomaly detection, and compliance workflows',
    ],
    stack: ['Python', 'TypeScript', 'LangGraph', 'LLM Agents'],
  },
  {
    title: 'Data Scientist',
    company: 'Satellites on Fire — Climate Tech Startup',
    location: 'Remote',
    date: 'May 2026 — Present',
    description: [
      'Designing and building an impact-quantification pipeline per detected wildfire incident, modeling hectares saved, CO₂ emissions avoided, suppression costs prevented, and protected infrastructure and biodiversity',
      'Defining the counterfactual baseline methodology (what would have occurred without early detection) by cross-referencing historical FIRMS data, final fire perimeters, and team fire-spread models',
      'Integrating multi-source emissions quantification (GFED, Copernicus CAMS, per-biome emission factors) for scientifically grounded impact reporting',
      'Translating impact metrics into actionable client outputs, dashboards, periodic reports, and data exports, in close collaboration with the product team',
    ],
    stack: ['Python', 'Geospatial', 'FIRMS', 'Copernicus CAMS', 'GFED', 'pandas'],
  },
  {
    title: 'CTO & Co-founder',
    company: 'Neural Harvest',
    location: 'Querétaro, MX',
    date: 'Feb 2025 — Present',
    website: 'https://www.neuralharvest.com',
    description: [
      'Lead technical strategy and engineering for AI-powered agricultural products',
      'Architect scalable ML infrastructure across data, training, and serving',
      'Manage a small team of engineers and data scientists',
    ],
    stack: ['Python', 'Next.js', 'PostgreSQL', 'AWS', 'TensorFlow', 'LangGraph'],
  },
  {
    title: 'Back-End Developer',
    company: 'CEAMS — Digital Solutions',
    location: 'Querétaro, MX',
    date: 'Mar 2024 — May 2025',
    website: 'https://ceams.co',
    description: [
      'Built and maintained back-end infrastructure on Node.js and MySQL',
      'Optimized server-side operations to reduce page load times',
      'Collaborated on SEO improvements and front-end integration',
    ],
    stack: ['Node.js', 'Express', 'MySQL', 'WordPress'],
  },
];

const stack = {
  Languages: ['Python', 'TypeScript', 'JavaScript', 'C / C++', 'SQL', 'R', 'MATLAB', 'HTML/CSS'],
  Frameworks: ['Next.js', 'React', 'Node.js', 'Express', 'Flask', 'FastAPI', 'TensorFlow', 'scikit-learn'],
  Infra: ['AWS', 'Google Cloud', 'Docker', 'PostgreSQL', 'Supabase', 'Firebase', 'Prisma', 'GraphQL'],
  Practice: ['LangGraph', 'Playwright', 'Google Earth Engine', 'Pandas', 'NumPy', 'Git', 'OAuth2', 'asyncio'],
};

export const Practice = () => {
  return (
    <section id="practice" className="relative py-32 md:py-40 bg-obsidian">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-4">
            <p className="index-marker reveal-fade">03 / Practice</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-bone text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-editorial font-light reveal-up">
              Where I&apos;ve worked, <br />
              and the <span className="serif-italic text-sage">tools</span> I reach for.
            </h2>
          </div>
        </div>

        {/* Experience list */}
        <div className="grid grid-cols-12 gap-6 mb-24">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow mb-2 reveal-fade">Roles</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="rule-reveal mb-2" />
            <ol>
              {experiences.map((exp, i) => (
                <li
                  key={`${exp.company}-${i}`}
                  className="grid grid-cols-12 gap-4 md:gap-8 py-10 border-b border-hairline reveal-up"
                >
                  {/* Date column */}
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-graphite">
                      {exp.date}
                    </p>
                    <p className="mt-2 font-mono text-[10.5px] tracking-[0.16em] uppercase text-slate">
                      {exp.location}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-display text-bone text-2xl md:text-3xl tracking-editorial leading-tight">
                      {exp.title}
                      <span className="text-graphite font-light"> &nbsp;·&nbsp; </span>
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-editorial text-bone serif-italic"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="serif-italic text-bone">{exp.company}</span>
                      )}
                    </h3>

                    <ul className="mt-5 space-y-2">
                      {exp.description.map((d, j) => (
                        <li key={j} className="flex gap-4 text-ash text-[0.95rem] leading-relaxed">
                          <span className="font-mono text-graphite mt-2 select-none">—</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.stack && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.stack.map((t) => (
                          <span key={t} className="tag-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Consolidated stack */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow mb-2 reveal-fade">Stack</p>
            <p className="text-ash text-sm leading-relaxed mt-3 max-w-[16rem] reveal-fade">
              The tools I work with most — across languages, frameworks,
              infrastructure, and the daily practice of shipping.
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="rule-reveal mb-2" />
            <dl className="divide-y divide-hairline">
              {Object.entries(stack).map(([group, items]) => (
                <div key={group} className="grid grid-cols-12 gap-4 py-6 reveal-up">
                  <dt className="col-span-12 md:col-span-3 font-mono text-[11px] tracking-[0.16em] uppercase text-graphite pt-1">
                    {group}
                  </dt>
                  <dd className="col-span-12 md:col-span-9 flex flex-wrap gap-x-1.5 gap-y-2">
                    {items.map((t, i) => (
                      <span key={t} className="font-display text-bone text-lg md:text-xl tracking-editorial">
                        {t}
                        {i < items.length - 1 && (
                          <span className="text-slate mx-2 font-sans text-base">·</span>
                        )}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
