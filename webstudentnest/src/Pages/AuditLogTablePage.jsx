import SearchuserComp from "../Components/AuditLogTableComp/SearchuserComp";
import HeadOfTable from "../Components/AuditLogTableComp/HeadOfTable";
import RowOfTable from "../Components/AuditLogTableComp/RowOfTable";
import ErrorComp from "../Components/PublicComp/ErrorComp";
import { UseAuditLog } from "../Context/AuditLogContext/AuditLogContext";

export default function AuditLogTablePage({ error}){
   let {AuditLog}=UseAuditLog();
    return(
        <div>
          {error?<ErrorComp error={error}/>:<div data-aos="fade-in" className="px-4 p-3.5 sm:px-6 lg:px-8">
               <SearchuserComp/>
        
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                   {AuditLog.length==0?<ErrorComp error={"no auditLog Found"}/>: <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
                       <HeadOfTable/>  
        
                      <tbody className="divide-y divide-gray-200   ">
                        {AuditLog.map((log,index) => (
                          <RowOfTable key={index} log={log}/>
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