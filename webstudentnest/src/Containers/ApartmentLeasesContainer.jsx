import { useParams } from "react-router-dom";
import { UseGetLeaseByApartmentId } from "../Hooks/LandlordHook/UseGetLeaseByApartmentId";

import Loader from "../Components/PublicComp/Loader";
import { UseLease } from "../Context/LeaseForAdmin/LeaseForAdmin";
import LeaseTablePage from "../Pages/LeaseTablePage";

export default function ApartmentLeasesContainer(){
    let {apartmentId}=useParams();
    const {error,loader}=UseGetLeaseByApartmentId(apartmentId);
    
    const url=`/api/v1/landlord/leases/${apartmentId}/search?q=`;

    if(loader){
        return <Loader />;
    }
    
    return(
        <div>
            <LeaseTablePage error={error} url={url}/>
        </div>
    );
}