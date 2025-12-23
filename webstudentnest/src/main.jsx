import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserRegisterDataProvider from "./Context/UserRegisterData.jsx";
import RoleProvider from "./Context/RoleContext.jsx";
import AuthProvider from "./Context/AuthContext/AuthContext.jsx";
import UserContextProvider from "./Context/UserContext/UserContext.jsx";
import AdminForLandlordProvider from "./Context/landlordForadminContext/AdminforlandlordContext.jsx";
import StudentForAdmin from "./Context/studentForAdmin/StudentForadmin.jsx";
import LeaseProvider from "./Context/LeaseForAdmin/LeaseForAdmin.jsx";
import LeaseRequestProvider from "./Context/LeaseRequestContext/LeaseRequestAdmin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LeaseRequestProvider>
       <LeaseProvider>
        <StudentForAdmin>
      <AdminForLandlordProvider>
        <AuthProvider>
          <UserContextProvider>
            <RoleProvider>
              <UserRegisterDataProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </UserRegisterDataProvider>
            </RoleProvider>
          </UserContextProvider>
        </AuthProvider>
      </AdminForLandlordProvider>
    </StudentForAdmin>

    </LeaseProvider>
    </LeaseRequestProvider>
 
  
  </StrictMode>
);
