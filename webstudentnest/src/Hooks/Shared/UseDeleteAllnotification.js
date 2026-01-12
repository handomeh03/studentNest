import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseNotification } from "../../Context/NotificationContext/NotificationContext";

export function UseDeleteAllNotification(){
     let{token}=useAuth();
     let [loader,setloader]=useState(false);
     let[error,seterror]=useState("");
     let {NotificationDispatch}=UseNotification();
    
    async function  DeleteAllNotification() {
        setloader(true);
        
        try {
            const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/notifications`,{
                method:"DELETE",
                 headers:{
               "Authorization": `Bearer ${token}`, 
            }
            });
            const data=await res.json();
            if(res.ok){
        
                NotificationDispatch({type:"deleteALLNotification"})
                
            }else{
                console.log(data.message);
                throw new Error(data.errors || "Notifications not found");
            }
            
        } catch (error) {   
            seterror(error.message);
        }
        finally{
            setloader(false);
        }
        
    }
    return {DeleteAllNotification,loader,error};
}