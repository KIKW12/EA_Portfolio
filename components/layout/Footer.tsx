// components/layout/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-secondary-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-600 dark:text-secondary-400">
            © 2025 Enrique Ayala. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/KIKW12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/enayala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@enayala.me"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
