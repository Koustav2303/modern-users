import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaStar, FaCode, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function UserDetails({ activeUser }) {
  const containerRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.gsap-element');
      gsap.killTweensOf(elements);
      gsap.set(elements, { opacity: 0, y: 30 });
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08, 
        ease: 'power4.out',
        delay: 0.05
      });

      gsap.killTweensOf(barsRef.current);
      gsap.fromTo(barsRef.current, 
        { width: '0%' },
        { 
          width: (i) => `${activeUser.skills[i]?.level || 0}%`, 
          duration: 1, 
          ease: 'power3.out', 
          delay: 0.4, 
          stagger: 0.1
        }
      );
    }
  }, [activeUser]);

  return (
    // Outer Container: Scrolls on mobile, locked (overflow-hidden) on desktop!
    <div className="flex-1 p-5 sm:p-8 md:p-12 lg:p-16 overflow-y-auto lg:overflow-hidden custom-scrollbar-y relative">
      
      {/* Added pb-20 on mobile so the content doesn't get hidden behind the bottom sidebar */}
      <div ref={containerRef} className="h-full w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 lg:items-stretch lg:min-h-0 pb-10 lg:pb-0">
        
        {/* ================= LEFT COLUMN ================= */}
        {/* Mobile: h-auto to expand. Desktop: h-full and min-h-0 to lock it in. */}
        <div className="flex flex-col w-full h-auto lg:h-full lg:min-h-0 max-w-2xl mx-auto lg:mx-0">
          
          {/* ================= PROFILE HEADER (IMAGE + CONNECT + SOCIALS) ================= */}
          <div className="gsap-element flex flex-row items-center gap-6 sm:gap-8 mb-4 sm:mb-6 shrink-0">
            
            {/* Profile Image */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-white/20 p-1 shadow-2xl relative group bg-white/5 backdrop-blur-md shrink-0">
              <img src={activeUser.image} alt={activeUser.name} className="w-full h-full rounded-full object-cover" />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10 group-hover:ring-blue-400/50 transition-all duration-500"></div>
            </div>

            {/* Actions: Button & Social Icons */}
            <div className="flex flex-col gap-3">
              <button className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm tracking-wide hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 border border-white/10 outline-none w-fit">
                Connect
              </button>
              
              <div className="flex items-center gap-4 pl-2">
                <a href="#" className="text-slate-400 hover:text-[#0A66C2] hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.8)] transition-all duration-300">
                  <FaLinkedin className="text-lg sm:text-xl" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">
                  <FaGithub className="text-lg sm:text-xl" />
                </a>
                <a href="#" className="text-slate-400 hover:text-[#1DA1F2] hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(29,161,242,0.8)] transition-all duration-300">
                  <FaTwitter className="text-lg sm:text-xl" />
                </a>
              </div>
            </div>

          </div>

          <h4 className="gsap-element text-blue-400 font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2 shrink-0">
            {activeUser.role}
          </h4>
          
          <h1 className="gsap-element text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 tracking-tight leading-tight shrink-0">
            {activeUser.name}
          </h1>

          <div className="gsap-element flex flex-wrap gap-4 sm:gap-8 lg:gap-10 mb-8 text-slate-300 bg-white/[0.03] p-4 sm:p-5 rounded-2xl border border-white/5 w-fit backdrop-blur-md shadow-xl shrink-0">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mb-1">Age</span> 
              <span className="text-lg sm:text-xl font-semibold text-white">{activeUser.age}</span>
            </div>
            <div className="w-px h-auto bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mb-1">Experience</span> 
              <span className="text-lg sm:text-xl font-semibold text-white">{activeUser.duration}</span>
            </div>
            <div className="w-px h-auto bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 mb-1">Rating</span> 
              <div className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl font-semibold text-white">
                {activeUser.ratings} <FaStar className="text-yellow-400 text-sm sm:text-base drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
              </div>
            </div>
          </div>

          {/* ================= FIXED ABOUT SECTION ================= */}
          <div className="gsap-element flex flex-col lg:flex-1 lg:min-h-0 mt-2">
            <h3 className="text-lg sm:text-xl font-medium text-white/90 shrink-0 mb-3">About</h3>
            
            {/* Applied the new ultra-thin scrollbar AND the cinematic text fade mask!
              The text will now smoothly blur out at the bottom edge.
            */}
            <div className="lg:flex-1 lg:overflow-y-auto about-scrollbar text-fade-mask pr-4 pb-4 lg:min-h-0">
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed font-light">
                {activeUser.about}
              </p>
            </div>
          </div>
          
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        {/* Also drops its height constraints on mobile so everything flows naturally */}
        <div className="flex flex-col w-full h-auto lg:h-full justify-center max-w-xl mx-auto lg:mx-0 space-y-8 lg:space-y-10 lg:min-h-0 mt-6 lg:mt-0">
          
          <div className="gsap-element bg-white/[0.02] border border-white/5 p-5 sm:p-8 rounded-3xl backdrop-blur-sm shadow-2xl shrink-0">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              Technical Proficiency
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {activeUser.skills.map((skill, index) => (
                <div key={index} className="flex flex-col gap-1.5 sm:gap-2">
                  <div className="flex justify-between text-xs sm:text-sm font-medium">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      ref={el => barsRef.current[index] = el}
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      style={{ width: '0%' }} 
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gsap-element bg-white/[0.02] border border-white/5 p-5 sm:p-8 rounded-3xl backdrop-blur-sm shadow-2xl shrink-0">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5 sm:mb-6 flex items-center gap-3">
              <FaCode className="text-purple-400" />
              Preferred Stack
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {activeUser.tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 rounded-xl text-[10px] sm:text-xs lg:text-sm text-slate-300 transition-all duration-300 cursor-default hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}