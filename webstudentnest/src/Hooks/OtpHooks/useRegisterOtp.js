import { useState } from "react";

export function UseRegisterOtp() {
  const [success, setSuccess] = useState("");
  const [successFlag, setSuccessFlag] = useState(false);
  const [error, setError] = useState("");
  const [registerOtpLoader, setregisterOtpLoader] = useState(false);

  const sendOtp = async (email) => {
    try {
      setregisterOtpLoader(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/resend-otp`,
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: { "Content-Type": "application/json" }
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSuccessFlag(true);
        setSuccess(data.message);
      } else {
        throw new Error(data?.errors?.message || "Failed to send OTP");
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setregisterOtpLoader(false);
    }
  };

  return {
    sendOtp,
    registerOtpLoader,
    error,
    setError,
    success,
    successFlag,
    setSuccessFlag
  };
}
