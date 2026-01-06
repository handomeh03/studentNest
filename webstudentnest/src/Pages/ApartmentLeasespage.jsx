import { useParams } from "react-router-dom";
import { UseGetLeaseByApartmentId } from "../Hooks/LandlordHook/UseGetLeaseByApartmentId";
import LeaseTablePage from "./LeaseTablePage";
import Loader from "../Components/PublicComp/Loader";
import { UseLease } from "../Context/LeaseForAdmin/LeaseForAdmin";

export default function ApartmentLeasespage(){
    let {apartmentId}=useParams();
    const {error,loader}=UseGetLeaseByApartmentId(apartmentId);
    const {Leases}=UseLease();
    const url=`/api/v1/landlord/leases/${apartmentId}/search?q=`;

    if(loader){
        return <Loader />;
    }
    
    return(
        <div>
            <LeaseTablePage Leases={Leases} error={error} url={url}/>
        </div>
    );
}