import { createContext, useContext, useReducer } from "react";

const NotificationContx=createContext();

export default function NotificationProvider({children}){

    function reduce(state,action){
        switch (action.type){
            case "getAllNotification":
                return {...state,notification:action.payload};
             case "editStatusNotification":
                return {...state,notification:state.notification.map((e)=>{
                    if(e.notifyId==action.payload){
                        return {...e,isRead:!e.isRead}
                    }
                    else{
                        return e;
                    }
                })} ;  
      case "deleteById":
         return {...state,notification:state.notification.filter((e)=>{
            return e.notifyId!=action.payload;
         })}
         case "deleteALLNotification":
            return {...state,notification:[]}
            default: 
        return state;
        }
    }

    let[state,NotificationDispatch]=useReducer(reduce,{notification:[]})
    return(
        <NotificationContx.Provider value={{...state,NotificationDispatch}}>
            {children}
        </NotificationContx.Provider>
    );
}
export function UseNotification(){
    const context=useContext(NotificationContx);
    if(!context){
        throw new Error("Error");
    }
    return context;
}