import { useState } from "react";
import ApartmentListingAdmin from "../Pages/ApartmentListingAdmin";
import { UseGetALlApartmentLisitningforAdmin } from "../Hooks/Shared/UseGetALlApartmentLisitningforAdmin";
import { UseApatment } from "../Context/ApartmentLisitingContext/ApartmentLisitingContext";
import Loader from "../Components/PublicComp/Loader";

export default function MybookedApartmentsLandlordContainer(){
    let[bookedApartment]=useState(true);
    let {loader,error}=UseGetALlApartmentLisitningforAdmin("/api/v1/landlord/apartments/booked");
        let {Apartments}=UseApatment();
        if(loader){
            return <Loader/>
        }
    return(
        <div>
          <ApartmentListingAdmin bookedApartment={bookedApartment} Apartments={Apartments || []} error={error}/>
        </div>
    );
}