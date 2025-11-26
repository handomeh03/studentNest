import { useState } from "react";
import HeaderOfdashboard from "../Componnets/admindashboardComp/HEaderOfdashboard";
import { Outlet } from "react-router-dom";
import {BuildingOfficeIcon ,AcademicCapIcon ,HomeIcon,UsersIcon,BellIcon,ClipboardDocumentListIcon,ReceiptPercentIcon ,DocumentCheckIcon    } from '@heroicons/react/24/outline'
import SideBar from "../Componnets/admindashboardComp/SideBar";
import { UseLoader } from "../Hooks/publicHook/useLoader";
import Loader from "../Componnets/PublicComp/Loader";

export default function AdminDashboardLayout() {
 const [sidebarOpen, setSidebarOpen] = useState(false);
 const [navigation,setnavigation] = useState([
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  { name: 'Landlords', href: '/admindashborad', icon: UsersIcon, current: true },
  { name: 'students', href: 'students', icon: AcademicCapIcon , current: false },
  { name: 'leases', href: 'lease', icon: DocumentCheckIcon , current: false },
  { name: 'request Lease', href: 'leaserequest', icon: DocumentCheckIcon , current: false },
  { name: 'Notifications', href: 'Notification', icon: BellIcon , current: false },
  { name: 'apartment Lisinting', href: 'apartmentListingadmin', icon: BuildingOfficeIcon  , current: false },
  { name: 'auditLog', href: 'auditLog', icon: ClipboardDocumentListIcon , current: false },
  
]
)
const userNavigation = [
  { name: 'Your profile', href: 'setting' },
  { name: 'Sign out', href: '/userlogin' },
]

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
       <HeaderOfdashboard setSidebarOpen={setSidebarOpen} userNavigation={userNavigation} />

       <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}  className="py-10 lg:pl-72">
        <div  className="px-4 ml-3 mr-3 w-full rounded-4xl  overflow-hidden  sm:px-6 lg:px-8">
            <Outlet/>
        </div>
       </div>
    </div>
    
  );
}
