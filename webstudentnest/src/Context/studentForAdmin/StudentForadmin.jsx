import { createContext, useContext, useReducer } from "react";
const StudentCont = createContext();
export default function StudentForAdmin({ children }) {
  function reduce(state, action) {
    switch (action.type) {
      case "getallstudent":
        return {
          ...state,
          students: action.payload,
          copyStudents: action.payload,
        };
      case "DeleteStudent": {
        const updatedStudents = state.students.filter(
          (e) => e?.user?.userId != action.payload
        );
        return {
          ...state,
          students: updatedStudents,
          copyStudents: updatedStudents,
        };
      }
      case "searchStudent":
        return { ...state, students: action.payload };
      case "restToOrginal":
        return { ...state, students: state.copyStudents };

      default:
        return state;
    }
  }

  let [state, studentforadminDispatch] = useReducer(reduce, {
    students: [],
    copyStudents: [],
  });
  return (
    <StudentCont.Provider value={{ ...state, studentforadminDispatch }}>
      {children}
    </StudentCont.Provider>
  );
}
export function UseStudentForAdmin() {
  let context = useContext(StudentCont);
  if (!context) {
    throw new Error("error");
  }
  return context;
}
