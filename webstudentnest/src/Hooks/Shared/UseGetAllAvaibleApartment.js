import { useEffect, useState } from "react";
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";
import { useAuth } from "../../Context/AuthContext/AuthContext";

export default function UseGetAllAvaibleApartment(){
    let {apartmentDispatch}=UseApatment();
    let [error,setError]=useState("");
    let [loader,setLoader]=useState(false);
    let{token}=useAuth();
     useEffect(()=>{
        const fetchAvaibleApartment=async()=>{
          try {
            setLoader(true);
            const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/student/apartments/available`,{
                   method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                    }
            })
            const data =await res.json();
            if(res.ok){
              console.log(data);
              apartmentDispatch({type:"getallAvaibleApartemnt",payload:data});
            }
            else{
              throw new Error(data.error || "No Apartment Found")
            }
          } catch (error) {
           setError(error.message);
          }finally{
            setLoader(false);
          }
        }
        fetchAvaibleApartment();
       },[token,apartmentDispatch])

       return {error,loader};
      
}