export default function HeadOfTable() {
  const headers = [
    { name: "Name", align: "text-left" },
    { name: "Date", align: "text-center" },
    { name: "Phone Number", align: "text-center" },
    { name: "Address", align: "text-center" },
    { name: "Email Verified", align: "text-center" },
    { name: "Admin Verified", align: "text-center" },
    { name: "Role", align: "text-center" },
    { name: "Gov ID", align: "text-center" },
    { name: "Cliq Account", align: "text-center" },
    { name: "Document", align: "text-center" },
    { name: "Created At", align: "text-center" },
    { name: "Actions", align: "text-right" },
  ];

  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            scope="col"
            className={`px-4 py-4 ${header.align} text-xs font-bold text-gray-500 uppercase tracking-wider`}
          >
            {header.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}