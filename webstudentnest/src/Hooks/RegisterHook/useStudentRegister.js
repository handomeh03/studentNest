import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function UseStudentRegister() {
  let [error, setError] = useState("");
  let [StudentRegisterLoader, setStudentRegisterLoader] = useState(false);
  let navigate=useNavigate();
  async function RegisterStudent(fullName,email,dateOfBirth,address,phoneNumber, password,role,major,graduateYear,universityName,studentCardId,GovId,verificationFile) {
    const formData = new FormData();
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("email", email);
    formData.append("gradateYear", graduateYear);
    formData.append("major", major);
    formData.append("name", fullName);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);
    formData.append("role", role);
    formData.append("studentCardId", studentCardId);
    formData.append("studentGovId", GovId);
    formData.append("universityName", universityName);
    formData.append("address", address);
    formData.append("verificationFile", verificationFile);
    try {
      setStudentRegisterLoader(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/register/student`,
        {
          method: "POST",
          body: formData, 
        }
      );
      const data = await res.json();

     if (res.ok) {
         sessionStorage.setItem("email", JSON.stringify(email));
        navigate("/otp");
      } else {
        const errorMsg = data.message || data.error || data.errors?.message || "Unknown error";
        throw new Error(errorMsg);
      }
      
    } catch (error) {
      setError(error.message);
    } finally {
      setStudentRegisterLoader(false);  
    }
  }

  return { RegisterStudent, error,setError ,StudentRegisterLoader};
}
