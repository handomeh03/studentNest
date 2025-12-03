import { createContext, useContext, useState } from "react";
const RoleContext=createContext();
export default function RoleProvider({children}){
    let[role]=useState("landloard");
    return(
        <RoleContext.Provider value={{role}}>
            {children}
        </RoleContext.Provider>
    );
}

export function useRole(){
    let context=useContext(RoleContext);
    if(!context){
        throw new Error("error");
    }
    return context;
}