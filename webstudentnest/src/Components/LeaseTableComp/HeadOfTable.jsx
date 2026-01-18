import { useUserContext } from "../../Context/UserContext/UserContext";

export default function HeadOfTable() {
  const { user } = useUserContext();
  const role = user?.user?.role;

  
  const headers = [
    
    { label: "Student Name", align: "text-left" },
    { label: "Landlord Name", align: "text-left" },
    { label: "Apartment Title", align: "text-left" },
    { label: "Term", align: "text-center" },
    { label: "Start Date", align: "text-center" },
    { label: "End Date", align: "text-center" },
    { label: "Status", align: "text-center" },
    { label: "Landlord Sign", align: "text-center" },
    { label: "Student Sign", align: "text-center" },
    { label: "Monthly Rent", align: "text-center" },
    { label: "House Rules", align: "text-center" },
    { label: "Utilities", align: "text-center" },
    { label: "Created At", align: "text-center" },
  ];

  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            scope="col"
            className={`px-3 py-4 ${header.align} text-xs font-bold text-gray-500 uppercase tracking-wider`}
          >
            {header.label}
          </th>
        ))}
         
        
       {role=="landlord" || role=="student"? <th
            scope="col"
            className="px-3 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider bg-indigo-50 text-indigo-700"
          >
            Payment Schedule
          </th>:""}
      </tr>
    </thead>
  );
}