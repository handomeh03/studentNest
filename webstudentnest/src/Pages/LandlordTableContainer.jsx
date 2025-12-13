import Loader from "../Components/PublicComp/Loader";
import { useAdminForLandlord } from "../Context/landlordForadminContext/AdminforlandlordContext";
import { UseGetLandlord } from "../Hooks/AdminHooks/useGetLandlord";
import LandlordTablepage from "./LandlordTablepage";

export default function LandlordTableContainer(){
const{loader,error}=UseGetLandlord();
const {Landlords}=useAdminForLandlord();

// take the email here and send to useAdminForlandlord to get landlords email is optional

if(loader){
  return <Loader/>
}
    return(
        <div>
            <LandlordTablepage Landlords={Landlords} loader={loader} error={error}/>
        </div>
    );
}