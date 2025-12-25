import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";

import { UseLease } from "../../Context/LeaseForAdmin/LeaseForAdmin";

export default function UseSearchLease(id) {
  const { token } = useAuth();
  const{leaseDipattch}=UseLease();

  

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      
      const controller = new AbortController();
      const signal = controller.signal;
     
      const search = async () => {
        if(id==""){
              leaseDipattch({type:"restToOrginal"});
              return;
          }
        try {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/v1/admin/lease/search?q=${id}`,
            {
              method: "GET",
              headers: {
                "Authorization": `Bearer ${token}`,
              },
              signal,
            }
          );

          const data = await res.json();
          if (res.ok) {
               if(data==null){
                  leaseDipattch({type:"searchLease",payload:[]}); 
                  return;
               }
                leaseDipattch({type:"searchLease",payload:[data]}); 
                
            
          } else {
            leaseDipattch({type:"searchLease",payload:[]});
            throw new Error(data.errors || "No Lease found");
          }
        } catch (error) {
          if (error.name !== "AbortError") {
            console.log(error.message);
          }
        } 
      };

      search();

      return () => {
        controller.abort();
      };
    }, 700); 

    
    return () => clearTimeout(delayDebounceFn);
  }, [id, token]);

  
}
