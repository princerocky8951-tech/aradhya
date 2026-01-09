import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const services = [
  {
    title: "Foot Worship & Trampling",
    description: "Your existence is beneath me. Literally. In my private dungeons across Hyderabad and Bangalore, you will serve as the carpet I walk upon. Your tongue will clean my soles, and your body will cushion my steps. Do not expect mercy when my heel digs into your chest.",
  },
  {
    title: "Nipple & Genital Torture",
    description: "I delight in the sounds of your suffering. Using precision instruments, electricity, and hot wax, I will push your threshold of pain to levels you never thought possible. You will scream, and I will laugh. Available in Vizag for those who dare.",
  },
  {
    title: "Chastity & Denial",
    description: "Your orgasm is a privilege, not a right. I will lock you in steel, hold the key, and decide if and when you are allowed to release. Days, weeks, or months of desperate longing, all controlled by my whim.",
  },
  {
    title: "Financial Domination",
    description: "You work so I can play. The highest form of worship is sacrifice, and you will sacrifice your financial security for my amusement. Send tribute before you even speak to me. Your money looks better in my account.",
  },
  {
    title: "Spanking & Impact Play",
    description: "Discipline is necessary for an unruly cur like you. Whether it is the cane, the crop, or the heavy leather whip, you will wear my marks with pride. I will break your skin and your spirit until you thank me for the correction.",
  },
  {
    title: "Forced Bi / Feminization",
    description: "You are not a man; you are a plaything. I will strip you of your masculine pretenses, dress you in silk and lace, and train you to serve real men. Your humiliation is my entertainment. Complete reprogramming of your pathetic identity.",
  },
  {
    title: "Human Furniture",
    description: "Objectification in its purest form. You will be my chair, my footstool, or my table. You will remain motionless and silent for hours while I use you for my comfort. You have no voice, only utility.",
  },
  {
    title: "Pet Play & Training",
    description: "Reduce yourself to your primal instincts. Collared, leashed, and trained to obey simple commands. You will eat from a bowl and sleep in a cage. A complete psychological reset for the devoted pet.",
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-serif text-center mb-2 text-white">Sacred Offerings</h1>
      <h2 className="text-xl md:text-2xl font-serif text-center mb-8 text-crimson-600 italic">Hyderabad • Bangalore • Vizag</h2>
      <p className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto leading-relaxed">
        Choose your path of surrender. My dungeon offers a variety of ways to break you. Do not ask for the cost; if you have to ask, you cannot afford my attention.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-neutral-900/50 border border-white/5 p-8 hover:border-crimson-900/50 transition-colors group flex flex-col hover:bg-neutral-900">
            <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-crimson-500 transition-colors">{service.title}</h3>
            <div className="w-12 h-1 bg-neutral-800 group-hover:bg-crimson-900 mb-4 transition-colors"></div>
            <p className="text-neutral-400 mb-6 flex-grow leading-relaxed font-light">{service.description}</p>
            <div className="flex justify-end items-center border-t border-white/5 pt-6 mt-auto">
              <Link to="/contact">
                <span className="text-xs uppercase tracking-widest text-crimson-500 hover:text-white transition-colors cursor-pointer border border-crimson-900/50 px-4 py-2 rounded hover:bg-crimson-900">
                  Beg for Audience
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center bg-neutral-900 p-12 border border-white/5 rounded-lg">
        <h3 className="text-2xl font-serif text-white mb-4">Have a specific fetish not listed?</h3>
        <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
          I am open to discussing custom scenarios, provided they meet my standards of intensity and safety. Do not bore me with common fantasies.
        </p>
        <Link to="/contact">
          <Button>Book a Custom Consultation</Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;