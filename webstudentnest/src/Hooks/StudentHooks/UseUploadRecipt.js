import { useState } from "react";
import { UsePaymentSchudle } from "../../Context/PaymentSchudleContext/PaymentSchudleContext";
import { useAuth } from "../../Context/AuthContext/AuthContext";

export function UseUploadRecipt(){
    let [loader,setLoader]=useState(false);
    let[error,setError]=useState("");
    let {token}=useAuth();
    let {paymentSchudleDispatch}=UsePaymentSchudle();
    async function UploadRecipt(paymentId,LeaseId,receiptImage,handleChangeuploadReciptFlag) {
         const formdata=new FormData();
         formdata.append("receipt",receiptImage);
        try {
            setLoader(true);
            const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/student/payments/${LeaseId}/schedule/${paymentId}/receipt`,
                {
                    method:"POST",
                    body:formdata,
                    headers:{
                    "Authorization": `Bearer ${token}`, 
                     }
                }
            );
            const data=await res.json();
            if(res.ok){
                paymentSchudleDispatch({type:"editPaymentStatus",payload:paymentId});
                handleChangeuploadReciptFlag();
            }
            else{
                throw new Error(data.error || "upload fail");
            }
            
        } catch (error) {
            setError(error.message)
        }finally{
            setLoader(false);
        }
    }
    return {UploadRecipt,loader,error};
}