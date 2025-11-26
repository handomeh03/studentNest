import { useState } from "react";
import ApartmentListingAdmin from "./apartmentListingAdmin";

export default function MybookedApartmentsLandlordPage(){
    let[bookedApartment]=useState(true);
    return(
        <div>
          <ApartmentListingAdmin bookedApartment={bookedApartment}/>
        </div>
    );
}