import { useNavigate } from "react-router-dom";


import { useUserContext } from "../../Context/UserContext/UserContext";

export default function RowOfTable({ lease }) {
  let{user}=useUserContext();
  let navigate=useNavigate();
  return (
    <tr key={lease.leaseId}>
      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease.leaseId}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease.student.studentName}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease.landlord.landlordName}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease.apartment.title}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease.leaseStartDate}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease.leaseEndDate}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        {lease.status === "active" ? (
          <span className="inline-flex items-center rounded-md bg-green-800 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ">
            Active
          </span>
        ) : lease.status === "pending" ? (
          <span className="inline-flex items-center rounded-md bg-yellow-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ">
            Pending
          </span>
        ) : lease.status === "terminated" ? (
          <span className="inline-flex items-center rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ">
            Terminated
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-gray-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ">
            Unknown
          </span>
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        <div className="text-black ">{lease.landlordSigned?"sign":"not sign"} </div>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        <div className="text-black ">{lease.studentSigned?"sign":"not sign"} </div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        <div className="text-black ">{lease.monthyRent} JD</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        <div className="text-black ">{lease.createdAt}</div>
      </td>
      
  
     {user?.role=="landloard"? <td className="whitespace-nowrap px-3 py-5 text-sm ">
          <button onClick={()=>{
              navigate(`/landlordDashboard/lease/${lease.leaseId}/paymentschudle`);
          }} className=" hover:cursor-pointer bg-indigo-500 p-2  rounded-3xl text-white hover:bg-indigo-400 ">
           payment schudele
        </button>
      </td>:""}
      
    </tr>
  );
}
