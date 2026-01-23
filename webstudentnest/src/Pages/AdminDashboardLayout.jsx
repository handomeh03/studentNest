import { useEffect, useState } from "react";
import HeaderOfdashboard from "../Components/admindashboardComp/HEaderOfdashboard";
import { Outlet, useNavigate } from "react-router-dom";
import { UserGroupIcon,  DocumentMagnifyingGlassIcon,  BuildingOffice2Icon, AcademicCapIcon ,HomeIcon,BellIcon,ClipboardDocumentListIcon ,DocumentCheckIcon    } from '@heroicons/react/24/outline'

import SideBar from "../Components/admindashboardComp/SideBar";
import { UseLoader } from "../Hooks/publicHook/useLoader";
import Loader from "../Components/PublicComp/Loader";
import { useUserContext } from "../Context/UserContext/UserContext";


export default function AdminDashboardLayout() {
  let{user}=useUserContext();
  let navigate=useNavigate();
 const [sidebarOpen, setSidebarOpen] = useState(false);
const [navigation, setnavigation] = useState([
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  
  
  { name: 'Landlords', href: '/admindashborad', icon: UserGroupIcon, current: true },
  
  
  { name: 'students', href: 'students', icon: AcademicCapIcon, current: false },
  
  
  { name: 'leases', href: 'lease', icon: DocumentCheckIcon, current: false },
  
  
  { name: 'request Lease', href: 'leaserequest', icon: DocumentMagnifyingGlassIcon, current: false },
  
  
  { name: 'Notifications', href: 'Notification', icon: BellIcon, current: false },
  
  
  { name: 'apartment Lisinting', href: 'apartmentListingadmin', icon: BuildingOffice2Icon, current: false },
  
  
  { name: 'auditLog', href: 'auditLog', icon: ClipboardDocumentListIcon, current: false },
]);
useEffect(()=>{
         if(user==null || !user){
             navigate("/userlogin", { replace: true });
         }
        
    },[])

function handleChangeNavigation(id){
  setnavigation(navigation.map((e,index)=>{
    if(index==id){
      return {...e,current:true};
    }
    else{
      return {...e,current:false};
    }
  }))
}


let{loaderFalg}=UseLoader();


if(loaderFalg){
    return <Loader/>
}
  return (
      <div >
       <SideBar  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navigation={navigation} handleChangeNavigation={handleChangeNavigation} />
       <HeaderOfdashboard setSidebarOpen={setSidebarOpen}  />

       <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}  className="py-10 lg:pl-72">
        <div  className="px-4 ml-3 mr-3 w-full rounded-4xl  overflow-hidden  sm:px-6 lg:px-8">
            <Outlet/>
        </div>
       </div>
    </div>
    
  );
}
