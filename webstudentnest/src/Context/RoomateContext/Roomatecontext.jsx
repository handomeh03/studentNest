import { createContext, useContext, useState } from "react";
const Roomatecontx=createContext();
export default function RoomateProvider({children}){
    let [RoomateProfile,setRoomateProfile]=useState(null);
    return(
        <Roomatecontx.Provider value={{RoomateProfile,setRoomateProfile}}>
            {children}
        </Roomatecontx.Provider>
    );
}
export function UseRoomate(){
    const context=useContext(Roomatecontx);
    if(!context){
        throw new Error("error");
    }
    return context;
}