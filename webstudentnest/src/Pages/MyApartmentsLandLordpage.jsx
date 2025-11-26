import { useState } from "react";
import AddApartmentDialog from "../Components/ApartmentListing/AddapartmentDialog";
import ApartmentListingAdmin from "./apartmentListingAdmin";

export default function MyApartmentsLandLord(){
    let [addApartmentflag,setAddApartmentFlag]=useState(false);
    function handlechangeAddApartemntFlag(){
        setAddApartmentFlag((old)=>!old);
    }
    return(
        <div>
            <button onClick={()=>{
                setAddApartmentFlag(true);
            }}  className="flex-1 px-3 py-2 mb-4 text-sm font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:cursor-pointer hover:shadow-lg transition">
                add apartemnt
           </button>
            <ApartmentListingAdmin/>
            <AddApartmentDialog addApartmentflag={addApartmentflag} handlechangeAddApartemntFlag={handlechangeAddApartemntFlag}/>
        </div>
    );
}