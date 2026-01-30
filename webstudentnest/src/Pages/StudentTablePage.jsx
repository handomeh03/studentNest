import { useState } from "react";
import SearchuserComp from "../Components/studentTableComp/SearchuserComp";
import { Useaos } from "../Hooks/publicHook/useaos";
import HeadOfTable from "../Components/studentTableComp/HeadOfTable";
import RowOfTable from "../Components/studentTableComp/RowOfTable";
import EditStudentDialog from "../Components/studentTableComp/EditStudentDialog";
import DeleteStudentDialog from "../Components/studentTableComp/DeleteStudentDialog";
import ErrorComp from "../Components/PublicComp/ErrorComp";
import { UseStudentForAdmin } from "../Context/studentForAdmin/StudentForadmin";


export default function StudentTablePage({error}){
  const {students}=UseStudentForAdmin();
    Useaos();
    let[studentId,setstudentId]=useState("");
    let[editStudentFlag,setEditStudentFLag]=useState(false);
    let[deleteStudentFlag,setDeleteStudentFLag]=useState(false);
    
   

 function handleChangeEditStudentFlag(){
    setEditStudentFLag((old)=>!old);
  }
 function handleChangeDeleteStudentDialog(){
    setDeleteStudentFLag((old)=>!old);
  }
  
  return(
   <div data-aos="fade-in" className="px-4 p-3.5 sm:px-6 lg:px-8">
          <SearchuserComp/>
        
        {error?<ErrorComp error={error || "no student Found"}/>: <div className="mt-8 flow-root">
           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
             <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              {students.length==0?<ErrorComp error={"no students found"}/>: <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
                  <HeadOfTable/>  
   
                 <tbody className="divide-y divide-gray-200   ">
                   {students.map((student,index) => (
                     <RowOfTable key={index} student={student} handleChangeDeleteStudentDialog={handleChangeDeleteStudentDialog} handleChangeEditStudentFlag={handleChangeEditStudentFlag} setstudentId={setstudentId}/>
                   ))}
                 </tbody>
               </table>}
   
             </div>
           </div>
         </div>}
              <EditStudentDialog editStudentFlag={editStudentFlag} handleChangeEditStudentFlag={handleChangeEditStudentFlag} studentId={studentId}/>
               <DeleteStudentDialog deleteStudentFlag={deleteStudentFlag} handleChangeDeleteStudentDialog={handleChangeDeleteStudentDialog} studentId={studentId} />
   
       </div>

  );
}