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
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      proficiency: "Proficient" as const
    },
    {
      name: "C/C++",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      proficiency: "Proficient" as const
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      proficiency: "Intermediate" as const
    },
    {
      name: "HTML/CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      proficiency: "Proficient" as const
    },
    {
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      proficiency: "Intermediate" as const
    },
    {
      name: "R",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg",
      proficiency: "Proficient" as const
    },
    {
      name: "MATLAB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg",
      proficiency: "Proficient" as const
    }
  ],
  frameworks: [
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      proficiency: "Intermediate" as const
    },
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      proficiency: "Intermediate" as const
    },
    {
      name: "TensorFlow",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
      proficiency: "Intermediate" as const
    },
    {
      name: "Scikit-learn",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      proficiency: "Intermediate" as const
    },
    {
      name: "WordPress",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg",
      proficiency: "Intermediate" as const
    },
    {
      name: "Bootstrap",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      proficiency: "Intermediate" as const
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      proficiency: "Intermediate" as const
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      proficiency: "Intermediate" as const
    },
    {
      name: "Google Cloud",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
      proficiency: "Intermediate" as const
    },
    {
      name: "VS Code",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      proficiency: "Proficient" as const
    },
    {
      name: "Visual Studio",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
      proficiency: "Proficient" as const
    },
    {
      name: "PyCharm",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pycharm/pycharm-original.svg",
      proficiency: "Proficient" as const
    }
  ],
  libraries: [
    {
      name: "Pandas",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
      proficiency: "Proficient" as const
    },
    {
      name: "NumPy",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      proficiency: "Proficient" as const
    },
    {
      name: "Matplotlib",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      proficiency: "Proficient" as const
    }
  ]
};

interface ProficiencyBadgeProps {
  proficiency: Skill['proficiency'];
}

const ProficiencyBadge = ({ proficiency }: ProficiencyBadgeProps) => {
  const colors = {
    Beginner: "bg-secondary-100 text-secondary-600 dark:bg-secondary-800 dark:text-secondary-400",
    Intermediate: "bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400",
    Proficient: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
  };

  return (
    <span className={`${colors[proficiency]} px-2 py-1 rounded-full text-sm`}>
      {proficiency}
    </span>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-secondary-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="relative w-12 h-12">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain filter dark:invert-0"
                />
              </div>
              <h4 className="text-secondary-900 dark:text-white font-medium text-center">
                {skill.name}
              </h4>
              <ProficiencyBadge proficiency={skill.proficiency} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary-50 dark:bg-secondary-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        <SkillCategory title="Programming Languages" skills={skills.languages} />
        <SkillCategory title="Frameworks" skills={skills.frameworks} />
        <SkillCategory title="Developer Tools" skills={skills.tools} />
        <SkillCategory title="Libraries" skills={skills.libraries} />
      </div>
    </section>
  );
};