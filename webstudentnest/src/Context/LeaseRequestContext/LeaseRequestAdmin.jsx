import { createContext, useContext, useReducer } from "react";

const LeaseRequestContx = createContext();

export default function LeaseRequestProvider({ children }) {
  const reduce = (state, action) => {
    switch (action.type) {
      case "getAllLeaseRequest":
        return {
          ...state,
          LeaseRequest: action.payload,
          copyLeaseRequest: action.payload,
        };
      case "searchLeaseRequest":
        return { ...state, LeaseRequest: action.payload };
      case "restToOrginal":
        return { ...state, LeaseRequest: state.copyLeaseRequest };
      default:
        return state;
    }
  };
  let [state, leaseRequestDipattch] = useReducer(reduce, {LeaseRequest:[],copyLeaseRequest:[],});
  return (
    <LeaseRequestContx.Provider value={{...state, leaseRequestDipattch }}>
      {children}
    </LeaseRequestContx.Provider>
  );
}

export function UseLeaseRequest() {
  const context = useContext(LeaseRequestContx);
  if (!context) {
    throw new Error("error");
  }
  return context;
}
