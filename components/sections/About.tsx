// components/sections/About.tsx
import Image from 'next/image';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-secondary-600 dark:text-secondary-300">
              I'm a Computer Science student at Monterrey's Institute of Technology, passionate about back-end development
              and cybersecurity. With a strong foundation in various programming languages and frameworks, I enjoy creating
              efficient and secure solutions to complex problems.
            </p>
            <p className="text-secondary-600 dark:text-secondary-300">
              Currently maintaining a GPA of 96.35/100, I've been recognized with an Academic Talent Scholarship and have
              completed specialized programs in Cybersecurity and Mathematics for Machine Learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-50 dark:bg-secondary-800 px-4 py-2 rounded-full">
                <p className="text-primary-600 dark:text-primary-400">Back-End Development</p>
              </div>
              <div className="bg-primary-50 dark:bg-secondary-800 px-4 py-2 rounded-full">
                <p className="text-primary-600 dark:text-primary-400">Cybersecurity</p>
              </div>
              <div className="bg-primary-50 dark:bg-secondary-800 px-4 py-2 rounded-full">
                <p className="text-primary-600 dark:text-primary-400">Machine Learning</p>
              </div>
            </div>
          </div>
            <div className="relative h-[600px] md:h-[800px] w-full rounded-lg overflow-hidden animate-fade-in">
              <Image
                src="/profile.jpg"
                alt="Enrique Ayala"
                fill
                className="object-contain" // Changed from object-cover to object-contain
                priority
              />
            </div>
        </div>
      </div>
    </section>
  );
};