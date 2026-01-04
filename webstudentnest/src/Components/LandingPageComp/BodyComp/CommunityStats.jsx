import "aos/dist/aos.css";
import { Useaos } from "../../../Hooks/publicHook/useaos";
import CountUp from "react-countup"; 

export default function CommunityStats() {
  const primaryColor = "#3f51b5";
  Useaos();

  const stats = [
    {
      number: 1000,
      suffix: "+",
      label: "Happy Students",
      desc: "Finding more than just a room, but a community.",
      icon: "🎓",
    },
    {
      number: 1200,
      suffix: "+",
      label: "Verified Owners",
      desc: "Partners who share our commitment to safety.",
      icon: "🤝",
    },
    {
      number: 2500,
      suffix: "+",
      label: "Housing Units",
      desc: "Premium spaces curated for academic success.",
      icon: "🏠",
    },
  ];

  return (
    
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: primaryColor }}>
      
      
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-300 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div data-aos="fade-right">
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              TRUSTED BY <br />
              <span className="opacity-50 text-slate-200">THOUSANDS.</span>
            </h2>
          </div>
          <div data-aos="fade-left" className="lg:border-l lg:border-white/20 lg:pl-12">
            <p className="text-indigo-100 text-lg md:text-xl max-w-md leading-relaxed font-light">
              We don't just list properties; we build the infrastructure for a better student life. Quality, safety, and community in every square meter.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
             
              className="group relative p-8 md:p-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2rem] shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:bg-white/20"
            >
              
            

              <div className="relative z-10">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl md:text-7xl font-black text-white tracking-tight">
                    <CountUp end={stat.number} duration={1} enableScrollSpy scrollSpyOnce />
                    <span className="text-indigo-200">{stat.suffix}</span>
                  </span>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {stat.label}
                </h4>
                
                <p className="text-indigo-100/80 font-medium leading-relaxed">
                  {stat.desc}
                </p>
                
                
                <div className="mt-8 w-12 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full w-0 group-hover:w-full transition-all duration-700 ease-in-out bg-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}