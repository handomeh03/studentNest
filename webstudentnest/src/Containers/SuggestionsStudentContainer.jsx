import { useEffect, useState } from "react";
import { useUserContext } from "../Context/UserContext/UserContext";
import SuggestionsStudent from "../Pages/SuggestionsStudent";
import { useAuth } from "../Context/AuthContext/AuthContext";

export default function SuggestionsStudentContainer() {
  let { user } = useUserContext();
  let [students,setStudent]=useState([]);
  let [error,setError]=useState("");
  let [loader,setLoader]=useState(false);
  let {token}=useAuth();

 async function getsugStudent(){
    try {
      setLoader(true);
      const res=await fetch(`${import.meta.env.VITE_API_URL}/api/v1/student/roommate-profile/roommates`,
        {
          method:"GET",
           headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
        }
      )
      const data=await res.json();
      if(res.ok){
        if(data.length>0){
          setStudent(data);
          
        }
       else{
        setStudent([]);
       }
      }
      else{
        
        throw new Error(data.errors || " No Student Found")
      }

      
    } catch (error) {
      setError(error.message)

    }finally{
      setLoader(false);
    }
  }
  useEffect(()=>{
        if(user?.roommateProfileStatus==true){
            getsugStudent();
        }
  },[user])
  return (
    <div>
      {user?.roommateProfileStatus ? (
        
        <SuggestionsStudent  students={students} error={error} loader={loader}/>
      ) : (
        <div className="flex items-center justify-center p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl shadow-sm">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>

            <span className="text-amber-800 font-medium tracking-wide">
              You need to make roommate profile first
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
