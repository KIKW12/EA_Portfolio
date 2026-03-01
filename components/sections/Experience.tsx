// components/sections/Experience.tsx
import { Calendar, MapPin } from 'lucide-react';
import { ExperienceType } from '../../types';

const experienceData: ExperienceType[] = [
  {
    title: "CTO & Co-founder",
    company: "Neural Harvest",
    location: "Querétaro, MX",
    date: "February 2025 - Present",
    website: "https://www.neuralharvest.com",
    description: [
      "Leading technical strategy and development of AI-powered agricultural solutions",
      "Managing a team of developers and data scientists",
      "Architecting scalable machine learning infrastructure",
    ]
  },
  {
    title: "Back-End Developer",
    company: "CEAMS - Digital Solutions",
    location: "Querétaro, MX",
    date: "March 2024 - May 2025",
    website: "https://ceams.co",
    description: [
      "Developed and maintained back-end infrastructure using Node.js and MySQL",
      "Improved website loading times by optimizing server-side operations",
      "Contributed to SEO optimization and traffic improvement",
      "Collaborated with front-end developers for seamless integration"
    ]
  },
  {
    title: "2nd Place - NASA Space Apps Challenge",
    company: "UNAQ Querétaro-NASA",
    location: "Querétaro, MX",
    date: "October 2024",
    description: [
      "Developed an unsupervised machine learning model for Marsquakes identification",
      "Created mathematical approach for energy optimization"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <p className="font-mono text-xs tracking-[0.3em] text-dim uppercase mb-4 reveal-up">
          02 — Experience
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 reveal-up">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative pl-12 md:pl-16">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative reveal-up">
                {/* Timeline dot */}
                <div className="timeline-dot" style={{ top: '8px' }} />

                {/* Card */}
                <div className="glass rounded-xl p-6 md:p-8 hover:border-accent/10 transition-all duration-500 group">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                    <h3 className="text-lg md:text-xl font-display font-semibold text-white">
                      {exp.title}
                    </h3>
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-accent hover:underline cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(exp.website, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        @{exp.company}
                      </a>
                    ) : (
                      <span className="font-mono text-sm text-accent">
                        @{exp.company}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-dim font-mono text-xs mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};