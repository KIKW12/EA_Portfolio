// components/sections/Projects.tsx
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';

const projects: Project[] = [
  {
    title: "Via Alta - Academic Enrollment Management System",
    description: "Enterprise-level full-stack web application for academic institution management. Features automated student enrollment with prerequisite validation, genetic algorithm-powered schedule generation with conflict resolution, multi-role authentication, and coordinator dashboard. Reduced manual enrollment processing by 80% and eliminated scheduling conflicts through automated validation. Built with Next.js 15, React 19, TypeScript, PostgreSQL, and deployed on cloud infrastructure.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS", "Genetic Algorithm", "OAuth2", "Heroku"],
    github: "https://github.com/MateoMinghi/via_alta"
  },
  {
    title: "COVID-19 Variant Analysis: Computational Biology Project",
    description: "Comprehensive bioinformatics analysis of COVID-19 variants and coronaviruses using advanced computational biology techniques. Features phylogenetic tree construction, statistical modeling with bootstrap validation, sequence analysis, and evolutionary distance calculations. Analyzed 10+ viral variants with TN93 and JC69 models, achieving >95% confidence intervals. Demonstrates proficiency in R programming, bioinformatics, and statistical analysis essential for biotechnology and pharmaceutical research.",
    technologies: ["R", "Bioconductor", "Phylogenetics", "Statistical Modeling", "Biostrings", "ggplot2", "Bootstrap Analysis", "DNA Sequencing"],
    github: "https://github.com/KIKW12/covid-variants-analysis"
  },
  {
    title: "Marsquakes Detection Model",
    description: "An unsupervised machine learning model developed for NASA Space Apps Challenge that identifies potential 'Marsquakes' from InSight Lander data. The project included data cleansing, non-seismic signal elimination, and energy optimization based on rotation angle. Achieved 2nd place in the local event.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Signal Processing"],
    github: "https://github.com/KIKW12/Seismic-Detection-in-Space"
  },
  {
    title: "Advanced Password Generator",
    description: "Enterprise-grade C++ password generator with cryptographically secure algorithms and prime number integration. Features object-oriented design with inheritance, polymorphism, and design patterns (Strategy, Template Method). Implements optimized prime generation, memory-safe RAII principles, and cross-platform compatibility. Demonstrates advanced C++ skills, security-first design, and clean architecture following SOLID principles.",
    technologies: ["C++", "Object-Oriented Programming", "Cryptography", "Design Patterns", "Security", "RAII", "STL", "Prime Algorithms"],
    github: "https://github.com/KIKW12/Password-Generator-CPP"
  },
  {
    title: "Sentinel — AI-Powered Autonomous Security Scanner",
    description: "Deploys a coordinated swarm of 10 specialized AI agents to autonomously scan web applications for vulnerabilities. Features a Spider agent for attack surface mapping, SQL injection and XSS fuzzers with verification, an autonomous Red Team agent with full browser control via Playwright, and a Gemini-powered LLM analysis engine that chains low-severity findings into high-impact attack paths. Built at TreeHacks 2026 (Stanford).",
    technologies: ["Python", "Next.js", "TypeScript", "Flask", "Gemini AI", "Playwright", "Supabase", "asyncio"],
    github: "https://github.com/KIKW12/sentinelTH2026"
  },
  {
    title: "Prometheus — AI-Powered Recruitment Platform",
    description: "Full-stack conversational AI recruitment platform that replaces traditional hiring with real-time, natural language candidate search. Features a LangGraph agent powered by Gemini 2.5 Flash with progressive multi-turn filtering, semantic skill matching via Gemini Embeddings, bidirectional culture fit scoring, tenure stability analysis, and WhatsApp-first outreach through Twilio. From search to scheduled meeting in under 2 minutes.",
    technologies: ["Python", "Next.js", "TypeScript", "Flask", "Gemini AI", "LangGraph", "Supabase", "Twilio"],
    github: "https://github.com/KIKW12/Prometheus",
    link: "https://prometheus.enayala.dev"
  },
  {
    title: "Bloombly — Wildflower Bloom Prediction",
    description: "Predicts wildflower bloom timing using satellite data, ecological feature engineering (NDVI, GDD, soil moisture), and ML models. Built for the NASA Space Apps Challenge with GeoJSON outputs and globe visualization.",
    technologies: [
      "Python",
      "Flask",
      "scikit-learn",
      "Google Earth Engine",
      "pandas",
      "numpy",
    ],
    github: "https://github.com/KIKW12/bloombly",
    link: "https://bloomly.earth"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-primary-50 dark:bg-secondary-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 mb-4 min-h-[80px]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-primary-100 dark:bg-secondary-700 text-primary-600 dark:text-primary-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};