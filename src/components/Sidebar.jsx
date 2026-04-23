export default function Sidebar({ users, activeUser, setActiveUser }) {
  return (
    <div className="w-full md:w-32 h-24 md:h-full border-t md:border-t-0 md:border-r border-white/5 flex flex-row md:flex-col items-center py-4 md:py-8 px-4 md:px-0 gap-6 md:gap-8 overflow-x-auto md:overflow-y-auto custom-scrollbar-x md:custom-scrollbar-y flex-shrink-0 bg-white/[0.02] md:bg-transparent z-10">
      
      {users.map((user) => {
        const isActive = activeUser.id === user.id;
        // Extract first and last initials (e.g., "Alice Walker" -> "AW")
        const initials = user.name.split(' ').map(n => n[0]).join('').substring(0, 2);

        return (
          <div key={user.id} className="relative group flex-shrink-0">
            
            {/* Glowing Active Indicator Line */}
            <div className={`absolute transition-all duration-500 ease-out bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)] rounded-full
              ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
              /* Desktop position: Left side vertical line */
              md:-left-6 md:top-1/2 md:-translate-y-1/2 md:h-8 md:w-1 md:bottom-auto
              /* Mobile position: Bottom horizontal line */
              -bottom-5 left-1/2 -translate-x-1/2 w-8 h-1 md:translate-x-0
            `} />

            {/* Avatar Button */}
            <button
              onClick={() => setActiveUser(user)}
              className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full transition-all duration-500 outline-none
                ${isActive 
                  ? 'bg-gradient-to-tr from-blue-600/30 to-purple-600/30 shadow-[0_0_30px_rgba(255,255,255,0.08)] ring-1 ring-white/40 scale-110' 
                  : 'bg-white/5 hover:bg-white/10 hover:scale-105 border border-white/5 hover:border-white/20'
                }`}
            >
              <span className={`text-lg md:text-xl font-bold tracking-widest transition-colors duration-300 
                ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                {initials}
              </span>
            </button>

            {/* Glassmorphism Tooltip (Visible on Desktop Hover Only) */}
            <div className="absolute left-full ml-6 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#0b0f19]/95 backdrop-blur-xl border border-white/10 text-white text-sm font-medium rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 hidden md:block whitespace-nowrap z-50 shadow-2xl">
              {user.name}
              {/* Tooltip Pointer Triangle */}
              <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-[#0b0f19] border-l border-b border-white/10 transform rotate-45"></div>
            </div>

          </div>
        );
      })}
    </div>
  );
}