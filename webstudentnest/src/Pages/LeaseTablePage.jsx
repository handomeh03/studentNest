import { useState } from "react";
import SearchuserComp from "../Components/LeaseTableComp/SearchuserComp";
import HeadOfTable from "../Components/LeaseTableComp/HeadOfTable";
import RowOfTable from "../Components/LeaseTableComp/RowOfTable";

export default function LeaseTablePage(){
    const [leases] = useState([
    {
      leaseId: 1,
      leaseStartDate: "2025-01-01",
      leaseEndDate: "2025-12-31",
      monthyRent: 400,
      includeUtilities: true,
      houseRule: "No smoking, no pets",
      terms: "Rent must be paid by the 5th of each month.",
      status: "active",
      landlordSigned: true,
      studentSigned: true,
      createdAt: "2025-01-01",

      student: {
        studentId: 7,
        studentName: "Jameel Handomeh",
        major: "Computer Science",
        graduateYear: 2026,
        universityName: "Middle East University",
        studentcardId: "STU1001",
        walletaddress: "0x1A2b3C4D5E6F",
        studentgovId: "J1234567",
      },

      landlord: {
        landlordId: 8,
        landlordName: "Ahmad Khalil",
        cliqAccount: "LandlordCliq001",
        verified: true,
        landlordgovId: "L9988776",
      },

      apartment: {
        apartmentId: 1,
        title: "Modern Apartment near University",
        description:
          "Fully furnished 2-bedroom apartment with Wi-Fi and balcony.",
        price: 400,
        address: "Amman, Khalda Street",
        numberOfRoom: 2,
        numberOfBed: 2,
        createdAtApartment: "2024-12-1",
        propertyStatus: "available",
      },
    },
    {
      leaseId: 2,
      leaseStartDate: "2025-02-01",
      leaseEndDate: "2025-08-01",
      monthyRent: 350,
      includeUtilities: false,
      houseRule: "Keep noise low after 10 PM.",
      terms: "Deposit required before move-in.",
      status: "active",
      landlordSigned: true,
      studentSigned: true,
      createdAt: "2025-02-01",

      student: {
        studentId: 11,
        studentName: "Sara Al-Hassan",
        major: "Electrical Engineering",
        graduateYear: 2025,
        universityName: "University of Jordan",
        studentcardId: "STU1020",
        walletaddress: "0xABC456DEF",
        studentgovId: "J7654321",
      },

      landlord: {
        landlordId: 14,
        landlordName: "Mohammad Tareq",
        cliqAccount: "LandlordCliq002",
        verified: true,
        landlordgovId: "L2233445",
      },

      apartment: {
        apartmentId: 2,
        title: "Cozy Studio for One",
        description: "Small but modern studio apartment near main campus.",
        price: 350,
        address: "Amman, Mecca Street",
        numberOfRoom: 1,
        numberOfBed: 1,
        createdAtApartment: "2024-11-20",
        propertyStatus: "rented",
      },
    },
    {
      leaseId: 3,
      leaseStartDate: "2025-03-15",
      leaseEndDate: "2026-03-15",
      monthyRent: 500,
      includeUtilities: true,
      houseRule: "No loud music after 9 PM.",
      terms: "One-month notice required before leaving.",
      status: "pending",
      landlordSigned: false,
      studentSigned: true,
      createdAt: "2025-03-15",

      student: {
        studentId: 12,
        studentName: "Lina Qassem",
        major: "Business Administration",
        graduateYear: 2026,
        universityName: "German Jordanian University",
        studentcardId: "STU1055",
        walletaddress: "0x9F8E7D6C5B",
        studentgovId: "J9080706",
      },

      landlord: {
        landlordId: 15,
        landlordName: "Yousef Ali",
        cliqAccount: "LandlordCliq003",
        verified: false,
        landlordgovId: "L5566778",
      },

      apartment: {
        apartmentId: 6,
        title: "Spacious Apartment for 3 Students",
        description:
          "Ideal for roommates, includes balcony and study area.",
        price: 500,
        address: "Amman, Abdoun",
        numberOfRoom: 3,
        numberOfBed: 3,
        createdAtApartment: "2024-10-25",
        propertyStatus: "available",
      },
    },
    {
      leaseId: 4,
      leaseStartDate: "2025-04-01",
      leaseEndDate: "2026-04-01",
      monthyRent: 450,
      includeUtilities: true,
      houseRule: "Keep shared spaces clean.",
      terms: "Payment through Cliq only.",
      status: "terminated",
      landlordSigned: true,
      studentSigned: false,
      createdAt: "2025-04-01",

      student: {
        studentId: 13,
        studentName: "Omar Naser",
        major: "Software Engineering",
        graduateYear: 2027,
        universityName: "Applied Science University",
        studentcardId: "STU1088",
        walletaddress: "0xAA11BB22CC33",
        studentgovId: "J2223334",
      },

      landlord: {
        landlordId: 8,
        landlordName: "Ahmad Khalil",
        cliqAccount: "LandlordCliq001",
        verified: true,
        landlordgovId: "L9988776",
      },

      apartment: {
        apartmentId: 7,
        title: "Furnished 2-Bedroom Apartment",
        description: "Comfortable living space near public transport.",
        price: 450,
        address: "Amman, Sweifieh",
        numberOfRoom: 2,
        numberOfBed: 2,
        createdAtApartment: "2024-11-3",
        propertyStatus: "unavailable",
      },
    },
    {
      leaseId: 5,
      leaseStartDate: "2025-05-01",
      leaseEndDate: "2026-05-01",
      monthyRent: 600,
      includeUtilities: true,
      houseRule: "No parties allowed.",
      terms: "Security deposit required.",
      status: "active",
      landlordSigned: true,
      studentSigned: true,
      createdAt: "2025-05-01",

      student: {
        studentId: 7,
        studentName: "Jameel Handomeh",
        major: "Computer Science",
        graduateYear: 2026,
        universityName: "Middle East University",
        studentcardId: "STU1001",
        walletaddress: "0x1A2b3C4D5E6F",
        studentgovId: "J1234567",
      },

      landlord: {
        landlordId: 14,
        landlordName: "Mohammad Tareq",
        cliqAccount: "LandlordCliq002",
        verified: true,
        landlordgovId: "L2233445",
      },

      apartment: {
        apartmentId: 8,
        title: "Luxury Apartment with View",
        description: "Top floor apartment with a beautiful city view.",
        price: 600,
        address: "Amman, Dabouq",
        numberOfRoom: 2,
        numberOfBed: 2,
        createdAtApartment: "2024-12-10",
        propertyStatus: "available",
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
                       {leases.map((lease,index) => (
                         <RowOfTable key={index} lease={lease}/>
                       ))}
                     </tbody>
                   </table>
       
                 </div>
               </div>
             </div>
       
           </div>  
    );
}