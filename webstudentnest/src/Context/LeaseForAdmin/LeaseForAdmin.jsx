import { createContext, useContext, useReducer } from "react";

const LeaseContx=createContext();

export default function LeaseProvider({children}){
    const reduce=(state,action)=>{
          switch (action.type){
            case "getAllLease":
                return {...state,Leases:action.payload,copyLease:action.payload};
            case "searchLease":
        return { ...state, Leases: action.payload };
      case "restToOrginal":
        return { ...state, Leases: state.copyLease };    
            default:
                return state;
             
          }
    }
    let [state,leaseDipattch]=useReducer(reduce,{Leases:[],copyLease:[]});
    return(
        <LeaseContx.Provider value={{...state,leaseDipattch}}>
            {children}
        </LeaseContx.Provider>
    );
}

export function UseLease(){
    const context=useContext(LeaseContx);
    if(!context){
        throw new Error("error");
    }
    return context;
}