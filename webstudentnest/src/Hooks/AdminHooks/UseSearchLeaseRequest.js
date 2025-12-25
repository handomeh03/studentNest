import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";

import { UseLease } from "../../Context/LeaseForAdmin/LeaseForAdmin";
import { UseLeaseRequest } from "../../Context/LeaseRequestContext/LeaseRequestAdmin";

export default function UseSearchLeaseRequest(id) {
  const { token } = useAuth();
  const{leaseRequestDipattch}=UseLeaseRequest();

  

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      
      const controller = new AbortController();
      const signal = controller.signal;
     
      const search = async () => {
        if(id==""){
              leaseRequestDipattch({type:"restToOrginal"});
              return;
          }
        try {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/v1/admin/lease-request/search?q=${id}`,
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
                  leaseRequestDipattch({type:"seasearchLeaseRequestrchLease",payload:[]}); 
                  return;
               }
                leaseRequestDipattch({type:"searchLeaseRequest",payload:[data]}); 
                
            
          } else {
            leaseRequestDipattch({type:"searchLeaseRequest",payload:[]});
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
