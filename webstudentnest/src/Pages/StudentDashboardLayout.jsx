import { useEffect, useState } from "react";
import Loader from "../Components/PublicComp/Loader";
import { UseLoader } from "../Hooks/publicHook/useLoader";
import {AcademicCapIcon ,HomeIcon,UsersIcon    } from '@heroicons/react/24/outline'
import SideBar from "../Components/admindashboardComp/SideBar";
import HeaderOfdashboard from "../Components/admindashboardComp/HEaderOfdashboard";
import { Outlet, useNavigate } from "react-router-dom";

import { useUserContext } from "../Context/UserContext/UserContext";

export default function StudentDashboardLayout(){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    let{user}=useUserContext();
    let navigate=useNavigate();
     const [navigation,setnavigation] = useState([
      { name: 'Home', href: '/', icon: HomeIcon, current: false },
    //   { name: 'My Apartment', href: '/landlordDashboard', icon: UsersIcon, current: true },
    //   { name: 'Request leases', href: 'requestlease', icon: UsersIcon, current: false },
    //   { name: 'My Leases', href: 'myleasse', icon: AcademicCapIcon , current: false },
    //   { name: 'My booked apartments', href: 'mybookedapartments', icon: AcademicCapIcon , current: false },
      { name: 'Notification', href: 'notification', icon: AcademicCapIcon , current: false },
      
      
    ]
    )

    useEffect(()=>{
         if(user==null || !user){
             navigate("/userlogin",{replace:true});
             return;
         }
    },[navigation])
    
    
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
    return(
        <div>
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