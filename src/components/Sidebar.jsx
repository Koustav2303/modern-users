import { FaLayerGroup } from 'react-icons/fa';

export default function Sidebar({ users, activeUser, setActiveUser }) {
  return (
    // Applied sidebar-scrollbar-x for mobile and md:sidebar-scrollbar-y for desktop
    <div className="w-full md:w-32 h-24 md:h-full border-t md:border-t-0 md:border-r border-white/5 flex flex-row md:flex-col items-center py-4 md:py-8 px-4 md:px-0 gap-6 md:gap-8 overflow-x-auto md:overflow-y-auto sidebar-scrollbar-x md:sidebar-scrollbar-y flex-shrink-0 bg-[#0b0f19]/90 md:bg-transparent backdrop-blur-2xl md:backdrop-blur-none z-20">
      
      {/* ================= Brand / System Logo (Desktop Only) ================= */}
      <div className="hidden md:flex flex-col items-center mb-4 shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] mb-2 group cursor-pointer hover:scale-105 transition-transform duration-300">
          <FaLayerGroup className="text-white text-xl group-hover:rotate-12 transition-transform duration-300" />
        </div>
        <div className="w-6 h-px bg-white/20 mt-4 rounded-full"></div>
      </div>

      {/* ================= User Avatars ================= */}
      {users.map((user) => {
        const isActive = activeUser.id === user.id;
        
        // Creating a dynamic "status" based on ID to make the UI look active
        // IDs 1, 2, 4, 5 will be "Online" (Green), IDs 3, 6 will be "Busy" (Amber)
        const isOnline = user.id % 3 !== 0; 

        return (
          <div key={user.id} className="relative group flex-shrink-0">
            
            {/* Glowing Active Indicator Line (Left side on Desktop, Bottom on Mobile) */}
            <div className={`absolute transition-all duration-500 ease-out bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)] rounded-full z-0
              ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
              md:-left-6 md:top-1/2 md:-translate-y-1/2 md:h-8 md:w-1 md:bottom-auto
              -bottom-5 left-1/2 -translate-x-1/2 w-8 h-1 md:translate-x-0
            `} />

            {/* Avatar Button */}
            <button
              onClick={() => setActiveUser(user)}
              className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full transition-all duration-500 outline-none z-10
                ${isActive ? 'scale-110' : 'hover:scale-105 opacity-60 hover:opacity-100'}
              `}
            >
              {/* Profile Image with Dynamic Premium Rings */}
              <div className={`w-full h-full rounded-full relative transition-all duration-500 
                ${isActive 
                  ? 'p-[2.5px] bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                  : 'p-[1px] bg-white/20 group-hover:bg-white/40'
                }`}
              >
                <img 
                  src={user.image} 
                  alt={user.name}
                  className="w-full h-full rounded-full object-cover border-2 border-[#0b0f19]" 
                />
              </div>

              {/* Live Status Dot with its own glow */}
              <span className={`absolute bottom-0 right-0 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 border-[#0b0f19] transition-transform duration-300 z-20
                ${isActive ? 'scale-110' : 'scale-100'}
                ${isOnline 
                  ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' 
                  : 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                }
              `}></span>
            </button>

            {/* ================= Upgraded Glassmorphism Tooltip ================= */}
            <div className="absolute left-full ml-6 top-1/2 -translate-y-1/2 p-3.5 bg-[#0b0f19]/95 backdrop-blur-xl border border-white/10 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 hidden md:flex flex-col whitespace-nowrap z-50 shadow-2xl">
              
              <span className="text-white font-bold tracking-wide text-sm">{user.name}</span>
              <span className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase tracking-widest mt-1 font-semibold">
                {user.role}
              </span>
              
              {/* Tooltip Pointer Triangle */}
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-[#0b0f19] border-l border-b border-white/10 transform rotate-45"></div>
              
            </div>

          </div>
        );
      })}
    </div>
  );
}