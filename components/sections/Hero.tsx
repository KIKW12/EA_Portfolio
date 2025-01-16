// components/sections/Hero.tsx
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white dark:from-secondary-900 dark:to-secondary-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Enrique Ayala</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 animate-slide-up">
            A Computer Science Student & Back-End Developer
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <Link 
              href="#contact"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <a 
              href="/resume.pdf"
              download
              className="px-8 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-secondary-800 rounded-full transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
          <div className="animate-bounce">
            <Link href="#about" className="text-primary-600 dark:text-primary-400">
              <ArrowDown className="w-6 h-6 mx-auto" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};