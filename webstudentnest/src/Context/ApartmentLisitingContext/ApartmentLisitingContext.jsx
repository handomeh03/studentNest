import { createContext, useContext, useReducer } from "react";
const ApartmentContx=createContext();

export default function ApartmentProvider({children}){

    function reduce(state,action){
        switch (action.type){
            case "getApartments":
                return {...state,Apartments:action.payload,copyApartments:action.payload};
              case "editstatus":
                return {...state,copyApartments:state.copyApartments.map((e)=>{
                    if(e.apartmentId==action.payload.id){
                        return {...e,Verified:action.payload.verifed}
                    }
                    else{
                        return e;
                    }
                }),Apartments:state.Apartments.map((e)=>{
                     if(e.apartmentId==action.payload.id){
                        return {...e,Verified:action.payload.verifed}
                    }
                    else{
                        return e;
                    }
                })}  
                case "deleteApartment":
                    return {...state,Apartments:state.Apartments.filter((e)=>{
                        return e.apartmentId!=action.payload;
                    }),copyApartments:state.copyApartments.filter((e)=>{
                        return e.apartmentId!=action.payload;
                    })}

                    case "getDocument":
                        return {...state,document:action.payload}
                 case "searchApartment":
        return { ...state, Apartments: action.payload };
      case "restToOrginal":
        return { ...state, Apartments: state.copyApartments };  
            default:
                return state;
        }
    }

    let [state,apartmentDispatch]=useReducer(reduce,{Apartments:[],copyApartments:[],document:{}});
    return(
        <ApartmentContx.Provider value={{...state,apartmentDispatch}}>
            {children}
        </ApartmentContx.Provider>
    );
}
export function UseApatment(){
    const context=useContext(ApartmentContx);
    if(!context){
        throw new Error("error");
    }
    return context;
}