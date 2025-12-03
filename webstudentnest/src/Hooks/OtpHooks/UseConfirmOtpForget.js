import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function UseConfirmOtpPassword() {
  let [error, setotpError] = useState("");
  let [ConfirmLoader, setConfirmLoader] = useState(false);
  let navigate=useNavigate();
  

  async function confirmOtp(email, otpCode) {
    try {
      setConfirmLoader(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/password-recovery/verified-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otpCode }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        navigate('/changePassword');
        return ; 
      } else {
        throw new Error(data.err || data.errors?.message || "OTP verification failed");
      } 

    } catch (error) {
      setotpError(error.message);
    } finally {
      setConfirmLoader(false);
    }
  }

  return { confirmOtp, error, ConfirmLoader,setotpError };
}
