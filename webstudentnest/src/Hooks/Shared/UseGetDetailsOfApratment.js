import { useEffect, useState } from "react";

import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";
import { useAuth } from "../../Context/AuthContext/AuthContext";

export function UseGetDetailsOfApratment(id,url){
    
    let[error,seterror]=useState("");
    let[loader,setloader]=useState(false);  
    let {token}=useAuth();
    let{apartmentDispatch}=UseApatment();  
    useEffect(()=>{
        setloader(true);
      const fetchDetails=async()=>{
        
        try {
          const res= await fetch(`${import.meta.env.VITE_API_URL}${url}/${id}`,{
            method:"GET",
             headers:{
               "Authorization": `Bearer ${token}`, 
            }
          })
          const data=await res.json();
    
          if(res.ok){
            console.log(data);
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