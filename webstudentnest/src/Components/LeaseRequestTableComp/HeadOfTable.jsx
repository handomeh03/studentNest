export default function HeadOfTable() {
  const headers = [
    
    { name: "Student Name", align: "text-left" },
    { name: "Major", align: "text-left" },
    { name: "Landlord Name", align: "text-left" },
    { name: "Apartment Title", align: "text-left" },
    { name: "Price (JD)", align: "text-center" },
    { name: "Start Date", align: "text-center" },
    { name: "Rent Term", align: "text-center" },
    { name: "Status", align: "text-center" },
    { name: "Created At", align: "text-center" },
  ];

  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            scope="col"
            className={`px-4 py-4 ${header.align} text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap`}
          >
            {header.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}