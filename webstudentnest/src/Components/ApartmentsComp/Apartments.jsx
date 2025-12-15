import { useState } from "react";
import ApartmentListingAdmin from "../../Pages/ApartmentListingAdmin";
import SearchuserComp from "../ApartmentListing/SearchuserComp";
import Filteration from "./Filteration";


export default function ApartmentsForall() {
  let [forall] = useState(true);

  let[fliterFlag,setFilterFlag]=useState(false);
   
  
  return (
    <div >
      <div className="w-full ">
       <div className="w-full  mx-auto my-3.5 p-2 flex gap-1 justify-center items-center">
         <div className="w-full sm:w-1/2">
          <SearchuserComp />
        </div>
        <button className="cursor-pointer hover:text-[#3f51b5]" onClick={()=>{setFilterFlag((old)=>!old)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
       </div>

       {fliterFlag? <Filteration/>:""}

       
      </div>
      <div className="p-2 sm:p-0">
        <ApartmentListingAdmin forall={forall} />
      </div>
    </div>
  );
}
