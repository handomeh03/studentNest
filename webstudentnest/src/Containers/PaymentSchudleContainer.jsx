import { useParams } from "react-router-dom";

import { UseGetPaymentSchudele } from "../Hooks/LandlordHook/UseGetPaymentSchudele";
import Loader from "../Components/PublicComp/Loader";

import PaymentSchudlepage from "../Pages/PaymentSchudlepage";

export default function PaymentScheduleContainer(){
    let{leaseId}=useParams();
    const {error,loader}=UseGetPaymentSchudele(leaseId);
    if(loader){
        return <Loader/>;
    }
    return(
        <div>
            <PaymentSchudlepage leaseId={leaseId} error={error}/>
        </div>
    );
}