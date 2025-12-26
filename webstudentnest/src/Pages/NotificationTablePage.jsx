
import SearchuserComp from "../Components/NotifivationTableComp/SearchuserComp";
import HeadOfTable from "../Components/NotifivationTableComp/HeadOfTable";
import RowOfTable from "../Components/NotifivationTableComp/RowOfTable";
import ErrorComp from "../Components/PublicComp/ErrorComp";
import Button from '@mui/material/Button';
import {  UseDeleteAllNotification } from "../Hooks/AdminHooks/UseDeleteAllnotification";

export default function NotifivationTablePage({notification,error}){
  let {DeleteAllNotification}=UseDeleteAllNotification();
  
    return(
         <div>
          {error?<ErrorComp error={error || "no notification found"}/>:<div data-aos="fade-in" className="px-4 p-3.5 sm:px-6 lg:px-8">
      {notification.length==0?"":     <button onClick={DeleteAllNotification} className="bg-red-500 cursor-pointer hover:bg-red-600 active:scale-95 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200">
  Delete All
</button>}
               

              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  {notification.length==0?<ErrorComp error={"no notification found"}/>:  <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
                       <HeadOfTable/>  
        
                      <tbody className="divide-y divide-gray-200   ">
                        {notification.map((notification,index) => (
                          <RowOfTable key={index} notification={notification}/>
                        ))}
                      </tbody>
                    </table>}
        
                  </div>
                </div>
              </div>
        
            </div>}
         </div>
    ); 
}