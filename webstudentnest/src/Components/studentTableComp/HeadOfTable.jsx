export default function HeadOfTable() {
  const headers = [
    
    { name: "Name", align: "text-left" },
    { name: "Date", align: "text-left" },
    { name: "Phone Number", align: "text-left" },
    { name: "Address", align: "text-left" },
    { name: "Email Verified", align: "text-left" },
    { name: "Role", align: "text-left" },
    { name: "Student Gov ID", align: "text-left" },
    { name: "Major", align: "text-left" },
    { name: "Student Card ID", align: "text-left" },
    { name: "Graduate Year", align: "text-left" },
    { name: "University", align: "text-left" },
    { name: "Document", align: "text-center" },
    { name: "Created At", align: "text-left" },
    { name: "Actions", align: "text-left" },
  ];

  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            scope="col"
            className={`px-3 py-4 ${header.align} text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap`}
          >
            {header.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}