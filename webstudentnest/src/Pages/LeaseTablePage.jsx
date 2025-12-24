
import SearchuserComp from "../Components/LeaseTableComp/SearchuserComp";
import HeadOfTable from "../Components/LeaseTableComp/HeadOfTable";
import RowOfTable from "../Components/LeaseTableComp/RowOfTable";
import ErrorComp from "../Components/PublicComp/ErrorComp";

export default function LeaseTablePage({Leases,error}){
  
   
   
    return(
        <div>
          {error?<ErrorComp error={error}/>:<div data-aos="fade-in" className="px-4 p-3.5 sm:px-6 lg:px-8">
              <SearchuserComp />
        
             <div className="mt-8 flow-root">
               <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                 <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                {Leases.length==0?<ErrorComp error={"no lease found"}/>:   <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
                      <HeadOfTable/>  
       
                     <tbody className="divide-y divide-gray-200   ">
                       {Leases.map((lease,index) => (
                         <RowOfTable key={index} lease={lease}/>
                       ))}
                     </tbody>
                   </table>
       }
                 </div>
               </div>
             </div>
       
           </div>  }
        </div>
    );
}