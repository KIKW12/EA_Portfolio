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
    title: "Marsquakes Detection Model",
    description: "An unsupervised machine learning model developed for NASA Space Apps Challenge that identifies potential 'Marsquakes' from InSight Lander data. The project included data cleansing, non-seismic signal elimination, and energy optimization based on rotation angle. Achieved 2nd place in the local event.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Signal Processing"],
    github: "https://github.com/KIKW12/Seismic-Detection-in-Space"
  },
  {
    title: "Python Password Generator",
    description: "A secure password generator with customizable criteria including length, character types, and prime number integration using the 6k±1 prime test.",
    technologies: ["Python", "Cryptography", "Algorithm Design"],
    github: "https://github.com/KIKW12/Password-Generator-Python"
  },
  {
    title: "Restaurant Management System",
    description: "A comprehensive restaurant management system with admin panel, order management, and secure authentication. Built using object-oriented principles for scalability and maintenance.",
    technologies: ["C++", "Object-Oriented Programming", "Database Design"],
    github: "https://github.com/KIKW12/Restaurant-Managment-System"
  },
  {
    title: "Phishing Website Classifier",
    description: "Machine learning-based system for detecting phishing websites using TensorFlow and advanced feature extraction. Includes data preprocessing, cleaning, and feature engineering.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    github: "https://github.com/KIKW12/Phishing_Website_Classifier"
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