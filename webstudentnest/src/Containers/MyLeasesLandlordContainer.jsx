import ErrorComp from "../Components/PublicComp/ErrorComp";
import Loader from "../Components/PublicComp/Loader";
import { UseLease } from "../Context/LeaseForAdmin/LeaseForAdmin";
import { UseGetLease } from "../Hooks/Shared/UseGetLease";
import LeaseTablePage from "../Pages/LeaseTablePage";


const url = "/api/v1/leases/search?q=";
export default function MyLeasesContainer() { 
    const { loader, error } = UseGetLease();
    
    if (loader) return <Loader />;
    if (error) return <ErrorComp error={error} />;
    
    return (
        <div>
            <LeaseTablePage 
                
                error={error} 
                url={url} 
            />       
        </div>
    );
}