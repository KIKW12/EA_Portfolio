// components/layout/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-base py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dim font-mono text-xs tracking-wider">
            © {new Date().getFullYear()} Enrique Ayala
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/KIKW12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 cursor-pointer group"
            >
              <Github className="w-4 h-4" />
              <span className="font-mono text-xs hidden sm:inline group-hover:text-accent">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/enayala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 cursor-pointer group"
            >
              <Linkedin className="w-4 h-4" />
              <span className="font-mono text-xs hidden sm:inline group-hover:text-accent">LinkedIn</span>
            </a>
            <a
              href="mailto:enayala12@gmail.com"
              className="flex items-center gap-2 text-muted hover:text-accent transition-colors duration-300 cursor-pointer group"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono text-xs hidden sm:inline group-hover:text-accent">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
