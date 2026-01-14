import { useEffect, useState } from "react";

import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";

export function UseGetDetailsOfApratment(id){
    
    let[error,seterror]=useState("");
    let[loader,setloader]=useState(false);  
    let{apartmentDispatch}=UseApatment();  
    useEffect(()=>{
        setloader(true);
      const fetchDetails=async()=>{
        
        try {
          const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/apartments/${id}`,{
            method:"GET"
          })
          const data=await res.json();
    
          if(res.ok){
            
            apartmentDispatch({type:"getDetails",payload:data});
          }else{
             apartmentDispatch({type:"getDetails",payload:{}});
             
            throw new Error(data.error);

          }
          
        } catch (error) {
          seterror(error.message);
        }finally{
            setloader(false);
        }
      }
      fetchDetails();
    },[id,apartmentDispatch]);

    return {loader,error}
}