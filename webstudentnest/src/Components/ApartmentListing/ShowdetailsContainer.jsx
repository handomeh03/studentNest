import { useMemo } from "react";
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";
import { useUserContext } from "../../Context/UserContext/UserContext";
import { UseGetDetailsOfApratment } from "../../Hooks/Shared/UseGetDetailsOfApratment";

import Showdetailsdialog from "./ShowdetailsDialog";

export default function ShowdetailsContainer({showdetailsFlag, handlechageShowDetailsFlag, apartmentId}){
    let {user}=useUserContext();
    let url= useMemo(()=>{
         return user?"/api/v1/apartments":"/api/v1/apartments/detail"
    },[user])
    let {loader,error}=UseGetDetailsOfApratment(apartmentId,url);
    let {details}=UseApatment();
    
   
    return(
        <div>
             <Showdetailsdialog loader={loader} details={details} error={error} showdetailsFlag={showdetailsFlag} handlechageShowDetailsFlag={handlechageShowDetailsFlag} apartmentId={apartmentId}/>
        </div>
    );
}