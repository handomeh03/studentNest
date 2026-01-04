
import GppGoodIcon from '@mui/icons-material/GppGood';
import { Useaos } from '../../Hooks/publicHook/useaos';

export default function HeroApartment() {
  Useaos();
  return (
    <section className="relative mt-2 h-screen w-full overflow-hidden font-sans sm:mt-0 " dir="ltr">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60 shadow-inner"></div>
      </div>

      
      <div className="relative z-10 flex h-screen flex-col items-center justify-center px-6 text-center text-white">
        
        
        <div 
          data-aos="fade-down"
          data-aos-delay="200"
          className="mb-6 mt-10 flex items-center gap-2 rounded-full bg-[#3f51b555] border border-[#3f51b5] px-4 py-2 text-white backdrop-blur-md"
        >
          <GppGoodIcon  size={20} />
          <span className="text-sm font-bold tracking-wide">Safe & Certified Student Housing</span>
        </div>

        
        <h1 
          data-aos="zoom-in"
          data-aos-delay="400"
          className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
        >
          Your Safe Haven.. Focus Only on <span className="text-[#3f51b5] font-black">Your Success</span>
        </h1>

        
        <p 
          data-aos="fade-up"
          data-aos-delay="600"
          className="mb-10 max-w-2xl text-lg text-gray-200 md:text-xl leading-relaxed"
        >
          Student-dedicated apartments in a quiet and fully protected environment. 
          We provide 24/7 advanced security systems and total privacy to give you 
          and your family ultimate peace of mind.
        </p>

       
        
      </div>
    </section>
  );
}