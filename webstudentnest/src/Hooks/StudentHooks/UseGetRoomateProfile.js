import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseRoomate } from "../../Context/RoomateContext/Roomatecontext";

export function UseGetRoomMateProfile(){
    let {token}=useAuth();
    let [loaderProfile,setLoaderProfile]=useState(false);
    let [errorProfile,setErrorProfile]=useState("");
    let{setRoomateProfile}=UseRoomate();
    const getRoomateProfile=async()=>{
            try {
                setLoaderProfile(true);
                const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/student/roommate-profile/`,{
                    method:"GET",
                    headers:{
                    "Authorization": `Bearer ${token}`, 
                     }
                })
                const data=await res.json();
                if(res.ok){
                    setRoomateProfile(data);
                    
                }else{
                    throw new Error(data.error || "no data found");
                }
                
            } catch (error) {
                setErrorProfile(error.message);
            }finally{
                setLoaderProfile(false);
            }
        }
    return {getRoomateProfile,errorProfile,loaderProfile};
}