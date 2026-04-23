import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaStar } from 'react-icons/fa';

export default function UserDetails({ activeUser }) {
  const detailsRef = useRef(null);

  // GSAP Animation triggers when the activeUser prop changes
  useEffect(() => {
    if (detailsRef.current) {
      gsap.fromTo(detailsRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, [activeUser]);

  return (
    <div className="flex-1 p-8 sm:p-12 md:p-16 overflow-y-auto">
      <div ref={detailsRef} className="h-full flex flex-col justify-center max-w-3xl">
        
        <h4 className="text-blue-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3">
          {activeUser.role}
        </h4>
        
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight">
          {activeUser.name}
        </h1>

        <div className="flex flex-wrap gap-6 sm:gap-10 mb-10 text-slate-300 bg-white/5 p-6 rounded-xl border border-glassBorder w-fit backdrop-blur-sm">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-slate-500 mb-1">Age</span> 
            <span className="text-xl font-medium text-white">{activeUser.age}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-slate-500 mb-1">Experience</span> 
            <span className="text-xl font-medium text-white">{activeUser.duration}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-slate-500 mb-1">Rating</span> 
            <div className="flex items-center gap-2 text-xl font-medium text-white">
              {activeUser.ratings} <FaStar className="text-yellow-500 text-sm" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white/90">About</h3>
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            {activeUser.about}
          </p>
        </div>

      </div>
    </div>
  );
}