import { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";


import { UseApatment } from "../../Context/ApartmentLisitingContext/ApartmentLisitingContext";

export default function UseSearchApartment(name) {
  const { token } = useAuth();
  const{apartmentDispatch}=UseApatment();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      
      const controller = new AbortController();
      const signal = controller.signal;
     
      const search = async () => {
        if(name==""){
              apartmentDispatch({type:"restToOrginal"});
              return;
          }
        try {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/api/v1/admin/apartments/search?q=${name}`,
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
                  apartmentDispatch({type:"searchApartment",payload:[]}); 
                  return;
               }
                apartmentDispatch({type:"searchApartment",payload:data}); 
                
            
          } else {
            apartmentDispatch({type:"searchApartment",payload:[]});
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
  }, [name, token]);

  
}
