import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UseFogetPasswordSendOtp(){
      const [error, setError] = useState("");
      const [OtpLoader, setOtpLoader] = useState(false);
      let navigate=useNavigate();
    
      async function sendOtpForgetPassword(email) {
        try {
          setOtpLoader(true);
          const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/password-recovery/resent-otp`, {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" },
          });
    
          const data = await res.json();
    
          if (res.ok) {
            setError(""); 
            navigate("/OtpPassword");
           
            sessionStorage.setItem("email",JSON.stringify(email));     
          } else {
            throw new Error(data.error || data.errors?.message || "Failed to send OTP");
          }
        } catch (err) {
          setError(err.message);
         
        } finally {
          setOtpLoader(false);
        }
      }
    
      return { sendOtpForgetPassword, error, setError, OtpLoader };
}