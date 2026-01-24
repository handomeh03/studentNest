import { useState } from "react";
import UseSearchLease from "../../Hooks/Shared/UseSearchLease";

export default function SearchuserComp({url}){
  let[id,setId]=useState("");
  UseSearchLease(id,url);
    return(
         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row flex-1 gap-2 ">
                 <input value={id} onChange={(e)=>{setId(e.target.value)}}  type="text" placeholder="Search lease by id..."aria-label="Search landlord"className="flex-1 rounded-2xl border outline-none p-4  border-gray-300 bg-white text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500   "/>
  
         </div>
      </div>
    );
}