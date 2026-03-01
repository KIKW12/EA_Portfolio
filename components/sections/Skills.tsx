// components/sections/Skills.tsx
import Image from 'next/image';
import { Skill } from '../../types';

interface SkillsData {
  languages: Skill[];
  frameworks: Skill[];
  tools: Skill[];
  libraries: Skill[];
}

const skills: SkillsData = {
  languages: [
    { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", proficiency: "Proficient" },
    { name: "C/C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", proficiency: "Proficient" },
    { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", proficiency: "Proficient" },
    { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", proficiency: "Proficient" },
    { name: "SQL/MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", proficiency: "Intermediate" },
    { name: "HTML/CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", proficiency: "Proficient" },
    { name: "R", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg", proficiency: "Proficient" },
    { name: "MATLAB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg", proficiency: "Proficient" },
  ],
  frameworks: [
    { name: "Flask", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", proficiency: "Proficient" },
    { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", proficiency: "Proficient" },
    { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", proficiency: "Proficient" },
    { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", proficiency: "Proficient" },
    { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", proficiency: "Proficient" },
    { name: "TensorFlow", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg", proficiency: "Intermediate" },
    { name: "Scikit-learn", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg", proficiency: "Intermediate" },
    { name: "WordPress", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg", proficiency: "Proficient" },
    { name: "Bootstrap", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg", proficiency: "Intermediate" },
  ],
  tools: [
    { name: "Playwright", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/playwright/playwright-original.svg", proficiency: "Proficient" },
    { name: "Supabase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg", proficiency: "Proficient" },
    { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", proficiency: "Intermediate" },
    { name: "Google Cloud", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg", proficiency: "Proficient" },
    { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", proficiency: "Intermediate" },
    { name: "Google Earth Engine", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg", proficiency: "Intermediate" },
    { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", proficiency: "Proficient" },
    { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", proficiency: "Proficient" },
    { name: "Firebase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-original.svg", proficiency: "Intermediate" },
    { name: "Prisma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg", proficiency: "Intermediate" },
    { name: "GraphQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg", proficiency: "Intermediate" },
    { name: "VS Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg", proficiency: "Proficient" },
    { name: "Visual Studio", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg", proficiency: "Proficient" },
    { name: "PyCharm", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pycharm/pycharm-original.svg", proficiency: "Proficient" },
  ],
  libraries: [
    { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg", proficiency: "Proficient" },
    { name: "NumPy", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg", proficiency: "Proficient" },
    { name: "BeautifulSoup", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", proficiency: "Intermediate" },
    { name: "Matplotlib", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", proficiency: "Proficient" },
    { name: "Threading", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", proficiency: "Proficient" },
    { name: "Jest", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg", proficiency: "Intermediate" },
  ],
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  index: number;
}

const SkillCategory = ({ title, skills, index }: SkillCategoryProps) => {
  return (
    <div className="reveal-up">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-dim">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="text-lg font-display font-semibold text-white">{title}</h3>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {skills.map((skill, i) => {
          const isProficient = skill.proficiency === 'Proficient';
          return (
            <div
              key={i}
              className={`
                group glass rounded-xl p-4 hover:border-accent/15 transition-all duration-300 cursor-default
                ${isProficient ? 'border-accent/5' : ''}
              `}
            >
              <div className="flex items-center gap-3">
                <div className={`relative flex-shrink-0 ${isProficient ? 'w-8 h-8' : 'w-6 h-6'}`}>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className={`font-display text-sm text-white truncate ${isProficient ? 'font-medium' : 'font-normal'}`}>
                    {skill.name}
                  </p>
                  <p className="font-mono text-[10px] text-dim">
                    {skill.proficiency === 'Proficient' ? '●●●' : skill.proficiency === 'Intermediate' ? '●●○' : '●○○'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Skills = () => {
  const categories = [
    { title: 'Languages', skills: skills.languages },
    { title: 'Frameworks', skills: skills.frameworks },
    { title: 'Tools & Technologies', skills: skills.tools },
    { title: 'Libraries', skills: skills.libraries },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.3em] text-dim uppercase mb-4 reveal-up">
          04 — Skills
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16 reveal-up">
          Skills & Technologies
        </h2>

        <div className="space-y-12">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};