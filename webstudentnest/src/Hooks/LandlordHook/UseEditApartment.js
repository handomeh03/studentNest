import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";
export function UseEditApartment() {
    let [loader,setLoader]=useState(false);
    let [error,setError]=useState("");
    let{token}=useAuth();
    let {apartmentDispatch}=UseApatment();
    async function editApartment(apartmentId,title,description,address,price,numberOfBed,numberOfRoom,isJoin,images,handleChangeEditdetailFlag) {
        const formdata = new FormData();   
        formdata.append("title",String(title));
        formdata.append("description",String(description));
        formdata.append("address",String(address));
        formdata.append("price",String(price));
        formdata.append("numberOfBed",String(numberOfBed));
        formdata.append("numberOfRoom",String(numberOfRoom));
        formdata.append("isJoin",isJoin);
        images.forEach((photo)=>{
            formdata.append("apartmentPhoto",photo);
        });
      try {
        setLoader(true);
        setError("");
        const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/landlord/apartments/${apartmentId}`, {
            method: "PATCH",
            body: formdata,
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });
        const data=await res.json();
        if(res.ok){
            apartmentDispatch({type:"editApartment",payload:data});
            
            handleChangeEditdetailFlag();
            
        }
        else{
            throw new Error(data.error || "update apartment fail");
        }
      } catch (error) {
        setError(error.message);
      }finally{
        setLoader(false);
      }
    }
    return { editApartment, loader, error };
}