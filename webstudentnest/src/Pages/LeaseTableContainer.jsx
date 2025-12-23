import Loader from "../Components/PublicComp/Loader";
import { UseLease } from "../Context/LeaseForAdmin/LeaseForAdmin";
import { UseGetLease } from "../Hooks/AdminHooks/UseGetLease";
import LeaseTablePage from "./LeaseTablePage";

export default function LeaseTableContainer(){
   const {loader,error}= UseGetLease();
   const {Leases}=UseLease();
   if(loader){
    return <Loader/>
   }
    return(
        <div>
            <LeaseTablePage Leases={Leases} error={error}/>
        </div>
    );
}