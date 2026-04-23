import { FaUserCircle } from 'react-icons/fa';

export default function Sidebar({ users, activeUser, setActiveUser }) {
  return (
    <div className="w-24 sm:w-32 border-r border-glassBorder flex flex-col items-center py-8 gap-8 overflow-y-auto custom-scrollbar flex-shrink-0">
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => setActiveUser(user)}
          className={`p-2 rounded-full transition-all duration-300 outline-none
            ${activeUser.id === user.id 
              ? 'bg-white/20 scale-110 shadow-[0_0_20px_rgba(255,255,255,0.15)] ring-1 ring-white/30' 
              : 'hover:bg-white/10 hover:scale-105 opacity-60 hover:opacity-100'
            }`}
        >
          <FaUserCircle className="text-4xl sm:text-5xl text-white" />
        </button>
      ))}
    </div>
  );
}