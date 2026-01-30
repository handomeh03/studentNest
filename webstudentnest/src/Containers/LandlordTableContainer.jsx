import Loader from "../Components/PublicComp/Loader";
import { useAdminForLandlord } from "../Context/landlordForadminContext/AdminforlandlordContext";
import { UseGetLandlord } from "../Hooks/AdminHooks/useGetLandlord";
import LandlordTablepage from "../Pages/LandlordTablepage";


export default function LandlordTableContainer(){
const{loader,error}=UseGetLandlord();
const {Landlords}=useAdminForLandlord();

if(loader){
  return <Loader/>
}
    return(
        <div>
            <LandlordTablepage Landlords={Landlords || []} loader={loader} error={error}/>
        </div>
    );
}