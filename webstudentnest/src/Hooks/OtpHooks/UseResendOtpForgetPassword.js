import { useState } from "react";

export function UseResendOtpForgetPassword() {
  const [success, setSuccess] = useState("");
  const [successFlag, setSuccessFlag] = useState(false);
  const [error, setError] = useState("");
  const [resenForgetPasswordLoader, setresenForgetPasswordLoader] = useState(false);

  async function sendOtp(email) {
    try {
      setresenForgetPasswordLoader(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/password-recovery/resent-otp`, {
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
      setresenForgetPasswordLoader(false);
    }
  }

  return { sendOtp, success, setSuccess, successFlag, setSuccessFlag, error, setError, resenForgetPasswordLoader };
}
