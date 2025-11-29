import { useState } from "react";


export function UseConfirmOtpPassword() {
  let [error, setotpError] = useState("");
  let [ConfirmLoader, setConfirmLoader] = useState(false);
  

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
        alert("success");
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
