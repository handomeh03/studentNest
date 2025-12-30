import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";


export function UseDeleteApartment(){
    let{token}=useAuth();
    let [loader,setloader]=useState(false);
    let[error,seterror]=useState("");
    let {apartmentDispatch}=UseApatment();
    
    async function  DeleteApartment(id) {
        setloader(true);
        
        try {
            const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/apartments/${id}`,{
                method:"DELETE",
                 headers:{
               "Authorization": `Bearer ${token}`, 
            }
            });
            const data=await res.json();
            if(res.ok){
                apartmentDispatch({type:"deleteApartment",payload:id});
                
            }else{
                throw new Error(data.errors || "apartment not found");
            }
            
        } catch (error) {
            
            seterror(error.message);
        }
        finally{
            setloader(false);
        }
        
    }
    return {DeleteApartment,loader,error};
}