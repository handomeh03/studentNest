import Loader from "../Components/PublicComp/Loader";
import { UseLeaseRequest } from "../Context/LeaseRequestContext/LeaseRequestAdmin";
import { UseGetAllLeaseRequest } from "../Hooks/Shared/UseGetallLeaseRequest";
import LeaseRequestTablepage from "../Pages/LeaseRequestTablepage";


export default function LeaseRequestContainer(){
    let {loader,error}=UseGetAllLeaseRequest("/api/v1/leases-request");
    let {LeaseRequest}=UseLeaseRequest();
     let searchUrl="/api/v1/leases-request/search?q=";
    if(loader){
        return <Loader/>
    }
    return(
        <div>
            <LeaseRequestTablepage searchUrl={searchUrl} LeaseRequest={LeaseRequest} error={error}/>
        </div>
    );
}