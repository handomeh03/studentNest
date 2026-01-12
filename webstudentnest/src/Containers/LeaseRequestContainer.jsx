import Loader from "../Components/PublicComp/Loader";
import { UseLeaseRequest } from "../Context/LeaseRequestContext/LeaseRequestAdmin";
import { UseGetAllLeaseRequest } from "../Hooks/Shared/UseGetallLeaseRequest";
import LeaseRequestTablepage from "../Pages/LeaseRequestTablepage";


export default function LeaseRequestContainer(){
    let {loader,error}=UseGetAllLeaseRequest("/api/v1/leases-request");
    let {LeaseRequest}=UseLeaseRequest();
    if(loader){
        return <Loader/>
    }
    return(
        <div>
            <LeaseRequestTablepage LeaseRequest={LeaseRequest} error={error}/>
        </div>
    );
}