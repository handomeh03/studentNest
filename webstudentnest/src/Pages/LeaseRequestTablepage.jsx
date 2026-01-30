
import SearchuserComp from "../Components/LeaseRequestTableComp/SearchuserComp";
import HeadOfTable from "../Components/LeaseRequestTableComp/HeadOfTable";
import RowOfTable from "../Components/LeaseRequestTableComp/RowOfTable";
import ErrorComp from "../Components/PublicComp/ErrorComp";
import ChangeStatusDialog from "../Components/LeaseRequestTableComp/ChangeStatusDialog";
import { useState } from "react";
import CreateLeaseDialog from "../Components/LeaseRequestTableComp/CreateLeaseDialog";
import { UseCreateLease } from "../Hooks/StudentHooks/UseCreateLease";
import { UseLeaseRequest } from "../Context/LeaseRequestContext/LeaseRequestAdmin";

export default function LeaseRequestTablepage({error,searchUrl}){
  let {LeaseRequest}=UseLeaseRequest();
  
  let [leaseId,setLeaseId]=useState("");
  let [dialogOpen,setDialogOpen]=useState(false);
  let[createLeaseFlag,setcreateLeaseFlag]=useState(false);
  
  function handleChangeLeaseId(id){
    setLeaseId(id);
  }
  function handleChangeEditdialogflag(){
    setDialogOpen(!dialogOpen);
  }
  function handleChangeCreateLeaseFlag(){
    setcreateLeaseFlag(!createLeaseFlag);
  }
    return(
        <div>
          {error?<ErrorComp error={error || "no lease request found"}/>:<div data-aos="fade-in" className="px-4 p-3.5 sm:px-6 lg:px-8">
               <SearchuserComp searchUrl={searchUrl}/>
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                   {LeaseRequest.length==0?<ErrorComp error={"no lease request found"}/>: <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
                       <HeadOfTable/>  
        
                      <tbody className="divide-y divide-gray-200   ">
                        {LeaseRequest.map((leaserequest,index) => (
                          <RowOfTable key={index} leaserequest={leaserequest} handleChangeLeaseId={handleChangeLeaseId} handleChangeEditdialogflag={handleChangeEditdialogflag} handleChangeCreateLeaseFlag={handleChangeCreateLeaseFlag}/>
                        ))}
                      </tbody>
                    </table>}
        
                  </div>
                </div>
              </div>
        
            </div>}
            {dialogOpen? <ChangeStatusDialog leaseId={leaseId} dialogOpen={dialogOpen} handleChangeEditdialogflag={handleChangeEditdialogflag} />:""}
            {createLeaseFlag?<CreateLeaseDialog  leaseReqId={leaseId} createLeaseFlag={createLeaseFlag} handleChangeCreateLeaseFlag={handleChangeCreateLeaseFlag}/>:""}
             
            
        </div>
    );
}