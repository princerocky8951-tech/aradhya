import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-serif text-center mb-16 text-white">About The Goddess</h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <img 
          src="../public/about.png" 
          alt="Portrait" 
          className="w-full md:w-1/3 object-cover shadow-[0_0_30px_rgba(127,29,29,0.2)] grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="space-y-6 text-neutral-300 font-light text-lg leading-relaxed">
          <p>
            I am Goddess Aradhya, a Mistress of the psychological and physical arts of BDSM. My approach is strict yet nurturing, demanding nothing less than your total surrender.
          </p>
          <p>
            With years of experience in the lifestyle, I curate sessions that explore the boundaries of pain, pleasure, and servitude. My dungeon is a judgment-free zone where we construct a reality built on trust and intense sensation.
          </p>
          <p>
            I specialize in sensation play, psychological dominance, and ritualistic service. My goal is not merely to dominate, but to elevate you through your submission.
          </p>
          <div className="pt-8">
            <h3 className="text-xl font-serif text-crimson-500 mb-4">Core Values</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Safe, Sane, Consensual', 'Absolute Discretion', 'Psychological Depth', 'Ritualistic Discipline'].map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-crimson-600 rounded-full"></span>
                  <span className="text-sm uppercase tracking-wider text-neutral-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;