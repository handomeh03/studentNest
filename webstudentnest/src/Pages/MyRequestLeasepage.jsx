import Loader from "../Components/PublicComp/Loader";
import { UseLeaseRequest } from "../Context/LeaseRequestContext/LeaseRequestAdmin";
import { UseGetAllLeaseRequest } from "../Hooks/AdminHooks/UseGetallLeaseRequest";
import LeaseRequestTablepage from "./LeaseRequestTablepage";

export default function MyRequestLeasepage(){
        let {loader,error}=UseGetAllLeaseRequest("/api/v1/leases-request");
        let {LeaseRequest}=UseLeaseRequest();
        let searchUrl="/api/v1/leases-request/search?q=";
        
        if(loader){
            return <Loader/>
        }
    return(
        <div>
            <LeaseRequestTablepage LeaseRequest={LeaseRequest} error={error} searchUrl={searchUrl}/>
        </div>
    );
}