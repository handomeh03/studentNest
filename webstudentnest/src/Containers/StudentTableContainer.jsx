import Loader from "../Components/PublicComp/Loader";

import { UseGetStudentForAdmin } from "../Hooks/AdminHooks/useGetStudentforAdmin";
import StudentTablePage from "../Pages/StudentTablePage";


export default function StudentTableContainer(){
    let {loader,error}=UseGetStudentForAdmin();
    
    if(loader){
        return <Loader/>
    }
    return(
        <div>
            <StudentTablePage  loader={loader} error={error}/>
        </div>
    );
}