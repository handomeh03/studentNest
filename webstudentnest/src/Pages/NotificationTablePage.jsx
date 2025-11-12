import { useState } from "react";
import SearchuserComp from "../Componnets/NotifivationTableComp/SearchuserComp";
import HeadOfTable from "../Componnets/NotifivationTableComp/HeadOfTable";
import RowOfTable from "../Componnets/NotifivationTableComp/RowOfTable";

export default function NotifivationTablePage(){
    const [notifications] = useState([
    {
      notificationId: 1,
      title: "New Lease Request",
      message: "A new lease request has been submitted by Sara Al-Hassan.",
      type: "lease",
      status: "unread",
      createdAt: "2025-01-05T10:30:00Z",
      sender: {
        userId: 11,
        name: "Sara Al-Hassan",
        role: "student",
          phoneNumber:"0799474063",
        email: "sara.hassan@example.com",
      },
      receiver: {
        userId: 8,
        name: "Ahmad Khalil",
        role: "landlord",
        email: "ahmad.khalil@example.com",
      },
    },
    {
      notificationId: 2,
      title: "Lease Approved",
      message: "Your lease request has been approved by the landlord.",
      type: "approval",
      status: "read",
      createdAt: "2025-02-10T12:15:00Z",
      sender: {
        userId: 8,
        name: "Ahmad Khalil",
        role: "landlord",
        phoneNumber:"0799474063",
        email: "ahmad.khalil@example.com",
      },
      receiver: {
        userId: 7,
        name: "Jameel Handomeh",
        role: "student",
        email: "jameel.handomeh@example.com",
      },
    },
    {
      notificationId: 3,
      title: "Payment Reminder",
      message: "Your rent payment is due in 3 days.",
      type: "reminder",
      status: "unread",
      createdAt: "2025-03-20T08:00:00Z",
      sender: {
        userId: 9,
        name: "System Admin",
        role: "admin",
        phoneNumber:"0799474063",
        email: "admin@meu.edu.jo",
      },
      receiver: {
        userId: 11,
        name: "Sara Al-Hassan",
        role: "student",
        email: "sara.hassan@example.com",
      },
    },
    {
      notificationId: 4,
      title: "Lease Terminated",
      message: "Your lease contract has been terminated by the landlord.",
      type: "lease",
      status: "unread",
      createdAt: "2025-04-15T09:30:00Z",
      sender: {
        userId: 14,
        name: "Mohammad Tareq",
        role: "landlord",
        phoneNumber:"0799474063",
        email: "tareq.landlord@example.com",
      },
      receiver: {
        userId: 13,
        name: "Omar Naser",
        role: "student",
        email: "omar.naser@example.com",
      },
    },
    {
      notificationId: 5,
      title: "System Update",
      message: "New features have been added to the platform.",
      type: "system",
      status: "read",
      createdAt: "2025-05-01T14:00:00Z",
      sender: {
        userId: 9,
        name: "System Admin",
        role: "admin",
          phoneNumber:"0799474063",
        email: "admin@meu.edu.jo",
      },
      receiver: {
        userId: 7,
        name: "Jameel Handomeh",
        role: "student",
        email: "jameel.handomeh@example.com",
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
                        {notifications.map((notification,index) => (
                          <RowOfTable key={index} notification={notification}/>
                        ))}
                      </tbody>
                    </table>
        
                  </div>
                </div>
              </div>
        
            </div>
    ); 
}