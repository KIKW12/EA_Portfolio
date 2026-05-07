// pages/index.tsx
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { About } from '../components/sections/About';
import { Practice } from '../components/sections/Practice';
import { Contact } from '../components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Practice />
      <Contact />
    </Layout>
  );
}
