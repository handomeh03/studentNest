import { createContext, useContext, useReducer } from "react";
const paymentSchudleContext=createContext();

export function PaymentSchudleContextProvider({children}){
     function reduce(state,action){
        switch(action.type){
            case "getPayments":
                return {...state,payments:action.payload};
                case "getReceipt":
                return {...state,receipt:action.payload};
            default:
                return state;
        }
    }
    let [state,paymentSchudleDispatch]=useReducer(reduce,{payments:[],receipt:{}});
   
    return(
        <paymentSchudleContext.Provider value={{...state,paymentSchudleDispatch}}>
            {children}
        </paymentSchudleContext.Provider>
    );
}
export function usePaymentSchudle(){
    const context=useContext(paymentSchudleContext);
    if(!context){
        throw new Error("error");
    }
    return context;
}
