// components/sections/Experience.tsx
import { Building2, Calendar, MapPin } from 'lucide-react';
import { ExperienceType } from '../../types';

const experienceData: ExperienceType[] = [
  {
    title: "Back-End Developer",
    company: "ceams.co",
    location: "Querétaro, MX",
    date: "March 2024 - Present",
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
    <section id="experience" className="py-20 bg-primary-50 dark:bg-secondary-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-secondary-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-wrap gap-4 mb-4">
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  {exp.title}
                </h3>
                <span className="text-primary-600 dark:text-primary-400">
                  @{exp.company}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-secondary-600 dark:text-secondary-400 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-secondary-600 dark:text-secondary-300">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};