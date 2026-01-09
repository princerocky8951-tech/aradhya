
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/MockBackend';
import { Lock, ShieldCheck, Zap, X, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { MediaItem } from '../types';

const Gallery: React.FC = () => {
  const { user } = useAuth();
  const { media, loading } = useData();
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  
  // Filter for images only as requested
  const imagesOnly = media.filter(item => item.type === 'image');

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white tracking-tight">The Sacred Archive</h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-crimson-900"></div>
          <div className="flex items-center gap-2 text-crimson-600 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
            <span>Authenticated Internal Repository</span>
          </div>
          <div className="h-px w-8 bg-crimson-900"></div>
        </div>
        <div className="mt-8 flex justify-center">
           <div className="flex items-center gap-2 bg-crimson-950/20 border border-crimson-900/30 px-4 py-1.5 rounded-full">
              <Zap className="w-3 h-3 text-crimson-500 animate-pulse" />
              <span className="text-[10px] text-crimson-400 uppercase tracking-widest font-bold">High Fidelity Manifestation Active</span>
           </div>
        </div>
      </div>
      
      {loading ? (
        <div className="flex flex-col justify-center items-center h-96 space-y-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-2 border-crimson-900/20 rounded-full"></div>
            <div className="absolute inset-0 border-t-2 border-crimson-600 rounded-full animate-spin"></div>
          </div>
          <p className="text-neutral-600 text-xs uppercase tracking-[0.3em] animate-pulse">Decrypting Files...</p>
        </div>
      ) : imagesOnly.length === 0 ? (
        <div className="text-center py-32 bg-neutral-900/20 rounded-2xl border border-white/5 backdrop-blur-sm">
          <p className="text-neutral-500 italic font-serif text-xl opacity-60">The archives are awaiting your tribute. Patience is mandatory.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {imagesOnly.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-[4/5] overflow-hidden bg-neutral-900 border border-white/5 hover:border-crimson-900/40 transition-all duration-700 shadow-2xl cursor-pointer"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale-[80%] group-hover:grayscale-0"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center">
                <Maximize2 className="w-8 h-8 text-white/50 mb-2" />
                <span className="text-[10px] text-white uppercase tracking-[0.3em]">Enlarge Archive</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <div className="flex items-center gap-3 mb-3">
                   <div className="h-px w-4 bg-crimson-800"></div>
                   <span className="text-[10px] text-crimson-500 uppercase tracking-[0.3em] font-bold">Artifact ID: {item.id.toUpperCase()}</span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-2 leading-tight">{item.title}</h3>
                <p className="text-sm text-neutral-400 font-light line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-crimson-500 transition-colors z-[110]">
            <X className="w-10 h-10" />
          </button>
          
          <div 
            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-white/5"
            />
            <div className="mt-8 text-center">
               <h2 className="text-3xl font-serif text-white mb-2">{selectedImage.title}</h2>
               <p className="text-neutral-400 max-w-xl mx-auto">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-24 text-center">
         <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-900 to-transparent mb-12"></div>
         <p className="text-neutral-600 font-serif italic text-lg mb-4">"Every gaze is an act of submission."</p>
         <Link to="/contact">
           <Button variant="outline" className="!text-[10px] opacity-40 hover:opacity-100">Request Custom Artifacts</Button>
         </Link>
      </div>
    </div>
  );
};

export default Gallery;
