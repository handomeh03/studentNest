import "aos/dist/aos.css";
import { Useaos } from "../../../Hooks/publicHook/useaos";

export default function CommunityStats() {
  const primaryColor = "#3f51b5";
  Useaos();

  const stats = [
    {
      number: "1,000+",
      label: "Happy Students",
      image: "https://img.freepik.com/premium-photo/smiling-african-student-man-with-laptop-mall-background-bokeh_488220-69662.jpg",
      
      gridClass: "md:col-span-2 md:row-span-1 h-[300px] md:h-auto",
    },
    {
      number: "1,200+",
      label: "Verified Owners",
      image: "./landlord.jpg",
      gridClass: "md:col-span-1 md:row-span-2 h-[400px] md:h-auto",
    },
    {
      number: "2,500+",
      label: "Housing Units",
      image: "./apartment.jpg",
      gridClass: "md:col-span-2 md:row-span-1 h-[300px] md:h-auto",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* لمسات فنية في الخلفية - مخفية في الموبايل لتقليل التشتت */}
      <div
        className="hidden md:block absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none"
        style={{ color: primaryColor }}
      >
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path
            d="M45,-62.5C58.4,-54.9,69.5,-41.8,75.4,-26.9C81.3,-12,82,4.8,76.5,19.5C71,34.2,59.3,46.8,45.8,56.1C32.3,65.4,17.1,71.4,1.1,69.9C-14.8,68.4,-29.7,59.4,-43.2,49.1C-56.7,38.8,-68.8,27.3,-74.1,13.1C-79.4,-1.1,-77.9,-18,-69.6,-31.6C-61.3,-45.2,-46.1,-55.5,-31.2,-62.4C-16.3,-69.3,-1.5,-72.8,14.2,-70.5C29.9,-68.2,45,-62.5,45,-62.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 text-center md:text-left">
          <div data-aos="fade-right">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight">
              The Numbers <br />
              <span style={{ color: primaryColor }}>Don't Lie.</span>
            </h2>
          </div>
          <div data-aos="fade-left" className="md:text-right">
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md mx-auto md:ml-auto leading-relaxed">
              We've built a community based on trust, and these metrics prove our commitment to excellence.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className={`${stat.gridClass} group relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-xl md:shadow-2xl transition-all duration-700 hover:shadow-indigo-200/50`}
            >
              
              <img
                src={stat.image}
                className="absolute inset-0 w-full h-full object-cover  transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                alt={stat.label}
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <div className="overflow-hidden">
                  <span className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-2 transform translate-y-0 md:translate-y-10 md:group-hover:translate-y-0 transition-transform duration-500 text-blue-300">
                    Statistics
                  </span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-1 md:mb-2 transform transition-transform duration-500 md:group-hover:-translate-y-2">
                  {stat.number}
                </h3>
                <p className="text-lg md:text-xl text-gray-200 font-medium transform transition-transform duration-500 delay-75 md:group-hover:-translate-y-1">
                  {stat.label}
                </p>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}