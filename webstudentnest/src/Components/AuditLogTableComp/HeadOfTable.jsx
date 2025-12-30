export default function HeadOfTable() {
  const headers = [
    { name: "Log ID", align: "text-left" },
    { name: "Target User", align: "text-left" },
    { name: "Role", align: "text-center" },
    { name: "Action", align: "text-left" },
    { name: "Record", align: "text-center" },
    { name: "Description", align: "text-left" },
    { name: "Location / IP", align: "text-left" },
    { name: "Device Info", align: "text-left" },
    { name: "Timestamp", align: "text-right" },
  ];

  return (
    <thead className="bg-gray-100 border-b-2 border-gray-300 shadow-sm">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            scope="col"
            className={`px-4 py-4 ${header.align} text-xs font-black text-black uppercase tracking-widest whitespace-nowrap`}
          >
            {header.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}