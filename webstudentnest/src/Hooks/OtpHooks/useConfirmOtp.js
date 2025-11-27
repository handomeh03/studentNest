import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/AuthContext";

export function UseConfirmOtp() {
  let [error, setotpError] = useState("");
  let [ConfirmLoader, setConfirmLoader] = useState(false);
  let {settoken}=useAuth();

  let navigate=useNavigate();

  async function confirmOtp(email, otpCode) {
    try {
      setConfirmLoader(true);
     console.log(email,otpCode);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/verified-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otpCode }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        navigate("/");
        settoken(data.token);
        localStorage.setItem("token",JSON.stringify(data.token));
        return ; 
      } else {
        throw new Error(data.message);
      }

    } catch (error) {
      setotpError(error.message);
    } finally {
      setConfirmLoader(false);
    }
  }

  return { confirmOtp, error, ConfirmLoader,setotpError };
}
