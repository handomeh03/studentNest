import { useParams } from "react-router-dom";
import Loader from "../Components/PublicComp/Loader";
import { UseLeaseRequest } from "../Context/LeaseRequestContext/LeaseRequestAdmin";
import { UseGetAllLeaseRequest } from "../Hooks/Shared/UseGetallLeaseRequest";
import LeaseRequestTablepage from "../Pages/LeaseRequestTablepage";

export default function ApartmentLeaseRequestcontainer(){
     let {apartmentIdleasereq}=useParams();
     let {loader,error}=UseGetAllLeaseRequest(`/api/v1/landlord/leases-request/${apartmentIdleasereq}`); 
     let {LeaseRequest}=UseLeaseRequest();
     let searchUrl=`/api/v1/landlord/leases-request/${apartmentIdleasereq}/search?q=`;
            if(loader){
                return <Loader/>
            }
    return(
        <div>
            <LeaseRequestTablepage  LeaseRequest={LeaseRequest || []} error={error} searchUrl={searchUrl} />
        </div>
    );
}
