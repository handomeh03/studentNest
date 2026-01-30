import { useUserContext } from "../../Context/UserContext/UserContext";

export default function RowOfTable({ 
  payment, 
  handlechangePaymentId, 
  handlechangesetReciptDialogflag, 
  handlechangeEditVeridedLandlordFlag,
  handleOpenUploadModal,
  handleChangeuploadReciptFlag
}) {
  const { user } = useUserContext();
  const userRole = user?.user?.role;

  
  const getStatusStyles = (status) => {
    return status === "Paid" 
      ? "bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-600/20" 
      : "bg-rose-100 text-rose-700 ring-1 ring-inset ring-rose-600/20";
  };

  const getVerificationStyles = (status) => {
    switch (status) {
      case "Accept": return "bg-blue-100 text-blue-700 ring-1 ring-inset ring-blue-700/20";
      case "Pending": return "bg-amber-100 text-amber-700 ring-1 ring-inset ring-amber-700/20";
      default: return "bg-gray-100 text-gray-600 ring-1 ring-inset ring-gray-500/10";
    }
  };

  return (
    <tr className="hover:bg-slate-50/80 transition-colors border-b border-gray-100 last:border-none">
      
      {/* 1. Status */}
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold ${getStatusStyles(payment?.paymentStatus)}`}>
          {payment?.paymentStatus === "Paid" ? "Paid" : "Unpaid"}
        </span>
      </td>

      {/* 2. Verification */}
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold ${getVerificationStyles(payment?.verifiedByLandlord)}`}>
          {payment?.verifiedByLandlord || "Reject"}
        </span>
      </td>

      {/* 3. Amount */}
      <td className="whitespace-nowrap px-4 py-5 text-sm font-bold text-gray-800">
        JOD {payment?.amount}
      </td>

      {/* 4. CliQ Account */}
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 text-gray-700">
            <span className="font-mono font-semibold bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
              {payment?.cliQAccount || "Not Set"}
            </span>
          </div>
        </div>
      </td>

      {/* 5. Due Date */}
      <td className="whitespace-nowrap px-4 py-5 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <span className="font-medium">
            {payment?.dueDate ? new Date(payment.dueDate).toLocaleDateString() : 'No Date Set'}
          </span>
        </div>
      </td>

      {/* 6. View Receipt (Visibility logic) */}
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        {payment?.paymentStatus === "Paid" ? (
          <button
            onClick={() => {
              handlechangePaymentId(payment.paymentId);
              handlechangesetReciptDialogflag();
            }}
            className="group flex items-center gap-1.5 cursor-pointer text-indigo-600 hover:text-indigo-900 font-semibold transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.43 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span className="underline decoration-indigo-200 group-hover:decoration-indigo-600">View Receipt</span>
          </button>
        ) : (
          <span className="inline-flex items-center gap-2 py-1 px-2.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Awaiting upload
          </span>
        )}
      </td>

      {/* 7. Student Upload Actions */}
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        {userRole === "student" && (
          payment?.paymentStatus === "Paid" ? (
            <div className="flex items-center gap-1.5 text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-lg w-fit border border-emerald-100">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
              Uploaded
            </div>
          ) : (
            <button
              onClick={() => {
                handleChangeuploadReciptFlag();
                handlechangePaymentId(payment.paymentId);
                handleOpenUploadModal();
              }}
              className="cursor-pointer flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-all shadow-sm active:scale-95 font-medium text-xs"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              Upload
            </button>
          )
        )}
      </td>
      
      
      <td className="whitespace-nowrap px-4 py-5 text-center">
        <div className="flex justify-center items-center">
          {userRole === "landlord" ? (
            payment?.paymentStatus === "Paid" ? (
              <button
                onClick={() => {
                  handlechangePaymentId(payment.paymentId);
                  handlechangeEditVeridedLandlordFlag();
                }}
                className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors cursor-pointer"
                title="Edit Verification"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
              </button>
            ) : (
              <span className="text-gray-400 text-[11px] italic font-medium px-2 py-1 bg-gray-50 rounded border border-gray-100">
                Pending Payment
              </span>
            )
          ) : (
            
            userRole !== "student" && <span className="text-gray-300">—</span>
          )}
        </div>
      </td>
    </tr>
  );
}