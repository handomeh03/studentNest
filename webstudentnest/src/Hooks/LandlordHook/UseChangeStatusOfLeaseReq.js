import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseLeaseRequest } from "../../Context/LeaseRequestContext/LeaseRequestAdmin";
export function UseChangeStatusOfLeaseReq() {
    let [loader,setLoader]=useState(false);
    let [error,setError]=useState("");
    let{token}=useAuth();
    let{leaseRequestDipattch}=UseLeaseRequest();

    async function updateDocument(LeaseId ,status,handleChangeEditdialogflag) {
    
      try {
        setLoader(true);
        setError("");
        const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/landlord/leases-request/${LeaseId}/status`, {
            method: "PATCH",
            body: JSON.stringify({ status }),
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
                
            }
        });
        const data=await res.json();
        if(res.ok){
            leaseRequestDipattch({type:"editstatusLeaseRequest",payload:{LeaseId,status}});
            handleChangeEditdialogflag();
            
        }
        else{
            throw new Error(data.error || "update status fail");
            }
      } catch (error) {
        setError(error.message);
      }finally{
        setLoader(false);
      }
    }
    return { updateDocument, loader, error };
}