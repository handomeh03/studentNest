import { useState } from "react";
import SearchuserComp from "../Componnets/studentTableComp/SearchuserComp";
import { Useaos } from "../Hooks/publicHook/useaos";
import HeadOfTable from "../Componnets/studentTableComp/HeadOfTable";
import RowOfTable from "../Componnets/studentTableComp/RowOfTable";
import EditStudentDialog from "../Componnets/studentTableComp/EditStudentDialog";
import DeleteStudentDialog from "../Componnets/studentTableComp/DeleteStudentDialog";

export default function StudentTablePage(){
    Useaos();
    let[studentId,setstudentId]=useState(null);
    let[editStudentFlag,setEditStudentFLag]=useState(false);
    let[deleteStudentFlag,setDeleteStudentFLag]=useState(false);
    const [students] = useState([
    {
      userId: 1,
      name: 'Lindsay Walton',
      email: 'lindsay.walton@example.com',
      dateOfbirth: '2000-01-30',
      phoneNumber: '079474063',
      address: 'Amman',
      emailVerifed: true,
      role: "student",
      createdAt: '2025-11-01',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      studentGovId: "2345667",
      major: "Computer Science",
      studentCardId: "2345678",
      graduateYear: "2026",
      walletAddress: "5048/0r/f0"
    },
    {
      userId: 2,
      name: 'James Smith',
      email: 'james.smith@example.com',
      dateOfbirth: '1999-05-12',
      phoneNumber: '079123456',
      address: 'Zarqa',
      emailVerifed: false,
      role: "student",
      createdAt: '2025-10-15',
      image: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      studentGovId: "2345668",
      major: "Information Systems",
      studentCardId: "2345679",
      graduateYear: "2025",
      walletAddress: "null"
    },
    {
      userId: 3,
      name: 'Emma Johnson',
      email: 'emma.johnson@example.com',
      dateOfbirth: '2001-03-22',
      phoneNumber: '079987654',
      address: 'Irbid',
      emailVerifed: true,
      role: "student",
      createdAt: '2025-09-30',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      studentGovId: "2345669",
      major: "Software Engineering",
      studentCardId: "2345680",
      graduateYear: "2027",
      walletAddress: "5048/1a/b2"
    },
    {
      userId: 4,
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      dateOfbirth: '2000-11-08',
      phoneNumber: '079456789',
      address: 'Amman',
      emailVerifed: true,
      role: "student",
      createdAt: '2025-08-20',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      studentGovId: "2345670",
      major: "Computer Science",
      studentCardId: "2345681",
      graduateYear: "2026",
      walletAddress: "null"
    },
    {
      userId: 5,
      name: 'Olivia Davis',
      email: 'olivia.davis@example.com',
      dateOfbirth: '2002-07-19',
      phoneNumber: '079321654',
      address: 'Ajloun',
      emailVerifed: false,
      role: "student",
      createdAt: '2025-11-05',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      studentGovId: "2345671",
      major: "Cyber Security",
      studentCardId: "2345682",
      graduateYear: "2026",
      walletAddress: "5048/2b/c3"
    }
  ]);

 function handleChangeEditStudentFlag(){
    setEditStudentFLag((old)=>!old);
  }
 function handleChangeDeleteStudentDialog(){
    setDeleteStudentFLag((old)=>!old);
  }
  
  return(
   <div data-aos="fade-in" className="px-4 p-3.5 sm:px-6 lg:px-8">
          <SearchuserComp/>
        
         <div className="mt-8 flow-root">
           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
             <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
               <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
                  <HeadOfTable/>  
   
                 <tbody className="divide-y divide-gray-200   ">
                   {students.map((student,index) => (
                     <RowOfTable key={index} student={student} handleChangeDeleteStudentDialog={handleChangeDeleteStudentDialog} handleChangeEditStudentFlag={handleChangeEditStudentFlag} setstudentId={setstudentId}/>
                   ))}
                 </tbody>
               </table>
   
             </div>
           </div>
         </div>

            <EditStudentDialog editStudentFlag={editStudentFlag} handleChangeEditStudentFlag={handleChangeEditStudentFlag} studentId={studentId}/>
               <DeleteStudentDialog deleteStudentFlag={deleteStudentFlag} handleChangeDeleteStudentDialog={handleChangeDeleteStudentDialog} studentId={studentId} />
   
       </div>

  );
}