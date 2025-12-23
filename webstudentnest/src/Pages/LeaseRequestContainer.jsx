import Loader from "../Components/PublicComp/Loader";
import { UseLeaseRequest } from "../Context/LeaseRequestContext/LeaseRequestAdmin";
import { UseGetAllLeaseRequest } from "../Hooks/AdminHooks/UseGetallLeaseRequest";
import LeaseRequestTablepage from "./LeaseRequestTablepage";

export default function LeaseRequestContainer(){
    let {loader,error}=UseGetAllLeaseRequest();
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