import { createContext, useContext, useReducer } from "react";

const LeaseContForAdmin=createContext();

export default function LeaseAdminProvider({children}){


    function reduce(state,action){
        switch(action.type){
            default :
              return state;
        }
    }

    const[state,leaseAdmindispatch]=useReducer(reduce,{lease:[],copyLease:[]})
    return(
        <LeaseContForAdmin.Provider value={{...state,leaseAdmindispatch}}>
            {children}
        </LeaseContForAdmin.Provider>
    );
}

export function UseLeaseAdmin(){
    const context=useContext(LeaseContForAdmin);
    if(!context){
        throw new Error("error");
    }
    return context;
}

