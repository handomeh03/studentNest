import { Route, Routes } from 'react-router-dom'
import './App.css'
import StudentRegister from './Pages/StudentRegister'
import UserLogin from './Pages/UserLogin'
import UserRegister from './Pages/UserRegister'
import LandlordRegister from './Pages/LandlordRegister'
import Otp from './Pages/Otp'
import LandingPage from './Pages/LandingPage'
import NotFound from './Pages/NotFound'
import AdminDashboardLayout from './Pages/AdminDashboardLayout'
import AdminSettingPage from './Pages/AdminSettingPage'
import LandlordDashboardLayout from './Pages/LandlordDashboardLayout'
import LandlordSettingPage from './Pages/LandlordSettingPage'
import ForgetPasswordpage from './Pages/ForgetPasswordpage'
import PasswordOtp from './Pages/PasswordOtp'
import ChangePasswordOtp from './Pages/changePasswordOtp'
import NotVerifedPage from './Pages/NotVerivedPage'
import ApartmentPage from './Pages/AprtmentsPage'
import StudentDashboardLayout from './Pages/StudentDashboardLayout'
import StudentSetting from './Pages/StudentSetting'
import LandlordTableContainer from './Containers/LandlordTableContainer'
import StudentTableContainer from './Containers/StudentTableContainer'
import LeaseTableContainer from './Containers/LeaseTableContainer'
import LeaseRequestContainer from './Containers/LeaseRequestContainer'
import NotificationTableContainer from './Containers/NotificationTableContainer'
import ApartmentListingContainerForAdmin from './Containers/ApartmentLisningContainerforadmin'
import AudlitLogContainer from './Containers/AudiltLogContainer'
import PaymentScheduleContainer from './Containers/PaymentSchudleContainer'
import MyLeasesLandlordContainer from './Containers/MyLeasesLandlordContainer'
import MyApartmentsLandLordContainer from './Containers/MyApartmentsLandLordContainer'
import MybookedApartmentsLandlordContainer from './Containers/MybookedApartmentsLandlordContainer'


import ApartmentLeaseRequestcontainer from './Containers/ApartmentLeaseRequestcontainer'
import ApartmentLeasesContainer from './Containers/ApartmentLeasesContainer'
import MyRequestLeaseContainer from './Containers/MyRequestLeaseContainer'
import MyLeasesContainer from './Containers/MyLeasesLandlordContainer'
import RoomateProfile from './Pages/RoomateProfile'

function App() {     
  return (
    <div className='App' >
       <Routes>
        
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/userRegister" element={<UserRegister/>}/>
        <Route path="/userlogin" element={<UserLogin/>}/>
        <Route path="/studentRegister" element={<StudentRegister/>}/>
        <Route path='/landlordRegister' element={<LandlordRegister/>}/>
        <Route path='/otp' element={<Otp/>}/>
        <Route path="/forgetPassword" element={<ForgetPasswordpage/>}/>
        <Route path="/OtpPassword" element={<PasswordOtp/>}/>
        <Route path="/changePassword" element={<ChangePasswordOtp/>}/>
        <Route path='/apartments' element={<ApartmentPage/>}/>
        
        {/* admin */}
       <Route path="/admindashborad" element={<AdminDashboardLayout/>}>
            <Route index element={<LandlordTableContainer/>} />  
            <Route path="lease" element={<LeaseTableContainer/>} />
            <Route path='students' element={<StudentTableContainer/>}/>
            <Route path='leaserequest' element={<LeaseRequestContainer/>}/>
            <Route path='Notification' element={<NotificationTableContainer/>}/>
            <Route path='apartmentListingadmin' element={<ApartmentListingContainerForAdmin/>}/>
            <Route path='auditLog' element={<AudlitLogContainer/>}/>
            <Route path='setting' element={<AdminSettingPage/>}/>
        </Route>
       {/* landlord */}
        <Route path='/landlordDashboard' element={<LandlordDashboardLayout/>}>
          <Route index element={<MyApartmentsLandLordContainer/>}/>
          <Route path='myleasse' element={<MyLeasesContainer/>}/>
          <Route path='mybookedapartments' element={<MybookedApartmentsLandlordContainer/>}/>
          <Route path='requestlease' element={<MyRequestLeaseContainer/>}/>
          <Route path='lease/:leaseId/paymentschudle' element={<PaymentScheduleContainer/>}/>
          <Route path='apartemnt/:apartmentId/leases' element={<ApartmentLeasesContainer/>}/>
          <Route path='apartemnt/:apartmentIdleasereq/leaserequest' element={<ApartmentLeaseRequestcontainer/>}/>
          <Route path='notification' element={<NotificationTableContainer/>}/>
          <Route path='setting' element={<LandlordSettingPage/>}/> 
          <Route path='notverivedPage' element={<NotVerifedPage/>}/>
        </Route>

     {/* student */}
        <Route path='/studentDashboard' element={<StudentDashboardLayout/>}>
          
          <Route index element={<MyRequestLeaseContainer/>}/>
          <Route path='myleasse' element={<MyLeasesContainer/>}/>
          <Route path='lease/:leaseId/paymentschudle' element={<PaymentScheduleContainer/>}/>
          <Route path='RoomateProfile'  element={<RoomateProfile/>}/>
          <Route path='notification' element={<NotificationTableContainer/>}/>
          <Route path='setting' element={<StudentSetting/>}/> 
         
        </Route>

        <Route path='*' element={<NotFound/>}/>
       </Routes>
       
      </div>
  )
}

export default App
