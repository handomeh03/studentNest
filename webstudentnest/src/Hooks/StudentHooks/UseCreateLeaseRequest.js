import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";

export function UseCreateLeaseRequest(){
    let {token}=useAuth();
    let[error,setError]=useState("");
    let[loader,setLoader]=useState(false);
    
    async function createLeaseRequest(apartmentID,requestMessage,startDate,rentTerm,handleChangeRequestLeaseDialog){
       let rentTermFormat=`00,${rentTerm},00`;

       
       const formatDate = (dateString) => {
             if (!dateString) return "";
            const [year, month, day] = dateString.split("-");
            return `${day}-${month}-${year}`; 
          };

        try {
            setLoader(true);
            const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/student/lease-request/${apartmentID}`,
                {
                    method:"POST",
                    body:JSON.stringify({requestMessage,startDate:formatDate(startDate),rentTerm:rentTermFormat}),
                    headers:{
                        'Content-Type': 'application/json',
                   "Authorization": `Bearer ${token}`, 
                     }
                }
            )
            const data=await res.json();
            if(res.ok){
                
                handleChangeRequestLeaseDialog();
            }
            else{
                throw new Error(data.error)
            }
            
        } catch (error) {
            setError(error.message);
        }finally{
            setLoader(false);
        }

    }
    return {createLeaseRequest,loader,error};
}