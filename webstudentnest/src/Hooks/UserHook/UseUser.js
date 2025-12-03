import { useEffect, useState} from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useUserContext } from "../../Context/UserContext/UserContext";

export function useUser() {
    let {token}=useAuth();
    let[loader,setLoader]=useState(false);
    let{userDispatch}=useUserContext();

    
    useEffect(()=>{
        async function fetchUser() {
            try {
                console.log(token);
                setLoader(true);
                const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/me/profile`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        "authorization":`Bearer ${token}`
                    }
                })
                const data=await res.json();
                if(res.ok){
                    userDispatch({type:"SET_USER",payload:data});
                    sessionStorage.setItem("user",JSON.stringify(data));
                    console.log(data);
                }
                else{
                    throw new Error(data.error || "Failed to fetch user data");
                }
            } catch (error) {
                console.log(error.message);
            }finally{
                setLoader(false);
            }
        }
        fetchUser();

    },[token]);
    return {loader};
}