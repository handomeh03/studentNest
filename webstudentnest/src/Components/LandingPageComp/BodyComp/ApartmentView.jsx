import "aos/dist/aos.css";
import { Useaos } from "../../../Hooks/publicHook/useaos";

export default function ApartmentView() {
  const primaryColor = "#3f51b5";
  Useaos();

  const apartments = [
    {
      id: 1,
      title: "Modern Studio near University",
      price: "JD 250",
      location: "Amman, Khalda",
      beds: 1,
      baths: 1,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Luxury 2-Bedroom Apartment",
      price: "JD 400",
      location: "Amman, Abdoun",
      beds: 2,
      baths: 2,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Cozy Room in Shared House",
      price: "JD 180",
      location: "Amman, Al-Jubaiha",
      beds: 1,
      baths: 1,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* العناوين */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6" data-aos="fade-up">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-gray-900 mb-2">
              Featured <span style={{ color: primaryColor }}>Apartments</span>
            </h2>
            <p className="text-gray-500 font-medium">Find the perfect place to call home.</p>
          </div>
          <div className="hidden md:block w-32 h-1 rounded-full" style={{ backgroundColor: primaryColor }}></div>
        </div>

        {/* شبكة الشقق */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {apartments.map((apt, index) => (
            <div
              key={apt.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* صورة الشقة */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={apt.image}
                  alt={apt.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl font-bold text-sm shadow-sm" style={{ color: primaryColor }}>
                  {apt.price} <span className="text-gray-400 font-medium">/ month</span>
                </div>
              </div>

              {/* تفاصيل الشقة */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#3f51b5] transition-colors">
                  {apt.title}
                </h3>
                <div className="flex items-center text-gray-400 text-sm mb-6">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {apt.location}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex gap-4">
                    <span className="flex items-center text-gray-500 text-sm gap-1 font-medium">
                       🛏️ {apt.beds} Bed
                    </span>
                    <span className="flex items-center text-gray-500 text-sm gap-1 font-medium">
                       🚿 {apt.baths} Bath
                    </span>
                  </div>
                  <button 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-45"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* زر View More */}
        <div className="flex justify-center" data-aos="zoom-in">
          <button
            className="group relative flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-xl shadow-indigo-200"
            style={{ backgroundColor: primaryColor }}
          >
            <span className="relative z-10">View More Apartments</span>
            <svg 
              className="absolute right-6 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}