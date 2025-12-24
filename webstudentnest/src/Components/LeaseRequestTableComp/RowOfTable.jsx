
import { useUserContext } from "../../Context/UserContext/UserContext";

export default function RowOfTable({ leaserequest }) {
  let{user}=useUserContext();

  return (
    <tr key={leaserequest?.requestLeaseId}>
      {/* ID */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaserequest?.requestLeaseId}
      </td>

      {/* Student Name */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaserequest?.studentName}
      </td>

      {/* Major */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-600">
        {leaserequest?.Major}
      </td>

      {/* Landlord Name */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaserequest?.landlordName}
      </td>

      {/* Apartment Title */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaserequest?.apartmentTitle}
      </td>

      {/* Price (JD) */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaserequest?.apartmentPrice}
      </td>

      {/* Start Date */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaserequest?.startDate}
      </td>

      {/* Rent Term */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaserequest?.rentTerm}
      </td>

      {/* Status */}
      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <span
          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ${
            leaserequest?.requestStatus === "Accept"
              ? "bg-green-800"
              : leaserequest?.requestStatus === "Reject"
              ? "bg-red-600"
              : "bg-yellow-600"
          }`}
        >
          {leaserequest?.requestStatus}
        </span>
      </td>

      {/* Created At */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaserequest?.createAt.split("T")[0]}
      </td>

      {/* Actions */}
      {user?.user?.role=="landlord"?<td className="whitespace-nowrap flex gap-3 py-5 pl-3 pr-4 text-sm font-medium">
        <button className="hover:text-green-500 hover:cursor-pointer text-green-800">
          {/* Edit icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>

      </td>:""}
    </tr>
  );
}
