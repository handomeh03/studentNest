import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UsePaymentSchudle } from "../../Context/PaymentSchudleContext/PaymentSchudleContext";


export function UseGetPaymentSchudele(leaseId){
        let{token}=useAuth();
        let[error,seterror]=useState("");
        let[loader,setloader]=useState(false);
        let {paymentSchudleDispatch}=UsePaymentSchudle();
        
   useEffect(()=>{
      const getPaymentSchudle=async()=>{
         try{
            setloader(true);
            let res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/payments/${leaseId}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data=await res.json();
            if(res.ok){
                
                paymentSchudleDispatch({type:"getPayments",payload:data});
                
                
            }else{
                console.log(data);
                throw new Error(data.error);
            }
        }
        catch(error){
            seterror(error.message);
        }finally{
            setloader(false);
        }
      }
      getPaymentSchudle();
   },[leaseId]);
    return {error,loader};
}