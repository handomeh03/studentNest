import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseNotification } from "../../Context/NotificationContext/NotificationContext";

export function UseDeleteNotificatioById(){
     let{token}=useAuth();
     let [loader,setloader]=useState(false);
     let[error,seterror]=useState("");
     let {NotificationDispatch}=UseNotification();
    
    async function  DeleteNotification(id) {
        setloader(true);
        
        try {
            const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/notification/${id}`,{
                method:"DELETE",
                 headers:{
               "Authorization": `Bearer ${token}`, 
            }
            });
            const data=await res.json();
            if(res.ok){
        
                NotificationDispatch({type:"deleteById",payload:id})
                
            }else{
                throw new Error(data.errors || "Notification not found");
            }
            
        } catch (error) {   
            seterror(error.message);
        }
        finally{
            setloader(false);
        }
        
    }
    return {DeleteNotification,loader,error};
}