import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useAdminForLandlord } from "../../Context/landlordForadminContext/AdminforlandlordContext";

export function UseDeleteLandlord(){
    let{token}=useAuth();
    let [loader,setloader]=useState(false);
    let[error,seterror]=useState("");
    let{adminForlandlordDispatch}=useAdminForLandlord();
    async function  deleteLandlord(id,handleChangeDeletelandlordDialog) {
        setloader(true);
        
        try {
            const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/users/${id}`,{
                method:"DELETE",
                 headers:{
               "Authorization": `Bearer ${token}`, 
            }
            });
            const data=await res.json();
            if(res.ok){
                handleChangeDeletelandlordDialog();
                adminForlandlordDispatch({type:"deleteLandlord",payload:id});
                
            }else{
                throw new Error(data.errors || "landlord not found");
            }
            
        } catch (error) {
            
            seterror(error.message);
        }
        finally{
            setloader(false);
        }
        
    }
    return {deleteLandlord,loader,error};
}