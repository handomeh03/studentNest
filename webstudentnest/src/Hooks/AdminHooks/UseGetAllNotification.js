import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseNotification } from "../../Context/NotificationContext/NotificationContext";

export function UseGetALLNotifiction(){
     let {token}=useAuth();
      let [loader,setLoader]=useState(false);
      let[error,setError]=useState("");
      let {NotificationDispatch}=UseNotification();
    
        useEffect(()=>{
              const fetchNotification=async()=>{
                setLoader(true);
              try {
                const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/notifications`,{
                headers:{
                   "Authorization": `Bearer ${token}`, 
                }
              })
                const data=await res.json();
    
                if(res.ok){
                 NotificationDispatch({type:"getAllNotification",payload:data});
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
              fetchNotification();
        },[])
        return {loader,error};
}