import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseUserData } from "../../Context/UserRegisterData";
export function UseLandlordRegister() {
  let [error, setError] = useState("");
  let [landlordRegisterLoader, setlandlordRegisterLoader] = useState(false);
  let {userDataDispatch}=UseUserData();
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
        sessionStorage.setItem("email", JSON.stringify(email));
        navigate("/otp");
        userDataDispatch({action:"restInput"});
      } else {
        const errorMsg = data.message || data.error || data.errors?.message || "Unknown error";
        throw new Error(errorMsg);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setlandlordRegisterLoader(false);  
    }
  }

  return { RegisterLandlord, error,setError ,landlordRegisterLoader};
}
