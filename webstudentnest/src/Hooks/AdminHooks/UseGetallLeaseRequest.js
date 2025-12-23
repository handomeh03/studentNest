import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseLeaseRequest } from "../../Context/LeaseRequestContext/LeaseRequestAdmin";

export function UseGetAllLeaseRequest(){
     let {token}=useAuth();
      let [loader,setLoader]=useState(false);
      let[error,setError]=useState("");
      let{leaseRequestDipattch}=UseLeaseRequest();
      
        useEffect(()=>{
           
              const fetchLeaseRequest=async()=>{
                setLoader(true);
              try {
                const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/lease-requests`,{
                headers:{
                   "Authorization": `Bearer ${token}`, 
                }
              })
                const data=await res.json();
    
                if(res.ok){
                 leaseRequestDipattch({type:"getAllLeaseRequest",payload:data}) 
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