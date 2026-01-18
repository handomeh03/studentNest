import { useRole } from "../../Context/RoleContext";

export default function HeadOfTable() {
  let { role } = useRole();
  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        {/* <th className="py-4 pl-4 pr-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500 sm:pl-6">Payment ID</th> */}
        <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Status</th>
        <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Landlord Verified</th>
        <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Amount</th>
        <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">View Receipt</th>
        
        
        {role === "student" && (
          <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Upload</th>
        )}
        
        <th className="px-3 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">Actions</th>
      </tr>
    </thead>
  );
}