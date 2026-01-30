import Loader from "../Components/PublicComp/Loader";
import { UseGetLandlord } from "../Hooks/AdminHooks/useGetLandlord";
import LandlordTablepage from "../Pages/LandlordTablepage";


export default function LandlordTableContainer(){
const{loader,error}=UseGetLandlord();
if(loader){
  return <Loader/>
}
    return(
        <div>
            <LandlordTablepage  loader={loader} error={error}/>
        </div>
    );
}