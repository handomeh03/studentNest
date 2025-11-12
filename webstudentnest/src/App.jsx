import { Route, Routes } from 'react-router-dom'
import './App.css'
import StudentRegister from './Pages/StudentRegister'
import UserLogin from './Pages/UserLogin'
import UserRegister from './Pages/UserRegister'
import LandlordRegister from './Pages/LandlordRegister'
import Otp from './Pages/Otp'
import LandingPage from './Pages/LandingPage'
import NotFound from './Pages/NotFound'


import LandlordTablepage from './Pages/LandlordTablepage'
import StudentTablePage from './Pages/StudentTablePage'
import LeaseRequestTablepage from './Pages/LeaseRequestTablepage'
import AdminDashboardLayout from './Pages/AdminDashboardLayout'
import LeaseTablePage from './Pages/LeaseTablePage'
import NotifivationTablePage from './Pages/NotificationTablePage'
import ApartmentListingAdmin from './Pages/apartmentListingAdmin'
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
        
       <Route path="/admindashborad" element={<AdminDashboardLayout/>}>
           <Route index element={<LandlordTablepage />} />  
            <Route path="lease" element={<LeaseTablePage/>} />
            <Route path='students' element={<StudentTablePage/>}/>
            <Route path='leaserequest' element={<LeaseRequestTablepage/>}/>
            <Route path='Notification' element={<NotifivationTablePage/>}/>
            <Route path='apartmentListingadmin' element={<ApartmentListingAdmin/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>
       </Routes>
      </div>
  )
}

export default App
