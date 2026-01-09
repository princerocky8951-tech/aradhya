
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/MockBackend';
import { ShieldCheck, Clock, MapPin, MessageSquare } from 'lucide-react';

const UserPanel: React.FC = () => {
  const { user } = useAuth();
  const { bookings } = useData();
  
  const myBookings = bookings.filter(b => b.userId === user?.id);

  return (
    <div className="max-w-5xl mx-auto space-y-10 py-6">
      {/* Profile Header */}
      <div className="relative overflow-hidden bg-neutral-900 border border-white/5 p-8 rounded flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-crimson-900/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-3xl font-serif text-white mb-2">Welcome to the Sanctum</h1>
          <p className="text-neutral-500 flex items-center justify-center md:justify-start gap-2 uppercase tracking-widest text-xs">
            <ShieldCheck className="w-4 h-4 text-crimson-700" />
            Authenticated Devotee: <span className="text-neutral-300">{(user?.id || '---').slice(0, 8)}</span>
          </p>
        </div>
        <div className="relative z-10 text-center md:text-right">
          <p className="text-neutral-400 font-serif text-xl italic">"{user?.name}"</p>
          <p className="text-[10px] text-neutral-600 uppercase tracking-[0.4em] mt-1">Status: Active Service</p>
        </div>
      </div>

      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl text-neutral-300 uppercase tracking-widest">Audience Requests</h2>
          <div className="flex-grow h-px bg-gradient-to-r from-neutral-800 to-transparent"></div>
        </div>

        {myBookings.length === 0 ? (
          <div className="bg-neutral-900/30 border border-dashed border-neutral-800 p-12 text-center rounded">
            <p className="text-neutral-600 italic">No pending tributes found. Perhaps it is time to beg for an audience?</p>
          </div>
        ) : (
          <div className="grid gap-6">
             {myBookings.map(b => (
               <div key={b.id} className="group bg-neutral-900/50 border border-white/5 p-8 rounded hover:border-crimson-900/30 transition-all">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                   <div className="space-y-4">
                     <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-neutral-400">
                          <MapPin className="w-4 h-4 text-crimson-800" />
                          <span className="text-sm font-medium uppercase tracking-wider">{b.city}</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-400">
                          <Clock className="w-4 h-4 text-crimson-800" />
                          <span className="text-sm font-medium uppercase tracking-wider">{b.preferredDate}</span>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                       <MessageSquare className="w-4 h-4 text-neutral-600 mt-1 flex-shrink-0" />
                       <p className="text-neutral-500 text-sm italic font-serif leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                        "{b.message}"
                       </p>
                     </div>
                   </div>

                   <div className="flex flex-col items-end gap-2">
                     <div className={`px-4 py-1 rounded text-[10px] uppercase font-bold tracking-[0.2em] border ${
                        b.status === 'approved' ? 'bg-green-950/20 text-green-500 border-green-900/30' :
                        b.status === 'rejected' ? 'bg-red-950/20 text-red-500 border-red-900/30' :
                        'bg-yellow-950/20 text-yellow-500 border-yellow-900/30'
                     }`}>
                       {b.status}
                     </div>
                     <p className="text-[10px] text-neutral-700 uppercase tracking-tighter">Request ID: {b.id}</p>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default UserPanel;
