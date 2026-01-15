import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseUserData } from "../../Context/UserRegisterData";
export function UseLandlordRegister() {
  let [error, setError] = useState("");
  let [landlordRegisterLoader, setlandlordRegisterLoader] = useState(false);
  let {userDataDispatch}=UseUserData();
  let navigate=useNavigate();
  async function RegisterLandlord(fullName,email,dateOfBirth,address,phoneNumber, password,role,cliQAccount,LandloardGovId,verificationFile) {
       const formData = new FormData();
         formData.append("role",String(role));
          formData.append("phoneNumber",String(phoneNumber));
          formData.append("password",String(password));
          formData.append("name",String(fullName));
          formData.append("LandlordGovId",String(LandloardGovId));
          formData.append("email",String(email));
          formData.append("document",verificationFile);
          formData.append("dateOfBirth",String(dateOfBirth));
          formData.append("cliQAccount",String(cliQAccount));
          formData.append("address",String(address));


       
    try {
      setlandlordRegisterLoader(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/register/landlord`,
        {
          method: "POST",
          body: formData,
         
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
