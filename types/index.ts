// types/index.ts
export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    image?: string;
  }
  
  export interface ExperienceType {
    title: string;
    company: string;
    location: string;
    date: string;
    description: string[];
    website?: string;  // Optional website URL
  }
  
  export interface Education {
    school: string;
    degree: string;
    date: string;
    location: string;
    gpa: string;
    courses: string[];
  }
  
  export interface Skill {
    name: string;
    icon: string;
    proficiency: 'Beginner' | 'Intermediate' | 'Proficient';
  }

  // asdawdas