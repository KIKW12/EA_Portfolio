// components/sections/Projects.tsx
import { Github, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Project } from '../../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects: Project[] = [
  {
    title: "Prometheus",
    description: "Full-stack conversational AI recruitment platform. LangGraph agent powered by Gemini 2.5 Flash with progressive multi-turn filtering, semantic skill matching, bidirectional culture fit scoring, and WhatsApp-first outreach through Twilio.",
    technologies: ["Python", "Next.js", "TypeScript", "Flask", "Gemini AI", "LangGraph", "Supabase", "Twilio"],
    github: "https://github.com/KIKW12/Prometheus",
    link: "https://prometheus.enayala.dev"
  },
  {
    title: "Sentinel",
    description: "AI-Powered Autonomous Security Scanner. Deploys a coordinated swarm of 10 specialized AI agents to scan web applications for vulnerabilities. Features Spider agent, SQL injection/XSS fuzzers, Red Team agent with Playwright, and Gemini-powered LLM analysis engine. Built at TreeHacks 2026 (Stanford).",
    technologies: ["Python", "Next.js", "TypeScript", "Flask", "Gemini AI", "Playwright", "Supabase", "asyncio"],
    github: "https://github.com/KIKW12/sentinelTH2026"
  },
  {
    title: "Via Alta",
    description: "Enterprise-level academic enrollment management system. Automated student enrollment with prerequisite validation, genetic algorithm-powered schedule generation, multi-role authentication, and coordinator dashboard. Reduced manual processing by 80%.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS", "Genetic Algorithm", "OAuth2"],
    github: "https://github.com/MateoMinghi/via_alta"
  },
  {
    title: "COVID-19 Variant Analysis",
    description: "Comprehensive bioinformatics analysis of COVID-19 variants using phylogenetic tree construction, statistical modeling with bootstrap validation, and evolutionary distance calculations. Analyzed 10+ viral variants with >95% confidence intervals.",
    technologies: ["R", "Bioconductor", "Phylogenetics", "Statistical Modeling", "Biostrings", "ggplot2"],
    github: "https://github.com/KIKW12/covid-variants-analysis"
  },
  {
    title: "Marsquakes Detection",
    description: "Unsupervised ML model for NASA Space Apps Challenge that identifies Marsquakes from InSight Lander data. Includes data cleansing, non-seismic signal elimination, and energy optimization. 2nd place winner.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Signal Processing"],
    github: "https://github.com/KIKW12/Seismic-Detection-in-Space"
  },
  {
    title: "Password Generator",
    description: "Enterprise-grade C++ password generator with cryptographically secure algorithms. Object-oriented design with inheritance, polymorphism, Strategy and Template Method patterns. Memory-safe RAII principles.",
    technologies: ["C++", "OOP", "Cryptography", "Design Patterns", "Security", "RAII"],
    github: "https://github.com/KIKW12/Password-Generator-CPP"
  },
  {
    title: "Bloombly",
    description: "Predicts wildflower bloom timing using satellite data, ecological feature engineering (NDVI, GDD, soil moisture), and ML models. GeoJSON outputs and globe visualization for NASA Space Apps.",
    technologies: ["Python", "Flask", "scikit-learn", "Google Earth Engine", "pandas", "numpy"],
    github: "https://github.com/KIKW12/bloombly",
    link: "https://bloomly.earth"
  }
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Only apply horizontal scroll on desktop
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      if (!containerRef.current || !sectionRef.current) return;

      const totalWidth = containerRef.current.scrollWidth - window.innerWidth + 100;

      gsap.to(containerRef.current, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-0 bg-base overflow-hidden">
      {/* Section header (visible on mobile, fixed position context on desktop) */}
      <div className="md:absolute md:top-12 md:left-6 z-10 px-6 md:px-0 mb-12 md:mb-0">
        <p className="font-mono text-xs tracking-[0.3em] text-dim uppercase mb-4 reveal-up">
          03 — Projects
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white reveal-up">
          Projects
        </h2>
      </div>

      {/* Horizontal scroll container (desktop) / vertical grid (mobile) */}
      <div
        ref={containerRef}
        className="
          grid grid-cols-1 gap-6 px-6
          md:flex md:flex-nowrap md:gap-8 md:items-center md:min-h-screen md:pl-6 md:pr-16 md:pt-28
        "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              glass rounded-2xl p-6 md:p-8 flex-shrink-0
              w-full md:w-[420px] lg:w-[480px]
              hover:border-accent/10 transition-all duration-500 group
              reveal-up md:reveal-scale
            "
          >
            {/* Project number */}
            <p className="font-mono text-xs text-dim mb-4">
              {String(index + 1).padStart(2, '0')}
            </p>

            <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-3 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-4 md:line-clamp-5">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] font-mono text-dim border border-border rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-2.5 py-1 text-[11px] font-mono text-dim">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t border-border">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span className="font-mono text-xs">Source</span>
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-mono text-xs">Live</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};