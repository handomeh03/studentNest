import { createContext, useContext, useReducer } from "react";

const UserDataContext=createContext();

export default function UserRegisterDataProvider({children}){
    let initValue={
        //for user
         fullname:"",
         Email:"",
         Dates:"",
         address:"",
         phoneNumber:"",
         password:"",
         ConfirmPassword:"",
         role:"student",
         //for student
         major:"",
         graduateYear:"",
         universityName:"",
         studentCardId:"",
         walletAddress:"",
         studentGovId:"",
         //for landlord
         cliqAccount:"",
         landlordGovId:""
    
      }
    
      
       function Reducer(state,action){
        switch(action.type){
            //for user
          case "addFullName":
            return {...state,fullname:action.payload};
           case "addEmail":
            return {...state,Email:action.payload};
            case "addDate":
                return {...state,Dates:action.payload};
             case "addAddress":
                return {...state,address:action.payload};
                case "addPhoneNumber":
                    return {...state,phoneNumber:action.payload};
                    case "addPassword":
                        return {...state,password:action.payload};
                        case "addConfirmPassword":
                            return {...state,ConfirmPassword:action.payload};
                            case "addRole":
                                return {...state,role:action.payload}; 

                                //for student
                                case "addMajor":
                                    return {...state,major:action.payload};
                                    case "addGraduateYear":
                                        return {...state,graduateYear:action.payload};
                                        case "addUniversityName":
                                            return {...state,universityName:action.payload};
                                            case "addStudentCardId":
                                                return {...state,studentCardId:action.payload};
                                                case "addWalletAddress":
                                                    return{...state,walletAddress:action.payload};
                                                    case "studentGovId":
                                                        return {...state,studentGovId:action.payload};
                                                        
                                                        //for landlord
                                                        case "addCliqAccount":
                                                            return {...state,cliqAccount:action.payload};
                                                            case "addLandlordGovId":
                                                                return {...state,landlordGovId:action.payload};


                                                 

          default:
            return state;
        }
       }
    
      const [state,userDataDispatch]=useReducer(Reducer,initValue);
    return(
        <UserDataContext.Provider value={{...state,userDataDispatch}}>
            {children}
        </UserDataContext.Provider>
    );
}
export function UseUserData(){
    const context=useContext(UserDataContext);
    if(!context){
        throw new Error("error userData Context");
    }
    return context;
}

