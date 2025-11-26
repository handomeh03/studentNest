import {  useEffect, useState } from "react";
export function UseRegisterOtp(email) {
  let[success,setSuccess]=useState("");
  let[successFlag,setSuccessFlag]=useState(false);
  let [error, setError] = useState("");
  let [registerOtpLoader, setregisterOtpLoader] = useState(false);
   useEffect(()=>{
   const sendRegisterOtp = async () => {
      try {
        setregisterOtpLoader(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/v1/resend-otp`,
          {
            method: "POST",
            body: JSON.stringify({email}),
            headers: { "Content-Type": "application/json" }

          }
        );
        const data = await res.json();

        if (res.ok) {
           setSuccessFlag(true);
           setSuccess(data.message);
           return;
        } else {
          throw new Error(data.errors.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setregisterOtpLoader(false);
      }
    };
    sendRegisterOtp();
   },[email])

  return {registerOtpLoader,error,setError,success,setSuccess,successFlag,setSuccessFlag}
}
