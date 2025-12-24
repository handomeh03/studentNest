import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";

export function UseGetALlApartmentLisitningforAdmin(){
     let {token}=useAuth();
      let [loader,setLoader]=useState(false);
      let[error,setError]=useState("");
      let{apartmentDispatch}=UseApatment();
      
      
        useEffect(()=>{
           
              const fetchLeaseRequest=async()=>{
                setLoader(true);
              try {
                const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/apartments`,{
                headers:{
                   "Authorization": `Bearer ${token}`, 
                }
              })
                const data=await res.json();
    
                if(res.ok){
                 apartmentDispatch({type:"getApartments",payload:data});
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