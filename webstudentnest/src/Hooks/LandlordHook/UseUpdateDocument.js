import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
export function UseUpdateDocument() {
    let [loader,setLoader]=useState(false);
    let [error,setError]=useState("");
    let{token}=useAuth();

    async function updateDocument(apartmentId ,DocFile,handleChangeEditDocumentDialog) {
        const formData = new FormData();
        formData.append("apartmentType","ApartmentVerifiedFile");
        formData.append("apartmentDocument", DocFile);
      try {
        setLoader(true);
        setError("");
        const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/landlord/apartments/${apartmentId}/documents`, {
            method: "PATCH",
            body: formData,
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        const data=await res.json();
        if(res.ok){
            handleChangeEditDocumentDialog();
            
        }
        else{
            throw new Error(data.error || "update document fail");
        }
      } catch (error) {
        setError(error.message);
      }finally{
        setLoader(false);
      }
    }
    return { updateDocument, loader, error };
}