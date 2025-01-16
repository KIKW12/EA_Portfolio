// components/layout/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';

export const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="fixed w-full bg-white dark:bg-secondary-900 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            EA
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About
            </Link>
            <Link href="/#experience" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Experience
            </Link>
            <Link href="/#projects" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Contact
            </Link>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 animate-slide-down">
            <Link href="/#about" className="block text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About
            </Link>
            <Link href="/#experience" className="block text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Experience
            </Link>
            <Link href="/#projects" className="block text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="block text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};