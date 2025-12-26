import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseAuditLog } from "../../Context/AuditLogContext/AuditLogContext";
export function UseGetALLAuditLog(){
     let {token}=useAuth();
      let [loader,setLoader]=useState(false);
      let[error,setError]=useState("");
      let{AuditLogDipattch}=UseAuditLog();
          
        useEffect(()=>{
           
              const fetchLeaseRequest=async()=>{
                setLoader(true);
              try {
                const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/audit-log`,{
                headers:{
                   "Authorization": `Bearer ${token}`, 
                }
              })
                const data=await res.json();
    
                if(res.ok){
                    
                 AuditLogDipattch({type:"getAllAuditLog",payload:data})
                }
                else{  
                    throw new Error(data.errors);
                    
                }
                
              } catch (error) {
                setError(error.message);
              }finally{
                setLoader(false);
              }
              }
              fetchLeaseRequest();
        },[])
        return {loader,error};
}