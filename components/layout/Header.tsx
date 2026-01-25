// components/layout/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Always set dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <header className="fixed w-full bg-secondary-900 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-400">
            EA
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-secondary-300 hover:text-primary-400 transition-colors">
              About
            </Link>
            <Link href="/#experience" className="text-secondary-300 hover:text-primary-400 transition-colors">
              Experience
            </Link>
            <Link href="/#projects" className="text-secondary-300 hover:text-primary-400 transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="text-secondary-300 hover:text-primary-400 transition-colors">
              Contact
            </Link>
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
            <Link href="/#about" className="block text-secondary-300 hover:text-primary-400 transition-colors">
              About
            </Link>
            <Link href="/#experience" className="block text-secondary-300 hover:text-primary-400 transition-colors">
              Experience
            </Link>
            <Link href="/#projects" className="block text-secondary-300 hover:text-primary-400 transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="block text-secondary-300 hover:text-primary-400 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};