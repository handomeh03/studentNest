import { createContext, useContext, useReducer } from "react";
const StudentCont=createContext();
export default function StudentForAdmin({children}){

    function reduce(state,action){
        switch(action.type){

            case "getallstudent":
                return {...state,students:action.payload,copyStudents:action.payload};
                
            
            default:
                 return state;
        }
    }

    let [state,studentforadminDispatch]=useReducer(reduce,{students:[],copyStudents:[]});
    return(
        <StudentCont.Provider value={{...state,studentforadminDispatch}}>
            {children}
        </StudentCont.Provider>
    );
}
export function useStudentForAdmin(){
    let context=useContext(StudentCont);
    if(!context){
        throw new Error("error");
    }
    return context;
}