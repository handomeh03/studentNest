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

createRoot(document.getElementById("root")).render(
  <StrictMode>
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
    
  </StrictMode>
);
