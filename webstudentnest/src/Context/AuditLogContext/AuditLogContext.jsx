import { createContext, useContext, useReducer } from "react";

const AuditLogContx=createContext();

export default function AuditLogProvider({children}){
    const reduce=(state,action)=>{
          switch (action.type){
            case "getAllAuditLog":
                return {...state,AuditLog:action.payload,copyAuditLog:action.payload};
            case "searchAuditLog":
        return { ...state, AuditLog: action.payload };
      case "restToOrginal":
        return { ...state, AuditLog: state.copyAuditLog };    
            default:
                return state;
             
          }
    }
    let [state,AuditLogDipattch]=useReducer(reduce,{AuditLog:[],copyAuditLog:[]});
    return(
        <AuditLogContx.Provider value={{...state,AuditLogDipattch}}>
            {children}
        </AuditLogContx.Provider>
    );
}

export function UseAuditLog(){
    const context=useContext(AuditLogContx);
    if(!context){
        throw new Error("error");
    }
    return context;
}