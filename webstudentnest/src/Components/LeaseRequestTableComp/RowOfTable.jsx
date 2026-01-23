import { useUserContext } from "../../Context/UserContext/UserContext";

export default function RowOfTable({
  leaserequest,
  handleChangeLeaseId,
  handleChangeEditdialogflag,
  handleChangeCreateLeaseFlag
}) {
  let { user } = useUserContext();
  

  function rentTerfomat(rentTerm) {
    const [day, month, years] = rentTerm.split("-");
    let format = "";
    if (day && month && years) {
      if (years != "00") {
        format = format + `${years[0] == 0 ? years[1] : years} year `;
      }
      if (month != "00") {
        format = format + `${month[0] == 0 ? month[1] : month} months `;
      }
      if (day != "00") {
        format = format + `${day[0] == 0 ? day[1] : day} days`;
      }
    } else {
      format = "rent term not found";
    }

    return format;
  }

  return (
    <tr
      key={leaserequest?.requestLeaseId}
      className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-none"
    >
      <td className="whitespace-nowrap px-4 py-5 text-sm font-semibold text-gray-900">
        {leaserequest?.studentName}
      </td>

      <td className="whitespace-nowrap px-4 py-5 text-sm text-indigo-600 font-medium">
        {leaserequest?.Major}
      </td>

      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-700">
        {leaserequest?.landlordName}
      </td>

      <td className="whitespace-nowrap px-4 py-5 text-sm font-medium text-gray-800">
        {leaserequest?.apartmentTitle}
      </td>

      <td className="whitespace-nowrap px-4 py-5 text-sm font-bold text-gray-900">
        {leaserequest?.apartmentPrice}{" "}
        <span className="text-xs font-normal text-gray-500">JD</span>
      </td>

      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600">
        {leaserequest?.startDate}
      </td>

      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600">
        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
          {rentTerfomat(leaserequest?.rentTerm)}
        </span>
      </td>

      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold shadow-sm ring-1 ring-inset ${
            leaserequest?.requestStatus === "Accept"
              ? "bg-green-100 text-green-700 ring-green-200"
              : leaserequest?.requestStatus === "Reject"
                ? "bg-red-100 text-red-700 ring-red-200"
                : "bg-amber-100 text-amber-700 ring-amber-200"
          }`}
        >
          {leaserequest?.requestStatus}
        </span>
      </td>

      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-500">
        {leaserequest?.createAt.split("T")[0]}
      </td>

      {user?.user?.role === "landlord" ? (
        <td className="whitespace-nowrap flex gap-3 px-4 py-5 text-sm font-medium">
          <button
            onClick={() => {
              handleChangeEditdialogflag();
              handleChangeLeaseId(leaserequest?.requestLeaseId);
            }}
            className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all active:scale-90 hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        </td>
      ) : (
        ""
      )}
      {user?.user?.role === "student" ? (
        <td className="whitespace-nowrap px-4 py-5 text-sm">
          {leaserequest.requestStatus === "Accept" ? (
            <button
              className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors shadow-sm active:scale-95"
              onClick={() => {
                handleChangeLeaseId(leaserequest?.requestLeaseId);
                handleChangeCreateLeaseFlag();
              }}
            >
              Create Lease
            </button>
          ) : (
            <span className="text-gray-400 italic">Pending approval</span>
          )}
        </td>
      ) : null}
    </tr>
  );
}
