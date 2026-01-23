import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";

export function UseCreateLease(){
       let{token}=useAuth();
        let [loader,setloader]=useState(false);
        let[error,seterror]=useState("");
    async function createLease(LeaseReqId,handleChangeCreateLeaseFlag) {
        try {
            setloader(true);
            const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/student/leases/${LeaseReqId}`,{
                method:"POST",
               headers:{
               "Authorization": `Bearer ${token}`, 
            }
            });
            const data=await res.json();
            if(res.ok){
                
                handleChangeCreateLeaseFlag();
            }
            else{
                throw new Error(data.error || "cant create lease ")
            }
        } catch (error) {
            seterror(error.message);
        }finally{
            setloader(false);
        }
    }
    return {loader,error,createLease};
}