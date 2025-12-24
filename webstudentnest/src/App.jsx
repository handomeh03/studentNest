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
import NotifivationTablePage from './Pages/NotificationTablePage'
import ApartmentListingAdmin from './Pages/ApartmentListingAdmin'
import AuditLogTablePage from './Pages/AuditLogTablePage'
import AdminSettingPage from './Pages/AdminSettingPage'
import LandlordDashboardLayout from './Pages/LandlordDashboardLayout'
import MyApartmentsLandLord from './Pages/MyApartmentsLandLordpage'
import MyLeasesLandlordPage from './Pages/MyLeasesLandlordpage'
import MybookedApartmentsLandlordPage from './Pages/MybookedApartmentsLandlordPage'
import LandlordSettingPage from './Pages/LandlordSettingPage'
import PaymentSchudlepage from './Pages/PaymentSchudlepage'
import MyRequestLeasepage from './Pages/MyRequestLeasepage'
import ApartmentLeasespage from './Pages/ApartmentLeasespage'
import ForgetPasswordpage from './Pages/ForgetPasswordpage'
import PasswordOtp from './Pages/PasswordOtp'
import ChangePasswordOtp from './Pages/changePasswordOtp'
import LandlordTableContainer from './Pages/LandlordTableContainer'
import NotVerifedPage from './Pages/NotVerivedPage'
import ApartmentPage from './Pages/AprtmentsPage'
import StudentTableContainer from './Pages/StudentTableContainer'
import LeaseTableContainer from './Pages/LeaseTableContainer'
import LeaseRequestContainer from './Pages/LeaseRequestContainer'
import NotificationTableContainer from './Pages/NotificationTableContainer'
import ApartmentListingContainerForAdmin from './Pages/ApartmentLisningContainerforadmin'

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
        

       <Route path="/admindashborad" element={<AdminDashboardLayout/>}>
            <Route index element={<LandlordTableContainer />} />  
            <Route path="lease" element={<LeaseTableContainer/>} />
            <Route path='students' element={<StudentTableContainer/>}/>
            <Route path='leaserequest' element={<LeaseRequestContainer/>}/>
            <Route path='Notification' element={<NotificationTableContainer/>}/>
            <Route path='apartmentListingadmin' element={<ApartmentListingContainerForAdmin/>}/>
            <Route path='auditLog' element={<AuditLogTablePage/>}/>
            <Route path='setting' element={<AdminSettingPage/>}/>
        </Route>

        <Route path='/landlordDashboard' element={<LandlordDashboardLayout/>}>
          <Route index element={<MyApartmentsLandLord/>}/>
          <Route path='myleasse' element={<MyLeasesLandlordPage/>}/>
          <Route path='mybookedapartments' element={<MybookedApartmentsLandlordPage/>}/>
          <Route path='requestlease' element={<MyRequestLeasepage/>}/>
          <Route path='setting' element={<LandlordSettingPage/>}/> 
          <Route path='lease/:leaseId/paymentschudle' element={<PaymentSchudlepage/>}/>
          <Route path='apartemnt/:apartmentId/leases' element={<ApartmentLeasespage/>}/>
          <Route path='notification' element={<NotifivationTablePage/>}/>
          <Route path='notverivedPage' element={<NotVerifedPage/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>
       </Routes>
       
      </div>
  )
}

export default App
