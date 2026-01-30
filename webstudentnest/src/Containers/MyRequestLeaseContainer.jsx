import React from "react";
import Loader from "../Components/PublicComp/Loader";
import { UseLeaseRequest } from "../Context/LeaseRequestContext/LeaseRequestAdmin";
import { UseGetAllLeaseRequest } from "../Hooks/Shared/UseGetallLeaseRequest";
import LeaseRequestTablepage from "../Pages/LeaseRequestTablepage";
import ErrorComp from "../Components/PublicComp/ErrorComp";


const SEARCH_URL = "/api/v1/leases-request/search?q=";

export default function MyRequestLeaseContainer() {
    const { loader, error } = UseGetAllLeaseRequest("/api/v1/leases-request");
    const { LeaseRequest } = UseLeaseRequest();
    if (loader) {
        return <Loader />;
    }
    if (error) {
        return (
            <ErrorComp error={error}></ErrorComp>
        );
    }
    return (
        <div className="my-request-lease-container">
            <LeaseRequestTablepage 
                LeaseRequest={LeaseRequest || []} 
                error={error} 
                searchUrl={SEARCH_URL} 
            />
        </div>
    );
}