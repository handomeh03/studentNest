import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";
import { UseGetDetailsOfApratment } from "../../Hooks/AdminHooks/UseGetDetailsOfApratment";
import Loader from "../PublicComp/Loader";
import Showdetailsdialog from "./ShowdetailsDialog";

export default function ShowdetailsContainer({showdetailsFlag, handlechageShowDetailsFlag, apartmentId}){
    let {loader,error}=UseGetDetailsOfApratment(apartmentId);
    let {details}=UseApatment();
    
    if(loader){
        return <Loader/>
    }
    return(
        <div>
             <Showdetailsdialog details={details} error={error} showdetailsFlag={showdetailsFlag} handlechageShowDetailsFlag={handlechageShowDetailsFlag} apartmentId={apartmentId}/>
        </div>
    );
}