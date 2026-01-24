import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import {  UsePaymentSchudle } from "../../Context/PaymentSchudleContext/PaymentSchudleContext";
import { useUserContext } from "../../Context/UserContext/UserContext";


export function UseGetReciptForPayment(leaseId,paymentId){
        let{token}=useAuth();
        let[error,seterror]=useState("");
        let[loader,setloader]=useState(false);
     let {paymentSchudleDispatch}=UsePaymentSchudle();
      const { user } = useUserContext();
       const userRole = user?.user?.role;     
   useEffect(()=>{
      const getPaymentReceipt=async()=>{
         try{
            setloader(true);
                          
            let res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/payments/${leaseId}/${paymentId}/receipt`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data=await res.json();
            if(res.ok){
                if(userRole=="student"){
                   paymentSchudleDispatch({type:"getReceipt",payload:data});
                }
               else{
                 paymentSchudleDispatch({type:"getReceipt",payload:data[0]});
               }
               
                
            }else{
                console.log(data)
                throw new Error(data.errors);
            }
        }
        catch(error){
            seterror(error.message);
        }finally{
            setloader(false);
        }
      }
      getPaymentReceipt();
   },[]);
    return {error,loader};
}