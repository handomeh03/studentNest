import { useEffect } from "react";

export function UseGetLease(){
    useEffect(()=>{
          const fetchLease=async()=>{
          try {
            const res=await fetch("");

            const data=res.json();

            if(res.ok){
                console.log(data);
            }
            else{
                throw new Error(data.errors);
            }
            
          } catch (error) {
            console.log(error);
          }
          }
          fetchLease();
    },[])
}