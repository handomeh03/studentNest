import { createContext, useContext, useState } from "react";

const AuthContext=createContext();

export default function AuthProvider({children}){
    let [token,settoken]=useState(() => {
    return localStorage.getItem("token") || "";
  });
  let [isVerefied,setverifiedEmail]=useState(null);
    return(
        <AuthContext.Provider value={{token,isVerefied,setverifiedEmail,settoken}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context=useContext(AuthContext);
    if(!context){
        throw new Error("auth context not provide to this componnet");
    }
    return context;
}