import { usePaymentSchudle } from "../../Context/PaymentSchudleContext/PaymentSchudleContext";
import { UseGetReciptForPayment } from "../../Hooks/LandlordHook/UseGetReciptForPayment";
import Loader from "../PublicComp/Loader";
import ReciptDialog from "./ReciptDialog";

export default function ReciptDialogConationer({handlechangesetReciptDialogflag,ReciptDialogFlag,paymentId,leaseId}){
    const {error,loader}=UseGetReciptForPayment(leaseId,paymentId);
    const {receipt}=usePaymentSchudle();
    if(loader){
        return <Loader/>;
    }

    return(
        <div>
            <ReciptDialog receipt={receipt} error={error} ReciptDialogFlag={ReciptDialogFlag} handlechangesetReciptDialogflag={handlechangesetReciptDialogflag}/>
        </div>
    );
}