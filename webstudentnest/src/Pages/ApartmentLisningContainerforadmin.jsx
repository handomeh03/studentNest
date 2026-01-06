import Loader from "../Components/PublicComp/Loader";
import { UseApatment } from "../Context/ApartmentLisitingContext/ApartmentLisitingContext";
import { UseGetALlApartmentLisitningforAdmin } from "../Hooks/AdminHooks/UseGetALlApartmentLisitningforAdmin";
import ApartmentListingAdmin from "./ApartmentListingAdmin";

export default function ApartmentListingContainerForAdmin(){
    let {loader,error}=UseGetALlApartmentLisitningforAdmin("/api/v1/apartments");
    let {Apartments}=UseApatment();
    if(loader){
        return <Loader/>
    }
    return(
        <div>
            <ApartmentListingAdmin Apartments={Apartments} error={error}/>
        </div>
    );
}