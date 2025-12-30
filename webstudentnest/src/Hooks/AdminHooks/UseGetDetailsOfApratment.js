import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";

export function UseGetDetailsOfApratment(id){
    let{token}=useAuth();
    let[error,seterror]=useState("");
    let[loader,setloader]=useState(false);  
    let{apartmentDispatch}=UseApatment();  
    useEffect(()=>{
        setloader(true);
      const fetchDetails=async()=>{
        
        try {
          const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/apartments/${id}`,{
            headers:{
               "Authorization": `Bearer ${token}`, 
            }
          })
          const data=await res.json();
    
          if(res.ok){
            
            apartmentDispatch({type:"getDetails",payload:data});
          }else{
            throw new Error(data.errors);
          }
          
        } catch (error) {
          seterror(error.message);
        }finally{
            setloader(false);
        }
      }
      fetchDetails();
    },[token,id]);

    return {loader,error}
}