import { Link } from "react-router-dom";

export default function Hero() {
  const primaryColor = "#3f51b5";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      
      <div className="absolute inset-0 z-0">
        <img 
        loading="lazy"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/40 backdrop-blur-[2px]"></div>
      </div>

      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 sm:mb-6 tracking-tighter uppercase italic leading-[1.1]"
          data-aos="fade-down"
        >
          Student <span style={{ color: primaryColor }}>Nest</span>
        </h1>
        
        
        <p 
          className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 font-medium leading-relaxed max-w-xl sm:max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Your safest and easiest way to find verified student housing and the perfect roommates.
        </p>

        
        <div data-aos="zoom-in" data-aos-delay="400" className="w-full sm:w-auto">
          <Link 
            to="/apartments"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-slate-900 rounded-full font-black text-base sm:text-lg uppercase tracking-widest shadow-2xl hover:bg-[#3f51b5] hover:text-white transition-all duration-500 active:scale-95"
          >
            Find Apartments
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-2" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        
        <div 
          className="mt-12 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-12 lg:gap-20 w-full border-t border-white/10 pt-8 sm:pt-10"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex flex-col items-center">
            <p className="text-xl sm:text-3xl md:text-4xl font-black text-white">100%</p>
            <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Verified</p>
          </div>
          <div className="flex flex-col items-center border-x border-white/10 px-2 sm:px-0">
            <p className="text-xl sm:text-3xl md:text-4xl font-black text-white">24/7</p>
            <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1 text-center">Support</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl sm:text-3xl md:text-4xl font-black text-white">Safe</p>
            <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Contracts</p>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-full h-[40px] sm:h-[60px] md:h-[100px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M1200 120L0 120L0 0C161.241 0 290.412 87.051 445.626 87.051C600.839 87.051 704.997 0 1200 0V120Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
}