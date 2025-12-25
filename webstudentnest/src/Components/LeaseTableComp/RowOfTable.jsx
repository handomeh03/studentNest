import { useNavigate } from "react-router-dom";


import { useUserContext } from "../../Context/UserContext/UserContext";

export default function RowOfTable({ lease }) {
  let{user}=useUserContext();
  let navigate=useNavigate();
  return (
    <tr key={lease?.leaseId}>
      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease?.leaseId}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease?.studentName}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease?.landlordName}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease?.apartmentTitle}</div>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease?.leaseTerm}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease?.leaseStartDate}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{lease?.leaseEndDate}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        {lease?.LeaseActivationStatus ? (
          <span className="inline-flex items-center rounded-md bg-green-800 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ">
            Active
          </span>
        ) : (
          <span className="inline-flex items-center rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ">
            Terminated
          </span>
          
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        <div className="text-black ">{lease?.isLandlordSigned?"sign":"not sign"} </div>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        <div className="text-black ">{lease?.isStudentSigned?"sign":"not sign"} </div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        <div className="text-black ">{lease?.monthlyRent} JD</div>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        <div className="text-black ">{lease?.houseRule} JD</div>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        <div className="text-black ">{lease?.includeUtilities} JD</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm ">
        <div className="text-black ">{lease?.createAt.split("T")[0]}</div>
      </td>
      
  
     {user?.user?.role=="landlord"? <td className="whitespace-nowrap px-3 py-5 text-sm ">
          <button onClick={()=>{
              navigate(`/landlordDashboard/lease/${lease.leaseId}/paymentschudle`);
          }} className=" hover:cursor-pointer bg-indigo-500 p-2  rounded-3xl text-white hover:bg-indigo-400 ">
           payment schudele
        </button>
      </td>:""}
      
    </tr>
  );
}
