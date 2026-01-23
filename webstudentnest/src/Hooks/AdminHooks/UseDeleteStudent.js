import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseStudentForAdmin } from "../../Context/studentForAdmin/StudentForadmin";

export function UseDeleteStudent(){
    let{token}=useAuth();
    let [loader,setloader]=useState(false);
    let[error,seterror]=useState("");
    let{studentforadminDispatch}=UseStudentForAdmin();
    async function  deleteLandlord(id,handleChangeDeleteStudentDialog) {
        setloader(true);

        
        try {
            console.log(id);
            
            const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/users/${id}`,{
                method:"DELETE",
                 headers:{
               "Authorization": `Bearer ${token}`, 
            }
            });
            const data=await res.json();
            if(res.ok){
                handleChangeDeleteStudentDialog();
                studentforadminDispatch({type:"DeleteStudent",payload:id});
                
            }else{
                throw new Error(data.errors || "student not found");
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