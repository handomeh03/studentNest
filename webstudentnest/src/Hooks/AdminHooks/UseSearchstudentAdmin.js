import { useEffect } from "react";
import { UseStudentForAdmin } from "../../Context/studentForAdmin/StudentForadmin";
import { useAuth } from "../../Context/AuthContext/AuthContext";

export function UseSearchStudentAdmin(email){
    let{studentforadminDispatch}=UseStudentForAdmin();
    let{token}=useAuth();
     useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          
          const controller = new AbortController();
          const signal = controller.signal;
         
          const search = async () => {
            if(email==""){
                  studentforadminDispatch({type:"restToOrginal"});
                  return;
              }
            try {
              const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/v1/admin/users/search/student/${email}`,
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
              
                    studentforadminDispatch({type:"searchStudent",payload:data}); 
                        
              } else {
                studentforadminDispatch({type:"searchStudent",payload:[]});
                throw new Error(data.errors || "No students found");
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