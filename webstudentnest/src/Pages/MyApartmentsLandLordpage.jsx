import { useState } from "react";
import AddApartmentDialog from "../Components/ApartmentListing/AddApartmentDialog";
import ApartmentListingAdmin from "./ApartmentListingAdmin";
import { UseApatment } from "../Context/ApartmentLisitingContext/ApartmentLisitingContext";
import { UseGetALlApartmentLisitningforAdmin } from "../Hooks/Shared/UseGetALlApartmentLisitningforAdmin";
import Loader from "../Components/PublicComp/Loader";


export default function MyApartmentsLandLord(){
    let [addApartmentflag,setAddApartmentFlag]=useState(false);
     let {loader,error}=UseGetALlApartmentLisitningforAdmin("/api/v1/apartments");
     let {Apartments}=UseApatment();
   
    function handlechangeAddApartemntFlag(){
        setAddApartmentFlag((old)=>!old);
    }
    if(loader){
        return <Loader/>
    }
    return(
        <div>
            <button onClick={()=>{
                setAddApartmentFlag(true);
            }}  className="flex-1 px-3 py-2 mb-4 text-sm font-medium text-white bg-[#3f51b5] rounded-lg shadow hover:bg-[#6573c3] hover:cursor-pointer hover:shadow-lg transition">
                add apartemnt
           </button>
            <ApartmentListingAdmin Apartments={Apartments} error={error}/>
            <AddApartmentDialog addApartmentflag={addApartmentflag} handlechangeAddApartemntFlag={handlechangeAddApartemntFlag}/>
        </div>
    );
}