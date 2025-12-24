import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";

export function UseGetDocument(id){
    let{token}=useAuth();
    let[error,seterror]=useState("");
    let[loader,setloader]=useState(false);  
    let{apartmentDispatch}=UseApatment();  
    useEffect(()=>{
        setloader(true);
      const fetchDocument=async()=>{
        try {
          const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/apartment-document/${id}`,{
            headers:{
               "Authorization": `Bearer ${token}`, 
            }
          })
          const data=await res.json();
    
          if(res.ok){
            apartmentDispatch({type:"getDocument",payload:data});
          }else{
            throw new Error(data.errors);
          }
          
        } catch (error) {
          seterror(error.message);
        }finally{
            setloader(false);
        }
      }
      fetchDocument();
    },[token,id]);

    return {loader,error}
}