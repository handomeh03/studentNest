import { createContext, useContext, useReducer } from "react";
const UserContext = createContext();
export default function UserContextProvider({ children }) {

    function reduce(state, action) {
        switch(action.type){
            case "SET_USER":
                return { ...state, user: action.payload };

             case "CLEAR_USER":
                return { ...state, user: null };   
            default:
                return state;
        }
    }

 let [state,userDispatch]=useReducer(reduce,{user:JSON.parse(sessionStorage.getItem("user"))|| null});
  return (
    <UserContext.Provider value={{...state,userDispatch}}>
        {children}
    </UserContext.Provider>
  );
}
export function useUserContext() {
  const context = useContext(UserContext);
  if(!context){
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
}