import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
export function UseLogin() {
  let [error, setError] = useState("");
  let [LoginLoader, setLoginLoader] = useState(false);
  let {settoken,setverifiedEmail}=useAuth();
  let navigate=useNavigate();
  async function Login(email, password) {
    try {
      setLoginLoader(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
          
        }
      );
      const data = await res.json();
      if (res.ok) {
        setverifiedEmail(data.verifiedEmail);

        if (data.token && data.verifiedEmail) {
          settoken(data.token);
          sessionStorage.setItem("token", JSON.stringify(data.token));
          navigate("/");
        } else {
          sessionStorage.setItem("email", email);
          navigate("/otp");
        }
      } else {
        const errorMsg = data.errors?.[0]?.message || data.error || "Unknown error";
        throw new Error(errorMsg);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoginLoader(false);
    }
  }

  return { Login, error ,LoginLoader};
}
