import Loader from "../Components/PublicComp/Loader";
import { UseStudentForAdmin } from "../Context/studentForAdmin/StudentForadmin";
import { UseGetStudentForAdmin } from "../Hooks/AdminHooks/useGetStudentforAdmin";
import StudentTablePage from "./StudentTablePage";

export default function StudentTableContainer(){
    let {loader,error}=UseGetStudentForAdmin();
    let{students}=UseStudentForAdmin();
    if(loader){
        return <Loader/>
    }
    return(
        <div>
            <StudentTablePage students={students} loader={loader} error={error}/>
        </div>
    );
}