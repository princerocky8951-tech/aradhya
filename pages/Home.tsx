
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Play, ShieldAlert, Lock } from 'lucide-react';
import { HOME_ASSETS } from '../mediaData';

const Home: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="relative">
      {/* 1. Header/Hero Section with Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HOME_ASSETS.heroBanner} 
            alt="Goddess Aradhya Banner" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-4 mt-20">
          <h2 className="text-crimson-600 uppercase tracking-[0.5em] text-sm md:text-xl mb-6 font-bold animate-pulse">
            Obedience • Sacrifice • Silence
          </h2>
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 leading-none drop-shadow-2xl">
            Goddess<br/><span className="text-crimson-800">Aradhya</span>
          </h1>
          <p className="text-neutral-300 text-lg md:text-3xl max-w-3xl mx-auto mb-12 font-light leading-relaxed font-serif italic">
            "You are not here to negotiate. You are here to submit. My word is your only law."
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="!px-12 !py-4 !text-base bg-crimson-900 hover:bg-crimson-800 shadow-[0_0_20px_rgba(153,27,27,0.5)]">
                Beg for Audience
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" className="!px-12 !py-4 !text-base hover:bg-white hover:text-black">
                Witness My Power
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION: The Covenant of Submission */}
      <section className="py-24 bg-black border-b border-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-crimson-900 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-serif text-white mb-10">The Covenant of Reality</h2>
             <div className="space-y-8 text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
               <p>
                  Do not mistake this for a game. When you enter my dominion in <span className="text-crimson-500 font-semibold">Hyderabad, Bangalore, or Vizag</span>, you leave your rights at the door. You are property. You are a resource to be used, drained, and discarded or kept according to my whim.
               </p>
               <p>
                  I do not require your understanding, only your compliance. Whether I am using your body for my pleasure, your tears for my amusement, or your wallet for my luxury, the dynamic remains the same: <span className="text-white font-serif italic">I am everything, and you are nothing.</span>
               </p>
             </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif text-white mb-4">Instruments of Control</h2>
            <p className="text-crimson-600 uppercase tracking-[0.2em] text-sm font-semibold">Hyderabad • Bangalore • Vizag</p>
            <div className="w-24 h-1 bg-crimson-900 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_ASSETS.services.map((service, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-sm border border-neutral-800 hover:border-crimson-900/50 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif text-white mb-2 group-hover:text-crimson-500 transition-colors uppercase tracking-wider">{service.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Home Preview Section (Different Images than Gallery) */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif text-white">Visual Evidence</h2>
              <p className="text-neutral-500 mt-2">Brief glimpses of the sanctuary. Login for the full archives.</p>
            </div>
            <Link to="/gallery" className="hidden md:block text-neutral-500 hover:text-crimson-500 text-sm uppercase tracking-wider">Browse Full Archives &rarr;</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
            {HOME_ASSETS.previewImages.map((item) => (
              <div key={item.id} className="aspect-square relative group overflow-hidden bg-neutral-900 cursor-pointer">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-crimson-900/0 group-hover:bg-crimson-900/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery" className="text-neutral-500 hover:text-crimson-500 text-sm uppercase tracking-wider">Browse Full Archives &rarr;</Link>
          </div>
        </div>
      </section>

      {/* 4. Video Preview Section (Instagram Short Aesthetic) */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-4xl font-serif text-white mb-16 text-center">Cinematic Short</h2>
           
           <div className="grid md:grid-cols-2 gap-16 items-center">
             {/* Instagram Short Style Container */}
             <div className="flex justify-center">
                <div 
                  className="relative aspect-[9/16] w-full max-w-[320px] bg-neutral-900 rounded-[2rem] border-8 border-neutral-800 group cursor-pointer overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {isVideoPlaying ? (
                    <video 
                      src={HOME_ASSETS.videoUrl} 
                      className="w-full h-full object-cover" 
                      autoPlay 
                      loop
                      playsInline
                      disablePictureInPicture
                      controlsList="nodownload nofullscreen noremoteplayback"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  ) : (
                    <>
                      <img src={HOME_ASSETS.videoThumb} alt="Short Cover" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 grayscale scale-105 group-hover:scale-100" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                        <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform bg-white/10">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                        <span className="mt-4 text-[10px] text-white/60 uppercase tracking-[0.4em] font-bold group-hover:text-white transition-colors">Play Manifestation</span>
                      </div>
                      
                      {/* Social Overlay Elements for the "Short" Look */}
                      <div className="absolute bottom-10 left-6 right-6 pointer-events-none">
                         <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-full bg-crimson-900 border border-white/20"></div>
                            <span className="text-xs text-white font-bold tracking-wider">@GoddessAradhya</span>
                         </div>
                         <p className="text-[10px] text-white/80 line-clamp-2">Experience the absolute peak of digital dominance. No release without permission.</p>
                      </div>
                    </>
                  )}
                  
                  {/* Security Icons Overlay */}
                  <div className="absolute top-6 right-6 pointer-events-none opacity-40">
                     <Lock className="w-4 h-4 text-white" />
                  </div>
                </div>
             </div>

             <div className="flex flex-col justify-center space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                     <ShieldAlert className="w-5 h-5 text-crimson-600" />
                     <h3 className="text-[10px] uppercase tracking-[0.4em] text-crimson-700 font-bold">Secure Archive 042</h3>
                  </div>
                  <h3 className="text-4xl font-serif text-white leading-tight">Digital Submission Protocols</h3>
                  <p className="text-neutral-400 leading-relaxed text-lg font-light">
                    My cinematic shorts are crafted to trigger immediate psychological compliance. These high-fidelity records are strictly internal and protected by advanced encryption. 
                  </p>
                  <p className="text-neutral-500 text-sm italic">
                    * Downloads are strictly prohibited. Unauthorized reproduction of the Goddess's image will result in permanent blacklisting.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/register">
                    <Button className="w-full !px-10">Unlock The Full Archive</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full !px-10">Request Custom Short</Button>
                  </Link>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-24 bg-gradient-to-t from-black to-neutral-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Ready to Serve?</h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-crimson-900 to-transparent mb-10"></div>
          <Link to="/contact">
            <Button className="!px-16 !py-6 !text-lg shadow-[0_0_50px_rgba(127,29,29,0.3)]">
              Submit Application
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
