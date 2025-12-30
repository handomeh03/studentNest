export default function HeadOfTable() {
  const headers = [
    
    { name: "Title", align: "text-left" },
    { name: "Message", align: "text-left" },
    { name: "Sender Name", align: "text-left" },
    { name: "Receiver Name", align: "text-left" },
    { name: "Status", align: "text-left" },
    { name: "Created At", align: "text-left" },
    { name: "Action", align: "text-left" },
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