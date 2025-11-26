import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function UseLandlordRegister() {
  let [error, setError] = useState("");
  let [landlordRegisterLoader, setlandlordRegisterLoader] = useState(false);
  let navigate=useNavigate();
  async function RegisterLandlord(fullName,email,dateOfBirth,address,phoneNumber, password,role,cliQAccount,LandloardGovId) {
    try {
      setlandlordRegisterLoader(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/register/landlord`,
        {
          method: "POST",
          body: JSON.stringify({email:String(email),name:String(fullName),address,phoneNumber:String(phoneNumber),dateOfBirth:String(dateOfBirth),role,password,cliQAccount,LandloardGovId}), 
         headers: {
            "Content-Type": "application/json"
          }

        }
      );
      const data = await res.json();

      if (res.ok) {
        sessionStorage.setItem("email",JSON.stringify(email));
        navigate("/otp");
        return;
      } else {
    
        if(data.message=="Too many registration attempts. Please try again later."){
          throw new Error(data.message);
        }
        throw new Error(data.error || data.errors.message);
       
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setlandlordRegisterLoader(false);  
    }
  }

  return { RegisterLandlord, error,setError ,landlordRegisterLoader};
}
