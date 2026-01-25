import "aos/dist/aos.css";
import { Useaos } from "../../../Hooks/publicHook/useaos";
import { useNavigate } from "react-router-dom";
import UseGetRandomApartment from "../../../Hooks/Shared/UseGetRandomApartment";
import { UseApatment } from "../../../Context/ApartmentLisitingContext/ApartmentLisitingContext";
import ApartmentCard from "../../ApartmentListing/ApartmentCard";
import ApartmentListingAdmin from "../../../Pages/ApartmentListingAdmin";

export default function ApartmentView() {
  const primaryColor = "#3f51b5";
  Useaos();

  let navigate=useNavigate();

  const {error}=UseGetRandomApartment();
  const {Apartments}=UseApatment();

  return (
    <section className="bg-gray-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6" data-aos="fade-up">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-gray-900 mb-2">
              Featured <span style={{ color: primaryColor }}>Apartments</span>
            </h2>
            <p className="text-gray-500 font-medium">Find the perfect place to call home.</p>
          </div>
          <div className="hidden md:block w-32 h-1 rounded-full" style={{ backgroundColor: primaryColor }}></div>
        </div>

        
        <div >
          {/* random apartment flag for delete the serach and for all to delete the button that not avaible to anyone */}
         <ApartmentListingAdmin randomApartment={true} forall={true} Apartments={Apartments} error={error}/>
         
        </div>

        
        <div className="m-3 flex justify-center" data-aos="zoom-in">
          <button
            onClick={()=>{
              navigate("/apartments")
            }}
            className=" cursor-pointer group relative flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-xl shadow-indigo-200"
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