import { useState } from "react";
import SearchuserComp from "../Components/LeaseRequestTableComp/SearchuserComp";
import HeadOfTable from "../Components/LeaseRequestTableComp/HeadOfTable";
import RowOfTable from "../Components/LeaseRequestTableComp/RowOfTable";

export default function LeaseRequestTablepage(){
      const [leaseRequests] = useState([
    {
      id: 1,
      student: {
        name: "Ahmad Saleh",
        major: "Computer Science",
        year: 3,
        university: "University of Jordan",
      },
      landlord: {
        name: "Omar Khalid",
        verified: true,
        walletAddress: "0x4f3c...98b2",
      },
      apartment: {
        title: "Cozy Apartment Near Campus",
        address: "Amman - Jubaiha",
        price: 250,
        numberOfRooms: 2,
        isJoin: false,
      },
      leaseRequest: {
        startDate: "2025-12-01",
        rentTerm: "6 months",
        status: "Pending",
        createdAt: "2025-11-10",
        message: "I'm interested in renting this apartment for the upcoming semester.",
      },
    },
    {
      id: 2,
      student: {
        name: "Lina Hasan",
        major: "Architecture",
        year: 4,
        university: "German Jordanian University",
      },
      landlord: {
        name: "Sara Ibrahim",
        verified: true,
        walletAddress: "0x82a1...afc9",
      },
      apartment: {
        title: "Modern Studio Apartment",
        address: "Amman - Abdoun",
        price: 320,
        numberOfRooms: 1,
        isJoin: true,
      },
      leaseRequest: {
        startDate: "2025-11-25",
        rentTerm: "3 months",
        status: "Accepted",
        createdAt: "2025-11-08",
        message: "Looking for a short stay near my internship.",
      },
    },
    {
      id: 3,
      student: {
        name: "Mohammad Naser",
        major: "Business Administration",
        year: 2,
        university: "Yarmouk University",
      },
      landlord: {
        name: "Khaled Al-Far",
        verified: false,
        walletAddress: "0x21f0...e4bb",
      },
      apartment: {
        title: "Spacious Apartment Downtown",
        address: "Irbid - City Center",
        price: 180,
        numberOfRooms: 3,
        isJoin: false,
      },
      leaseRequest: {
        startDate: "2025-12-10",
        rentTerm: "12 months",
        status: "Rejected",
        createdAt: "2025-11-09",
        message: "Long-term rental request.",
      },
    },
  ]);
    return(
        <div data-aos="fade-in" className="px-4 p-3.5 sm:px-6 lg:px-8">
               <SearchuserComp />
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15">
                       <HeadOfTable/>  
        
                      <tbody className="divide-y divide-gray-200   ">
                        {leaseRequests.map((leaserequest,index) => (
                          <RowOfTable key={index} leaserequest={leaserequest}/>
                        ))}
                      </tbody>
                    </table>
        
                  </div>
                </div>
              </div>
        
            </div>
    );
}