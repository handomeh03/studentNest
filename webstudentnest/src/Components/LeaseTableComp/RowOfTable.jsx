import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext/UserContext";

export default function RowOfTable({ lease }) {
  let { user } = useUserContext();
  let navigate = useNavigate();

  return (
    <tr key={lease?.leaseId} className="hover:bg-gray-50/80 transition-colors border-b border-gray-100 last:border-none">
      
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-700">{lease?.studentName}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-700">{lease?.landlordName}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600 font-medium">{lease?.apartmentTitle}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600 text-center">{lease?.leaseTerm}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600">{lease?.leaseStartDate}</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600">{lease?.leaseEndDate}</td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
          lease?.LeaseActivationStatus 
          ? "bg-green-100 text-green-700 border border-green-200" 
          : "bg-red-100 text-red-700 border border-red-200"
        }`}>
          {lease?.LeaseActivationStatus ? "Active" : "Terminated"}
        </span>
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${lease?.isLandlordSigned ? "bg-blue-50 text-blue-700" : "bg-gray-100 text-gray-600"}`}>
          {lease?.isLandlordSigned ? "Signed" : "Not Signed"}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${lease?.isStudentSigned ? "bg-blue-50 text-blue-700" : "bg-gray-100 text-gray-600"}`}>
          {lease?.isStudentSigned ? "Signed" : "Not Signed"}
        </span>
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm font-bold text-gray-900">{lease?.monthlyRent} JD</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600">{lease?.houseRule} JD</td>
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600">{lease?.includeUtilities} JD</td>

      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-500">
        {lease?.createAt?.split("T")[0] || lease?.createAt}
      </td>

      
      {user?.user?.role=="landlord" || user?.user?.role=="student"?  <td className="whitespace-nowrap px-4 py-5 text-sm">
          <button
            onClick={() => {
              if(user?.user?.role=="landlord"){
                navigate(`/landlordDashboard/lease/${lease.leaseId}/paymentschudle`);
              }else{
                navigate(`/studentDashboard/lease/${lease.leaseId}/paymentschudle`)
              }
            }}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-indigo-700 hover:shadow-indigo-200 transition-all active:scale-95"
          >
            Payment Schedule
          </button>
        </td>:""}
    </tr>
  );
}