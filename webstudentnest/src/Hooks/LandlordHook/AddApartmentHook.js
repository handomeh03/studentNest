import { useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";

export function UseAddApartment(){
    let [loader,setLoader]=useState(false);
    let [error,setError]=useState("");
    let{token}=useAuth();
    let{apartmentDispatch}=UseApatment();
    async function addapartment(title,description,price,address,numberOfBed,numberOfRoom,propertyStatus,isJoin,googleMap,apartmentPhoto,handlechangeAddApartemntFlag,houseRules, includeUtilities){ 
                            
        const formdata=new FormData();
        formdata.append("title",String(title));
        formdata.append("description",String(description));
        formdata.append("price",String(price));
        formdata.append("address",String(address));
        formdata.append("numberOfBed",String(numberOfBed));
        formdata.append("numberOfRoom",String(numberOfRoom));
        formdata.append("propertyStatus",propertyStatus);
        formdata.append("isJoin",isJoin);
        formdata.append("googleMapLocationLat",String(googleMap[0]));
        formdata.append("googleMapLocationLong",String(googleMap[1]));
        formdata.append("houseRule",String(houseRules));
        formdata.append("includeUtilities",String(includeUtilities));
        apartmentPhoto.forEach((photo)=>{
            formdata.append("apartmentPhoto",photo);
        });
        try {
            setLoader(true);
            const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/landlord/apartments`,{
                method:'POST',
                headers:{
                    'Authorization': `Bearer ${token}`
                },
                body: formdata
            });
            const data=await res.json();
            if(res.ok){
                apartmentDispatch({type:"addApartment",payload:data.result});
                handlechangeAddApartemntFlag();
            } else {
                throw new Error(data.error||data.errors.message || 'Failed to add apartment');
            }
        } catch (error) {
            setError(error.message);
            
        }finally{
            setLoader(false);
        }
    }
    return {addapartment,loader,error,setError};
}