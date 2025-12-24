import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext"
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";


export function UseEditStatusApartment(){
    let {token}=useAuth();
    let [loader,setloader]=useState(false);
    let [error,setError]=useState("");
    let {apartmentDispatch}=UseApatment();
    
    async function editApartmentStatus(id,verifed) {
        setloader(true);
        
        try {
            const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/apartment/${id}/verify`,
                {
                    method:"PATCH",
                    body:JSON.stringify({Verified:verifed}),
                    headers:{
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`,
                    }
                }
            )
            const data=await res.json();
            if(res.ok){
                console.log(id)
                apartmentDispatch({type:"editstatus",payload:{id,verifed}});
            }else{
                throw new Error(data.error || "edit fail");
            }
            
            
        } catch (error) {
            
            setError(error.message);
        }
        finally{
            setloader(false);
        }
    }
    return {editApartmentStatus,error,loader};
}