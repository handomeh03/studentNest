import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext"
export function UseEditInfo(){
    let {token}=useAuth();
    let [loader,setloader]=useState(false);
    let [error,setError]=useState("");

    async function editInfo(name,email,phoneNumber,dateOfBirth,address,photo,fetchUser) {
        const formData=new FormData();
        formData.append("name",name);
        formData.append("dateOfBirth",dateOfBirth);
        formData.append("phoneNumber",phoneNumber);
        formData.append("address",address);
        formData.append("photo",photo);
        setloader(true);
        
        try {
            const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/me/profile`,
                {
                    method:"PATCH",
                    body:formData,
                    headers:{
                        "Authorization": `Bearer ${token}`,
                    }
                }
            )
            const data=await res.json();
            if(res.ok){
                fetchUser();
            }else{
                throw new Error(data.error);
            }
            
            
        } catch (error) {
            
            setError(error.message);
        }
        finally{
            setloader(false);
        }
    }
    return {editInfo,error,loader};
}