// import { useState } from "react";
// import { useParams } from "react-router-dom";
import { useState } from "react";
import EditStatusdialog from "../Componnets/ApartmentListing/EditStatusdialog";
import HeadOfTable from "../Componnets/PaymentschudleComp/HeadOfTable";
import RowOfTable from "../Componnets/PaymentschudleComp/RowOfTable";
import ReciptDialog from "../Componnets/PaymentschudleComp/ReciptDialog";
import EditVeridedLandlordDialog from "../Componnets/PaymentschudleComp/EditVeridedLandlordDialog";

export default function PaymentSchudlepage(){
    // let{leaseId}=useParams();
    let[paymentId,setPaymentId]=useState(null);
    let[ReciptDialogFlag,setReciptDialogflag]=useState(false);
    let[EditVeridedLandlordFlag,setEditVeridedLandlordFlag]=useState(false);
    const payments = [
    {
      paymentId: "P1001",
      status: true,
      landlordVerified:true,
      amount: "100 JOD",
    },
    {
      paymentId: "P1002",
      landlordVerified:true,
      status: true,
      amount: "120 JOD",
    },
    {
      paymentId: "P1003",
      landlordVerified:false,
      status: true,
      amount: "90 JOD",
    },
  ];
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
             <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
                           <HeadOfTable/>
            
                          <tbody className="divide-y divide-gray-200   ">
                            {payments.map((payment,index) => (
                              <RowOfTable handlechangesetReciptDialogflag={handlechangesetReciptDialogflag} handlechangePaymentId={handlechangePaymentId} handlechangeEditVeridedLandlordFlag={handlechangeEditVeridedLandlordFlag} key={index} payment={payment}/>
                            ))}
                          </tbody>
                        </table>
            
                      </div>
                    </div>
                  </div>

                  <ReciptDialog handlechangesetReciptDialogflag={handlechangesetReciptDialogflag} ReciptDialogFlag={ReciptDialogFlag} paymentId={paymentId}/>
                  <EditVeridedLandlordDialog EditVeridedLandlordFlag={EditVeridedLandlordFlag} handlechangeEditVeridedLandlordFlag={handlechangeEditVeridedLandlordFlag} paymentId={paymentId} />
        </div>
    );
}