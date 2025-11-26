import { useRole } from "../../Context/RoleContext";

export default function RowOfTable({ payment,handlechangePaymentId,handlechangesetReciptDialogflag,handlechangeEditVeridedLandlordFlag }) {
  let{role}=useRole();
  return (
    <tr key={payment.paymentId}>
      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{payment.paymentId}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <span
          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-white ${
            payment.status ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {payment.status ? "Paid" : "Unpaid"}
        </span>
      </td>
      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <span
          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md text-white ${
            payment.landlordVerified ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {payment.landlordVerified ? "verifed" : "No verifed"}
        </span>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">{payment.amount}</div>
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <div className="text-black ">
          <button onClick={()=>{
            handlechangesetReciptDialogflag();
            handlechangePaymentId(payment.paymentId);
          }} className=" hover:cursor-pointer bg-indigo-500 p-2  rounded-3xl text-white hover:bg-indigo-400 ">
           payment recipt
        </button>
        </div>
      </td>
      {role=="landlord"?   <td className="whitespace-nowrap flex gap-3 py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <button onClick={handlechangeEditVeridedLandlordFlag} className=" hover:cursor-pointer hover:text-green-500  text-green-800 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
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
