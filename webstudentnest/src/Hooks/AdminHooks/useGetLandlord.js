import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useAdminForLandlord } from "../../Context/landlordForadminContext/AdminforlandlordContext";

export function UseGetLandlord(){
    let{token}=useAuth();
    let[error,seterror]=useState("");
    let[loader,setloader]=useState(false);

    let{adminForlandlordDispatch}=useAdminForLandlord();
    useEffect(()=>{
        setloader(true);
      const fetchlandlord=async()=>{
        try {
          const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/landlords`,{
            headers:{
               "Authorization": `Bearer ${token}`, 
            }
          })
          const data=await res.json();
    
          if(res.ok){
            // sessionStorage.setItem("landlords",JSON.stringify(data));
            adminForlandlordDispatch({type:"getAllLandlord",payload:data});
          }else{
            throw new Error(data.errors);
          }
          
        } catch (error) {
          seterror(error.message);
        }finally{
            setloader(false);
        }
      }
      fetchlandlord();
    },[token]);

    return {loader,error}
}