import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyUse() {
  const primaryColor = '#3f51b5';

  const cards = [
    {
      title: "High Security",
      description: "StudentNest provides a highly secure environment to ensure safe and trustworthy housing for students.",
      step: "01",
      icon: (
        <svg loading="lazy" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Roommate Match",
      description: "Smart matchmaking system helps you find the perfect roommate based on lifestyle and habits.",
      step: "02",
      icon: (
        <svg loading="lazy" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Smart Contract",
      description: "Automated smart contracts powered by blockchain ensure transparent and fair agreements.",
      step: "03",
      icon: (
        <svg loading="lazy" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#fcfdfe] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="flex flex-col md:flex-row items-center mb-20 gap-10">
          <div className="md:w-1/2" data-aos="fade-right">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              We provide the <br />
              <span style={{ color: primaryColor }}>Best Experience.</span>
            </h2>
          </div>
          <div className="md:w-1/2 border-l-2 pl-8 border-slate-200" data-aos="fade-left">
            <p className="text-slate-500 text-xl leading-relaxed">
              We focus on safety, community, and technology to make student life easier and more productive.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10 hidden md:block"></div>

          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="group relative bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(63,81,181,0.12)] transition-all duration-500"
            >
             

              
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:-rotate-6"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                {card.icon}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-lg">
                  {card.description}
                </p>
              </div>

             
              <div className="mt-8 flex items-center gap-2 font-bold text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0" style={{ color: primaryColor }}>
                READ MORE 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              
              <div 
                className="absolute left-0 top-1/4 w-1 h-0 group-hover:h-1/2 transition-all duration-500 rounded-r-full"
                style={{ backgroundColor: primaryColor }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}