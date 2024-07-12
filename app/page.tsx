import type { NextPage } from 'next';
import ZoomBackground from '../components/ZoomBackground';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <ZoomBackground />
      
      <main className="relative z-10 container mx-auto px-4 py-8">
        <div className="h-screen"></div> {/* Spacer to push content below the initial view */}
        
        <section id="about" className="my-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I'm a passionate web developer with experience in React, Next.js, and Tailwind CSS.
            I love creating beautiful and functional websites that solve real-world problems.
          </p>
        </section>

        <section id="skills" className="my-16">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </section>

        <section id="projects" className="my-16">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p>Description of project 1</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p>Description of project 2</p>
            </div>
          </div>
        </section>

        <section id="contact" className="my-16">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">
            Get in touch with me at: <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">your.email@example.com</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;