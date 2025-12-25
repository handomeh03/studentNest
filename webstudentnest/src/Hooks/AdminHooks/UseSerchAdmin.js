import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useAdminForLandlord } from "../../Context/landlordForadminContext/AdminforlandlordContext";

export default function UseSearchLandlordForAdmin(email) {
  const { token } = useAuth();
  const{adminForlandlordDispatch}=useAdminForLandlord();

  

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      
      const controller = new AbortController();
      const signal = controller.signal;
     
      const search = async () => {
        if(email==""){
              adminForlandlordDispatch({type:"restToOrginal"});
              return;
          }
        try {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/v1/admin/users/landlord/search?q=${email}`,
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
          
          
                adminForlandlordDispatch({type:"searchLandlord",payload:data}); 
            
        
            
          } else {
            adminForlandlordDispatch({type:"searchLandlord",payload:[]});
            throw new Error(data.errors || "No landlord found");
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
  }, [email, token]);

  
}
