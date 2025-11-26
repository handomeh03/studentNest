import { useState } from "react";
import SearchuserComp from "../Componnets/AuditLogTableComp/SearchuserComp";
import HeadOfTable from "../Componnets/AuditLogTableComp/HeadOfTable";
import RowOfTable from "../Componnets/AuditLogTableComp/RowOfTable";

export default function AuditLogTablePage(){
    const [auditLogs] = useState([
    {
      logId: 1,
      createdBy: "jameel handomeh",
      action: "CREATE_LISTING",
      description: "Admin created a new apartment listing.",
      createdAt: "2025-11-10T14:22:00Z",
    },
    {
      logId: 2,
      createdBy: "jameel handomeh",
      action: "VERIFY_LANDLORD",
      description: "Admin verified landlord identity documents.",
      createdAt: "2025-11-11T09:15:00Z",
    },
    {
      logId: 3,
      createdBy: "jameel handomeh",
      action: "DELETE_STUDENT",
      description: "Admin removed an inactive student profile.",
      createdAt: "2025-11-12T12:40:00Z",
    },
    {
      logId: 4,
      createdBy: "jameel handomeh",
      action: "UPDATE_RULES",
      description: "Admin updated the platform terms & conditions.",
      createdAt: "2025-11-13T16:00:00Z",
    },
    {
      logId: 5,
      createdBy: "jameel handomeh",
      action: "BAN_USER",
      description: "Admin banned a user due to policy violations.",
      createdAt: "2025-11-14T10:12:00Z",
    },
  ]);
    return(
        <div data-aos="fade-in" className="px-4 p-3.5 sm:px-6 lg:px-8">
               <SearchuserComp/>
        
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
                       <HeadOfTable/>  
        
                      <tbody className="divide-y divide-gray-200   ">
                        {auditLogs.map((log,index) => (
                          <RowOfTable key={index} log={log}/>
                        ))}
                      </tbody>
                    </table>
        
                  </div>
                </div>
              </div>
        
            </div>
    );
}