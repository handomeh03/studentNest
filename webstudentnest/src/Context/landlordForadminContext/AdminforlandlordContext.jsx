import { createContext, useContext, useReducer } from "react";

const AdminforlandlordCont = createContext();

export default function AdminForLandlordProvider({ children }) {
  function reduce(state, action) {
    switch (action.type) {
      case "getAllLandlord":
        return { ...state, Landlords: action.payload };
      case "deleteLandlord":{
         const updatedLandlords = state.Landlords.filter(
          (e) => e?.user?.userId != action.payload
        );
        return {
          ...state,
          Landlords: updatedLandlords,
        };
      }
      case "editstatus":
        return {...state,Landlords:state.Landlords.map((e)=>{
          if(e?.user?.userId==action.payload.id){
            return {...e,verifiedLandlord:action.payload.status=="true"?true:false}
          }
        })}
      
      default:
        return state;
    }
  }
  let [state, adminForlandlordDispatch] = useReducer(reduce, {
    Landlords:  [],
  });
  return (
    <AdminforlandlordCont.Provider
      value={{ ...state, adminForlandlordDispatch }}
    >
      {children}
    </AdminforlandlordCont.Provider>
  );
}
export function useAdminForLandlord() {
  let context = useContext(AdminforlandlordCont);
  if (!context) {
    throw new Error("error");
  }
  return context;
}
