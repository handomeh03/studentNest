export default function HeadOfTable() {
  return (
    <thead>
      <tr>
        
        <th
          scope="col"
          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
        >
          Log ID
        </th>

        
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          User
        </th>

        
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Action Type
        </th>

        
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Description
        </th>

        
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          IP Address
        </th>

        {/* Created At -> actionTimestamp */}
        <th
          scope="col"
          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
        >
          Timestamp
        </th>
      </tr>
    </thead>
  );
}