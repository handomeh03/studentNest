import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UseChangePasswordOtp() {
    let [error, setError] = useState("");
    let [changeLoader, setChangeLoader] = useState(false);
    let navigate=useNavigate();
    async function changePasswordOtp(email,newPassword){
        try {
            setChangeLoader(true);
            const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/password-recovery/forget-password`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({email,newPassword})
            });
            const data=await res.json();

            if(res.ok){
                navigate("/login");
                return;
            }else{
                throw new Error(data.message);
            }
        } catch (error) {
            setError(error.message);
        }finally{
            setChangeLoader(false);
        }
    }
    return {changePasswordOtp,error,setError,changeLoader};
}