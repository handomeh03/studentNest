import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import '@tailwindplus/elements';
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserRegisterDataProvider from "./Context/UserRegisterData.jsx";
import RoleProvider from "./Context/RoleContext.jsx";
import AuthProvider from "./Context/AuthContext/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RoleProvider>
        <UserRegisterDataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserRegisterDataProvider>
      </RoleProvider>
    </AuthProvider>
  </StrictMode>
);
