// pages/index.tsx
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Contact } from '../components/sections/Contact';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scroll functionality
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}