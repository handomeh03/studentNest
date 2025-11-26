import { useRole } from "../../Context/RoleContext";

export default function HeadOfTable() {
  let{role}=useRole();
  return (
    <thead>
      <tr>
        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
          paymnet ID
        </th>
        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
          payment status
        </th>
        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
          landlord verified
        </th>
        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
          payment amount
        </th>
         <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
          payment recipt
        </th>
         {role=="landlord"?<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
          Actions
        </th>:""}
        
       

       
      </tr>
    </thead>
  );
}
