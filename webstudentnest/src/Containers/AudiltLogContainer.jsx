import Loader from "../Components/PublicComp/Loader";
import { UseAuditLog } from "../Context/AuditLogContext/AuditLogContext";
import { UseGetALLAuditLog } from "../Hooks/AdminHooks/UseGetAllAudiltLog";
import AuditLogTablePage from "../Pages/AuditLogTablePage";


export default function AudlitLogContainer(){

    let {loader,error}=UseGetALLAuditLog();
    
    if(loader){
        return <Loader/>
    }
    
    return(
        <div>
            <AuditLogTablePage  error={error}/>
        </div>
    );
}