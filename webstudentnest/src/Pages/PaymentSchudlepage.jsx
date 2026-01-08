

import { useState } from "react";
import HeadOfTable from "../Components/PaymentschudleComp/HeadOfTable";
import RowOfTable from "../Components/PaymentschudleComp/RowOfTable";
import ReciptDialog from "../Components/PaymentschudleComp/ReciptDialog";
import EditVeridedLandlordDialog from "../Components/PaymentschudleComp/EditVeridedLandlordDialog";
import ErrorComp from "../Components/PublicComp/ErrorComp";
import ReciptDialogConationer from "../Components/PaymentschudleComp/ReciptDialogContainer";

export default function PaymentSchudlepage({leaseId,error,payments}){
    
    let[paymentId,setPaymentId]=useState("");
    let[ReciptDialogFlag,setReciptDialogflag]=useState(false);
    let[EditVeridedLandlordFlag,setEditVeridedLandlordFlag]=useState(false);
  
  function handlechangePaymentId(id){
    setPaymentId(id);
  }
  function handlechangesetReciptDialogflag(){
    setReciptDialogflag((old)=>!old);
  }
  function handlechangeEditVeridedLandlordFlag(){
    setEditVeridedLandlordFlag((old)=>!old);
  }
    return(
      <div>
        {error ? <ErrorComp error={error}/>:  <div>
             <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                     {payments.length==0? <ErrorComp error={"no payment found "}/>:   <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
                           <HeadOfTable/>
            
                          <tbody className="divide-y divide-gray-200   ">
                            {payments.map((payment,index) => (
                              <RowOfTable handlechangesetReciptDialogflag={handlechangesetReciptDialogflag} handlechangePaymentId={handlechangePaymentId} handlechangeEditVeridedLandlordFlag={handlechangeEditVeridedLandlordFlag} key={index} payment={payment}/>
                            ))}
                          </tbody>
                        </table> }
            
                      </div>
                    </div>
                  </div>

                  {ReciptDialogFlag ?<ReciptDialogConationer handlechangesetReciptDialogflag={handlechangesetReciptDialogflag} ReciptDialogFlag={ReciptDialogFlag} paymentId={paymentId} leaseId={leaseId}/>:""}
                  {EditVeridedLandlordFlag ? <EditVeridedLandlordDialog EditVeridedLandlordFlag={EditVeridedLandlordFlag} handlechangeEditVeridedLandlordFlag={handlechangeEditVeridedLandlordFlag} paymentId={paymentId} leaseId={leaseId} />:""}
                  
              
        </div>}
      </div>
    );
}