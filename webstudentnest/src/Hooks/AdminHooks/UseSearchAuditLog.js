import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { UseAuditLog } from "../../Context/AuditLogContext/AuditLogContext";

export default function UseSearchAudit(audit) {
  const { token } = useAuth();
  const{AuditLogDipattch}=UseAuditLog();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      
      const controller = new AbortController();
      const signal = controller.signal;
     
      const search = async () => {
        if(audit==""){
              AuditLogDipattch({type:"restToOrginal"});
              return;
          }
        try {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/v1/admin/audit-log/search?q=${audit}`,
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
                  AuditLogDipattch({type:"searchAuditLog",payload:[]}); 
                  return;
               }
                AuditLogDipattch({type:"searchAuditLog",payload:data}); 
                
            
          } else {
            AuditLogDipattch({type:"searchAuditLog",payload:[]});
            throw new Error(data.errors || "No log found");
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
  }, [audit, token]);

  
}
