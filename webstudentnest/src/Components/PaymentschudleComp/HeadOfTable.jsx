
export default function HeadOfTable() {
  return (
    <thead className=" border-b-2 border-gray-200">
      <tr>
        {/* 1. Status */}
        <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">
          Payment Status
        </th>

        {/* 2. Landlord Verified */}
        <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">
          Verification
        </th>

        {/* 3. Amount */}
        <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">
          Amount
        </th>

        {/* 4. CliQ Account */}
        <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">
          CliQ Details
        </th>

        {/* 5. Due Date */}
        <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">
          Due Date
        </th>

        {/* 6. View Receipt */}
        <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-600">
          Receipt
        </th>

       

        {/* 8. Actions (Edit for Landlord) */}
        <th scope="col" className="px-4  py-4 text-center text-xs font-bold uppercase tracking-widest text-gray-600">
          Actions
        </th>
      </tr>
    </thead>
  );
}