import Loader from "../Components/PublicComp/Loader";
import { UseNotification } from "../Context/NotificationContext/NotificationContext";
import { UseGetALLNotifiction } from "../Hooks/Shared/UseGetAllNotification";
import NotifivationTablePage from "../Pages/NotificationTablePage";


export default function NotificationTableContainer(){
    let{loader,error}=UseGetALLNotifiction();
    let{notification}=UseNotification();
    if(loader){
        return <Loader/>
    }
    return(
        <div>
            <NotifivationTablePage notification={notification} error={error}/>
        </div>
    );
}