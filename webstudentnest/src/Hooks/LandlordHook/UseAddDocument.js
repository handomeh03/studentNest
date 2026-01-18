import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
export function UseAddDocument() {
    let [loader,setLoader]=useState(false);
    let [error,setError]=useState("");
    let{token}=useAuth();

    async function addDocument(apartmentId ,DocFile,handlechangeAddDocumentFlag) {
        const formData = new FormData();
        formData.append("apartmentDocument", DocFile);
      try {
        setLoader(true);
        setError("");
        const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/landlord/apartments/${apartmentId}/document`, {
            method: "POST",
            body: formData,
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        const data=await res.json();
        if(res.ok){
            handlechangeAddDocumentFlag();
            
        }
        else{
            throw new Error(data.error || "Add document fail");
        }
      } catch (error) {
        setError(error.message);
      }finally{
        setLoader(false);
      }
    }
    return { addDocument, loader, error };
}