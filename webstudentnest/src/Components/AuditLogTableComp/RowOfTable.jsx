export default function RowOfTable({ log }) {
  return (
    <tr key={log.logId}>
      {/* Log ID */}
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {log.logId.substring(0, 8)}
      </td>

      
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {log.targetUserName || "System"}
      </td>

      
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        <span className="px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-bold uppercase">
          {log.actionType}
        </span>
      </td>

      
      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-700 max-w-xs overflow-hidden text-ellipsis">
        {log.description}
      </td>

      
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {log.ipAddress}
      </td>

      
      <td className="whitespace-nowrap px-3 py-5 text-sm text-black">
        {log.actionTimestamp ? log.actionTimestamp.split("T")[0] : "N/A"}
      </td>

      <td className="whitespace-nowrap flex gap-3 py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        {/* مكان الأزرار إذا لزم الأمر لاحقاً */}
      </td>
    </tr>
  );
}