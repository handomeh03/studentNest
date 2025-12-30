export default function RowOfTable({ log }) {
  return (
    <tr key={log.logId} className="hover:bg-gray-100 transition-colors border-b border-gray-300 last:border-none">
      
      
      <td className="whitespace-nowrap px-4 py-5 text-xs font-bold font-mono text-gray-700">
        #{log.logId.substring(0, 8)}
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <div className="font-bold text-gray-950">{log.targetUserName || "System"}</div>
        <div className="text-xs font-semibold text-gray-600">{log.targetUserId}</div>
      </td>

      <td className="whitespace-nowrap px-4 py-5 text-center text-sm">
        <span className="px-2 py-0.5 rounded-md bg-gray-200 text-black text-[10px] font-black uppercase tracking-tight border border-gray-400">
          {log.targetUserRole || "N/A"}
        </span>
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <span className={`px-2.5 py-1 rounded-full text-xs font-black shadow-sm border-2 ${
          log.actionType === "POST" ? "bg-indigo-100 text-indigo-900 border-indigo-300" :
          log.actionType === "DELETE" ? "bg-red-100 text-red-900 border-red-300" :
          "bg-blue-100 text-blue-900 border-blue-300"
        }`}>
          {log.actionType}
        </span>
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-center text-sm font-bold text-gray-800">
        <span className="px-2 py-1 bg-amber-100 text-amber-950 rounded text-xs border-2 border-amber-300">
            {log.record}
        </span>
      </td>

      
      <td className="px-4 py-5 text-sm font-semibold text-gray-950 max-w-xs truncate" title={log.description}>
        {log.description}
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-sm">
        <div className="text-black font-black">{log.ipAddress}</div>
        <div className="text-[11px] text-gray-700 font-bold">{log.location}</div>
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-xs text-gray-800 font-bold italic max-w-[150px] truncate" title={log.deviceInfo}>
        {log.deviceInfo}
      </td>

      
      <td className="whitespace-nowrap px-4 py-5 text-right text-sm text-black font-black">
        {log.actionTimestamp ? log.actionTimestamp.split("T")[0] : "N/A"}
      </td>
    </tr>
  );
}