import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";
export function UseEditLandlordVerifedForPayment() {
    let [loader,setLoader]=useState(false);
    let [error,setError]=useState("");
    let{token}=useAuth();
    
    async function EditLandlordVerifed(leaseId,paymentId,status,handlechangeEditVeridedLandlordFlag) {
      
      try {
        setLoader(true);
        setError("");
        const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/landlord/payment/${leaseId}/${paymentId}/status`, {
            method: "PATCH",
            body: JSON.stringify({status}),
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        });
        const data=await res.json();
        if(res.ok){
        
            
            handlechangeEditVeridedLandlordFlag();
               
        }
        else{
            throw new Error(data.error || "update payment fail");
        }
      } catch (error) {
        setError(error.message);
      }finally{
        setLoader(false);
      }
    }
    return { EditLandlordVerifed, loader, error };
}