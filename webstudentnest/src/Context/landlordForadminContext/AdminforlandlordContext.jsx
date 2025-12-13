import { createContext, useContext, useReducer } from "react";

const AdminforlandlordCont = createContext();

export default function AdminForLandlordProvider({ children }) {
  function reduce(state, action) {
    switch (action.type) {
      case "getAllLandlord":
        return { ...state, Landlords: action.payload,copyLandlord:  action.payload};
      case "deleteLandlord":{
         const updatedLandlords = state.Landlords.filter(
          (e) => e?.user?.userId != action.payload
        );
        return {
          ...state,
          Landlords: updatedLandlords,
          copyLandlord:updatedLandlords
        };
      }
      case "editstatus":
        return {...state,copyLandlord:state.copyLandlord.map((e)=>{
          if(e?.user?.userId==action.payload.id){
            return {...e,verifiedLandlord:action.payload.status=="true"?true:false}
          }
          else{
            return e;
          }
        }),Landlords:state.Landlords.map((e)=>{
          if(e?.user?.userId==action.payload.id){
            return {...e,verifiedLandlord:action.payload.status=="true"?true:false}
          }
          else{
            return e;
          }
        })};

        case "searchLandlord":
           return {...state,Landlords:action.payload};
         case "restToOrginal":
           return {...state,Landlords:state.copyLandlord};
      default:
        return state;
    }
  }
  let [state, adminForlandlordDispatch] = useReducer(reduce, {
    Landlords:  [],copyLandlord:[]
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
