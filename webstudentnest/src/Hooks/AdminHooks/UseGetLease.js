import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseLease } from "../../Context/LeaseForAdmin/LeaseForAdmin";

export function UseGetLease(){
  let {token}=useAuth();
  let [loader,setLoader]=useState(false);
  let[error,setError]=useState("");
  let {leaseDipattch}=UseLease();
    useEffect(()=>{
       
          const fetchLease=async()=>{
            setLoader(true);
          try {
            const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/leases`,{
            headers:{
               "Authorization": `Bearer ${token}`, 
            }
          })
            const data=await res.json();

            if(res.ok){
                leaseDipattch({type:"getAllLease",payload:data})
                
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
          fetchLease();
    },[])
    return {loader,error};
}