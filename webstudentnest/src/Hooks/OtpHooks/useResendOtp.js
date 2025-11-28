import { useState } from "react";

export function UseResendOtp() {
  const [success, setSuccess] = useState("");
  const [successFlag, setSuccessFlag] = useState(false);
  const [error, setError] = useState("");
  const [OtpLoader, setOtpLoader] = useState(false);

  async function sendOtp(email) {
    try {
      setOtpLoader(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/resend-otp`, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setSuccessFlag(true);
        setError(""); 
        
      } else {
        throw new Error(data.error || data.errors?.message || "Failed to send OTP");
      }
    } catch (err) {
      setError(err.message);
      setSuccess("");
      setSuccessFlag(false);
    } finally {
      setOtpLoader(false);
    }
  }

  return { sendOtp, success, setSuccess, successFlag, setSuccessFlag, error, setError, OtpLoader };
}
