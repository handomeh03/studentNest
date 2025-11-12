export default function RowOfTable({ leaserequest }) {
  const { student, landlord, apartment, leaseRequest } = leaserequest;

  return (
    <tr key={leaserequest.id}>
      {/* ID */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaserequest.id}
      </td>

      {/* Student Name */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {student.name}
      </td>

      {/* Major */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-600">
        {student.major}
      </td>

      {/* Landlord Name */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {landlord.name}
      </td>

      {/* Apartment Title */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {apartment.title}
      </td>

      {/* Price (JD) */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {apartment.price}
      </td>

      {/* Start Date */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaseRequest.startDate}
      </td>

      {/* Rent Term */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaseRequest.rentTerm}
      </td>

      {/* Status */}
      <td className="whitespace-nowrap px-3 py-5 text-sm">
        <span
          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ${
            leaseRequest.status === "Accepted"
              ? "bg-green-800"
              : leaseRequest.status === "Rejected"
              ? "bg-red-600"
              : "bg-yellow-600"
          }`}
        >
          {leaseRequest.status}
        </span>
      </td>

      {/* Created At */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {leaseRequest.createdAt}
      </td>

      {/* Actions */}
      <td className="whitespace-nowrap flex gap-3 py-5 pl-3 pr-4 text-sm font-medium">
        <button className="hover:text-green-500 text-green-800">
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

        <button className="hover:text-red-500 text-red-600">
          {/* Delete icon */}
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
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}
