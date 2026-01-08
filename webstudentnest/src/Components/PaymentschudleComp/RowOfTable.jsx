import { useUserContext } from "../../Context/UserContext/UserContext";

export default function RowOfTable({ 
  payment, 
  handlechangePaymentId, 
  handlechangesetReciptDialogflag, 
  handlechangeEditVeridedLandlordFlag,
  handleOpenUploadModal
}) {
  const { user } = useUserContext();
  const userRole = user?.user?.role;

  
  const getStatusStyles = (status) => {
    return status === "Paid" 
      ? "bg-green-100 text-green-800" 
      : "bg-red-100 text-red-800";
  };

  
  const getVerificationStyles = (status) => {
    switch (status) {
      case "Accept": return "bg-blue-100 text-blue-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-red-100 text-red-800";
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
      
      
      <td className="whitespace-nowrap px-3 py-4 text-sm">
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusStyles(payment?.paymentStatus)}`}>
          {payment?.paymentStatus === "Paid" ? "Paid" : "Unpaid"}
        </span>
      </td>

      
      <td className="whitespace-nowrap px-3 py-4 text-sm">
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getVerificationStyles(payment?.verifiedByLandlord)}`}>
          {payment?.verifiedByLandlord === "Accept" ? "Accept" : payment?.verifiedByLandlord === "Pending" ? "Pending" : "Reject"}
        </span>
      </td>

      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold text-gray-700">
        ${payment?.amount}
      </td>

      
      <td className="whitespace-nowrap px-3 py-4 text-sm">
        <button 
          onClick={() => {
            handlechangePaymentId(payment.paymentId);
            handlechangesetReciptDialogflag();
          }}
          className="cursor-pointer text-indigo-600 hover:text-indigo-900 font-medium underline decoration-indigo-200 transition-colors"
        >
          View Receipt
        </button>
      </td>

      
      {userRole === "student" && (
        <td className="whitespace-nowrap px-3 py-4 text-sm">
          <button 
            onClick={() => {
                handlechangePaymentId(payment.paymentId);
                handleOpenUploadModal(); 
            }}
            className="cursor-pointer flex items-center gap-1 bg-gray-800 text-white px-3 py-1.5 rounded-md hover:bg-gray-700 transition-all text-xs active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Upload
          </button>
        </td>
      )}

      
      <td className="whitespace-nowrap px-3 py-4 text-center text-sm">
        <div className="flex justify-center items-center gap-2">
          {userRole === "landlord" ? (
            <button 
              onClick={() => {
                  handlechangePaymentId(payment.paymentId);
                  handlechangeEditVeridedLandlordFlag();
              }} 
              className="cursor-pointer p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all"
              title="Edit Verification"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </button>
          ) : (
            userRole !== "student" && <span className="text-gray-400 text-xs italic">No actions</span>
          )}
        </div>
      </td>
    </tr>
  );
}