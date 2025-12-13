import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext"
import { useAdminForLandlord } from "../../Context/landlordForadminContext/AdminforlandlordContext";

export function UseEditLandlordStatus(){
    let {token}=useAuth();
    let [loader,setloader]=useState(false);
    let [error,setError]=useState("");
    let{adminForlandlordDispatch}=useAdminForLandlord();
    async function editStatus(id,status,handleChangeEditLandlordFlag) {
        setloader(true);
        console.log(status);
        try {
            const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/landlords/verification/${id}`,
                {
                    method:"PATCH",
                    body:JSON.stringify({Verified:status}),
                    headers:{
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`,
                    }
                }
            )
            const data=await res.json();
            if(res.ok){
                adminForlandlordDispatch({type:"editstatus",payload:{id,status}});
                handleChangeEditLandlordFlag();
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
    return {editStatus,error,loader};
}