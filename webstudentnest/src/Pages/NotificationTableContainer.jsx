import Loader from "../Components/PublicComp/Loader";
import { UseNotification } from "../Context/NotificationContext/NotificationContext";
import { UseGetALLNotifiction } from "../Hooks/AdminHooks/UseGetAllNotification";
import NotifivationTablePage from "./NotificationTablePage";

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