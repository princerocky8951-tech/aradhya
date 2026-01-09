
import React from 'react';
import { SOCIAL_ASSETS } from '../mediaData';
import { ExternalLink, Twitter, Send, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'x (twitter)': return <Twitter className="w-6 h-6" />;
      case 'telegram': return <Send className="w-6 h-6" />;
      case 'instagram': return <Instagram className="w-6 h-6" />;
      default: return <ExternalLink className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Reach My Dominion</h1>
        <div className="w-32 h-1 bg-crimson-900 mx-auto mb-8"></div>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The Goddess is everywhere. Connect through the official channels to begin your journey of submission. 
          Direct inquiries are handled through my secure telegram and social portals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {SOCIAL_ASSETS.map((social, index) => (
          <a 
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center bg-neutral-900/40 border border-white/5 p-10 rounded-2xl hover:bg-neutral-900 transition-all duration-500 hover:border-crimson-900/40 transform hover:-translate-y-2"
          >
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-crimson-900/30 group-hover:border-crimson-600 transition-colors shadow-2xl">
                <img 
                  src={social.profileImg} 
                  alt={social.platform} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-crimson-900 p-2.5 rounded-full text-white shadow-xl group-hover:scale-110 transition-transform">
                {getIcon(social.platform)}
              </div>
            </div>

            <div className="text-center space-y-3">
              <h3 className="text-2xl font-serif text-white">{social.platform}</h3>
              <p className="text-crimson-500 font-mono text-sm tracking-widest">{social.username}</p>
              <p className="text-neutral-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-10">
                {social.description}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 w-full flex justify-center opacity-40 group-hover:opacity-100 transition-opacity">
               <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 group-hover:text-white transition-colors">Connect &rarr;</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-24 text-center">
        <p className="text-neutral-600 uppercase tracking-[0.5em] text-[10px] mb-4">Official Verification</p>
        <p className="text-neutral-500 font-light italic max-w-xl mx-auto">
          "Do not be fooled by imposters. My authority is unique, and my presence is only verified through these sacred links."
        </p>
      </div>
    </div>
  );
};

export default Contact;
