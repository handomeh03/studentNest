import { useState } from "react";
import UseSearchApartment from "../../Hooks/AdminHooks/UseSearchApartmnet";

export default function SearchuserComp({handlechangeApartment,handlechangeTogoleWhenSearch}){
   let [name,setname]=useState("");
   UseSearchApartment(name);  
    return(
     <div className="flex flex-col sm:flex-row mt-1 sm:items-center sm:justify-between gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row flex-1 gap-2 ">
                 <input value={name}  onChange={(e)=>{
                    handlechangeApartment();
                    handlechangeTogoleWhenSearch();
                    setname(e.target.value);

                 }} type="text" placeholder="Search apartment..."aria-label="Search landlord"className="flex-1 rounded-2xl border outline-none p-4  border-gray-300 bg-white text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500   "/>

         </div>
      </div>
    );
}