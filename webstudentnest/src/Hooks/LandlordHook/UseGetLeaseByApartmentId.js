import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseLease } from "../../Context/LeaseForAdmin/LeaseForAdmin";

export function UseGetLeaseByApartmentId(apartmentId){
    let{token}=useAuth();
        let[error,seterror]=useState("");
        let[loader,setloader]=useState(false);
        let {leaseDipattch}=UseLease();
   useEffect(()=>{
      const getleaseByApartmentId=async()=>{
         try{
            setloader(true);
            let res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/landlord/leases/${apartmentId}`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data=await res.json();
            if(res.ok){
                leaseDipattch({type:"getAllLease",payload:data})
            }else{
                throw new Error(data.errors);
            }
        }
        catch(error){
            seterror(error.message);
        }finally{
            setloader(false);
        }
      }
      getleaseByApartmentId();
   },[apartmentId]);
    return {error,loader};
}