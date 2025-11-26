export default function RowOfTable({ log }) {
  return (
    <tr key={log.logId}>
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {log.logId}
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {log.createdBy}
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {log.action}
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700 max-w-xs">
        {log.description}
      </td>

      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {log.createdAt.split("T")[0]}
      </td>

      <td className="whitespace-nowrap flex gap-3 py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        
      
      </td>
    </tr>
  );
}
