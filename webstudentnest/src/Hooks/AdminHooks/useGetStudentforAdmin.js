import { useEffect, useState } from "react";
import { UseStudentForAdmin } from "../../Context/studentForAdmin/StudentForadmin";
import { useAuth } from "../../Context/AuthContext/AuthContext";

export function UseGetStudentForAdmin(){
    let{token}=useAuth();
    let[error,seterror]=useState("");
    let[loader,setloader]=useState(false);
    let{studentforadminDispatch}=UseStudentForAdmin();
    useEffect(()=>{
        setloader(true);
      const fetchStudent=async()=>{
        try {
          const res= await fetch(`${import.meta.env.VITE_API_URL}/api/v1/admin/users/student`,{
            headers:{
               "Authorization": `Bearer ${token}`, 
            }
          })
          const data=await res.json();
    
          if(res.ok){
            studentforadminDispatch({type:"getallstudent",payload:data})
          }else{
            throw new Error(data.errors);
          }
          
        } catch (error) {
          seterror(error.message);
        }finally{
            setloader(false);
        }
      }
      fetchStudent();
    },[token,studentforadminDispatch]);

    return {loader,error}
}